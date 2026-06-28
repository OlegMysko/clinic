import { useForm } from "react-hook-form";
import { Input } from "@/components/input/Input";
import { LoginTitle } from "../title/LoginTitle";
import { loginValidation } from "@/features/auth/model/login.validation";
export const LoginForm = () => {
  type LoginFormData = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[439px] h-[432px] p-[24px]"
    >
      <LoginTitle
        title="Sign In"
        description="Enter your details to access your personal account."
      />

      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        register={register}
        rules={loginValidation.email}
        error={errors.email?.message}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        rules={loginValidation.password}
        error={errors.password?.message}
      />

      <button
        type="submit"
        className="w-full h-[44px] 
      rounded-[5px] text-[white] bg-[#111827]"
      >
        Log in
      </button>
    </form>
  );
};
