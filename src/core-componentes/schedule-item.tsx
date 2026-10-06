import { ButtonIcon } from "../components/button-icon";
import Trash from "../assets/icons/Trash.svg?react";
import { Text } from "../components/text";
import { useAppointment } from "../hooks/use-appointment";
import type { AppointmentFormatted } from "../hooks/use-appointments";
import { ConfirmAlertDialog } from "../components/alert-dialog";

interface ScheduleItemProps {
  appointment: AppointmentFormatted;
}

export function ScheduleItem({ appointment }: ScheduleItemProps) {
  const { deleteAppointment } = useAppointment();

  return (
    <li className="flex items-center gap-5">
      <Text variant="title-md" className="text-gray-200">
        {appointment?.time}
      </Text>
      <Text className="text-gray-200 w-full">{appointment?.client}</Text>

      <ConfirmAlertDialog
        title="Deseja Cancelar?"
        description="Essa ação não poderá ser desfeita."
        onConfirm={() => deleteAppointment(appointment.id)}
      >
        <ButtonIcon icon={Trash} aria-label="Excluir agendamento" />
      </ConfirmAlertDialog>
    </li>
  );
}
