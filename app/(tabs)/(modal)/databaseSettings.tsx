import HelicopterPreview from "@/components/Helicopter/HelicopterPreview";
import DatabaseSettingsHeader from "@/components/Settings/DatabaseSettings/DatabaseSettingsHeader";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

type Props = {};

const databaseSettings = (props: Props) => {
  const [savedPlanes, updateSavedPlanes] = useState();
  const updateInMermoyPlanes = () => {};
  const saveInMermoyPlanes = () => {};
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
      <ThemedView style={{ width: "90%", gap: 24 }}>
        <DatabaseSettingsHeader />
        <HelicopterPreview />
        <HelicopterPreview />
        <HelicopterPreview />
        <HelicopterPreview />
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Pressable onPress={updateInMermoyPlanes}>
          <ThemedView style={styles.button}>
            <ThemedText style={styles.lightText}>update</ThemedText>
          </ThemedView>
        </Pressable>
        <Pressable onPress={saveInMermoyPlanes}>
          <ThemedView style={styles.button}>
            <ThemedText style={styles.lightText}>save</ThemedText>
          </ThemedView>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
};

export default databaseSettings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#444D65",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 32,
    width: 125,
  },
  lightText: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 600,
  },
});
