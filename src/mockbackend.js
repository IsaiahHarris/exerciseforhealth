export const loadDataAPI = () => {
  return {
    loadScreen: true,
  };
};

export const saveConfigurationAPI = (data) => {
  console.log("saving data", data);
  return "success";
};
