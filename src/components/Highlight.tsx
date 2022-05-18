import React from "react";

type Props = {
  title: string;
  value: number;
  unit: string;
};

export const Highlight: React.FC<Props> = ({ title, value, unit }) => {
  return (
    <div className="bg-navy">
      <div className="text-red">{title}</div>
      <div>
        <span>{value}</span>
        <span>{unit}</span>
      </div>
    </div>
  );
};
