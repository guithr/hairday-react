import { createFileRoute } from "@tanstack/react-router";
import { Text } from "../components/text";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TrashIcon from "../assets/icons/Trash.svg?react";
import { ButtonIcon } from "../components/button-icon";
import { TimeSelect } from "../components/time-select";
import { DatePicker } from "../components/date-picker";
import { Skeleton } from "../components/skeleton";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col space-y-5 p-4 bg-gray-700">
      <Text as="h4">Welcome Componentes Page!</Text>
      <TextInput icon={UserSquare} placeholder="Nome do cliente" />

      <div className="flex gap-3">
        <Button>Agendar</Button>
        <Button disabled>Agendar</Button>
        <Button loading>Agendar</Button>
      </div>
      <div className="flex gap-3">
        <ButtonIcon aria-label="Lixeira" type="button" icon={TrashIcon} />
        <ButtonIcon
          aria-label="Lixeira"
          type="button"
          icon={TrashIcon}
          disabled
        />
        <ButtonIcon aria-label="Lixeira" icon={TrashIcon} loading />
      </div>

      <div className="flex gap-3">
        <TimeSelect>09:00</TimeSelect>
        <TimeSelect>11:00</TimeSelect>
        <TimeSelect>13:00</TimeSelect>
        <TimeSelect disabled>13:00</TimeSelect>
        <TimeSelect loading>13:00</TimeSelect>
        <TimeSelect loading>13:00</TimeSelect>
      </div>
      <DatePicker />

      <div className="space-y-4">
        <Skeleton className="h-12" />
        <Skeleton className="h-10" rounded="md" />
        <Skeleton className="h-8" rounded="sm" />
        <Skeleton className="h-8 w-8" rounded="full" />
      </div>
    </div>
  );
}
