import { View, Text } from "react-native";
import React from "react";

interface PatientCardProps {
  name: string;
  area: string;
  ward: number;
  bed: number;
  status: string;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  area,
  ward,
  bed,
  status,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text>{name}</Text>
        <Text>{area}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{ward}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{bed}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

export default PatientCard;
