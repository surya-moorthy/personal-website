"use client"
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const Navbar = ({className} : {className? : string}) =>{
    const [active,setActive] = useState<string | null>("");
   return (
        // <div className={cn("",className)}>  
        //      <Menu setActive={setActive}>
        //         <ProductItem title="Personal" href="/" description="" src=""/>
        //      </Menu>
        // </div>   
   )   
}