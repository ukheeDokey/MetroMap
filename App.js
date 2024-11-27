import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Agreement from "./Agreement"; // Agreement.js 파일 import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Agreement.js를 테스트하기 위해 기본 화면을 Agreement로 설정 */}
        <Stack.Screen name="Agreement" component={Agreement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}