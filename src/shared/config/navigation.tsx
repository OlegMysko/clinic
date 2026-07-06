import { CiHome } from "react-icons/ci";
import { PiChats } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { ROUTES } from "./routes";
import { CiStethoscope } from "react-icons/ci";
import { LuDock } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";
export const navigation = [
  {
    title: "Dashboard",
    patch: ROUTES.DASHBOARD,
    icon:<CiHome/>

  },
  {
    title:"Reminder",
      patch:ROUTES.REMINDER,
    icon:<PiChats/>
  },
   {
    title:"Patients",
      patch:ROUTES.PATIENT,
    icon:<CiUser />
  },
    {
    title:"Doctors",
      patch:ROUTES.DOCTORS,
    icon:<CiStethoscope/>,
  },
     {
    title:"Appointments",
      patch:ROUTES.APPOINTMENTS,
    icon:<LuDock/>,
  },
      {
    title:"Calendar",
      patch:ROUTES.CALENDAR,  
    icon:<TbCalendarTime/>
  } 
    
]