import { CashIcon } from "@heroicons/react/solid";
import AppleMusicIcon from "./apple_music_icon";
import NamecheapIcon from "./namecheap_icon";
import NetflixIcon from "./netflix_icon";
import SpotifyIcon from "./spotify_icon";

const brandIcons = {
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
  namecheap: (
    <div className=" bg-orange-500 rounded-xl p-2">
      <NamecheapIcon className="w-6 h-6 text-white"></NamecheapIcon>
    </div>
  ),
  default: (
    <div className="bg-gray-300 rounded-xl p-2">
      <CashIcon className="w-6 h-6 text-gray-100"></CashIcon>
    </div>
  ),
};

export default brandIcons;
