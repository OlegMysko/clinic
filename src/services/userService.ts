import type { User } from '@/types/User';
import { httpClient } from '../http/httpClient';


export const userService = {
  getCurrentUser: (): Promise<User> => httpClient.get('accounts/users/me'),
  
  
};