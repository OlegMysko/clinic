import { Input } from "@/components"
import { loginValidation } from "../auth/model/login.validation"

export const UserForm: React.FC = () => {
  return <>
    <div className="w-full flex flex-col">
      <p className="mb-[24px]">PERSONAL INFO</p>
      <form >
        <div className="w-full flex flex-row gap-[16px] mb-[40px]">
          <div className="flex-1">
            <Input
          name="firstName"
          label="First name *"
          type="text"
        placeholder="Enter first name"/></div> 
          <div className="flex-1">
              <Input
          name="Last name"
          label="Last name *"
          type="text"
        placeholder="Enter last name"/>
        </div>
        </div>
        <div>
          <p className="mb-[24px]">CONTACT</p>
          <div className="flex-1 mb-[40px]">
            <Input
              name="email"
              label="Email *"
              type="email"
              placeholder="example@gmail.com"
            rules={loginValidation.email}/>
          </div>
          <p className="mb-[24px]">PASSWORD</p>
          <div className="flex-1">
            <Input
              name="password"
              label="Password *"
              type="password"
              placeholder="At least 8 characters"
            rules={loginValidation.password}/>
          </div>
      </div>
       
      </form>
      </div></>
}