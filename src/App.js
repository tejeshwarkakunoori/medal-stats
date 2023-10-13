import React, { useState } from "react";
import "./App.css";
import "./assets/css/style.css";
import medalData from "./data/dummyData.json";
import SwitchTab from "./Components/SwitchTab";
import Chart from "./Components/LineChart";
import Table from "./Components/Table";
import Header from "./Components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("table");

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="App">
      <Header />
      <SwitchTab activeTab={activeTab} handleChangeTab={handleChangeTab} />

      {activeTab === "table" ? (
        <Table medalData={medalData} />
      ) : (
        <Chart medalData={medalData} />
      )}
    </div>
  );
}

export default App;
