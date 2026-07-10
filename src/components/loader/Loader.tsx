import { RiToothLine } from "react-icons/ri";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-gray-300 border-t-blue-600" />

        <div className="absolute inset-0 flex items-center justify-center">
          <RiToothLine className="text-sm text-blue-600" />
        </div>
      </div>
    </div>
  );
};