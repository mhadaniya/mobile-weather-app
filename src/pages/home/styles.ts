import styled from "styled-components/native";
import fonts from "../../utils/fonts";
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../../utils/colors";

export const ContainerScreen = styled(LinearGradient).attrs({ colors: ['#08244F', '#134CB5', '#0B42AB'] })`
  background-color: LinearGradient;
  min-height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.regular};
  font-size: 30px;
  color: ${colors.white};
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;