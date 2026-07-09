import { Input } from "@/components"
import { loginValidation } from "../auth/model/login.validation"
import { FiUser } from "react-icons/fi";
import { Select } from "@/components/select/Select";
import { doctorSpecialties } from "@/features/doctors/model/specialties"
import { CheckboxGroup } from "@/components/checkBoxGroup/CheskBoxGroup";
import { workingDays } from "./model/workingDays";
import { RadioGroup } from "@/components/radioButtonGroup/RadioButtonGroup";
import { employmentTypes } from "./model/employmentTypes";
export const DoctorsForm = () => {
  return <>
   <div className="w-full">
        <form className="flex flex-col gap-6 ">
        <section>
          <div className="flex">
            <div className="flex justify-center items-center w-[80px] h-[80px] mr-[15px] rounded-[100%] bg-[#E5E7EB]">
              <FiUser className="w-[24px] h-[24px]" /></div>
            <div className="flex flex-col">
              <h1 className=" font-[Inter]  text-[14px] text-[#2563EB] ">Upload Photo</h1>
              <p className="text-[12px] text-[#9CA3AF] ">An image of the person — best if it has the same light and height.</p>

            </div>
          </div>
          </section>
          <section>
            <p className="mb-[24px] font-[Inter] text-[12px] text-[#6B7280]">
              PERSONAL INFO
            </p>
  
            <div className="flex gap-4 mb-[24px]">
              <Input
                className="flex-1"
                name="firstName"
                label="First name *"
                type="text"
                placeholder="Enter first name"
              />
  
              <Input
                className="flex-1"
                name="lastName"
                label="Last name *"
                type="text"
                placeholder="Enter last name"
              />
          </div>
         
          <div className="flex gap-4 ">
            <Select
              name={"speciality"}
              label={"Speciality *"}
              placeholder={"Enter speciality" }
              option={doctorSpecialties}
              className="flex-1"/>
  
              <Input
                className="flex-1"
                name="experience"
                label="Experience *"
                type="number"
                placeholder="E.g. 10"
              />
          </div>
   


 
        </section>
       
          <RadioGroup
  name="employmentType"
  label="Type *"
  options={employmentTypes}
/>
      
  
        
          <section>
            <p className="mb-6 font-[Inter] text-[12px] text-[#6B7280]">
              CONTACT
            </p>
  
            <Input
              name="email"
              label="Email *"
              type="email"
              placeholder="example@gmail.com"
              rules={loginValidation.email}
            />
          </section>
  
         
          <section>

            <Input
              name="phone"
              label="Phone *"
              type="phone"
              placeholder="+38 (0XX) XXX-XXXX"
              rules={loginValidation.password}
            />
        </section>
       
        <section>
          <CheckboxGroup
  name="workingDays"
  label="Working days *"
  options={workingDays}
  disabledOptions={["Sun"]}
          />
          <p className="mt-[16px] mb-6 font-[Inter] text-[12px] text-[#6B7280]">Standart hours: 09:00 - 18:00</p>
        </section>
        </form>
        
         
            
        
      </div></>
}