import { useForm } from "react-hook-form";
import { Input } from "../../../../components/input/Input";
import { LoginTitle } from "../title/LoginTitle";

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
        rules={{
          required: "email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "email not correct!",
          },
        }}
        error={errors.email?.message}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        rules={{
          required: "password is required",
          pattern: {
            value: /^[a-zA-Z0-9]{6,}$/,
            message: "the password is wrong",
          },
        }}
        error={errors.password?.message}
      />

      <button  type="submit" className="w-full h-[44px] 
      rounded-[16px] text-[white] bg-[#111827]">Log in</button>
    </form>
  );
};
