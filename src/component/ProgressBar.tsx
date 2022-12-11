import { useMemo } from "react";
import Correct from "./Correct";

type ProgressBarProps = {
  basicInfo?: boolean;
  primaryContact?: boolean;
  cv?: boolean;
  profileImg?: boolean;
};

const ProgressBar = ({
  basicInfo,
  primaryContact,
  cv,
  profileImg,
}: ProgressBarProps) => {
  const progressBarItems = [
    { id: 1, item: basicInfo, text: "Basic informations" },
    { id: 2, item: primaryContact, text: "Primary contact" },
    { id: 3, item: cv, text: "CV and / or other documents" },
    { id: 4, item: profileImg, text: "Profile image" },
  ];
  const count = progressBarItems.filter((value) => value.item).length;

  const { barText, barWidth, bgColor } = useMemo(() => {
    let bgColor;
    let barWidth;
    let barText;

    switch (count) {
      case 0:
        bgColor = "bg-neutral-400";
        barWidth = "w-6";
        barText = "none";
        break;
      case 1:
        bgColor = "bg-red-500";
        barWidth = "w-1/4";
        barText = "basic info";
        break;
      case 2:
        bgColor = "bg-orange-500";
        barWidth = "w-1/2";
        barText = "mid info";
        break;
      case 3:
        bgColor = "bg-lime-500";
        barWidth = "w-3/4";
        barText = "good info";
        break;
      case 4:
        bgColor = "bg-green-500";
        barWidth = "w-full";
        barText = "all star info";
        break;
    }
    return { barText, barWidth, bgColor };
  }, [count]);

  return (
    <div className="p-2 w-1/2">
      <p className="p_highlight mb-1">Profile Progress</p>

      <div className="w-full bg-slate-200 rounded-full h-6">
        <div
          className={`h-full rounded-full transition-width duration-500 ease-in-out ${barWidth} ${bgColor}`}
        ></div>
      </div>
      <p className="micro_highlight text-text-secondary mt-1 mb-12">
        {barText}
      </p>
      <ul>
        {progressBarItems.map((items) => (
          <li
            key={items.id}
            className={`flex mb-4 items-center font-semibold
              ${items.item ? "text-emerald-500" : "text-gray-04"}`}
          >
            <Correct />
            <p className="micro_highlight ml-[14px]">{items.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
