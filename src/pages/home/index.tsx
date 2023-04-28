import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { getWeather } from "../../services/weather";
import * as S from "./styles";

export const Home = () => {
  const handleWeather = async () => {
    const response = await getWeather();
    console.log(response);
  };

  useEffect(() => {
    handleWeather();
  });

  return (
    <ScrollView>
      <S.ContainerScreen>
        <S.Title>Home</S.Title>
      </S.ContainerScreen>
    </ScrollView>
  );
};
