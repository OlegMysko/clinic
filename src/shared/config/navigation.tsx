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
    path: ROUTES.DASHBOARD,
    icon: <CiHome />,
  },
  {
    title: "Reminder",
    path: ROUTES.REMINDER,
    icon: <PiChats />,
  },
  {
    title: "Patients",
    path: ROUTES.PATIENT,
    icon: <CiUser />,
  },
  {
    title: "Doctors",
    path: ROUTES.DOCTORS,
    icon: <CiStethoscope />,
  },
  {
    title: "Appointments",
    path: ROUTES.APPOINTMENTS,
    icon: <LuDock />,
  },
  {
    title: "Calendar",
    path: ROUTES.CALENDAR,
    icon: <TbCalendarTime />,
  },
];
