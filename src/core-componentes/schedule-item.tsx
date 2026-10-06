import { ButtonIcon } from "../components/button-icon";
import Trash from "../assets/icons/Trash.svg?react";
import { Text } from "../components/text";
import { useAppointment } from "../hooks/use-appointment";
import type { AppointmentFormatted } from "../hooks/use-appointments";
import { ConfirmAlertDialog } from "../components/alert-dialog";
import { Skeleton } from "../components/skeleton";

interface ScheduleItemProps {
  appointment: AppointmentFormatted;
  loading?: boolean;
}

export function ScheduleItem({ appointment, loading }: ScheduleItemProps) {
  const { deleteAppointment, isSaving } = useAppointment();

  async function handleDelete() {
    await deleteAppointment(appointment.id);
  }

  return (
    <li className="flex items-center gap-5">
      {!loading ? (
        <Text variant="title-md" className="text-gray-200">
          {appointment?.time}
        </Text>
      ) : (
        <Skeleton className="w-9 h-6" />
      )}
      {!loading ? (
        <Text className="text-gray-200 w-full">{appointment?.client}</Text>
      ) : (
        <Skeleton className="w-full h-6" />
      )}

      <ConfirmAlertDialog
        title="Deseja Cancelar?"
        description="Essa ação não poderá ser desfeita."
        onConfirm={handleDelete}
      >
        <ButtonIcon
          loading={loading}
          busy={isSaving}
          icon={Trash}
          aria-label="Excluir agendamento"
        />
      </ConfirmAlertDialog>
    </li>
  );
}
