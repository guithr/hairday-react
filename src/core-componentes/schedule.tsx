import { DatePicker } from "../components/date-picker";
import { Icon } from "../components/icon";
import { Text } from "../components/text";
import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import Trash from "../assets/icons/Trash.svg?react";
import { ButtonIcon } from "../components/button-icon";

export function Schedule() {
  return (
    <div className="w-full py-20">
      <div className="mx-auto flex flex-col gap-8 max-w-170.5">
        <header className="flex justify-between gap-6">
          <div className="flex flex-col gap-1">
            <Text as="h1" variant="title-lg" className="text-gray-100">
              Sua agenda
            </Text>
            <Text variant="text-sm" className="text-gray-300">
              Consulte os seus cortes de cabelo agendados por dia
            </Text>
          </div>
          <DatePicker />
        </header>

        <div className="flex flex-col gap-3">
          <div className="border border-gray-600 rounded-lg ">
            <div className="flex justify-between py-3 px-5 border-b border-b-gray-600">
              <div className="flex gap-3 items-center ">
                <Icon svg={SunHorizon} className="fill-yellow size-5" />
                <Text variant="text-sm" className="text-gray-300">
                  Manhã
                </Text>
              </div>
              <Text variant="text-sm" className="text-gray-400">
                09h-12h
              </Text>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <Text variant="title-md" className="text-gray-200">
                      14:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 justify-center items-center">
                    <Text variant="title-md" className="text-gray-200">
                      18:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-600 rounded-lg ">
            <div className="flex justify-between py-3 px-5 border-b border-b-gray-600">
              <div className="flex gap-3 items-center ">
                <Icon svg={CloudSun} className="fill-yellow size-5" />
                <Text variant="text-sm" className="text-gray-300">
                  Tarde
                </Text>
              </div>
              <Text variant="text-sm" className="text-gray-400">
                13h-18h
              </Text>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <Text variant="title-md" className="text-gray-200">
                      14:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 justify-center items-center">
                    <Text variant="title-md" className="text-gray-200">
                      18:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-600 rounded-lg ">
            <div className="flex justify-between py-3 px-5 border-b border-b-gray-600">
              <div className="flex gap-3 items-center ">
                <Icon svg={SunHorizon} className="fill-yellow size-5" />
                <Text variant="text-sm" className="text-gray-300">
                  Noite
                </Text>
              </div>
              <Text variant="text-sm" className="text-gray-400">
                19h-21h
              </Text>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <Text variant="title-md" className="text-gray-200">
                      14:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
              <div className="flex">
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-5 justify-center items-center">
                    <Text variant="title-md" className="text-gray-200">
                      18:00
                    </Text>
                    <Text className="text-gray-200">Maria Herwitz</Text>
                  </div>
                  <ButtonIcon icon={Trash} ariaLabel={"Lixeira"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
