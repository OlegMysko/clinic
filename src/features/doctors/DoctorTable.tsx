import { Table } from "@/components/table/Table";
import { Th } from "@/components/table/Th";
import { DoctorTableRow } from "./DoctorTableRow";

<Table>
  <thead>
    <tr>
      <Th>ID</Th>
      <Th>DOCTOR/CONTAC</Th>
      <Th>WORKLOAD</Th>
      <Th>SPECIALITY</Th>
      <Th>SCHEDULE</Th>
      <Th>TYPE</Th>
    </tr>
  </thead>

  <tbody>
    {doctors.map((doctor) => (
      <DoctorTableRow
        key={doctor.id}
        doctor={doctor}
      />
    ))}
  </tbody>
</Table>