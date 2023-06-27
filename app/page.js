"use client";
import AppDev from "@/components/AppDev";
import Machine from "@/components/Machine";
import ServiceCard from "@/components/ServiceCard";
import WebDev from "@/components/WebDev";
import { appService, machineService, webService } from "@/servicesData";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [service, setService] = useState("app");
  console.log(webService);
  console.log(appService);
  console.log(machineService);
  function changeToApp() {
    setService("app");
  }
  function changeToWeb() {
    setService("web");
  }
  function changeToMachine() {
    setService("machine");
  }
  console.log(service);
  return (
    <main>
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
    </main>
  );
}
