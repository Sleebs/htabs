import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Switch } from "react-native";

type Props = {
  content: String;
  state: boolean;
};

const SettingsSwitchListItem = (props: Props) => {
  const { content, state } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ThemedText
        style={{
          fontSize: 24,
          fontWeight: 500,
          lineHeight: 29,
          color: "#8F9BB3",
        }}
      >
        {content}
      </ThemedText>
      <Switch
        value={isEnabled}
        onValueChange={toggleSwitch}
        thumbColor={isEnabled ? "#FFA71D" : "white"}
      />
    </ThemedView>
  );
};

export default SettingsSwitchListItem;
