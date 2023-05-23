import { Image, TouchableOpacity,TextInput,Button,View, } from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import styles from "./screenheader.style";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const ScreenHeaderBtn = ({ iconUrl, dimension, onPress }) => {
  return (
    
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
