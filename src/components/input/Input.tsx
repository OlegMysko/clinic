import { useState } from "react";
import type { RegisterOptions,} from "react-hook-form";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi"; 
type Proops = {
  type: "email" | "password" | "text";
  label: string;
  placeholder?: string;
  name: string;
  register?: any;
  rules: RegisterOptions;
  error?: string;
};
export const Input: React.FC<Proops> = ({
  type,
  label,
  placeholder,
  register,
  name,
  rules,
  error,
}) => {
  const [lookPasword, showPassword] = useState(false)
  const handleLookPassword = ()=> showPassword(prev=>!prev)
  return (
    <>
     
      <label htmlFor={`user-${label}`} className="font-[Inter] font-medium text-[14px] mb-[10px]">{label}</label>
      <div className={`relative  ${error ? 'mb-[10px] border-[#EF4444]':'mb-[25px]'}`}>
      <input id={`user-${label}`}
        type={lookPasword && type==='password'?'text':type}
        placeholder={placeholder}
        {...(register ? register(name, rules) : {})}
        className={` text-[14px] border p-2 rounded-[5px] w-full h-[44px] pr-[40px]
         `}
      />
        {type === "password" && <button type="button"
          onClick={handleLookPassword}
          className="absolute right-3
top-1/2 -translate-y-1/2">
          {lookPasword ? <PiEyeLight /> : <PiEyeSlash />}</button>}
         </div>
        {error && <p className=" mb-[16px] text-[13px] text-[#EF4444]">{error}</p>}
       
    </>
  );
};
