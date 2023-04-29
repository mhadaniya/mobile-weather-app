import { useContext } from "react";
import WeatherDataContext from "../context/WeatherDataContext";

const useWeatherData = () => {
  const context = useContext(WeatherDataContext);
  if (context === null) {
    throw new Error("useWeatherData must be used within a WeatherDataProvider");
  }
  return context;
};

export default useWeatherData;
