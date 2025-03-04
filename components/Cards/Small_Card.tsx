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
import Mini_Cards from "./mini_cards";

const Small = ({
  height,
  width,
  heading,
  icons,
  critical_count,
  type,
  source,
  count,
}) => {
  return (
    <View
      style={
        StyleSheet.create({
          container: {
            height,
            width,
            borderRadius: 8,
            backgroundColor: "white",
          },
        }).container
      }
    >
      <View style={Dash_styles.card_heading2}>
        <View style={Dash_styles.Heading_icon2}>
          <View style={Dash_styles.icons}>
            <View
              style={{
                height: "95%",
                width: "80%",
                borderRadius: 6,
                backgroundColor: "#fff",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#E6E6EA",
                marginRight: 10,
              }}
            >
              {icons}
            </View>
          </View>
          <View style={Dash_styles.title_text}>
            <Text style={{ color: "#A1A1B0", fontSize: 14, fontWeight: 200 }}>
              {heading}
            </Text>
          </View>
        </View>
        {critical_count > 0 && (
          <TouchableOpacity
            style={{
              height: 26,
              width: 48,
              backgroundColor: "#FFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "2%",
              borderWidth: 1,
              borderColor: "#EBEBF1",
              borderRadius: 4,
            }}
            activeOpacity={0.8}
          >
            <Text>View</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={Dash_styles.card_body2}>
        {type == 1 && (
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "23%",
                padding: 10,
                backgroundColor: "yllow",
                alignItems: "center",
                borderBottomColor: "#EBEBF1",
                borderBottomWidth: 1,
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
              <Mini_Cards
                key={index}
                Name={patient.name}
                ward={patient.wardNumber}
                bed={patient.numBeds}
                condition={patient.category}
              />
            ))}
          </View>
        )}
        {type == 2 && (
          <View style={{ height: "100%", width: "100%" }}>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                marginLeft: "2%",
                marginBottom: "2%",
                fontSize: 35,
              }}
            >
              {count}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Small;
