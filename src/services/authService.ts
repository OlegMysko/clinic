import { authClient as client } from "@/http/authClient"

interface AuthData{
  accessToken: string,
  refreshToken:string,
  user:string,
}
export const authService = {
  login: (email: string, password: string):Promise<AuthData> => {
    return client.post('accounts/login', {email, password})
  },

  logout: () => client.post('account/logout'),
  refresh: (refresh_token:string):Promise<AuthData> =>client.post('accounts/refresh',{refresh_token})
}