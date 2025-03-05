import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Dash_styles from "./Styles/Dashboard.style";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Buttons from "./Particles/Nav_Buttons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Cards from "./Cards/Cards";
import { patients } from "../Data/types";
import Small from "./Cards/Small_Card";
import NursesPage from "./Nurse_Components/Nurses";
import nursesdata from "../Data/nurse";
import DoctorPage from "./Doctors/Doctors";
import doctors_data from "../Data/Doctors";
import Attendence from "./Attendence";

interface Patient {
  name: string;
  locality: string;
  wardNumber: number;
  numBeds: number;
  condition: string;
  category?: string;
}

const Dashboard = () => {
  const [show, setshow] = useState(true);
  const widthAnim = useRef(new Animated.Value(15)).current;
  const anim = useRef(new Animated.Value(85)).current;
  const [data, setdata] = useState("Nurses");
  const [beds, setbeds] = useState([1]);
  const [doctors, setdoctors] = useState(doctors_data);
  const [nurses, setnurses] = useState(nursesdata);
  const [wards, setwards] = useState([]);
  const [Patients_data, setpatients] = useState<Patient[]>(patients);
  const [count, setcount] = useState(0);
  const [Critical, setCritical] = useState<Patient[] | undefined>([]);
  const [patient_week, setpatient_week] = useState([]);
  useEffect(() => {
    const criticalPatients = Patients_data.filter(
      (p) => p.category?.toLowerCase() === "critical"
    );
    setcount(criticalPatients.length);
    setCritical(criticalPatients);
  }, [Patients_data]);

  console.log(count);
  const toggleSidebar = (value: boolean) => {
    Animated.timing(widthAnim, {
      toValue: value ? 15 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setshow(value);
  };
  const togglemain = (value: boolean) => {
    Animated.timing(anim, {
      toValue: value ? 85 : 100,
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
    if (
      doctors.length != 0 &&
      wards.length != 0 &&
      nurses.length != 0 &&
      beds.length != 0
    ) {
      return true;
    } else {
      return false;
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
        <View
          style={{
            padding: "2%",
            backgroundColor: "rd",
            width: "100%",
            height: "5%",
            justifyContent: "center",
          }}
        ></View>
        <View style={Dash_styles.button_parent}>
          <Buttons
            icon={
              <Feather
                name="home"
                size={20}
                color={data === "Overview" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Overview"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <SimpleLineIcons
                name="people"
                size={20}
                color={data === "Patients" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Patients"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <FontAwesome6
                name="hospital"
                size={20}
                color={data === "Wards" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Wards"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <MaterialCommunityIcons
                name="bed-outline"
                size={20}
                color={data === "Beds" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Beds"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <Fontisto
                name="stethoscope"
                size={20}
                color={data === "Doctors" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Doctors"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <MaterialCommunityIcons
                name="clipboard-plus-outline"
                size={20}
                color={data === "Nurses" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Nurses"
            state={setdata}
            check={data}
          />
          <Buttons
            icon={
              <MaterialIcons
                name="notes"
                size={20}
                color={data === "Attendance" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Attendance"
            state={setdata}
            check={data}
          />
        </View>
        <View style={Dash_styles.setting_parent}>
          <Buttons
            icon={
              <MaterialCommunityIcons
                name="nut"
                size={20}
                color={data === "Settings" ? "#3E32E4" : "#66667A"}
              />
            }
            value="Settings"
            state={setdata}
            check={data}
            height={"90%"}
            width={"90%"}
            padding={"0%"}
          />
        </View>
      </Animated.View>

      <Animated.View
        style={{
          marginLeft: anim.interpolate({
            inputRange: [87, 100],
            outputRange: ["13%", "0%"],
          }),
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}
      >
        <View
          style={{
            height: "10%",
            width: "100%",

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
        {data == "Overview" && (
          // Parent View
          <View
            style={{ height: "90%", width: "100%", backgroundColor: "blue" }}
          >
            <View
              style={{
                height: "7%",
                width: "100%",
                backgroundColor: "yellow",
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
            {/* All cards Parent */}
            <View
              style={{
                height: "86%",
                width: "100%",
                backgroundColor: "green",
                flexDirection: "row",
              }}
            >
              {/* Biggest card parent */}
              <View
                style={{
                  height: "100%",
                  width: "60%",
                  backgroundColor: "yellow",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
                <Cards
                  height={"95%"}
                  width={"95%"}
                  content={patients.length}
                  heading="Total Patients"
                  source={Patients_data}
                  icons={
                    <MaterialCommunityIcons
                      name="bed-outline"
                      size={17}
                      color="#A1A1B0"
                    />
                  }
                  check={check_ward()}
                  warning="Add doctors, nurses, wards & beds first to start adding patients "
                  count={patients.length}
                  critical_count={count}
                />{" "}
              </View>
              {/* Small cards area parent */}
              <View
                style={{
                  height: "100%",
                  width: "40%",
                  backgroundColor: "red",
                }}
              >
                <View
                  style={{
                    height: "50%",
                    width: "100%",
                    backgroundColor: "green",
                    marginTop: "1%",
                  }}
                >
                  <View
                    style={{
                      height: "51%",
                      width: "100%",
                      marginBottom: "1%",
                      backgroundColor: "red",
                      alignItems: "center",
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"98%"}
                      heading="Emergency"
                      icons={
                        <AntDesign name="bells" size={17} color="#A1A1B0" />
                      }
                      critical_count={count}
                      type={1}
                      source={Critical}
                      count={doctors.length}
                    />
                  </View>
                  <View
                    style={{
                      height: "47%",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rd",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "48%",
                        backgroundColor: "yelow",
                        borderRadius: 8,
                        marginLeft: "1%",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      {" "}
                      <Small
                        height={"92%"}
                        width={"100%"}
                        heading="Nurses"
                        icons={
                          <AntDesign name="bells" size={17} color="black" />
                        }
                        critical_count={count}
                        type={2}
                        source={Critical}
                        count={nurses.length}
                      />{" "}
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "48%",
                        backgroundColor: "yellow",
                        borderRadius: 8,
                        marginRight: "1%",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {" "}
                      <Small
                        height={"92%"}
                        width={"100%"}
                        heading="Doctors"
                        icons={
                          <Fontisto
                            name="stethoscope"
                            size={17}
                            color="black"
                          />
                        }
                        critical_count={count}
                        type={2}
                        source={Critical}
                        count={doctors.length}
                      />{" "}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: "50%",
                    width: "100%",
                    backgroundColor: "blue",
                  }}
                >
                  <View
                    style={{
                      height: "51%",
                      width: "100%",
                      marginBottom: "1%",
                      backgroundColor: "red",
                      alignItems: "center",
                    }}
                  >
                    <Small
                      height={"92%"}
                      width={"98%"}
                      heading="Emergency"
                      icons={
                        <AntDesign name="bells" size={17} color="#A1A1B0" />
                      }
                      critical_count={count}
                      type={1}
                      source={Critical}
                      count={doctors.length}
                    />
                  </View>
                  <View
                    style={{
                      height: "47%",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "red",
                    }}
                  >
                    <View
                      style={{
                        height: "90%",
                        width: "48%",
                        backgroundColor: "yellow",
                        borderRadius: 8,
                        marginLeft: "1%",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      {" "}
                      <Small
                        height={"92%"}
                        width={"100%"}
                        heading="Patients this week"
                        icons={
                          <AntDesign name="bells" size={17} color="black" />
                        }
                        critical_count={count}
                        type={2}
                        check={false}
                        warning="Add doctors, nurses, wards & beds first to start adding patients "
                        source={Critical}
                        count={patient_week.length}
                      />{" "}
                    </View>
                    <View
                      style={{
                        height: "90%",
                        width: "48%",
                        backgroundColor: "yellow",
                        borderRadius: 8,
                        marginRight: "1%",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {" "}
                      <Small
                        height={"92%"}
                        width={"100%"}
                        heading="Wards"
                        icons={
                          <Fontisto
                            name="stethoscope"
                            size={17}
                            color="black"
                          />
                        }
                        critical_count={count}
                        type={2}
                        source={Critical}
                        count={wards.length}
                      />{" "}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        {data == "Nurses" && <NursesPage Nurse_Data={nurses} />}
        {data == "Doctors" && <DoctorPage Doctor_data={doctors} />}
        {data == "Attendance" && <Attendence />}
      </Animated.View>
    </View>
  );
};

export default Dashboard;
