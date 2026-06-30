
import { LoginForm } from "./components/loginForm/LoginForm"
import { Logo } from "@/components/logo/Logo"


export const LoginPage = () => {
  return (
    <div className="flex flex-row h-screen w-screen bg-amber-800"  >
      <div className="flex flex-col justify-center items-center w-1/2 h-full bg-[#111827]">
        <Logo/>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 bg-white">
       <LoginForm/>
      </div>
    </div>
  )
}