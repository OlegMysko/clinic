import { Input } from "@/components";
import { formValidation } from "../auth/model/form.validation";
import { Select } from "@/components/select/Select";
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
import { Loader } from "@/components/loader/Loader";
import { errorToast, successToast } from "@/components/pushAppMessage/PushApp";
import type { DoctorFormData } from "@/types/dotorFormData";
import { specializations } from "./model/specialties";

type Props = {
  handleAside: () => void;
};

export const DoctorsForm: React.FC<Props> = ({ handleAside }) => {

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

  setValue("firstName", selectedUser.firstName);
  setValue("lastName", selectedUser.lastName);
  setValue("email", selectedUser.email);
}, [selectedUser, setValue]);
  console.log(selectedUser)
 
  const onSubmit = async (data: DoctorFormData) => {
     if (!selectedUser) {
    return;
  }
    try {
      await dispatch(
        createDoctorThunk({
          ...data,
          userId: selectedUser.id,
         
        })
        
      ).unwrap(); 
      reset()
      successToast(  <>
    Doctor created successfully
    <br />
    Dr. {selectedUser.firstName} {selectedUser.lastName}
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
  getValue={(user) => `${user.firstName} ${user.lastName}`}
  renderItem={(user) => (
    <>
      <div>{user.firstName} {user.lastName}</div>
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
                option={specializations}
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
