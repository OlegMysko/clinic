import { Input } from "@/components";
import { formValidation } from "../auth/model/form.validation";
import { FiUser } from "react-icons/fi";
import { Select } from "@/components/select/Select";
import { doctorSpecialties } from "@/features/doctors/model/specialties";
import { CheckboxGroup } from "@/components/checkBoxGroup/CheskBoxGroup";
import { workingDays } from "./model/workingDays";
import { RadioGroup } from "@/components/radioButtonGroup/RadioButtonGroup";
import { employmentTypes } from "./model/employmentTypes";
import { useForm } from "react-hook-form";
import { ButtonPage } from "@/components/button/ButtonsPage";
import { useAppDispatch, useAppSelector } from "@/app/store/hook";
import { createDoctorThunk } from "./createDoctorThunk";
import { useEffect, useState } from "react";
import { searchUsersThunk } from "../users/searchUserThunk";
import { Search } from "@/components/search/Search";
import type { User } from "@/types/User";
import toast from "react-hot-toast";
import { Loader } from "@/components/loader/Loader";
import { errorToast, successToast } from "@/components/pushAppMessage/PushApp";
type Props = {
  handleAside: () => void;
};

export const DoctorsForm: React.FC<Props> = ({ handleAside }) => {
  type DoctorFormData = {
    user_id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    experience: number;
    specialization: string;
    employmentType: string;
    workingDays: string[];
  };
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorFormData>();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.user);
  const { loading: doctorsLoading } = useAppSelector((state) => state.doctor);
useEffect(() => {
  if (!selectedUser) return;

  setValue("firstName", selectedUser.first_name);
  setValue("lastName", selectedUser.last_name);
  setValue("email", selectedUser.email);
}, [selectedUser, setValue]);
  
  const onSubmit = async (data: DoctorFormData) => {
    try {
      await dispatch(
        createDoctorThunk({
          user_id: selectedUser.id,
          first_name: data.firstName,
          last_name: data.lastName,
          specialization: data.specialization,
          years_experience: data.experience,
          employmend_type: data.employmentType,
          email: data.email,
          phone_number: data.phone,
          working_days: data.workingDays,
        })
        
      ).unwrap(); 
      reset()
      successToast(  <>
    Doctor created successfully
    <br />
    Dr. {selectedUser.first_name} {selectedUser.last_name}
  </>)
    } catch (e){
    errorToast(e as string)}
  };

  return (
    <> {doctorsLoading?(<Loader/>):(
      <div className="w-full">
        <form
          className="flex flex-col gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <section>
      
         <Search
  items={users}
  loading={loading}
  onSearch={(value) => dispatch(searchUsersThunk(value))}
  selectedUser = {selectedUser}
  onSelect={setSelectedUser}
  getKey={(user) => user.id}
  getValue={(user) => `${user.first_name} ${user.last_name}`}
  renderItem={(user) => (
    <>
      <div>{user.first_name} {user.last_name}</div>
      <div>{user.email}</div>
    </>
  )}
/>

          
          </section>
          <section>
            <p className="mb-[24px] font-[Inter] text-[12px] text-[#6B7280]">
              PERSONAL INFO
            </p>

            <div className="flex gap-4 mb-[24px]">
              <Input
                 disabled
                className="flex-1"
                name="firstName"
                label="First name *"
                type="text"
                placeholder="Enter first name"
                register={register}
                rules={formValidation.name}
                error={errors.firstName?.message}
              />

              <Input
               disabled
                className="flex-1"
                name="lastName"
                label="Last name *"
                type="text"
                placeholder="Enter last name"
                register={register}
                rules={formValidation.name}
                error={errors.lastName?.message}
              />
            </div>

            <div className="flex gap-4 ">
              <Select
                name={"specialization"}
                label={"Speciality *"}
                placeholder={"Enter speciality"}
                option={doctorSpecialties}
                register={register}
                rules={formValidation.specialization}
                error={errors.specialization?.message}
                className="flex-1"
              />

              <Input
                className="flex-1"
                name="experience"
                label="Experience *"
                type="number"
                placeholder="E.g. 10"
                register={register}
                rules={formValidation.experience}
                error={errors.experience?.message}
              />
            </div>
          </section>

          <RadioGroup
            name="employmentType"
            label="Type *"
            options={employmentTypes}
            register={register}
            rules={formValidation.partTime}
            error={errors.employmentType?.message}
          />

          <section>
            <p className="mb-6 font-[Inter] text-[12px] text-[#6B7280]">
              CONTACT
            </p>

            <Input
              disabled
              name="email"
              label="Email *"
              type="email"
              placeholder="example@gmail.com"
              register={register}
              rules={formValidation.email}
              error={errors.email?.message}
            />
          </section>

          <section>
            <Input
              name="phone"
              label="Phone *"
              type="tel"
              placeholder="+38 (0XX) XXX-XXXX"
              register={register}
              rules={formValidation.phone}
              error={errors.phone?.message}
            />
          </section>

          <section>
            <CheckboxGroup
              name="workingDays"
              label="Working days *"
              options={workingDays}
              disabledOptions={["Sun"]}
              register={register}
              rules={formValidation.workingDays}
              error={errors.workingDays?.message}
            />
            <p className="mt-[16px] mb-6 font-[Inter] text-[12px] text-[#6B7280]">
              Standart hours: 09:00 - 18:00
            </p>
          </section>
          <div className="flex w-full   gap-[16px] border-t border-[#D1D5DB] ">
            <ButtonPage className="flex-1" onClick={handleAside}>
              Cancel
            </ButtonPage>
            <ButtonPage type="submit" className="flex-1">
              Send an invitation
            </ButtonPage>
          </div>
        </form>
      </div>
   )} </>
  );
};
