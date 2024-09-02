import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

type Props = {};

const DatabaseSettingsHeader = (props: Props) => {
  return (
    <ThemedView
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <ThemedText
        style={{
          fontSize: 24,
          lineHeight: 29,
          fontWeight: 500,
          color: "#96D454",
        }}
      >
        Dawnload QRH
      </ThemedText>
      <ThemedView
        style={{
          borderColor: "#96D454",
          borderRadius: 16,
          borderWidth: 1,
          justifyContent: "center",
        }}
      >
        <ThemedText
          style={{
            fontSize: 16,
            lineHeight: 19,
            fontWeight: 400,
            paddingVertical: 1,
            paddingHorizontal: 7,
            color: "#96D454",
          }}
        >
          select all
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default DatabaseSettingsHeader;
