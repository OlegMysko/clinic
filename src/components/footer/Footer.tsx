import { useAppDispatch } from "@/app/store/hook";
import { logoutThunk } from "@/features/auth/logOutThunk";
import { CiLogout } from "react-icons/ci";
export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    const resullt = await dispatch(logoutThunk()).unwrap()
    console.log(resullt)
  }
  return (<>
    <div className=" h-[48px] pl-[16px] pr-[16px] pb-16px border-t border-[#E5E7EB]  ">
      <button onClick={handleLogout}
        className=" w-full h-full 
    flex items-center  rounded-[8px]
     pl-[12px] pr-[12px] 
      hover:bg-[#EF4444]
       hover:text-[#FFFF]
   text-[#1F2937]">
        {<CiLogout className="w-[20px] h-[20px] mr-[8px]"  />} Log out</button>
    </div></>)
}