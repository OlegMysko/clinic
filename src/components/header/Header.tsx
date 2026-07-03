import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { Input } from "../input/Input"
import { CiBellOn } from "react-icons/ci";
import { UserInfo } from "./component/userInfo/UserInfo";
export const Header: React.FC = () => {
  
//   const dispatch = useAppDispatch();
// const search = useAppSelector((state) => state.search.search);
  return (<>
    <div className="w-full flex justify-between  h-[92px] pl-[40px] pr-[40px] pt-[24px] pb-[24px] bg-amber-400">

      <Input name="search"
        // value={search}
        type="search"
        placeholder="Search patients, doctors, appointments..."
        // onChange={(e)=>dispatch(setSearch(e.target.value))}
      />
      <div className="flex justify-between items-center" >
        <button className="relative w-[44px] h-[44px] p-[9px] ml-16px border border-solid border-[#E5E7EB] rounded-[8px]">
          <CiBellOn className=" w-[24px] h-[24px] " />
          <div className="absolute w-[8px] h-[8px] right-[12px] top-[13px] rounded-[100%] bg-[#EF4444]"></div>
        </button>

<UserInfo/>
      </div>
    </div>
    </>)
}