import { AsideMenu } from "@/components/asideMenu/AsideMenu";
import { ButtonPage } from "@/components/button/ButtonsPage";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { DoctorsForm } from "@/features/doctors/DoctorsForm";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

export const DoctorsPage = () => {
   const [aside, setOpenAside] = useState(false)
  const handleAside = () =>
      setOpenAside(prev=>!prev)
  return <>
    {aside && <AsideMenu
       handleAside={handleAside}
      forms={<DoctorsForm handleAside={handleAside} />}
        title={'ADD NEW DOCTOR'}
      description={'Fill in the details below'}
    />}
    
    <div className="flex justify-between items-center  mb-[26px] h-[57px]" >
        <PageTitle
        text={`All doctors`}
          description={'showing 128 doctors'} />
        <div className="flex  gap-4  ">
       
          <ButtonPage className="pl-[12px] pr-[12px]"
             onClick={handleAside}
            
            icon={<BiPlus className="mr-[8px]" />} >Add doctor</ButtonPage>
        </div>
       
  </div>
   
  </>
}
