import { ButtonIcon } from "../components/button-icon";
import Trash from "../assets/icons/Trash.svg?react";
import { Text } from "../components/text";
import { useAppointment } from "../hooks/use-appointment";
import type { AppointmentFormatted } from "../hooks/use-appointments";

interface ScheduleItemProps {
    appointment: AppointmentFormatted
}

export function ScheduleItem({ appointment }: ScheduleItemProps) {

    const { deleteAppointment } = useAppointment()

    function handleDelete(id: string) {
        deleteAppointment(id)
    }

    return (
        <li className="flex items-center gap-5">
            <Text variant="title-md" className="text-gray-200">
                {appointment?.time}
            </Text>
            <Text className="text-gray-200 w-full">{appointment?.client}</Text>
            <ButtonIcon
                icon={Trash}
                ariaLabel="Excluir agendamento"
                onClick={() => handleDelete(appointment.id)}
            />
        </li>
    )

}