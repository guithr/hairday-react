import type { ChangeEvent } from "react";
import { useAppointments } from "../hooks/use-appointments";
import { ScheduleHeader } from "./schedule-header";
import { ScheduleItem } from "./schedule-item";
import { SchedulePeriod } from "./schedule-period";
import dayjs from "dayjs";

interface ScheduleProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
}

export function Schedule({ selectedDate, onChangeDate }: ScheduleProps) {

  const { morningAppointments, afternoonAppointments, nightAppointments } =
    useAppointments({ filters: { date: selectedDate } });

  function handleFilteredDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;
    onChangeDate(dayjs(event.target.value).startOf("day").toDate());
  }

  const periods = [
    { period: "morning", appointments: morningAppointments },
    { period: "afternoon", appointments: afternoonAppointments },
    { period: "night", appointments: nightAppointments },
  ] as const;

  return (
    <section className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <ScheduleHeader
          filteredDate={selectedDate}
          onChangeFilteredDate={handleFilteredDateChange}
        />
        <div className="space-y-3">
          {periods.map(({ period, appointments }) => (
            <SchedulePeriod key={period} period={period}>
              {appointments.map((appointment) => (
                <ScheduleItem
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </SchedulePeriod>
          ))}
        </div>
      </div>
    </section>
  );
}