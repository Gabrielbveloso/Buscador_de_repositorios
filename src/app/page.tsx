'use client'
import Image from "next/image";
import {Button} from "../components/ui/button"
import {Input} from "../components/ui/input"
import {Label} from "../components/ui/label"
import { Tabs } from "../components/ui/tabs";
import { buttonVariants } from "@/components/ui/button"
import searchPage from "./mainPage/page"
import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-screen flex flex-col justify-center">

    <div className="bg-orange-400 mx-auto max-w-md py-8 px-10 shadow rounded-lg " >
      <h1 className="text-2xl text-center">Login</h1>
      <Input placeholder="Email" className="flex w-64 items-center space-x-2 mx-10 my-10" required/> 
      <Input placeholder="Password" className="flex w-64 items-center space-x-2 mx-10 my-10" required/>
      <Button asChild className="flex w-64 items-center space-x-2 mx-10 my-10">
      <Link href='/mainPage'>Login</Link>
      </Button>
    </div>

  </div>

  );
}
