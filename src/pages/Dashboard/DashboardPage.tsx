import { useAppSelector } from "@/app/store/hook"
import { AsideMenu } from "@/components/asideMenu/AsideMenu";
import { ButtonPage } from "@/components/button/ButtonsPage"
import { PageTitle } from "@/components/pageTitle/PageTitle"
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiShield } from "react-icons/bi";
export const DashboardPage = () => {
  const userData = useAppSelector(state => state.auth.user)
  const [aside, setOpenAside] = useState(false)
  const handleAside = () =>
    setOpenAside(prev=>!prev)
  return (<>
    <div className="flex justify-between items-center  mb-[26px] h-[57px]" >
      <PageTitle
      text={`Hello,${userData?.first_name}!`}
        description={userData?.registration_date} />
      <div className="flex    ">
        <ButtonPage
         
          name={'Change role'}
          icon={<BiShield className="mr-[8px]" />} />
        <ButtonPage
           onClick={handleAside}
          name={'Add user'}
          icon={<BiPlus className="mr-[8px]" />} />
      </div>
     
    </div>
    {aside && <AsideMenu
      title={'ADD NEW USER'}
      description={'An invitation will be sent to the specified email'}
      handleAside={handleAside} />}
    </>

  )
}