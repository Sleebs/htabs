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
      <Link href={"/generalSettings"} asChild>
        <SettingsRedirectListItem content='General Settings' />
      </Link>
      <Link href={"/databaseSettings"} asChild>
        <SettingsRedirectListItem content='Database' />
      </Link>
      <Link href={"/(innerSettings)/htabsSettings"} asChild>
        <SettingsRedirectListItem content='htabs' />
      </Link>
      <SettingsSwitchListItem content='Notifications' state={true} />
    </ThemedView>
  );
};

export default SettingsContainer;
