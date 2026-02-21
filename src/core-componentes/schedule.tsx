import { ScheduleHeader } from "./schedule-header";
import { ScheduleItem } from "./schedule-item";
import { SchedulePeriod } from "./schedule-period";

const morningAppointments = [
  { time: "09:00", client: "Guilherme", id: "1" },
  { time: "10:00", client: "Rudy", id: "2" },
];

const afternoonAppointments = [
  { time: "13:00", client: "Matheus", id: "3" },
  { time: "18:00", client: "Leonardo", id: "4" },
];

const nightAppointments = [
  { time: "19:00", client: "Antonio", id: "5" },
  { time: "20:00", client: "Kalebe", id: "6" },
  { time: "21:00", client: "Fernando", id: "7" },
];

export function Schedule() {

  function handleDelete(id: string) {
    console.log("Delete appointment with id:", id);
  }
  return (
    <section className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <ScheduleHeader />

        <div className="space-y-3">
          <SchedulePeriod period="morning">
            {morningAppointments.map((appointment) => (
              <ScheduleItem
                key={appointment.id}
                id={appointment.id}
                time={appointment.time}
                client={appointment.client}
                onDelete={handleDelete}
              />

            ))}
          </SchedulePeriod>
          <SchedulePeriod period="afternoon">
            {afternoonAppointments.map((appointment) => (
              <ScheduleItem
                key={appointment.id}
                id={appointment.id}
                time={appointment.time}
                client={appointment.client}
                onDelete={handleDelete}
              />
            ))}
          </SchedulePeriod>
          <SchedulePeriod period="night">
            {nightAppointments.map((appointment) => (
              <ScheduleItem
                key={appointment.id}
                id={appointment.id}
                time={appointment.time}
                client={appointment.client}
                onDelete={handleDelete}
              />
            ))}
          </SchedulePeriod>
        </div>
      </div>
    </section>
  );
}
