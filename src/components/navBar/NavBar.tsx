import { navigation } from "@/shared/config/navigation"
import type React from "react"
import { NavLink } from "react-router-dom"

export const NavBar:React.FC = () => {
  return (<>
    <div className=" flex flex-col w-[260px] p-[16px]  bg-[#fff]">
      <div className="flex border rounded-b border-[#F3F4F6]  mb-[24px] p-[16px]"> 
        <img className="mr-[8px]" src="smallLogo.png" alt='smallLogo' /> 
        <div className="flex flex-col">
          <h1 className="font -[Inter] font-semibold text-[18px]">{'LumiDent'}</h1>
          <p className=" font-[Inter] font-medium text-[12px] text-[#6B7280]">
          {'Admin Panel'}
        </p>
        </div>   
      </div>
      
      <nav className="flex flex-col">
        {<ul>
          {navigation.map((nav) =>
            < li key={nav.title} className=" flex justify-right w-full h-[40px]"  >
             <NavLink className="flex items-center h-full w-full" to={nav.patch}>
                <span className="w-[20px] h-[20px] mr-[8px]">{nav.icon}</span>
             <span className="font-[Inter] font-medium text-[16px] text-[#1F2937]"> {nav.title} </span>   
            </NavLink>
        </li>
         ) }
        </ul>}

      </nav>
    </div>
  </>)
}