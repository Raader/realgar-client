import { PlusIcon } from "@heroicons/react/solid";
import Layout from "../../components/layout";
import Payment from "../../components/payment";
import Button from "../../components/common/button";
import Modal from "../../components/common/modal";
import PaymentForm from "../../components/payment_form";
import { useContext, useEffect, useState } from "react";
import { get, patch, post, remove } from "../../lib/api";
import brandIcons from "../../components/icons/brand_icons";
import PrimaryButton from "../../components/common/primary_button";
import UserContext from "../../components/user_context";
import IconText from "../../components/common/icon_text";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Dashboard = () => {
  const router = useRouter();
  const [modal, setModal] = useState({
    header: "Add a payment",
    payment: {},
    active: false,
  });
  const [payments, setPayments] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (payments.length <= 0) {
      get("/user/payments")
        .then((data) => {
          const interval = 75;
          let delay = 0;
          for (let payment of data) {
            setTimeout(() => setPayments((prev) => [...prev, payment]), delay);
            delay += interval;
          }
        })
        .catch();
    }
  }, [payments]);

  const deletePayment = (payment) => {
    remove("/user/payments/" + payment.id).then(() => {
      setPayments((prev) =>
        prev.map((val) =>
          val.id.valueOf() === payment.id.valueOf()
            ? { ...val, deleted: true }
            : val
        )
      );
      setTimeout(
        () =>
          setPayments((prev) => prev.filter((val) => val.id !== payment.id)),
        300
      );
    });
  };

  const editPayment = (payment, edit) => {
    patch("/user/payments/" + payment?.id, edit)
      .then((editedPayment) =>
        setPayments((prev) =>
          prev.map((val) => {
            return val.id.valueOf() === editedPayment.id.valueOf()
              ? editedPayment
              : val;
          })
        )
      )
      .catch((err) => console.error(err));
  };

  const addPayment = (payment) => {
    post("/user/payments", payment)
      .then((data) => setPayments((prev) => [...prev, data]))
      .catch((err) => console.error(err));
  };

  const openCreateModal = () =>
    setModal({ payment: {}, header: "Add a payment", active: true });

  return (
    <Layout>
      <div className="pb-20 min-h-screen">
        <Modal
          header={modal?.header}
          active={modal?.active}
          close={(prev) => setModal({ ...prev, active: false })}
        >
          <PaymentForm
            {...modal?.payment}
            submitText={modal?.payment?.id ? "Update" : "Add"}
            onSubmit={(payment) => {
              if (modal?.payment?.id) {
                editPayment(modal?.payment, payment);
              } else {
                addPayment(payment);
              }
              setModal({ payment: {}, active: false });
            }}
          ></PaymentForm>
        </Modal>
        <div className="pb-2 mb-4 border-b-2 text-gray-800 flex items-middle">
          <h3 className="text-3xl font-semibold">Recurring Payments</h3>
          <Button className="ml-auto hidden lg:block">
            <IconText icon={<PlusIcon className="w-5 h-5"></PlusIcon>}>
              <Link href="/dashboard/payments/create">
                <a>Create Payment</a>
              </Link>
            </IconText>
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {payments.map((payment) => (
            <Payment
              payment={{ ...payment, currency: user?.settings?.currency }}
              key={payment.id}
              className={
                payment.deleted ? "animate__fadeOut animate__faster" : ""
              }
              icon={brandIcons[payment.icon] || brandIcons.default}
              onDelete={() => deletePayment(payment)}
              onEdit={() =>
                router.push(`/dashboard/payments/edit?id=${payment.id}`)
              }
            ></Payment>
          ))}
        </div>
        <PrimaryButton
          className="fixed right-5 bottom-5 shadow-md lg:hidden"
          style={{ borderRadius: "9999px", padding: "0.75rem" }}
          onClick={openCreateModal}
        >
          <PlusIcon className="w-8 h-8"></PlusIcon>
        </PrimaryButton>
      </div>
    </Layout>
  );
};

export default Dashboard;
