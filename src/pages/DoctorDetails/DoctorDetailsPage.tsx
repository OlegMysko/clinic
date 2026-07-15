import { useAppSelector } from "@/app/store/hook"
import { ButtonPage } from "@/components/button/ButtonsPage"
import { TfiPencil } from "react-icons/tfi";
import { IoTrash } from "react-icons/io5";
export const DoctorDetailsPage = () => {
  const { selectedDoctor } = useAppSelector(state => state.doctor)
  console.log(selectedDoctor)
return (
  <div className="rounded-xl bg-white p-6 shadow-sm">
   
    <section className="mb-8 flex items-center justify-between">
      <div className="text-sm text-gray-500">
        <span className="cursor-pointer hover:text-blue-600">
          &lt; Doctors
        </span>

        <span className="mx-2">/</span>

        <span className="font-medium text-gray-900">
          Dr. {selectedDoctor?.firstName} {selectedDoctor?.lastName}
        </span>
      </div>

      <div className="flex gap-3">
        <ButtonPage
          className="bg-[#EF4444] px-4 hover:bg-black"
          icon={<IoTrash className="mr-2 text-white" />}
        >
          Remove doctor
        </ButtonPage>

        <ButtonPage
          className="px-4"
          icon={<TfiPencil className="mr-2" />}
        >
          Edit doctor
        </ButtonPage>
      </div>
    </section>

    {/* Doctor Card */}
    <section className="flex items-center justify-between rounded-xl border border-gray-200 p-6">

      <div className="flex items-center gap-5">

        <img
          src="/favicon.svg"
          alt="Doctor"
          className="h-20 w-20 rounded-full bg-amber-300 object-cover"
        />

        <div>

          <div className="mb-2 flex items-center gap-3">

            <h1 className="text-2xl font-semibold">
              Dr. {selectedDoctor?.firstName}{" "}
              {selectedDoctor?.lastName}
            </h1>

            <span className="rounded-md bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
              {selectedDoctor?.employmentType}
            </span>

          </div>

          <p className="mb-3 text-gray-600">
            {selectedDoctor?.specialization}
          </p>

          <div className="flex gap-8 text-sm text-gray-500">

            <span>{selectedDoctor?.phoneNumber}</span>

            <span>{selectedDoctor?.email}</span>

          </div>

        </div>

      </div>

      {/* Workload */}

      <div className="w-[320px]">

        <div className="mb-2 flex justify-between text-sm">

          <span className="font-medium">
            Workload
          </span>

          <span>80%</span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-gray-200">

          <div className="h-full w-[80%] rounded-full bg-[#EF4444]"></div>

        </div>

      </div>

    </section>
  </div>
);
}