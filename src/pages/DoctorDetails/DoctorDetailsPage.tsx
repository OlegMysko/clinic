import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { ButtonPage } from "@/components/button/ButtonsPage";
import { TfiPencil } from "react-icons/tfi";
import { IoTrash } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AsideMenu } from "@/components/asideMenu/AsideMenu";
import { DoctorEditForm } from "@/features/doctors/DoctorEditForm";
import { useParams } from "react-router-dom";
import { getDoctorByIdThunk } from "@/features/doctors/getDoctorByIdThunk";

import { DoctorsProfile } from "./components/DoctorsProfile";
export const DoctorDetailsPage = () => {
  const dispatch = useAppDispatch()
  const [aside, setOpenAside] = useState(false);
  const handleAside = () => setOpenAside((prev) => !prev);
  const { doctorId } = useParams();
  const{ selectedDoctor, loading} = useAppSelector(
  (state) => state.doctor
);

  
 useEffect(() => {
  if (!doctorId) return;

  dispatch(getDoctorByIdThunk(doctorId));
}, [dispatch, doctorId]);
  
  console.log(selectedDoctor)
  return (
    <>
      {aside && (
        <AsideMenu
          handleAside={handleAside}
          forms={<DoctorEditForm handleAside={handleAside} />}
          title={"EDIT DOCTOR"}
          description={"Fill in the details below"}
        />
      )}

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <section className="mb-8 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="cursor-pointer hover:text-blue-600">
              &lt; Doctors
            </span>

            <span className="mx-2">/</span>

            <span className="font-medium text-gray-900">
              Dr. {selectedDoctor?.firstName} {selectedDoctor?.lastName}
            </span>
          </div>

          <div className="flex gap-3">
            <ButtonPage
              className="bg-[#EF4444] px-4 hover:bg-black"
              icon={<IoTrash className="mr-2 text-white" />}
            >
              Remove doctor
            </ButtonPage>

            <ButtonPage
              className="px-4"
              icon={<TfiPencil className="mr-2" />}
              onClick={handleAside}
            >
              Edit doctor
            </ButtonPage>
          </div>
        </section>

       
        <section className="flex items-center justify-between rounded-xl border border-gray-200 p-6">
       {!loading && selectedDoctor && <DoctorsProfile selectedDoctor={selectedDoctor}/>}
        </section>
      </div>
    </>
  );
};
