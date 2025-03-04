import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import Input_BOX from "../../Particles/Text_input";
import Button from "../../Particles/Button";
import { StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface AddDoctorModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddNurseModal = ({ visible, onClose }: AddDoctorModalProps) => {
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add Nurse</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Feather name="x" size={24} color="#66667A" />
            </TouchableOpacity>
          </View>
          <View style={styles.input_parent}>
            <View style={styles.inputContainer}>
              <Input_BOX
                title="Full Name"
                change={setName}
                security={false}
                place="eg. Dr. Pankaj Kumar"
                name={name}
              />
            </View>

            <View style={styles.inputContainer}>
              <Input_BOX
                title="Email-ID"
                change={setEmail}
                security={false}
                place="eg. emailid@gmail.com"
                name={email}
              />
            </View>

            <View style={styles.inputContainer}>
              <Input_BOX
                title="Phone Number"
                change={setnumber}
                security={false}
                place="eg. emailid@gmail.com"
                name={number}
              />
            </View>

            <View style={styles.inputContainer}>
              <Input_BOX
                title="Password"
                change={setPassword}
                security={show2}
                place=""
                name={password}
                rightIcon={
                  <TouchableOpacity onPress={() => setshow2(!show2)}>
                    <Feather
                      name={show2 ? "eye-off" : "eye"}
                      size={20}
                      color="#66667A"
                    />
                  </TouchableOpacity>
                }
              />
            </View>

            <View style={styles.inputContainer}>
              <Input_BOX
                title="Confirm-password"
                change={setConfirmPassword}
                security={show}
                place=""
                name={confirmPassword}
                rightIcon={
                  <TouchableOpacity onPress={() => setshow(!show)}>
                    <Feather
                      name={show ? "eye-off" : "eye"}
                      size={20}
                      color="#66667A"
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button height="40%" width="80%" text="Create Account" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "40%",
    height: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6EA",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1A1A1F",
    marginLeft: "2%",
  },
  closeButton: {
    padding: 5,
    marginRight: "2%",
  },
  inputContainer: {
    marginBottom: 15,
    height: 70,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: "20%",
    alignItems: "center",
  },
  input_parent: {
    width: "100%",
    height: "65%",
  },
});

export default AddNurseModal;
