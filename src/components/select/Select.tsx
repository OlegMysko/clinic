
export type Props = {
  name: string;
  label: string;
  option:string[];
  placeholder: string;
  className: string;
}
export const Select:React.FC<Props> = ({name,label,option,placeholder,className}) => {
  return (<div className={`flex flex-col ${className ?? ""}`}>
  <label htmlFor={name} className="mb-[10px] text-[14px] font-medium">
    {label}
  </label>

  <select id={name} name={name} defaultValue="" className="h-[44px] rounded-[5px] border border-gray-300 px-3">
    <option value="" disabled>{placeholder}</option>

    {option.map((specialty) => (
      <option key={specialty} value={specialty}>
        {specialty}
      </option>
    ))}
  </select>
</div>)
}