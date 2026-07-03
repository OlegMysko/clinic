export const UserInfo: React.FC = () => {
  return (
    <div className="w-[185px] flex  pl-[12px] pr-12px">
      <img className="w-[44px] h-[44px] mr-[8px] block border border-[#6B7280] rounded-[100%]" src="favicon.svg"  alt="userImage"></img>
      <div className="flex flex-col">  
        <h1 className="font-[Inter] text-[14px] font-semibold text-[#030712]">Oleksandr lemon</h1>
        <p className="font-[Inter] font-normal text-[12px] text-[#6B7280]">Admin</p>
</div>
    </div>
  )
}