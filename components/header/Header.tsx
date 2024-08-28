import React from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={[style.container]}>
      <Text style={{ backgroundColor: "red", flex: 1 }}>a</Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
