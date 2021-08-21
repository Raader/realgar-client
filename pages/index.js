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
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Paragraph = ({ children, icon, header, delay = "0" }) => {
  return (
    <div
      className="text-lg p-2 text-gray-500 grid grid-cols-1 lg:grid-cols-5 space-x-2 xl:grid-cols-1 animate__animated animate__fadeIn animate__delay-2s"
      style={{ "--animate-delay": delay }}
    >
      <div className="text-center flex flex-col items-center mb-2 text-gray-600">
        {icon}
        <h3 className="text-2xl font-bold">{header}</h3>
      </div>
      <div className="col-span-4 xl:text-center">{children}</div>
    </div>
  );
};

export default function Home({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (user?.id && router) router.push("/dashboard");
  }, [user, router]);

  return (
    <Layout user={user}>
      <div className="pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 mb-8">
          <div className="col-span-2 max-w-md order-2 lg:order-1">
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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pb-4 pt-4">
          <Paragraph
            header="Secure"
            delay="0.15s"
            icon={<ShieldCheckIcon className="h-20 w-20"></ShieldCheckIcon>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            fugit accusantium? Est minus quos cupiditate perferendis assumenda
            officiis fugit nisi eligendi repudiandae excepturi consequuntur, nam
            doloribus itaque ducimus commodi voluptatem! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vero obcaecati maiores doloremque
            quidem, doloribus soluta fuga, quod itaque possimus laboriosam
            quisquam sunt odit voluptate tempora quia dolorem ab aliquam
            voluptatibus.
          </Paragraph>
          <Paragraph
            header="Open Source"
            delay="0.3s"
            icon={<LockOpenIcon className="h-20 w-20"></LockOpenIcon>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            fugit accusantium? Est minus quos cupiditate perferendis assumenda
            officiis fugit nisi eligendi repudiandae excepturi consequuntur, nam
            doloribus itaque ducimus commodi voluptatem! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vero obcaecati maiores doloremque
            quidem, doloribus soluta fuga, quod itaque possimus laboriosam
            quisquam sunt odit voluptate tempora quia dolorem ab aliquam
            voluptatibus.
          </Paragraph>
          <Paragraph
            header="Completely Free"
            delay="0.45s"
            icon={<BadgeCheckIcon className="h-20 w-20"></BadgeCheckIcon>}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            fugit accusantium? Est minus quos cupiditate perferendis assumenda
            officiis fugit nisi eligendi repudiandae excepturi consequuntur, nam
            doloribus itaque ducimus commodi voluptatem! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Vero obcaecati maiores doloremque
            quidem, doloribus soluta fuga, quod itaque possimus laboriosam
            quisquam sunt odit voluptate tempora quia dolorem ab aliquam
            voluptatibus.
          </Paragraph>
        </div>
      </div>
    </Layout>
  );
}
