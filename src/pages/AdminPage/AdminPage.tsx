import { useAppDispatch } from "@/app/store/hook"
import { logout } from "@/features/auth/authSlice"
import { accessTokenService } from "@/services/accessTokenService"

import { refreshTokenService } from "@/services/refreshTokenService"
import { useNavigate } from "react-router-dom"

export const AdminPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () =>
  {
    dispatch(logout())
     refreshTokenService.remove();
    accessTokenService.remove();
  //  await authService.logout(); for future
    navigate('/login')
  }
  
  return <>
  <h1>HELLO ADMIN</h1>
  <button
  onClick={handleLogout}>LOG OUT</button></> 
}