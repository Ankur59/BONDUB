import { View, Text, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import Dash_styles from "./Dashboard.style";

interface CardsProps {
  height: ViewStyle["height"];
  width: ViewStyle["width"];
  content: string | React.ReactNode;
  title: string;
}

const Cards = ({ height, width, content, title }: CardsProps) => {
  return (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            backgroundColor: "blue",
            borderRadius: 8,
            marginLeft: "10%",
            marginTop: "10%",
          },
        }).container
      }
    >
      <View style={Dash_styles.card_heading}></View>
      <View style={Dash_styles.card_body}></View>
    </View>
  );
};

export default Cards;
