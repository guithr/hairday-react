import { createFileRoute } from "@tanstack/react-router";
import { SideBar } from "../core-componentes/sidebar";
import { Schedule } from "../core-componentes/schedule";
import { MainContent } from "../core-componentes/main-conten";
import { Logo } from "../components/logo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainContent>
      <Logo className="absolute top-0 left-0" />
      <SideBar />
      <Schedule />
    </MainContent>
  );
}
