import { CashIcon } from "@heroicons/react/solid";
import Layout from "../components/layout";
import Payment from "../components/payment";

const payments = [
  { name: "netflix subscription", price: 25, currency: "TRY", type: "monthly" },
  {
    name: "apple music subscription",
    price: 13,
    currency: "TRY",
    type: "monthly",
  },
  {
    name: "amazon prime video subscription",
    price: 25,
    currency: "TRY",
    type: "monthly",
  },

  { name: "spotify subscription", price: 15, currency: "TRY", type: "monthly" },

  { name: "namecheap domain", price: 120, currency: "TRY", type: "annual" },
];

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold mb-4">Recurring Payments</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {payments.map((payment) => (
          <Payment
            {...payment}
            className=""
            icon={
              <div className="bg-yellow-200 rounded-xl p-1">
                <CashIcon className="w-6 h-6 text-yellow-300"></CashIcon>
              </div>
            }
          ></Payment>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
