import { authClient as client } from "@/http/authClient"
import { accessTokenService } from "./accessTokenService"

interface AuthData{
  accessToken?: string,
  refreshToken?:string,
  user?:string,
}
export const authService = {
  login: (email: string, password: string): Promise<AuthData> => {
    return client.post('accounts/login', { email, password })
  },
  logout: (refreshToken: string) =>{
  return  client.post(
      "accounts/logout",
      { refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessTokenService.get()}`
        }
      }
    )
}
  ,
  refresh: (refreshToken:string):Promise<AuthData> =>client.post('accounts/refresh',{refreshToken})
}