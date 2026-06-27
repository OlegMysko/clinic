import type { RegisterOptions, UseFormRegister } from "react-hook-form";

type Proops = {
  type: "email" | "password" | "text";
  label: string;
  placeholder?: string;
  name: string;
  register?: UseFormRegister<LoginFormData>;
  rules: RegisterOptions<LoginFromData>;
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
  return (
    <>
      <label htmlFor={`user-${label}`}className="font-[Inter] font-medium text-[14px] mb-[10px]">{label}</label>
      <input id={`user-${label}`}
        type={type}
        placeholder={placeholder}
        {...(register ? register(name, rules) : {})}
        className={`border p-2 rounded w-full h-[44px] ${error ?
          'mb-[10px] border-[#EF4444]':'mb-[25px]'}`}
      />
      {error && <p className=" mb-[16px] text-[#EF4444]">{error}</p>}
    </>
  );
};
