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
  refresh: ():Promise<AuthData> =>client.post('account/refresh')
}