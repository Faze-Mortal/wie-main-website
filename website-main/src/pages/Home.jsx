import React from "react";
import PhaseOrchestrator from "../components/PhaseOrchestrator";
import FooterPhase from "../components/phases/FooterPhase";

export default function Home() {
  return (
    <div className="relative w-full">
      <PhaseOrchestrator />
      <FooterPhase />
    </div>
  );
}
