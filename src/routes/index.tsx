import { createFileRoute } from "@tanstack/react-router";
import { SideBar } from "../core-componentes/sidebar";
import { Schedule } from "../core-componentes/schedule";
import { MainContent } from "../core-componentes/main-content";
import { Logo } from "../components/logo";
import { useState } from "react";
import dayjs from "dayjs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [selectedDate, setSelectedDate] = useState<Date>(
    dayjs().startOf("day").toDate(),
  );

  return (
    <MainContent>
      <Logo className="hidden md:block md:absolute top-0 left-0" />
      <SideBar selectedDate={selectedDate} onChangeDate={setSelectedDate} />
      <Schedule selectedDate={selectedDate} onChangeDate={setSelectedDate} />
    </MainContent>
  );
}
