import { TouchableOpacity, Text, DimensionValue } from "react-native";
import React from "react";
import styles from "../Styles/Form.style";

interface ButtonProps {
  text: string;
  height?: DimensionValue;
  action?: () => void;
  width?: DimensionValue;
}

const Button = ({ text, height, action, width }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        height ? { height } : null,
        width ? { width } : null,
      ]}
      onPress={action}
    >
      <Text style={styles.btn_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
