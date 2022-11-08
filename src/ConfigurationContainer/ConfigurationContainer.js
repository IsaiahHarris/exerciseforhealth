import React from "react";
import "./ConfigurationContainer.scss";
const ConfigurationContainer = ({ setMaximumType }) => {
  return (
    <div className="configuration-container">
      <div className="title">Maximums</div>
      <div
        className="choices-container"
        onChange={(e) => setMaximumType(e.target.value)}
      >
        <input type="radio" value="Annual" name="maximumType" /> Annual
        <input type="radio" value="Lifetime" name="maximumType" /> Lifetime
        <input type="radio" value="Individual" name="maximumType" /> Individual
        <input type="radio" value="Family" name="maximumType" /> Family
        <input type="radio" value="Rollover" name="maximumType" /> Rollover
        <input type="radio" value="Extended Maximum" name="maximumType" />{" "}
        Extended Maximum
        <input type="radio" value="Expanding Maximum" name="maximumType" />{" "}
        Expanding Maximum
        <input type="radio" value="PPO Split Maximum" name="maximumType" /> PPO
        Split Maximum
      </div>
    </div>
  );
};

export default ConfigurationContainer;
