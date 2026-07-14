import type { User } from "@/types/User";
import { httpClient } from "../http/httpClient";
import { accessTokenService } from "./accessTokenService";
import type { UserData } from "@/types/userFormData";
import type { DoctorFormData } from "@/types/dotorFormData";

export const userService = {
  getCurrentUser: (): Promise<User> => httpClient.get("accounts/users/me"),

  getAllUsers: (search?: string): Promise<User[]> =>
    httpClient.get("accounts/users", { params: { search } }),

  getAllDoctors: () => httpClient.get("doctors"),

  register: (data: UserData) => {
    return httpClient.post("accounts/register", data, {
      headers: {
        Authorization: `Bearer ${accessTokenService.get()}`,
      },
    });
  },

  activation: (email: string, token: string) => {
    return httpClient.post(
      "accounts/activate",
      { email, token },
      {
        headers: { skipAuthInterceptor: true },
      },
    );
  },

  createDoctor: (
   data:DoctorFormData
  ) => {
    return httpClient.post(
      "doctors/profile",
      data,
      {
        headers: {
          Authorization: `Bearer ${accessTokenService.get()}`,
        },
      },
    );
  },

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
