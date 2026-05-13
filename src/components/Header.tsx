import { CloudSun, Search, MapPin, Bell } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [unit, setUnit] = useState("C");

  const active =
    "border-white border-2 bg-white rounded-xl h-7 w-7 text-sky-500 cursor-pointer flex items-center justify-center shadow-md";

  const normal =
    "h-7 w-7 cursor-pointer flex items-center justify-center";

  return (
    <div className=" header fixed top-0 left-0 z-50 w-full backdrop-blur-xl bg-white/20 shadow-md px-4 py-4">

      <div className="flex items-center justify-between gap-4 flex-wrap">

        {/* Logo */}
        <div className="flex gap-3 items-center shrink-0">

          <div className="bg-sky-500 p-2 rounded-lg">
            <CloudSun className="text-white w-7 h-8" />
          </div>

          <h1 className="font-bold text-xl sm:text-2xl">
            WeatherNow
          </h1>
        </div>

        {/* Search */}
        <div className="relative w-full sm:max-w-sm md:max-w-md">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5" />

          <input
            className="w-full border border-gray-200 rounded-xl pl-10 pr-12 py-3 focus:outline-sky-300 bg-white"
            type="text"
            name="search"
            id="search"
            placeholder="Search city..."
            title="Search for a location"
          />

          <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 w-5 cursor-pointer" />
        </div>

        {/* Actions */}
        <div className="flex gap-3 items-center shrink-0">

          <div className="flex items-center font-bold gap-2 bg-gray-50 px-2 rounded-xl py-1 h-10">

            <span
              onClick={() => setUnit("C")}
              className={unit === "C" ? active : normal}
            >
              °C
            </span>

            <span
              onClick={() => setUnit("F")}
              className={unit === "F" ? active : normal}
            >
              °F
            </span>
          </div>

          <Bell className="bg-gray-50 cursor-pointer h-10 w-10 p-2 rounded-lg" />
        </div>
      </div>
    </div>
  );
}