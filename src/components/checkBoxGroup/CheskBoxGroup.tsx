import type {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  name: string;
  label: string;
  options: string[];
  disabledOptions?: string[];
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  error?: string;
};

export const CheckboxGroup: React.FC<Props> = ({
  name,
  label,
  options,
  disabledOptions = [],
  register,
  rules,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-[10px] font-[Inter] font-medium text-[14px]">
        {label}
      </label>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const disabled = disabledOptions.includes(option);

          return (
            <label
              key={option}
              className={`min-w-[55px] ${
                disabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <input
                type="checkbox"
                value={option}
                disabled={disabled}
                className="peer hidden"
                {...(register ? register(name, rules) : {})}
              />

              <div
                className={`
                  flex
                  w-[55px]
                  h-[44px]
                  items-center
                  justify-center
                  rounded-[8px]
                  border
                  transition-all
                  border-gray-300
                  peer-checked:border-blue-600
                  peer-checked:bg-blue-50
                  peer-checked:text-blue-600
                  ${
                    disabled
                      ? "bg-gray-100 text-gray-400"
                      : "hover:border-blue-400"
                  }
                `}
              >
                {option}
              </div>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};