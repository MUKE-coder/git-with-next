"use client";
import AppDev from "@/components/AppDev";
import Machine from "@/components/Machine";
import { BsFillHouseAddFill } from "react-icons/bs";
import ServiceCard from "@/components/ServiceCard";

import WebDev from "@/components/WebDev";
import {
  appService,
  benefits,
  machineService,
  webService,
} from "@/servicesData";
import Image from "next/image";
import { useState } from "react";
import Card from "@/components/Card";
import getProducts from "./libs/getProducts";
import Link from "next/link";

export default function Home() {
  const [service, setService] = useState("app");
  function changeToApp() {
    setService("app");
  }
  function changeToWeb() {
    setService("web");
  }
  function changeToMachine() {
    setService("machine");
  }
  console.log(benefits);
  return (
    <main>
      <Link href="/products">View Products</Link>
      <div className="buttons">
        <button
          className={service == "app" ? "activeBtn" : ""}
          onClick={changeToApp}
        >
          App Dev
        </button>
        <button
          className={service == "web" ? "activeBtn" : ""}
          onClick={changeToWeb}
        >
          Web Dev
        </button>
        <button
          className={service == "machine" ? "activeBtn" : ""}
          onClick={changeToMachine}
        >
          Machine Learning
        </button>
      </div>
      <div className="services">
        {service == "app" ? (
          <ServiceCard data={appService} />
        ) : service == "web" ? (
          <ServiceCard data={webService} />
        ) : (
          <ServiceCard data={machineService} />
        )}
      </div>
      <div className="cards">
        {benefits.map((item) => {
          return <Card data={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
