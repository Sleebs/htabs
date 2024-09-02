import SettingsRedirectListItem from "@/components/Settings/SettingsRedirectListItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

const UserSettings = (props: Props) => {
  return (
    <ThemedView style={style.main_container}>
      <ThemedView style={style.container}>
        <Link href={"/editAccount"} asChild>
          <SettingsRedirectListItem content='Personal Informations' />
        </Link>
        <SettingsRedirectListItem content='Subsription' />
      </ThemedView>
    </ThemedView>
  );
};

export default UserSettings;
const style = StyleSheet.create({
  main_container: {
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    gap: 32,
    paddingTop: 25,
  },
  container: {
    width: "80%",
    paddingTop: 11,
    gap: 32,
  },
});
