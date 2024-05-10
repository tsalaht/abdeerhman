import { View, Text } from 'react-native'
import React,{useRef, useState} from 'react'
import BottomSheet, {
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {
  Box,
  HStack,
  VStack
} from "native-base";


const BottomSheetComponent = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
const [comm,setComm]=useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <BottomSheet
          backgroundStyle={{
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            backgroundColor: "#0C0C0C",
          }}
          ref={bottomSheetRef}
          index={comm ? 0 : -1}
          snapPoints={["60%", "130%"]}
          enablePanDownToClose={true}
          style={{ borderRadius: 32 }}
     
          handleComponent={() => (
            <Box
              w={"30%"}
              left={"35%"}
              position={"absolute"}
              top={"16px"}
              style={{ backgroundColor: "gray", height: 4, borderRadius: 2 }}
            />
          )}
          onChange={(index) => {
            if (index === -1) {
              setComm(false);
            }
          }}
        >
          <BottomSheetScrollView
            contentContainerStyle={{
              alignItems: "center",
              padding: 24,
              paddingBottom: 24,
              justifyContent: "center",
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              width: "100%",
              position: "relative",
              backgroundColor: "#0C0C0C",
              marginTop: 23,
            }}
          >
            <HStack>
            </HStack>
          </BottomSheetScrollView>
        </BottomSheet>
  )
}

export default BottomSheetComponent