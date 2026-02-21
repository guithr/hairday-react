import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointments";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );

  function createAppointment({ client, datetime }: Omit<Appointment, "id">) {
    setAppointments((prev) => [
      ...(prev ?? []),
      {
        id: crypto.randomUUID(),
        client,
        datetime,
      },
    ]);
  }

  function deleteAppointment(id: string) {
    setAppointments((prev) =>
      (prev ?? []).filter((appointment) => appointment.id !== id),
    );
  }

  return {
    appointments,
    createAppointment,
    deleteAppointment,
  };
}
