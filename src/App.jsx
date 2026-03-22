import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ContractsHeader from "./components/ContractsHeader";
import Controls from "./components/Controls";
import ContractCard from "./components/ContractCard";

function App() {
  const [contractMode, setContractMode] = useState("solo");

  return (
    <div className="min-h-screen bg-page-bg font-sans text-gray-900">
      <Navbar />

      <main className="max-w-[1400px] mx-auto lg:pl-64 lg:pr-8">
        <ContractsHeader />

        <div className="px-8 pb-12">
          <div className="bg-card-bg/50 backdrop-blur-sm border border-card-border rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
            <Controls mode={contractMode} setMode={setContractMode} />
            
            <div className="w-full">
              <ContractCard mode={contractMode} />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
