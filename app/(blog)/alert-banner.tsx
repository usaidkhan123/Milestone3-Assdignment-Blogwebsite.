"use client";

import { useRouter } from "next/navigation";
import { useSyncExternalStore, useTransition } from "react";
import Image from "next/image";
import logo from "@/public/images/Premium_Vector___Coders_logo-removebg-preview.png"
import { disableDraftMode } from "./actions";   
const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=""
    >
      <div className="py-0 text-center text-sm">
      <div className=" bg-slate-100">
            <div className="flex" >
            <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="-mt-2"
        />
            <ul className="flex space-x-4 mt-5 max-md:space-x-2  ml-4 max-md:ml-1 font-semibold text-slate-600  ">
                <li>Home</li>
                <li>AboutUs</li>
                <li>Blog</li>
                <li>ContactUs</li>
            </ul>
            <button className=" max-md:hidden font-semibold text-blue-900 border-[3px] ml-[45rem] w-24 border-blue-900 rounded-2xl h-12 mt-2">SignUp</button>
            <button className=" max-md:hidden font-semibold text-blue-900 border-[3px] ml-4 w-24 border-blue-900 rounded-2xl h-12 mt-2">LogIn</button>
            </div>
           
        </div> 
        </div> 
        </div> 
  );
}
