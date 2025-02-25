import { TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./Form.style";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
