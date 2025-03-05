import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Dash_styles from "../Styles/Dashboard.style";
import PatientCard from "./patients_Cards";

interface Patient {
  name: string;
  locality: string;
  wardNumber: number;
  numBeds: number;
  condition: string;
  category: string;
}

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
  source: Patient[];
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
  source,
}: CardsProps) => {
  return (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            borderRadius: 8,
            marginRight: "1%",
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
              height: "100%",
              width: "100%",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "10%",
                padding: 10,
                backgroundColor: "#FCFCFD",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "yelow",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "25%",

                    backgroundColor: "rd",
                    justifyContent: "center",
                    marginLeft: "1%",
                  }}
                >
                  <Text style={{ color: "#A1A1B0" }}>Name</Text>
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
                  <Text style={{ color: "#A1A1B0" }}>Ward</Text>
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
                  <Text style={{ color: "#A1A1B0" }}>Bed</Text>
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
                  <Text style={{ color: "#A1A1B0" }}>Status</Text>
                </View>
              </View>
            </View>
            {source.map((patient, index) => (
              <PatientCard
                key={index}
                Name={patient.name}
                area={patient.locality}
                ward={patient.wardNumber}
                bed={patient.numBeds}
                condition={patient.category}
              />
            ))}
            {source.length > 8 && (
              <View
                style={{
                  height: "10%",
                  width: "100%",
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: "70%",
                    width: "70%",
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#D3D3DA",
                    borderRadius: 6,
                  }}
                >
                  <Text>See All patients</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#EBEBF1",
            }}
          >
            <Text style={{ color: "#A1A1B0" }}>{warning}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default Cards;
