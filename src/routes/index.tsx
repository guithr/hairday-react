import { createFileRoute } from "@tanstack/react-router";
import { Text } from "../components/text";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Text as="h4">Welcome Home!</Text>
    </div>
  );
}
