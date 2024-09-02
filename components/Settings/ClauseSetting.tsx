import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from "react-native";

type Props = { title: String; body: String };

const ClauseSetting = (props: Props) => {
  const { title, body } = props;
  return (
    <ThemedView style={{ gap: 32 }}>
      <ThemedText style={style.headerTitle}>{title}</ThemedText>
      <ThemedText style={style.body}>{body}</ThemedText>
    </ThemedView>
  );
};

export default ClauseSetting;

const style = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 21,
  },
  body: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
  },
});
