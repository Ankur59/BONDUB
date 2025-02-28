import { View, Text, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import Dash_styles from "./Dashboard.style";

interface CardsProps {
  height: ViewStyle["height"];
  width: ViewStyle["width"];
  content: string | React.ReactNode;
  title: string;
  flag: boolean;
  icons: React.ReactElement;
  heading: string;
  type: boolean;
  check?: () => boolean;
  message?: string;
}

const Cards = ({
  height,
  width,
  content,
  title,
  flag,
  type,
  icons,
  heading,
  check,
  message,
}: CardsProps) => {
  return flag ? (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            borderRadius: 8,
            marginLeft: "10%",
            marginTop: "10%",
          },
        }).container
      }
    >
      <View style={Dash_styles.card_heading}>
        <View style={Dash_styles.Heading_icon}>
          <View style={Dash_styles.icons}>
            <View
              style={{
                height: 32,
                width: 32,
                borderRadius: 8,
                backgroundColor: "#fff",
                borderWidth: 1,

                alignItems: "center",
                justifyContent: "center",
                borderColor: "#E6E6EA",
              }}
            >
              {icons}
            </View>
          </View>
          <View style={Dash_styles.title_text}>
            <Text style={{ color: "#A1A1B0", fontSize: 14, fontWeight: 500 }}>
              {heading}
            </Text>
          </View>
        </View>
      </View>
      <View style={Dash_styles.card_body}>
        {type ? (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                marginBottom: "2%",
                marginLeft: "2%",
                fontSize: 60,
              }}
            >
              {content}
            </Text>
          </View>
        ) : check ? (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                marginBottom: "2%",
                marginLeft: "2%",
                fontSize: 60,
              }}
            >
              {content}
            </Text>
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "#A1A1B0" }}>{message}</Text>
          </View>
        )}
      </View>
    </View>
  ) : (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            borderRadius: 8,
            marginLeft: "10%",
            marginTop: "10%",
            backgroundColor: "blue",
          },
        }).container
      }
    >
      <View style={Dash_styles.card_heading2}>
        <View style={Dash_styles.Heading_icon2}>
          <View style={Dash_styles.icons}>
            <View
              style={{
                height: 32,
                width: 32,
                borderRadius: 8,
                backgroundColor: "red",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#E6E6EA",
              }}
            >
              {icons}
            </View>
          </View>
          <View style={Dash_styles.title_text}>
            <Text style={{ color: "#A1A1B0", fontSize: 14, fontWeight: 500 }}>
              {heading}
            </Text>
          </View>
        </View>
        <View style={Dash_styles.count}>
          <Text
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              marginBottom: "2%",
              marginLeft: "5%",
              fontSize: 60,
            }}
          >
            {content}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;
