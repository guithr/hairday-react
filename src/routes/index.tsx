import { createFileRoute } from "@tanstack/react-router";
import { SideBar } from "../core-componentes/sidebar";
import { Schedule } from "../core-componentes/schedule";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
      <SideBar />
      <Schedule />
    </main>
  );
}
