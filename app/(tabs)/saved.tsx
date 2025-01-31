import { StyleSheet, Image, Platform } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import HelicopterPreview from "@/components/Helicopter/HelicopterPreview";

export default function Saved() {
  return (
    <ThemedView
      style={{
        minHeight: "100%",
        width: "100%",
        alignItems: "center",
        gap: 32,
        paddingTop: 25,
      }}
    >
      <ThemedView style={{ width: "90%", paddingTop: 11, gap: 32 }}>
        <HelicopterPreview />
        <HelicopterPreview />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#192038",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
