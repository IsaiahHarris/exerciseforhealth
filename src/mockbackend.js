// here is where I would set application state to be later observedby app or analytics.
export const loadDataAPI = () => {
  // loadingScreen(true);
  // call backend
  return {
    loadScreen: true,
  };
  // loadingScreen(false);
  // loadScreenEnabled(true);
};

export const saveConfigurationAPI = (data) => {
  // isSavingData(true);
  console.log("saving data", data);
  // isSavingData(false);
  return "success";
};
