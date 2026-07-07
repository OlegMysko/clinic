import { Input } from "@/components";
import { loginValidation } from "../auth/model/login.validation";
import { ButtonPage } from "@/components/button/ButtonsPage";

export const UserForm: React.FC = () => {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-6">
        
        <section>
          <p className="mb-[24px] font-[Inter] text-[12px] text-[#6B7280]">
            PERSONAL INFO
          </p>

          <div className="flex gap-4">
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
        </section>

      
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
          <p className="mb-6 font-[Inter] text-[12px] text-[#6B7280]">
            PASSWORD
          </p>

          <Input
            name="password"
            label="Password *"
            type="password"
            placeholder="At least 8 characters"
            rules={loginValidation.password}
          />
        </section>
      </form>
      
       
          
      
    </div>
  );
};