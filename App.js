import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Option from "./Option"; // Option.js 파일 import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Option.js를 테스트하기 위해 기본 화면을 Option로 설정 */}
        <Stack.Screen name="Option" component={Option} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}