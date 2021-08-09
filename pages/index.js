import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Button from "../components/button";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { get } from "../lib/api";
export default function Home({ user }) {
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-2 max-w-md">
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
                <Button>Get Started</Button>
              </div>
              <div>
                <Button>Learn More</Button>
              </div>
            </div>
          </Hero>
        </div>
        <div className="col-span-3"></div>
      </div>
    </Layout>
  );
}
