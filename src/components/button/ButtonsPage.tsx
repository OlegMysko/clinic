
 type Props = {
   children: React.ReactNode;
   icon?: React.ReactNode;
   onClick?: () => void;
   className?: string;
    
  }
export const ButtonPage:React.FC<Props> = ({children , className,icon, onClick}) => {
 
  return <>
    <button  className={`
    h-[36px]
    flex
    justify-center
    items-center
    rounded-[8px]
    bg-[#111827]
    text-white
    cursor-pointer
    ${className ?? ""}
  `} onClick={onClick}>
    {icon} {children} </button></>
}