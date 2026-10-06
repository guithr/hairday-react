import type { ChangeEvent } from "react";
import {
  useAppointments,
  type AppointmentFormatted,
} from "../hooks/use-appointments";
import { ScheduleHeader } from "./schedule-header";
import { ScheduleItem } from "./schedule-item";
import { SchedulePeriod } from "./schedule-period";
import dayjs from "dayjs";

interface ScheduleProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
}

export function Schedule({ selectedDate, onChangeDate }: ScheduleProps) {
  const {
    isLoadingAppointments,
    morningAppointments,
    afternoonAppointments,
    nightAppointments,
  } = useAppointments({ filters: { date: selectedDate } });

  function handleFilteredDateChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;
    onChangeDate(dayjs(event.target.value).startOf("day").toDate());
  }

  const periods = [
    { period: "morning", appointments: morningAppointments, skeletonCount: 4 },
    {
      period: "afternoon",
      appointments: afternoonAppointments,
      skeletonCount: 6,
    },
    { period: "night", appointments: nightAppointments, skeletonCount: 3 },
  ] as const;

  return (
    <section className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <ScheduleHeader
          filteredDate={selectedDate}
          onChangeFilteredDate={handleFilteredDateChange}
          loading={isLoadingAppointments}
        />
        <div className="space-y-3">
          {periods.map(({ period, appointments, skeletonCount }) => (
            <SchedulePeriod key={period} period={period}>
              {isLoadingAppointments
                ? Array.from({ length: skeletonCount }).map((_, index) => (
                    <ScheduleItem
                      key={index}
                      appointment={{} as AppointmentFormatted}
                      loading
                    />
                  ))
                : appointments.map((appointment) => (
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
