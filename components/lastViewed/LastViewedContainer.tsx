import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HelicopterPreview from "../Helicopter/HelicopterPreview";

type Props = {};

const LastViewedContainer = (props: Props) => {
  return (
    <ThemedView style={{ width: "80%", paddingTop: 11, gap: 32 }}>
      <ThemedView
        style={{
          flexDirection: "row",
          gap: 24,
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <ThemedText style={{ fontSize: 24, fontWeight: 500, color: "#96D454" }}>
          Last Viewed
        </ThemedText>
        <ThemedView
          style={{
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 8,
          }}
        >
          <ThemedText
            style={{
              color: "#96D454",
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            update
          </ThemedText>
          <MaterialIcons name='refresh' size={24} color='#96D454' />
        </ThemedView>
      </ThemedView>
      <HelicopterPreview />
    </ThemedView>
  );
};

export default LastViewedContainer;
