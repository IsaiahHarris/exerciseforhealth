import "./App.scss";
import Button from "./Button/Button.js";
import React, { useState } from "react";
import { loadDataAPI, saveConfigurationAPI } from "./mockbackend";
import ConfigurationContainer from "./ConfigurationContainer/ConfigurationContainer";
function App() {
  const [coinsurance, setCoinsurance] = useState();
  const [PPOPlan, setPPOPlan] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [configurationEnabled, setConfigurationEnabled] = useState();
  const [maximumType, setMaximumType] = useState();
  const loadData = () => {
    const canLoadConfiguration = loadDataAPI();
    setConfigurationEnabled(canLoadConfiguration.loadScreen);
  };

  const saveConfiguration = () => {
    saveConfigurationAPI(maximumType);
  };

  return (
    <div className="App">
      <div className="header-container">
        <Button text="Load" click={loadData} />
        <Button
          text="Save"
          click={saveConfiguration}
          isDisabled={!maximumType}
        />
        <select
          type="radio"
          value={coinsurance}
          defaultValue
          onChange={(e) => setCoinsurance(e.target.value)}
        >
          <option disabled value>
            - Coinsurance Plan -
          </option>
          <option value="hmsa">HMSA</option>
          <option value="uhc">UHC</option>
        </select>

        <select
          type="radio"
          value={PPOPlan}
          defaultValue
          onChange={(e) => setPPOPlan(e.target.value)}
        >
          <option disabled value>
            - PPO Plan -
          </option>
          <option value="hmsa">HMSA</option>
          <option value="uhc">UHC</option>
        </select>
      </div>
      <div className="dates">
        <div className="date-inputs-container">
          Start Date{" "}
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          End Date{" "}
          <input value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>
      {configurationEnabled && (
        <ConfigurationContainer setMaximumType={setMaximumType} />
      )}
    </div>
  );
}

export default App;
