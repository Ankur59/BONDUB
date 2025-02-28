import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import Dash_styles from "./Dashboard.style";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Cards from "./Cards";
import Ionicons from "@expo/vector-icons/Ionicons";

const Dashboard = () => {
  const [show, setshow] = useState(true);
  const widthAnim = useRef(new Animated.Value(15)).current;
  const anim = useRef(new Animated.Value(85)).current;
  const [data, setdata] = useState([]);
  const [beds, setbeds] = useState([]);
  const [doctors, setdoctors] = useState([]);
  const [nurses, setnurses] = useState([]);
  const [wards, setwards] = useState([]);

  const toggleSidebar = (value: boolean) => {
    Animated.timing(widthAnim, {
      toValue: value ? 13 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setshow(value);
  };
  const togglemain = (value: boolean) => {
    Animated.timing(anim, {
      toValue: value ? 87 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setshow(value);
  };
  const check = () => {
    if (!beds && !doctors && !wards && !nurses) {
      return false;
    } else {
      return true;
    }
  };
  const check_ward = () => {
    if (wards.length === 0) {
      console.log("working");
      return false;
    } else {
      console.log("sdfjhsd");
      return true;
    }
  };
  return (
    <View style={Dash_styles.parent}>
      <Animated.View
        style={{
          height: "100%",
          width: widthAnim.interpolate({
            inputRange: [0, 13],
            outputRange: ["0%", "13%"],
          }),
          backgroundColor: "#FAFAFF",
          borderColor: "#C9C9FD",
          borderWidth: 1,
          overflow: "hidden",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <View
          style={{
            padding: "2%",
            backgroundColor: "rd",
            width: "100%",
            height: "10%",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/images/Caresang.png")}
            style={{
              marginLeft: "2%",
              width: 100,
              height: 30,
              resizeMode: "contain",
            }}
          />
          <TouchableOpacity
            onPress={() => {
              toggleSidebar(!show);
              togglemain(!show);
            }}
            style={{ position: "absolute", right: 0, marginRight: "4%" }}
          >
            <Octicons name="sidebar-expand" size={22} color="#D3D3DA" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          marginLeft: anim.interpolate({
            inputRange: [87, 100],
            outputRange: ["13%", "0%"],
          }),
          flex: 1,
          backgroundColor: "red",
        }}
      >
        <View
          style={{
            height: "10%",
            width: "100%",
            backgroundColor: "#FAFAFF",
            borderBottomColor: "#C9C9FD",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "30%",
              height: "50%",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 8,
              marginLeft: "7%",
              borderWidth: 1,
              borderColor: "#C9C9FD",
            }}
          >
            <Feather
              name="search"
              size={20}
              color="#A1A1B0"
              style={{ position: "absolute", right: 0, marginRight: "2%" }}
            />
            <TextInput
              placeholder="Search Patients or wards"
              placeholderTextColor={"#A1A1B0"}
              style={{
                flex: 1,
                paddingHorizontal: "2%",
                paddingRight: "10%",
                height: "100%",
                width: "100%",
                borderRadius: 8,
              }}
            />
          </View>
          <View style={Dash_styles.profile_parent}>
            <View style={Dash_styles.bell_parent}>
              <TouchableOpacity>
                <Feather name="bell" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View style={Dash_styles.DP_parent}>
              <View style={Dash_styles.Dp}>
                <Image
                  source={require("../assets/images/image.png")}
                  style={{
                    width: "60%",
                    height: "60%",
                    resizeMode: "cover",
                  }}
                />
              </View>
              <View
                style={[
                  Dash_styles.name,
                  {
                    justifyContent: "center",
                    paddingLeft: "5%",
                    backgroundColor: "#FAFAFF",
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#1A1A1F",
                    marginBottom: 2,
                  }}
                >
                  Dr Pankaj
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#A1A1B0",
                  }}
                >
                  Admin
                </Text>
              </View>
            </View>
          </View>
          {!show && (
            <TouchableOpacity
              onPress={() => {
                toggleSidebar(!show);
                togglemain(!show);
              }}
              style={{ position: "absolute", left: 0, marginLeft: "1%" }}
            >
              <Octicons name="sidebar-collapse" size={20} color="#D3D3DA" />
            </TouchableOpacity>
          )}
        </View>
        {/* Empty View */}
        <View
          style={{
            height: "7%",
            width: "100%",
            backgroundColor: "blue",
            marginLeft: "7%",
          }}
        />
        <View
          style={{
            height: "7%",
            width: "100%",
            backgroundColor: "yellow",
            marginLeft: "7%",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 500 }}>
            Hospital Overview
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Cards
            height={"40%"}
            width={"30%"}
            content={data.length}
            heading="Patients this week"
            title="Emergency"
            flag={false}
            icons={<Feather name="users" size={16} color="#A1A1B0" />}
            type={false}
            check={check_ward()}
            message="Add wards to start adding beds"
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default Dashboard;
