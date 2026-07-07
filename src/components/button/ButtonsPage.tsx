
 type Props = {
   name: string;
   icon?: SVGAElement;
    onClick: () => void;
    
  }
export const ButtonPage:React.FC<Props> = ({name,icon, onClick}) => {
 
  return <>
    <button className=" h-[36px] flex justify-center items-center 
    ml-[16px] pl-[12px] pr-[12px] rounded-[8px]
     text-[#FFFFFF] bg-[#111827] cursor-pointer" onClick={onClick}>
    {icon} {name}</button></>
}