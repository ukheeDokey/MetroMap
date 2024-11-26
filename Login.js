import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Top Space */}
      <View style={styles.topSpace} />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require("./assets/person.png")} style={styles.headerIcon} />
        <Text style={styles.headerText}>로그인</Text>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("./assets/directions_subway.png")} style={styles.logo} />
        <Text style={styles.logoText}>M.M.</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ID"
          style={styles.input}
          placeholderTextColor="#A9A9A9"
        />
        <TextInput
          placeholder="PASSWORD"
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* Signup Prompt */}
      <Text style={styles.signupPrompt}>
        회원이 아니신가요? 지금 M.M 가입하러 가기
      </Text>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Image source={require("./assets/뒤로가기.png")} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topSpace: {
    height: 65, // 상단 여백
  },
  header: {
    width: "100%",
    backgroundColor: "#87CEEB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerIcon: {
    width: 80,
    height: 80,
    marginRight: 140,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#87CEEB",
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20, // 입력 칸 사이의 간격
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },
  loginButton: {
    width: "80%", // 버튼 너비를 입력 칸과 동일하게 설정
    backgroundColor: "#87CEEB",
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupPrompt: {
    color: "#A9A9A9",
    marginTop: 20,
    fontSize: 14,
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: "#87CEEB",
  },
});