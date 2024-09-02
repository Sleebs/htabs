import SettingsRedirectListItem from "@/components/Settings/SettingsRedirectListItem";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";

type Props = {};

const htabsSettings = (props: Props) => {
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
        <SettingsRedirectListItem content='Demo mode' />
        <Link href={"/termsAndConditions"} asChild>
          <SettingsRedirectListItem content='Terms and conditions' />
        </Link>
        <SettingsRedirectListItem content='Application information' />
        <Link href={"/contactUsSettings"} asChild>
          <SettingsRedirectListItem content='Contact us' />
        </Link>
      </ThemedView>
    </ThemedView>
  );
};

export default htabsSettings;
