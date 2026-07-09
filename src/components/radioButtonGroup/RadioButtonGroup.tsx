import type {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  name: string;
  label: string;
  options: string[];
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  error?: string;
};

export const RadioGroup: React.FC<Props> = ({
  name,
  label,
  options,
  register,
  rules,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-[10px] font-[Inter] font-medium text-[14px]">
        {label}
      </label>

      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option}
            htmlFor={`${name}-${option}`}
            className="flex flex-1 cursor-pointer items-center gap-2 rounded-[8px] border p-[12px] h-[44px]"
          >
            <input
              id={`${name}-${option}`}
              type="radio"
              value={option}
              {...(register ? register(name, rules) : { name })}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};