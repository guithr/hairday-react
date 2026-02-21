import { Icon } from "../components/icon";
import { Text } from "../components/text";
import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import type React from "react";

const periods = {
    morning: {
        title: "Manhã",
        time: "9h-12h",
        icon: SunHorizon,
    },
    afternoon: {
        title: "Tarde",
        time: "13h-18h",
        icon: CloudSun,
    },
    night: {
        title: "Noite",
        time: "19h-21h",
        icon: MoonStars,
    },
};

interface SchedulePeriodProps {
    period: keyof typeof periods;
    children: React.ReactNode;
}

export function SchedulePeriod({ period, children }: SchedulePeriodProps) {
    const { title, time, icon } = periods[period];

    return (
        <div className="flex flex-col gap-3 ">
            <div className="border border-gray-600 rounded-lg ">
                <div className="flex justify-between py-3 px-5 border-b border-b-gray-600">
                    <div className="flex gap-3 items-center ">
                        <Icon svg={icon} className="fill-yellow size-5" />
                        <Text variant="text-sm" className="text-gray-300">
                            {title}
                        </Text>
                    </div>
                    <Text variant="text-sm" className="text-gray-400">
                        {time}
                    </Text>
                </div>
                <ul className="flex flex-col gap-2 p-5">{children}</ul>
            </div>
        </div>
    );
}
