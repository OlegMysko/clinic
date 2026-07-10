import { authClient as client } from "@/http/authClient"
import { accessTokenService } from "./accessTokenService"

interface AuthData{
  access_token?: string,
  refresh_token?:string,
  user?:string,
}
export const authService = {
  login: (email: string, password: string):Promise<AuthData> => {
    return client.post('accounts/login', {email, password})
  },
logout: (refresh_token: string) =>
  client.post(
    "accounts/logout",
    { refresh_token },
    {
      headers: {
        Authorization: `Bearer ${accessTokenService.get()}`
      }
    }
  )
  ,
  refresh: (refresh_token:string):Promise<AuthData> =>client.post('accounts/refresh',{refresh_token})
}