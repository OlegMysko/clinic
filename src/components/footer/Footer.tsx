import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { logoutThunk } from "@/features/auth/logOutThunk";
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import { Loader } from "../loader/Loader";
export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state=>state.auth)
  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap() 
      toast.success("Logout successfuly")
    }
    catch (e) {
      toast.error(`${e}`)
      
    }

    
  }
  return (<>
    <div className=" h-[48px] pl-[16px] pr-[16px] pb-16px border-t border-[#E5E7EB]  ">
      <button disabled={loading} onClick={handleLogout}
        className=" w-full h-full 
    flex items-center  rounded-[8px]
     pl-[12px] pr-[12px] 
      hover:bg-[#EF4444]
       hover:text-[#FFFF]
   text-[#1F2937]">
        {loading ? (
    <Loader />
  ) : (
    <>
      <CiLogout className="w-[20px] h-[20px] mr-[8px]" />
      <span>Log out</span>
    </>
  )}</button>
    </div></>)
}