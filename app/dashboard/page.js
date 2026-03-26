"use client";

import { useUserData } from "@/context/authContex";

export default function Dashboard() {
  const {userData}=useUserData()
  console.log(userData)
  return (
    <div>
      <h1>dashboard page</h1>
    </div>
  );
}
