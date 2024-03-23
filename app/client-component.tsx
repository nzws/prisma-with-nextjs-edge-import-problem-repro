"use client";

import { onCreate } from "./actions";

export function ClientComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>

      <button onClick={onCreate}>Create User</button>
    </div>
  );
}
