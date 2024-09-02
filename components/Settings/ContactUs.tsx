import React, { useState } from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet, TextInput } from "react-native";

type Props = {};

const ContactUs = (props: Props) => {
  const [title, changeTitle] = useState<string>("");
  const [body, changeBody] = useState<string>("");
  return (
    <ThemedView style={style.mainContainer}>
      <TextInput
        value={title}
        onChangeText={changeTitle}
        style={style.inputBox}
        placeholder='Subject'
        placeholderTextColor={"white"}
        numberOfLines={1}
      />
      <TextInput
        value={body}
        onChangeText={changeBody}
        style={[{ height: "40%" }, style.inputBox]}
        placeholder='Type here ...'
        placeholderTextColor={"white"}
        multiline
        maxLength={2500}
      />
    </ThemedView>
  );
};

export default ContactUs;
const style = StyleSheet.create({
  mainContainer: {
    width: "80%",
    paddingTop: 11,
    gap: 32,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "grey",
    backgroundColor: "grey",
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
});
