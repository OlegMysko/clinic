import { authClient as client } from "@/http/authClient"

interface AuthData{
  accessToken: string,
  user:string,
}
export const authService = {
  login: (email: string, password: string):Promise<AuthData> => {
    return client.post('/login', {email, password})
  },

  logout: () => client.post('logout'),
  refresh: ():Promise<AuthData> =>client.get('/refresh')
}