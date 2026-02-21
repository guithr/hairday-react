import { ButtonIcon } from "../components/button-icon";
import Trash from "../assets/icons/Trash.svg?react";
import { Text } from "../components/text";

interface ScheduleItemProps {
    id: string
    time: string,
    client: string,
    onDelete: (id: string) => void
}

export function ScheduleItem({ id, client, time, onDelete }: ScheduleItemProps) {
    return (
        <li className="flex items-center gap-5">
            <Text variant="title-md" className="text-gray-200">
                {time}
            </Text>
            <Text className="text-gray-200 w-full">{client}</Text>
            <ButtonIcon
                icon={Trash}
                ariaLabel="Excluir agendamento"
                onClick={() => onDelete(id)}
            />
        </li>
    )

}