import React from "react";

type TypeAxis = {
  x: number;
  y: number;
  payload: any;
};

export const AxisTick = ({ x, y, payload }: TypeAxis) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};
