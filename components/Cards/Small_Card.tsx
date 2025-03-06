import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  DimensionValue,
} from "react-native";
import React, { useEffect, useState } from "react";
import Dash_styles from "../Styles/Dashboard.style";
import PatientCard from "./patients_Cards";
import Mini_Cards from "./mini_cards";

interface CardsProps {
  height: DimensionValue;
  width: DimensionValue;
  heading: string;
  icons: JSX.Element;
  critical_count: number;
  type: number;
  source: any[];
  count: number;
  check?: boolean;
  warning?: string;
  show_vacant?: boolean;
  //
  total_count?: number;
  used?: number;
  //
}

const Small = ({
  height,
  width,
  heading,
  icons,
  critical_count,
  type,
  source,
  count,
  check,
  warning,
  total_count,
  used,
  show_vacant,
}: CardsProps) => {
  const [vacant, setvacant] = useState<Number>();
  useEffect(() => {
    if (total_count !== undefined && used !== undefined) {
      const remain = total_count - used;
      setvacant(remain);
    }
  }, [total_count, used]); // Remove `vacant` if not needed

  return (
    <View
      style={{
        height,
        width,
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <View style={Dash_styles.card_heading2}>
        <View style={Dash_styles.Heading_icon2}>
          <View style={Dash_styles.icons}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 6,
                backgroundColor: "rd",
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
            <Text
              style={{
                color: "#A1A1B0",
                fontSize: 14,
                fontWeight: 200,
                marginLeft: 5,
              }}
            >
              {heading}
            </Text>
          </View>
        </View>
        {count > 0 && (
          <TouchableOpacity
            style={{
              height: 26,
              width: 48,
              backgroundColor: "#FFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              borderWidth: 1,
              borderColor: "#EBEBF1",
              borderRadius: 4,
            }}
            activeOpacity={0.8}
          >
            <Text>View</Text>
          </TouchableOpacity>
        )}
        {count == 0 &&
          (heading == "Nurses" ||
            heading == "Wards" ||
            heading == "Doctors") && (
            <TouchableOpacity
              style={{
                height: 26,
                width: 48,
                backgroundColor: "#FFF",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
                borderWidth: 1,
                borderColor: "#EBEBF1",
                borderRadius: 4,
              }}
              activeOpacity={0.5}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          )}
      </View>

      <View style={Dash_styles.card_body2}>
        {type == 1 && source.length != 0 && check == true && (
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
                height: "36%",
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
                    width: "20%",
                    backgroundColor: "ed",
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
        {type == 1 && source.length != 0 && check == false && (
          <View
            style={{
              height: "20%",
              width: "20%",
              position: "absolute",
              bottom: 10,
              left: 10,
            }}
          >
            <Text style={{ fontSize: 35 }}>0</Text>
          </View>
        )}
        {type == 1 && source.length == 0 && (
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
              0
            </Text>
          </View>
        )}
        {type == 2 && check == true && (
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
        {type == 2 && check == false && (
          <View
            style={{
              height: "80%",
              width: "80%",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#A1A1B0",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              {warning}
            </Text>
          </View>
        )}
        {type == 3 && (
          <View
            style={{ height: "100%", width: "100%", backgroundColor: "ble" }}
          >
            <View
              style={{
                height: "50%",
                width: "20%",
                backgroundColor: "rd",
                position: "absolute",
                bottom: 10,
                left: 10,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "55%",
                  backgroundColor: "yelow",
                }}
              >
                <View
                  style={{
                    height: "90%",
                    width: "90%",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundColor: "pnk",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 50,
                      lineHeight: 40,
                    }}
                  >
                    {used}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: "100%",
                  width: "45%",
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    height: "40%",
                    width: "60%",
                    backgroundColor: "rd",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={{ fontSize: 20 }}>/50</Text>
                </View>
              </View>
            </View>
            {show_vacant == true && (
              <View
                style={{
                  height: "40%",
                  width: "30%",
                  backgroundColor: "yelow",
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: "65%",
                    width: "70%",
                    backgroundColor: "#E5FEF6",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,

                    borderColor: "#C8E8DD",
                    borderRadius: 8,
                  }}
                >
                  <Text style={{ color: "#04A06D", fontSize: 17 }}>
                    Vacant {Number(vacant)}
                  </Text>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default Small;
