"use client";
import React from "react";
import Header from "./HeadLink/Header";
import NavBar from "../NavBar";
import BlackGradient from "../bg_gradient/black_gradient";

export default function Homepage() {
  return (
    <div id="home-page" className="relative h-screen flex flex-col items-center ">
      <NavBar />
      <BlackGradient />
      <Header />
    </div>
  );
}
