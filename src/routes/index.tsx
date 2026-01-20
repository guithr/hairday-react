import { createFileRoute } from "@tanstack/react-router";
import { Text } from "../components/text";
import { Button } from "../components/button";
import { TextInput } from "../components/text-input";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TrashIcon from "../assets/icons/Trash.svg?react";
import { ButtonIcon } from "../components/button-icon";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="space-y-5 p-2">
      <Text as="h4">Welcome Home!</Text>
      <Button>Agendar</Button>
      <TextInput icon={UserSquare} placeholder="Nome do cliente" />
      <ButtonIcon ariaLabel="Lixeira" type="button" icon={TrashIcon} />
    </div>
  );
}
