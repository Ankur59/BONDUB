import { View, Text, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import Dash_styles from "../Dashboard.style";
import PatientCard from "../patients_Cards";

interface CardsProps {
  height: ViewStyle["height"];
  width: ViewStyle["width"];
  content: string | React.ReactNode;
  icons: React.ReactElement;
  heading: string;
  check?: boolean;
  warning?: string;
  count?: number;
  critical_count: number;
  name: string;
  area: string;
  ward: number;
  bed: number;
  status: string;
}

const Cards = ({
  height,
  width,
  content,
  heading,
  icons,
  check,
  warning,
  count,
  critical_count,
  name,
  area,
  ward,
  bed,
  status,
}: CardsProps) => {
  return (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            borderRadius: 8,
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
            <Text style={{ color: "#A1A1B0", fontSize: 17, fontWeight: 200 }}>
              {heading}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: "70%",
            width: "20%",
            alignItems: "flex-start",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        >
          <Text style={{ fontSize: 70, marginLeft: "20%" }}>{count}</Text>
        </View>
        {check === true ? (
          <View
            style={{
              height: "20%",
              width: "14%",
              backgroundColor: "#FFF3F3",
              position: "absolute",
              right: 0,
              bottom: 0,
              marginBottom: "2%",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "2%",
              borderWidth: 1,
              borderColor: "#FDDCDC",
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "#DE2A29" }}>{critical_count} Critical</Text>
          </View>
        ) : null}
      </View>
      <View style={Dash_styles.card_body}>
        {check ? (
          <View
            style={{
              height: "10%",
              width: "100%",
              backgroundColor: "#FCFCFD",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: "#A1A1B0" }}>Name</Text>
            </View>
            <View>
              <Text style={{ color: "#A1A1B0" }}>Ward</Text>
            </View>
            <View>
              <Text style={{ color: "#A1A1B0" }}>Bed</Text>
            </View>
            <View>
              <Text style={{ color: "#A1A1B0" }}>Status</Text>
            </View>
            <PatientCard
              name={name}
              area={area}
              ward={ward}
              bed={bed}
              status={status}
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "#A1A1B0" }}>{warning}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default Cards;
