"use client";
import { useAuth } from "@/context/authContex";

export default function Dashboard() {
  const { accessToken } = useAuth();
  console.log(accessToken);
  return (
    <div>
      <h1>dashboard page</h1>
    </div>
  );
}
