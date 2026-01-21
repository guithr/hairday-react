import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";
import User from "../assets/icons/UserSquare.svg?react";
import { Button } from "../components/button";

export function SideBar() {
  return (
    <aside className="max-w-124.5 w-full flex flex-col p-20 bg-gray-700 gap-6 rounded-xl">
      <div className="space-y-1">
        <Text as="h2" variant="title-lg" className="text-gray-100 ">
          Agende um atendimento
        </Text>
        <Text variant="text-sm" className="text-gray-300 ">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form>
        <label className="flex flex-col gap-2 w-full mb-8">
          <Text variant="title-md" className="text-gray-200 block">
            Data
          </Text>
          <DatePicker />
        </label>
        <div className="flex flex-col gap-2 mb-8">
          <Text as="h3" variant="title-md" className="text-gray-200 ">
            Horários
          </Text>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Text variant="text-sm" className="text-gray-300">
                Manhã
              </Text>
              <div className="flex flex-wrap items-center gap-2">
                <TimeSelect>09:00</TimeSelect>
                <TimeSelect>10:00</TimeSelect>
                <TimeSelect>11:00</TimeSelect>
                <TimeSelect>12:00</TimeSelect>
              </div>
            </div>
            <div>
              <Text variant="text-sm" className="text-gray-300">
                Tarde
              </Text>
              <div className="flex flex-wrap items-center gap-2">
                <TimeSelect>13:00</TimeSelect>
                <TimeSelect>14:00</TimeSelect>
                <TimeSelect>15:00</TimeSelect>
                <TimeSelect>16:00</TimeSelect>
                <TimeSelect>17:00</TimeSelect>
                <TimeSelect>18:00</TimeSelect>
              </div>
            </div>
            <div>
              <Text variant="text-sm" className="text-gray-300">
                Noite
              </Text>
              <div className="flex flex-wrap items-center gap-2">
                <TimeSelect>19:00</TimeSelect>
                <TimeSelect>20:00</TimeSelect>
                <TimeSelect>21:00</TimeSelect>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="flex flex-col gap-2 w-full mb-6">
            <Text variant="title-md" className="text-gray-200 block">
              Cliente
            </Text>
            <TextInput icon={User} placeholder="Helena Souza" />
          </label>
        </div>
        <div>
          <Button type="submit">Agendar</Button>
        </div>
      </form>
    </aside>
  );
}
