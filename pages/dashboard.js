import { CashIcon, PlusIcon } from "@heroicons/react/solid";
import AppleMusicIcon from "../components/icons/apple_music_icon";
import NetflixIcon from "../components/icons/netflix_icon";
import SpotifyIcon from "../components/icons/spotify_icon";
import Layout from "../components/layout";
import Payment from "../components/payment";
import Button from "../components/button";

const icons = {
  appleMusic: (
    <div className="bg-gray-100 rounded-xl p-2">
      <AppleMusicIcon className="w-6 h-6 text-red-400"></AppleMusicIcon>
    </div>
  ),
  netflix: (
    <div className="bg-black rounded-xl p-2">
      <NetflixIcon className="w-6 h-6 text-red-600"></NetflixIcon>
    </div>
  ),
  spotify: (
    <div className="bg-green-400 rounded-xl p-2">
      <SpotifyIcon className="w-6 h-6 text-white"></SpotifyIcon>
    </div>
  ),
  default: (
    <div className="bg-gray-300 rounded-xl p-2">
      <CashIcon className="w-6 h-6 text-gray-100"></CashIcon>
    </div>
  ),
};

const payments = [
  {
    name: "Netflix subscription",
    price: "26,99",
    currency: "TRY",
    type: "monthly",
    icon: "netflix",
  },
  {
    name: "Apple Music subscription",
    price: "13,99",
    currency: "TRY",
    type: "monthly",
    icon: "appleMusic",
  },
  {
    name: "Amazon prime video subscription",
    price: 25,
    currency: "TRY",
    type: "monthly",
  },

  {
    name: "Spotify subscription",
    price: "15,00",
    currency: "TRY",
    type: "monthly",
    icon: "spotify",
  },

  { name: "namecheap domain", price: 120, currency: "TRY", type: "annual" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="pb-2 mb-4 border-b-2 text-gray-800 flex items-middle">
        <h3 className="text-3xl font-semibold">Recurring Payments</h3>
        <Button className="ml-auto">
          <PlusIcon className="w-5 h-5"></PlusIcon>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {payments.map((payment) => (
          <Payment
            {...payment}
            className=""
            icon={icons[payment.icon] || icons.default}
          ></Payment>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
