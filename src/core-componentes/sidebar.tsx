import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";
import User from "../assets/icons/UserSquare.svg?react";
import { Button } from "../components/button";
import { useAppointment } from "../hooks/use-appointment";
import { useAppointments } from "../hooks/use-appointments";
import { useState } from "react";
import dayjs from "dayjs";

const periods = [
  { label: "Manhã", slots: ["09:00", "10:00", "11:00", "12:00"] },
  { label: "Tarde", slots: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"] },
  { label: "Noite", slots: ["19:00", "20:00", "21:00"] },
];

interface SideBarProps {
  selectedDate: Date;
  onChangeDate: (date: Date) => void;
}

export function SideBar({ selectedDate, onChangeDate }: SideBarProps) {
  const [client, setClient] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const { createAppointment } = useAppointment();

  const { usedTimeSlots } = useAppointments({
    filters: { date: selectedDate },
  });

  function handleNewAppointment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const date = dayjs(selectedDate).format("YYYY-MM-DD");
    const datetime = dayjs(`${date} ${time}`).toISOString();
    createAppointment({ client, datetime });
    setClient("");
    setTime("");
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return;
    onChangeDate(dayjs(event.target.value).startOf("day").toDate());
  }

  return (
    <aside className="max-w-124.5 w-full flex flex-col p-20 bg-gray-700 gap-6 rounded-xl">
      <div className="space-y-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        <Text variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </Text>
      </div>

      <form onSubmit={handleNewAppointment}>
        <label className="flex flex-col gap-2 w-full mb-8">
          <Text variant="title-md" className="text-gray-200 block">
            Data
          </Text>
          <DatePicker
            value={dayjs(selectedDate).format("YYYY-MM-DD")}
            onChange={handleDateChange}
          />
        </label>

        <div className="flex flex-col gap-2 mb-8">
          <Text as="h3" variant="title-md" className="text-gray-200">
            Horários
          </Text>
          <div className="space-y-3">
            {periods.map((period) => (
              <div key={period.label} className="flex flex-col gap-2">
                <Text variant="text-sm" className="text-gray-300">
                  {period.label}
                </Text>
                <div className="flex flex-wrap items-center gap-2">
                  {period.slots.map((slot) => (
                    <TimeSelect
                      key={slot}
                      name="time"
                      value={slot}
                      onChange={(e) => setTime(e.target.value)}
                      selected={time === slot}
                      disabled={usedTimeSlots.includes(slot)}
                    >
                      {slot}
                    </TimeSelect>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-2 w-full mb-6">
          <Text variant="title-md" className="text-gray-200 block">
            Cliente
          </Text>
          <TextInput
            name="client"
            icon={User}
            placeholder="Helena Souza"
            onChange={(e) => setClient(e.target.value)}
            value={client}
          />
        </label>

        <Button type="submit" disabled={!time || !client}>
          Agendar
        </Button>
      </form>
    </aside>
  );
}