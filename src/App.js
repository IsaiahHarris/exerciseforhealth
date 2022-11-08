import "./App.scss";
import Button from "./Button/Button.js";
import React, { useState } from "react";
import { loadDataAPI } from "./mockbackend";
function App() {
  const [coinsurance, setCoinsurance] = useState();
  const [PPOPlan, setPPOPlan] = useState();
  const [configurationEnabled, setConfigurationEnabled] = useState();
  const loadData = () => {
    const canLoadConfiguration = loadDataAPI();
    console.log(canLoadConfiguration);
    setConfigurationEnabled(canLoadConfiguration.loadScreen);
  };
  return (
    <div className="App">
      <div className="header-container">
        <Button text="Load" click={loadData} />
        <Button text="Save" />
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
      {configurationEnabled && (
        <div className="configuration-container">this is configuration</div>
      )}
    </div>
  );
}

export default App;
