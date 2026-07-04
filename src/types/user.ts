export type User = {
  id: number;
  first_name: string;
  Last_name: string;
  email: string;
  role: 'admin' | 'user' | 'doctor' |'superadmin'
  phone_number: string,
  registration_date: Date,
    source: string

}