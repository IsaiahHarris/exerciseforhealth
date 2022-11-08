import React, { useState } from "react";
import "./ConfigurationContainer.scss";
import { saveConfigurationAPI } from "../mockbackend";
const ConfigurationContainer = () => {
  const [maximumType, setMaximumType] = useState("");

  const saveConfiguration = () => {
    saveConfigurationAPI();
  };
  return (
    <div className="configuration-container">
      <div className="title">Maximums</div>
      <div className="choices-container" onChange={setMaximumType}>
        <input type="radio" value="Annual" name="maximumType" /> Annual
        <input type="radio" value="Lifetime" name="maximumType" /> Lifetime
        <input type="radio" value="Individual" name="maximumType" /> Individual
        <input type="radio" value="Family" name="maximumType" /> Family
      </div>
    </div>
  );
};

export default ConfigurationContainer;
