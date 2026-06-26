import { Logo } from "./components/logo/Logo"
import { LoginTitle } from "./components/title/LoginTitle"

export const LoginPage = () => {
  return (
    <div className="flex flex-row h-screen w-screen bg-amber-800"  >
      <div className="flex flex-col justify-center items-center w-1/2 h-full bg-[#111827]">
        <Logo/>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 bg-white">
        <div className="flex flex-col w-[439px] h-[432px] p-[24px] bg-amber-300" >
          <LoginTitle title="Sign In" description="Enter your details to access your personal account."/>
        </div>
      </div>
    </div>
  )
}