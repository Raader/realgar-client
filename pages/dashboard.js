import { CashIcon, PlusIcon } from "@heroicons/react/solid";
import AppleMusicIcon from "../components/icons/apple_music_icon";
import NetflixIcon from "../components/icons/netflix_icon";
import SpotifyIcon from "../components/icons/spotify_icon";
import Layout from "../components/layout";
import Payment from "../components/payment";
import Button from "../components/button";
import Modal from "../components/modal";
import PaymentForm from "../components/payment_form";
import { useEffect, useState } from "react";
import PaymentModal from "../components/payment_modal";
import { get, patch, post, remove } from "../lib/api";
import brandIcons from "../components/icons/brand_icons";
import PrimaryButton from "../components/primary_button";

const Dashboard = ({ user }) => {
  const [modal, setModal] = useState({
    header: "Add a payment",
    payment: {},
    active: false,
  });
  const [payments, setPayments] = useState([]);

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
    <Layout user={user}>
      <div className="pb-20">
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
          <Button className="ml-auto hidden lg:block" onClick={openCreateModal}>
            <PlusIcon className="w-5 h-5"></PlusIcon>
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {payments.map((payment) => (
            <Payment
              payment={payment}
              key={payment.id}
              className={
                payment.deleted ? "animate__fadeOut animate__faster" : ""
              }
              icon={brandIcons[payment.icon] || brandIcons.default}
              onDelete={() => deletePayment(payment)}
              onEdit={() =>
                setModal(() => ({
                  active: true,
                  payment,
                  header: "Edit the payment",
                }))
              }
            ></Payment>
          ))}
        </div>
        <PrimaryButton
          className="fixed right-5 bottom-5 shadow-md lg:hidden"
          style={{ borderRadius: "9999px", padding: "0.75rem" }}
          onClick={openCreateModal}
        >
          <PlusIcon className="w-6 h-6"></PlusIcon>
        </PrimaryButton>
      </div>
    </Layout>
  );
};

export default Dashboard;
