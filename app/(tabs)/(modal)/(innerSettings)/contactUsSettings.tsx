import ContactUs from "@/components/Settings/ContactUs";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const contactUsSettings = (props: Props) => {
  return (
    <ThemedView style={style.mainContainer}>
      <ContactUs />
    </ThemedView>
  );
};

export default contactUsSettings;
const style = StyleSheet.create({
  mainContainer: {
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    gap: 32,
    paddingTop: 25,
  },
});
