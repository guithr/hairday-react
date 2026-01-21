import { createFileRoute } from "@tanstack/react-router";
import { Text } from "../components/text";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TrashIcon from "../assets/icons/Trash.svg?react";
import { ButtonIcon } from "../components/button-icon";
import { TimeSelect } from "../components/time-select";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col space-y-5 p-4 bg-gray-700">
      <Text as="h4">Welcome Home!</Text>
      <Button>Agendar</Button>
      <TextInput icon={UserSquare} placeholder="Nome do cliente" />
      <ButtonIcon ariaLabel="Lixeira" type="button" icon={TrashIcon} />
      <TimeSelect>09:00</TimeSelect>
      <TimeSelect>11:00</TimeSelect>
      <TimeSelect>13:00</TimeSelect>
    </div>
  );
}
