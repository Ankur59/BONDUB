import { View, Text } from "react-native";
import React from "react";

interface PatientCardProps {
  Name: string;
  area: string;
  ward: number;
  bed: number;
  condition: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  Name,
  area,
  ward,
  bed,
  condition,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        padding: 10,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBEBF1",
        borderLeftColor: "#EBEBF1",
        borderLeftWidth: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "ble",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            height: "100%",
            width: "27%",
            backgroundColor: "rd",
            marginLeft: "1%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#2A2A32", fontSize: 17 }}>{Name}</Text>
          <Text style={{ color: "#A1A1B0", fontSize: 13 }}>{area}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "re",
            justifyContent: "center",
          }}
        >
          <Text>{ward}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            backgroundColor: "rd",
            justifyContent: "center",
          }}
        >
          <Text>{bed}</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rd",
          }}
        >
          {" "}
          <View
            style={{
              height: "85%",
              width: "75%",
              backgroundColor: condition == "Critical" ? "#FFF3F3" : "#E5FEF6",
              borderWidth: 1,
              borderColor: condition == "Critical" ? "#FDDCDC" : "#B2EEDB",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <Text style={{ color: condition == "Critical" ? "red" : "green" }}>
              {condition}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientCard;
