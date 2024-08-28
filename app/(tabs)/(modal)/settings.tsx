import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import SettingsContainer from "@/components/Settings/SettingsContainer";

export default function Settings() {
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
      <SettingsContainer />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
