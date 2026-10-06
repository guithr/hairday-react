import React from "react";
import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointments";
import { delay } from "../helpers/utils";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );
  const [isSaving, setIsSaving] = React.useState(false);

  async function createAppointment({ client, datetime }: Omit<Appointment, "id">) {
    setIsSaving(true);
    await delay(600);
    setAppointments((prev) => [
      ...(prev ?? []),
      {
        id: crypto.randomUUID(),
        client,
        datetime,
      },
    ]);
    setIsSaving(false);
  }

  async function deleteAppointment(id: string) {
    setIsSaving(true);
    await delay(600);
    setAppointments((prev) =>
      (prev ?? []).filter((appointment) => appointment.id !== id),
    );
    setIsSaving(false);
  }

  return {
    appointments,
    createAppointment,
    deleteAppointment,
    isSaving,
  };
}
