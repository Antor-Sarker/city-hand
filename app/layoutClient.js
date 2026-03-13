"use client";
import { useState } from "react";
import Navbar from "./components/header/navbar/navbar";

export default function LayoutClient({ children }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className={`${searchInput && "blur-sm"}`}>{children}</div>
    </>
  );
}
