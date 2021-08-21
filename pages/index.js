import Image from "next/image";
import mock from "../public/mocks.png";
import Button from "../components/button";
import Hero from "../components/hero";
import Layout from "../components/layout";
import PrimaryButton from "../components/primary_button";
import {
  BadgeCheckIcon,
  LockOpenIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import AppBar from "../components/app_bar";
import Footer from "../components/footer";

const Paragraph = ({ children, icon, header, delay = "0" }) => {
  return (
    <div
      className="text-lg p-2 text-gray-50 grid grid-cols-1 lg:grid-cols-5 space-x-2 xl:grid-cols-1 animate__animated animate__fadeIn animate__delay-2s"
      style={{ "--animate-delay": delay }}
    >
      <div className="text-center flex flex-col items-center mb-2 text-white">
        {icon}
        <h3 className="text-2xl font-bold">{header}</h3>
      </div>
      <div className="col-span-4 xl:text-center">{children}</div>
    </div>
  );
};

const MainHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-2 max-w-md order-2 lg:order-1 z-10">
        <Hero>
          <div className="text-4xl text-gray-800">
            <strong>Realgar</strong>: the free and open source subscription
            tracker
          </div>
          <div className="text-gray-600 text-xl">
            Realgar is a free and open source tool for tracking and managing
            subscriptions and recurring payments. It also notifies user of
            oncoming payments
          </div>
          <div className="flex flex-row w-full space-x-4">
            <div>
              <PrimaryButton>
                <Link href="/login">
                  <a>Get Started</a>
                </Link>
              </PrimaryButton>
            </div>
            <div>
              <Button>Learn More</Button>
            </div>
          </div>
        </Hero>
      </div>
      <div className="col-span-3 flex justify-center order-1 lg:order-2">
        <div className="relative w-full h-60 md:h-[500px] lg:h-[500px] animate__animated animate__fadeIn">
          <Image
            src={mock}
            alt="realgar on laptop"
            layout="fill"
            objectFit="contain"
            sizes="100%"
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Paragraphs = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-4 pt-4">
      <Paragraph
        header="Secure"
        delay="0.15s"
        icon={<ShieldCheckIcon className="h-20 w-20"></ShieldCheckIcon>}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fugit
        accusantium? Est minus quos cupiditate perferendis assumenda officiis
        fugit nisi eligendi repudiandae excepturi consequuntur, nam doloribus
        itaque ducimus commodi voluptatem! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vero obcaecati maiores doloremque quidem,
        doloribus soluta fuga, quod itaque possimus laboriosam quisquam sunt
        odit voluptate tempora quia dolorem ab aliquam voluptatibus.
      </Paragraph>
      <Paragraph
        header="Open Source"
        delay="0.3s"
        icon={<LockOpenIcon className="h-20 w-20"></LockOpenIcon>}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fugit
        accusantium? Est minus quos cupiditate perferendis assumenda officiis
        fugit nisi eligendi repudiandae excepturi consequuntur, nam doloribus
        itaque ducimus commodi voluptatem! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vero obcaecati maiores doloremque quidem,
        doloribus soluta fuga, quod itaque possimus laboriosam quisquam sunt
        odit voluptate tempora quia dolorem ab aliquam voluptatibus.
      </Paragraph>
      <Paragraph
        header="Completely Free"
        delay="0.45s"
        icon={<BadgeCheckIcon className="h-20 w-20"></BadgeCheckIcon>}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fugit
        accusantium? Est minus quos cupiditate perferendis assumenda officiis
        fugit nisi eligendi repudiandae excepturi consequuntur, nam doloribus
        itaque ducimus commodi voluptatem! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vero obcaecati maiores doloremque quidem,
        doloribus soluta fuga, quod itaque possimus laboriosam quisquam sunt
        odit voluptate tempora quia dolorem ab aliquam voluptatibus.
      </Paragraph>
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
      <AppBar></AppBar>
      <div className="relative pt-4 pb-32 lg:pb-16 lg:pt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
        >
          <path
            fill="#34D399"
            fillOpacity="1"
            d="M0,128L40,128C80,128,160,128,240,154.7C320,181,400,235,480,234.7C560,235,640,181,720,149.3C800,117,880,107,960,101.3C1040,96,1120,96,1200,117.3C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="container mx-auto">
          <MainHero></MainHero>
        </div>
      </div>
      <div className="bg-green-400 -mt-1 pb-8">
        <div className="container mx-auto">
          <Paragraphs></Paragraphs>
        </div>
      </div>
      <div className="-mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block"
        >
          <path
            fill="#34D399"
            fillOpacity="1"
            d="M0,128L40,128C80,128,160,128,240,154.7C320,181,400,235,480,234.7C560,235,640,181,720,149.3C800,117,880,107,960,101.3C1040,96,1120,96,1200,117.3C1280,139,1360,181,1400,202.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
