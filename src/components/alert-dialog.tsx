import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "./button";
import { Text } from "./text";

interface confirmAlertDialogProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
}

export function ConfirmAlertDialog({
  children,
  title,
  description,
  confirmLabel = "Sim",
  cancelLabel = "Não",
  onConfirm,
}: confirmAlertDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-gray-100/30 backdrop-blur-sm" />

        <AlertDialog.Content
          className="flex items-center justify-center fixed left-1/2 top-1/2 w-full max-w-3xs md:max-w-fit -translate-x-1/2 -translate-y-1/2
    rounded-lg bg-gray-700 p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]"
        >
          <div className="flex flex-col gap-6">
            <div>
              <AlertDialog.Title>
                <Text variant="title-lg" className="text-gray-100">
                  {title}
                </Text>
              </AlertDialog.Title>
              <AlertDialog.Description>
                <Text variant="text-sm" className="text-gray-300">
                  {description}
                </Text>
              </AlertDialog.Description>
            </div>

            <div className="flex gap-4">
              <AlertDialog.Cancel asChild>
                <Button
                  className="w-full"
                  variant="danger"
                  size="sm"
                  type="button"
                >
                  {cancelLabel}
                </Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button
                  variant="succes"
                  className="w-full"
                  size="sm"
                  type="button"
                  onClick={onConfirm}
                >
                  {confirmLabel}
                </Button>
              </AlertDialog.Action>
            </div>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
