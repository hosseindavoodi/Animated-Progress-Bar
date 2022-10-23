import { useMemo } from "react";
//import Correct from '@components/icons/Correct'

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

  const { barText, barWidth, bgColor } = useMemo(() => {
    let bgColor;
    let barWidth;
    let barText;

    return { barText, barWidth, bgColor };
  }, []);

  return (
    <>
      <p className="p_highlight mb-1">Profile Progress</p>

      <div className="w-full bg-slate-200 rounded-full h-6">
        <div className={`h-full rounded-full ${barWidth} ${bgColor}`}></div>
      </div>
      <p className="micro_highlight text-text-secondary mt-1 mb-12">
        {barText}
      </p>
      <ul>
        {progressBarItems.map((items) => (
          <li
            key={items.id}
            className={`flex mb-4 items-center
              ${items.item ? "text-status-correct" : "text-gray-04"}`}
          >
            {/*<Correct />*/}
            <p className="micro_highlight ml-[14px]">{items.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProgressBar;
