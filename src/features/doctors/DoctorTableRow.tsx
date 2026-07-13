import { Td } from "@/components/table/Td"
import { useNavigate } from "react-router-dom"

export const DoctorTableRow = ({doctor, key}) => {
  const navigate = useNavigate();
  return (<>
  <tr key={key}
  onClick={() => navigate(`/doctors/${doctor.id}`)}
  className="cursor-pointer hover:bg-gray-50 transition-colors"
>
  <Td>{doctor.first_name}</Td>
  <Td>{doctor.speciality}</Td>
  <Td>{doctor.phone_number}</Td>
  <Td>{doctor.email}</Td>
</tr></>)
}

