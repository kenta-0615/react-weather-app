import React from "react";

type Props = {
  title: string;
  value: string;
};

export const Highlight: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="bg-navy text-white text-center py-5 h-52 w-80">
      <div className="font-medium">{title}</div>
      <div>
        <span className="text-3xl">{value}</span>
      </div>
    </div>
  );
};
