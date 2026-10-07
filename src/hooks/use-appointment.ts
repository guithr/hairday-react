import React from "react";
import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointments";
import { delay } from "../helpers/utils";
import { toast } from "sonner";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );
  const [isSaving, setIsSaving] = React.useState(false);

  async function createAppointment({
    client,
    datetime,
  }: Omit<Appointment, "id">) {
    setIsSaving(true);
    try {
      await delay(600);
      setAppointments((prev) => [
        ...(prev ?? []),
        {
          id: crypto.randomUUID(),
          client,
          datetime,
        },
      ]);
      toast.success("Agendamento criado com sucesso!");
    } catch {
      toast.error("Não foi possível salvar o agendamento. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  }

  async function deleteAppointment(id: string) {
    setIsSaving(true);
    try {
      await delay(600);
      setAppointments((prev) =>
        (prev ?? []).filter((appointment) => appointment.id !== id),
      );
      toast.success("Agendamento cancelado com sucesso!");
    } catch {
      toast.error("Não foi possível cancelar o agendamento. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  }

  return {
    appointments,
    createAppointment,
    deleteAppointment,
    isSaving,
  };
}
