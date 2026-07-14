import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { AsideMenu } from "@/components/asideMenu/AsideMenu";
import { ButtonPage } from "@/components/button/ButtonsPage";
import { UserInfo } from "@/components/header/component/userInfo/UserInfo";
import { Loader } from "@/components/loader/Loader";
import { PageTitle } from "@/components/pageTitle/PageTitle";
import { Pagination } from "@/components/pagination/Pagination";
import { Table } from "@/components/table/Table";
import { Td } from "@/components/table/Td";
import { Th } from "@/components/table/Th";
import { UserContacts } from "@/components/userContacts/UserContacts";
import { DoctorsForm } from "@/features/doctors/DoctorsForm";
import { setQuery } from "@/features/doctors/doctorsSlice";
import { getAllDoctorsThunk } from "@/features/doctors/getAllDoctorsThunk";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const DoctorsPage = () => {
  const [aside, setOpenAside] = useState(false)
  const { doctors, total, page, pageSize, loading,query} = useAppSelector(state => state.doctor);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
  const fetchDoctors = async () => {
    try {
      await dispatch(getAllDoctorsThunk(query)).unwrap();

    } catch (error) {
      console.error(error);
    }
  };

  fetchDoctors();
}, [dispatch, query]);
  console.log(doctors)
  
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
          description={`showing ${doctors.length} doctors`} />
        <div className="flex  gap-4  ">
       
          <ButtonPage className="pl-[12px] pr-[12px]"
             onClick={handleAside}
            
            icon={<BiPlus className="mr-[8px]" />} >Add doctor</ButtonPage>
        </div>
       
    </div>
    {loading ? <Loader /> :
      
      <div className="w-full p-[24p]">
      <Table>
      <thead>
  <tr>
    <Th>ID</Th>
    <Th>DOCTOR/CONTACT</Th>
    <Th>WORKLOAD</Th>
    <Th>SPECIALITY</Th>
    <Th>SCHEDULE</Th>
    <Th>TYPE</Th>
  </tr>
</thead>
         <tbody>
   {doctors.map(doctor=><tr
  key={doctor.id}
  onClick={() => navigate(`/doctors/${doctor.id}`)}
  className=" h-[76px] cursor-pointer hover:bg-[#DCFCE7] transition-colors"
>
  <Td>{`#${doctor.doctorCode}`}</Td>

  <Td>
    <UserContacts
      firstName={doctor.firstName}
      lastName={doctor.lastName}
      phone={doctor.phoneNumber}
    />
  </Td>

  <Td>{doctor.email}</Td>

  <Td>{doctor.specialization}</Td>

  <Td>{'09:00-18:00'}</Td>

  <Td>{doctor.employmentType}</Td>
</tr>)}
  </tbody>

      </Table>
      </div>
    } 
    <Pagination
    page={query.page}
    pageSize={query.pageSize}
    total={total}
    onPageChange={(page)=>
        dispatch(
            setQuery({
                page,
            })
        )
    }
/>
   
  </>
}
