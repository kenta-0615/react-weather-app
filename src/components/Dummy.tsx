import React from "react";
import { AreaCard } from "src/components/AreaCard";

export const DummyComponent = () => {
  return (
    <div>
      Dummy
      <AreaCard name="aaa" onClick={() => {}} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};
