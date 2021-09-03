import { PlusIcon } from "@heroicons/react/solid";
import Layout from "../../components/layout";
import Payment from "../../components/payment";
import Button from "../../components/common/button";
import { useContext, useEffect, useState } from "react";
import { get, remove } from "../../lib/api";
import brandIcons from "../../components/icons/brand_icons";
import PrimaryButton from "../../components/common/primary_button";
import UserContext from "../../components/user_context";
import IconText from "../../components/common/icon_text";
import { useRouter } from "next/dist/client/router";
import { CalendarIcon, DotsHorizontalIcon } from "@heroicons/react/outline";

const Dashboard = () => {
  const router = useRouter();
  const [payments, setPayments] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(router && !user) router.push("/register")
  },[user],router)

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
        .catch(console.error);
    }
  }, [payments]);

  useEffect(() => {
    if (router) {
      router.prefetch("/dashboard/payments/create");
      router.prefetch("/dashboard/payments/update");
    }
  }, [router]);

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

  return (
    <>
      <Layout>
        <div className="pb-20 min-h-screen">
          <div className="pb-2 mb-4 text-gray-600 items-center lg:justify-start flex lg:flex border-b">
            <h3 className="text-3xl font-bold">Recurring Payments</h3>
            <Button
              className="ml-auto hidden lg:block bg-transparent hover:!bg-gray-100"
              onClick={() => router.push("/dashboard/payments/create")}
            >
              <IconText icon={<PlusIcon className="w-5 h-5 ml-2"></PlusIcon>}>
                Create Payment
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
                  router.push(`/dashboard/payments/update?id=${payment.id}`)
                }
              ></Payment>
            ))}
          </div>
        </div>
      </Layout>
      <PrimaryButton
        className="!fixed right-5 bottom-5 shadow-md lg:hidden"
        style={{ borderRadius: "9999px", padding: "0.75rem" }}
        onClick={() => router.push("/dashboard/payments/create")}
      >
        <PlusIcon className="w-8 h-8"></PlusIcon>
      </PrimaryButton>
    </>
  );
};

export default Dashboard;
