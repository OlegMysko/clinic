import type { User } from '@/types/User';
import { httpClient } from '../http/httpClient';


export const userService = {
  getCurrentUser: (): Promise<User> => httpClient.get('accounts/users/me'),
  
  changeName: (name: string)=> 
  httpClient.patch('/users/change-name', {name},{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }),
   changePassword: (password: string,newPassword:string,confirmPassword:string)=> 
  httpClient.post('/users/change-password', {password,newPassword,confirmPassword},{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }),
    changeEmail: (email:string,password:string)=> 
  httpClient.post('/users/change-email', {email,password},{
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      skipAuthInterceptor: true 
    }
  }),
    

confirmChangeEmail: (token: string) => {
  return httpClient.get(`/users/confirm-email?token=${token}`, {
    headers: { skipAuthInterceptor: true } 
  });
},
finalConfirm: (token: string) => {
  return httpClient.get(`/users/confirm-finall?token=${token}`, {
    headers: { skipAuthInterceptor: true } 
  });
}
   
};