import { Outlet } from "@remix-run/react";

export default function Expenses() {  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Expenses Layout</h1>
      <Outlet />
    </div>
  );
}