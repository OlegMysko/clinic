
type Proops = {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  name: string;
}
export const LoginInput: React.FC<Proops> = ({type, placeholder }) => {
  return (
    <input type={type}
      placeholder={placeholder}

    />
  );  
}