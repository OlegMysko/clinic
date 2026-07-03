import { useState } from "react";
import type {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  error?: string;
};

export const Input: React.FC<Props> = ({
  label,
  register,
  rules,
  error,
  type,
  name,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const registerProps =
    register && name ? register(name, rules) : {};

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="font-[Inter] font-medium text-[14px] mb-[10px]"
        >
          {label}
        </label>
      )}

      <div
        className={`relative ${
          error ? "mb-[10px]" : "mb-[25px]"
        }`}
      >
        <input
          id={name}
          type={
            showPassword && type === "password"
              ? "text"
              : type
          }
          className={
            className ??
            `border rounded-[5px] p-2 text-[14px] ${
              type === "search"
                ? "w-[365px] pl-10"
                : "w-full h-[44px] pr-10"
            }`
          }
          {...props}
          {...registerProps}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <PiEyeLight />
            ) : (
              <PiEyeSlash />
            )}
          </button>
        )}

        {type === "search" && (
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
        )}
      </div>

      {error && (
        <p className="text-[13px] mb-[16px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

