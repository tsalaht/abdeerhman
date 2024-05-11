import React, { useState } from "react";
import { View, Text, VStack, HStack, Pressable } from "native-base";
import { SvgXml } from "react-native-svg";
import Swiper from "react-native-swiper";
import { svgs } from "../Views/Svg/svg";
const SwiperSlide:React.FC<any>  = ({index}) => {
    const [showBalls, setShowBalls] = useState(false);
  
    // Function to toggle showing balls
    const toggleBalls = () => {
      setShowBalls(!showBalls);
    };
  
    return (
      <View>
        <HStack w={"full"} pr={"110px"} alignItems={"center"} pl={"10px"} space={"11px"}>
          <VStack space={"6px"}>
            <Text color={"white"} fontFamily={"Almarai_Bold"} fontSize={"16px"}>
              مميزات اخرى
            </Text>
            <VStack space={"10px"}>
              <Text color={"#FDF5E9"} fontSize={"10px"} fontFamily={"Almarai_Regular"}>
                تميز بمميزات جديدة كل فترة!
              </Text>
              <Text color={"#FDF5E9"} fontSize={"10px"} fontFamily={"Almarai_Regular"}>
                أرسل تعابير جاهزة في دردشة الجلسة. ميز اسمك بوسام المشتركين. أولوية الدعم الفني. والمزيد من
                المميزات.
              </Text>
            </VStack>
          </VStack>
          <Pressable onPress={toggleBalls}>
            <SvgXml xml={svgs[0].crown} width="114" height="114" fill="#EFB054" />
          </Pressable>
        </HStack>
  
        {showBalls && (
          // Render your shower of balls here
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
            {/* Render your shower of balls */}
            <Text style={{ color: "white", fontSize: 20 }}>Shower of Balls</Text>
          </View>
        )}
      </View>
    );
  };
  export default SwiperSlide