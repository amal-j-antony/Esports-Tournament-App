import { React, useState } from "react";

const [tab,setTab] = useState("home")

const manageTab = (value) => {
    if(value != tab){
      setTab(value)
    }
  }

export const useSidebrStyle = (value) => {
    if(tab == value){
      return "py-3 mb-3 text-2xl bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
    else if(value == "logout"){
      return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }  
    else{
      return "py-3 mb-3 text-2xl hover:bg-accent-foreground ps-4 w-9/10 rounded-xl border border-accent duration-500 cursor-pointer flex items-center gap-2"
    }
  }