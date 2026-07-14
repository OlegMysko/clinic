import type { User } from '@/types/User';
import { httpClient } from '../http/httpClient';
import { accessTokenService } from './accessTokenService';


export const userService = {
  getCurrentUser: (): Promise<User> => httpClient.get('accounts/users/me'),
  
  getAllUsers: (search?: string): Promise<User[]> =>
    httpClient.get('accounts/users', { params: { search } }),
  
  getAllDoctors: () => httpClient.get('doctors'),
  
  register: (firstName: string, lastName: string, email: string, password: string) => {
  return  httpClient.post('accounts/register', { firstName, lastName, email, password }, {
      headers: {
        Authorization: `Bearer ${accessTokenService.get()}`
      }
    })
  },
  
  activation: (email: string, token: string) => {
  return  httpClient.post('accounts/activate', { email, token }, {
       headers: { skipAuthInterceptor: true } 
    })
  },
 
  createDoctor: (
    userId: number,
    firstName: string,
    lastName: string,
    specialization: string,
    yearsExperience: number,
    employmentType: string,
    email: string,
    phoneNumber: number,
    workingDays: string[]) => {
  return  httpClient.post('doctors/profile', {userId,
      firstName, lastName, specialization, yearsExperience,
      employmentType,email,phoneNumber,workingDays
    }, { headers: {
        Authorization: `Bearer ${accessTokenService.get()}`
      }})
    }
  
  
  

//   changeName: (name: string) => 
//   httpClient.patch('/users/change-name', {name},{
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//     }
//   }),
//    changePassword: (password: string,newPassword:string,confirmPassword:string)=> 
//   httpClient.post('/users/change-password', {password,newPassword,confirmPassword},{
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//     }
//   }),
//     changeEmail: (email:string,password:string)=> 
//   httpClient.post('/users/change-email', {email,password},{
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//       skipAuthInterceptor: true 
//     }
//   }),
    

// confirmChangeEmail: (token: string) => {
//   return httpClient.get(`/users/confirm-email?token=${token}`, {
//     headers: { skipAuthInterceptor: true } 
//   });
// },
// finalConfirm: (token: string) => {
//   return httpClient.get(`/users/confirm-finall?token=${token}`, {
//     headers: { skipAuthInterceptor: true } 
//   });
// }
   
};