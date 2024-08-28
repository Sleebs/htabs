import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import AntDesign from "@expo/vector-icons/AntDesign";
import SettingsRedirectListItem from "./SettingsRedirectListItem";
import SettingsSwitchListItem from "./SettingsSwitchListItem";
import { Link } from "expo-router";

type Props = {};

const SettingsContainer = (props: Props) => {
  return (
    <ThemedView style={{ width: "80%", paddingTop: 11, gap: 32 }}>
      <Link href={"/generalSettings"} style={{ width: "100%" }}>
        <SettingsRedirectListItem content='General Settings' />
      </Link>
      <SettingsRedirectListItem content='Database' />
      <SettingsRedirectListItem content='htabs' />
      <SettingsSwitchListItem content='Notifications' state={true} />
    </ThemedView>
  );
};

export default SettingsContainer;
