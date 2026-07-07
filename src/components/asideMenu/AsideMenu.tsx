import { UserForm } from "@/features/users/UserForm";
import type { ReactEventHandler } from "react";
import { TfiClose } from "react-icons/tfi";
type Props = {
  title: string;
  description: string;
  handleAside: () => ReactEventHandler;
}

export const AsideMenu:React.FC<Props> = ({ handleAside, title, description }) => {
  return (
    <>
      
      <div className="fixed inset-0 bg-black/50" />

      
      <aside
        className="
          fixed
          top-0 right-0
          w-[633px]
          h-screen
          bg-[#ffff]
          p-[40px]
          z-10
        "
      >
        <div className="flex justify-between mb-[40px]">
          <div className="flex flex-col">
            <h1 className="font-[Inter] font-semibold text-[18px] text-[#000000]">{title}</h1>
            <p className="font-medium text-[16px] text-[#6B7280]">{description}</p>
          </div>
          <button className="w-[32px] h-[32px] flex justify-center items-center " onClick={handleAside}>{<TfiClose />}</button>
        </div>
      <UserForm/>
        
      </aside>
    </>
  );
};