import SettingsBrightness from "@/components/Settings/SettingsBrightness";
import SettingsRedirectListItem from "@/components/Settings/SettingsRedirectListItem";
import SettingsSwitchListItem from "@/components/Settings/SettingsSwitchListItem";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

type Props = {};

const generalSettings = (props: Props) => {
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
      <ThemedView style={{ width: "80%", paddingTop: 11, gap: 32 }}>
        <SettingsRedirectListItem content='Privacy' />
        <SettingsSwitchListItem content='Notification' state={true} />
        <SettingsBrightness />
      </ThemedView>
    </ThemedView>
  );
};

export default generalSettings;
