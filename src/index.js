import * as React from 'react';
import { Text, View, ScrollView} from 'react-native';
// or any pure javascript modules available in npm
import { Containers, Typografy } from "./components";
export default function App() {
  return (
    <Containers.Center
      style={{
        backgroundColor: "#254659"
      }}
    >
      <Typografy>Teste</Typografy>
    </Containers.Center>
  );
}
