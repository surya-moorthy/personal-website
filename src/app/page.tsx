"use client"
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <div className="dark:bg-stone-800 h-screen w-screen bg-#fbfcfc">
       <div className="flex justify-center items-center">
            <Navbar/>
       </div>
        <h1 className="text-5xl font-serif dark:text-zinc-100 p-8 text-black " >Personal Blog</h1>
    </div>
  );
}


