import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import React from "react";

type Props = {};

const LoginStatusContainer = (props: Props) => {
  return (
    <ThemedView style={style.main_container}>
      <ThemedView style={[style.pressable, style.brightColor]}>
        <ThemedText>CHANGE PASSWORD</ThemedText>
      </ThemedView>
      <ThemedView style={[style.pressable, style.dimColor]}>
        <ThemedText>LOG OUT</ThemedText>
      </ThemedView>
      <ThemedText style={style.delete}>delete account</ThemedText>
    </ThemedView>
  );
};

export default LoginStatusContainer;
const style = StyleSheet.create({
  main_container: {
    paddingVertical: 40,
    width: "100%",
    alignItems: "center",
    gap: 14,
  },
  pressable: {
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  brightColor: {
    backgroundColor: "#444D65",
  },
  dimColor: {
    backgroundColor: "#8F9BB3",
    opacity: 0.5,
  },
  delete: { opacity: 0.2 },
});
