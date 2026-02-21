import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointments";
import { useMemo } from "react";
import dayjs from "dayjs";

type Props = {
  filters: {
    date?: Date;
  };
};

export type AppointmentFormatted = Appointment & {
  time: string;
};

function formatAppointment(appointment: Appointment): AppointmentFormatted {
  return {
    ...appointment,
    time: dayjs(appointment.datetime).format("HH:mm"),
  };
}

function getHour(datetime: string) {
  return dayjs(datetime).hour();
}

function sortByDatetime(a: Appointment, b: Appointment) {
  return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
}

export function useAppointments({ filters }: Props = { filters: {} }) {
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);

  const filteredAppointments = useMemo(() => {
    return appointments
      .filter((appointment) => {
        if (!filters.date) return true;
        return dayjs(appointment.datetime).isSame(dayjs(filters.date), "day");
      })
      .map(formatAppointment)
      .sort(sortByDatetime);
  }, [appointments, filters.date]);

  const morningAppointments = useMemo(
    () =>
      filteredAppointments.filter((a) => {
        const hour = getHour(a.datetime);
        return hour >= 6 && hour <= 12;
      }),
    [filteredAppointments],
  );

  const afternoonAppointments = useMemo(
    () =>
      filteredAppointments.filter((a) => {
        const hour = getHour(a.datetime);
        return hour >= 13 && hour <= 18;
      }),
    [filteredAppointments],
  );

  const nightAppointments = useMemo(
    () =>
      filteredAppointments.filter((a) => {
        const hour = getHour(a.datetime);
        return hour > 18 || hour < 6;
      }),
    [filteredAppointments],
  );

  const usedTimeSlots = useMemo(
    () => filteredAppointments.map((a) => a.time),
    [filteredAppointments],
  );

  return {
    appointments,
    morningAppointments,
    afternoonAppointments,
    nightAppointments,
    usedTimeSlots,
  };
}
