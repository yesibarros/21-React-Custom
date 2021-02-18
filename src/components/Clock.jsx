import * as React from "react";

import { format } from "../utils";

export default function Clock({ time = 0 }) {
  return (
    <div className="clock">
      <p>{format(time)}</p>
    </div>
  );
}
