import * as React from "react";

import { format } from "../utils";

export default function Laps({ laps, onClear }) {
  const memoizedFormat = React.useMemo(
    () => laps.map((lap) => <li key={lap}>{format(lap)}</li>),
    [laps]
  );
  return (
    <section className="laps-list">
      <div className="header">
        <h3>Lap's</h3>
        <button onClick={onClear}>Clear</button>
      </div>
      <ul>{laps.length ? memoizedFormat : <p>No laps listed</p>}</ul>
    </section>
  );
}
