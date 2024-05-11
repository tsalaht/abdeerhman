import { Box, Button, HStack, Image, Input, Stack, Text, VStack, View } from "native-base";
import { BlurView } from 'expo-blur';
import React,{useState,useRef} from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Pressable } from "react-native";
import { StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, {
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

interface Levels{
    level:string,
    mark:boolean,
    textColor:boolean,
}
const NewSesson: React.FC  = () => {
    const [color,setColor]=useState(false)
    const [selectedLevel, setSelectedLevel] = useState("متوسط");
    const [nike,setNike]=useState(false)
    const [showLevel,setShowLevel]=useState(false)
    const levels: Levels[] = [
        { level: 'مبتدئ', mark: false, textColor: false },
        { level: 'متوسط', mark: false, textColor: false },
        { level: 'متقدم', mark: false, textColor: false },
        { level: 'محترف', mark: false, textColor: false },
        { level: 'خبير', mark: false, textColor: false },
        { level: 'نابغة', mark: false, textColor: false },
      ];
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [comm,setComm]=useState(false)
    const navigation:any = useNavigation();
    const plagin :any= require('../assets/plagin.png');
   
      const blure = StyleSheet.create({
        container: {
          flex: 1,
        },
        blurContainer: {
      
          width:'100%',
          overflow: 'hidden',
          paddingHorizontal:8,
          paddingVertical:24,
          backgroundColor:'#252a3298',
          alignItems:'center',
          justifyContent:'center',
          borderRadius:16
        },
      
        
      });
      const handleLevelSelect = (level: string) => {
        setSelectedLevel(level);
        setShowLevel(false); // Close level selection modal after selection
      };
   return (
    <View style={styles.viewContainer}>
       <ImageBackground style={styles.background}  source={plagin}  alt="plagin">
        <Box position={'absolute'} width={'full'} h={'full'} zIndex={1} backgroundColor={'#000000d9'}  >

        </Box>
        <HStack mb={'24px'}  px={'32px'} justifyContent={'space-between'} alignItems={'center'}  zIndex={333333333333} w={'100%'}  paddingY={'35px'} backgroundColor={'#262B33'} borderBottomRightRadius={'24px'} borderBottomLeftRadius={'24px'}> 
       <HStack>
       </HStack>
       <HStack alignItems={'center'} space={'35px'} style={{elevation:10,shadowColor:'#EFB054'}}>
       <HStack backgroundColor={'#404040'} p={'14px'} rounded={'8px'} style={{elevation:-10,shadowColor:'#EFB054'}}>
        <Text color={"#EFB054"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>انشاء جلسة</Text>
       </HStack>
       <HStack backgroundColor={'#4D5666'} alignItems={'center'} p={'12px'} rounded={'16px'} space={'4px'}>
        <Text color={"#262B33"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>عودة</Text>
        <SvgXml xml={svgs[0].right}   width="12" height="12"  />
       </HStack>
        </HStack>
        </HStack>
      <VStack zIndex={4} px={'16px'} space={'16px'}>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>اسم الجلسة</Text>
            <HStack space={'4px'}>
<Stack p={'4px'} backgroundColor={'#4D5666'} rounded={'4px'}>
<SvgXml xml={svgs[0].replay}   width="36" height="36"  />
</Stack>
<Input flex={1} placeholder="اسم الجلسة" fontFamily={'Almarai_Bold'} color={'white'} backgroundColor={'#4D5666'}  pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'#4D5666'
          }}/>
            </HStack>
        </VStack>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>نوع الجلسة</Text>
            <HStack >

<Input flex={1} value="خاصة"  editable={false}  fontFamily={'Almarai_Bold'} color={'white'} backgroundColor={'#4D5666'}   pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'#4D5666'
          }} leftElement={
          <SvgXml xml={svgs[0].down}   width="36" height="36"  />
         }/>
            </HStack>
        </VStack>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>نوع اللعب</Text>
            <HStack >

<Input editable={false} flex={1} value="لعب حر" fontFamily={'Almarai_Bold'} color={'white'} backgroundColor={'#4D5666'}   pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'#4D5666'
          }} leftElement={
          <SvgXml xml={svgs[0].down}   width="36" height="36"  />
         }/>
            </HStack>
            <Text color={'#FFC62B'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginTop={'4px'}>
            اللعب الحر يمكنك من القطع والقيد
            </Text>
        </VStack>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>سرعة اللعب</Text>
            <HStack >

<Input editable={false} flex={1} value="10 ثواني لكل دور" fontFamily={'Almarai_Bold'} color={'white'} backgroundColor={'#4D5666'}   pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'#4D5666'
          }} leftElement={
          <SvgXml xml={svgs[0].down}   width="36" height="36"  />
         }/>
            </HStack>
        </VStack>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>ادنى مستوى مسموح له باللعب</Text>
            <HStack >

<Input editable={false} flex={1}  value={selectedLevel} fontFamily={'Almarai_Bold'} color={'white'} backgroundColor={'#4D5666'}   pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'#4D5666'
          }} leftElement={
          <SvgXml xml={svgs[0].down}   width="36" height="36" onPress={()=>setShowLevel(true)} />
         }/>
            </HStack>
        </VStack>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>خلفية الجلسة </Text>
            <HStack >

<Stack flex={1} backgroundColor={"#4D5666"} alignItems={'flex-end'} py={'8px'} px={'16px'} rounded={'8px'}>
<SvgXml xml={svgs[0].banner}   width="112" height="112"  />
</Stack>
            </HStack>
        </VStack>
      </VStack>
      <HStack zIndex={33} px={'16px'} marginTop={'16px'}>
        <Stack flex={1} alignItems={'center'} justifyContent={'center'} backgroundColor={'#FFAF36'} py={'18px'}rounded={'8px'}  style={{elevation:10,shadowColor:'#EFB054'}}>
            <Text fontSize={'16px'} fontFamily={'Almarai_Bold'} color={'white'}>
            انشئ الجلسة
            </Text>
        </Stack>
      </HStack>
    { showLevel && <Stack position={'absolute'} w={'full'} h={'full'} zIndex={999999999999} backgroundColor={'#00000090'} >
        <Pressable onPress={()=>setShowLevel(false)}>
        <Stack  p={'50%'}></Stack>
        </Pressable>
<VStack  backgroundColor={'#4D5666'} flex={1} paddingTop={'32px'} px={'16px'} borderTopRadius={'32px'} >
<Text color={'white'} fontFamily={'Almarai_Light'} marginBottom={'8px'}>
ادنى مستوى مسموح له باللعب
</Text>
<VStack flex={1} justifyContent={'space-between'}>

{
    levels.map((item,index)=>{ return(
        <Pressable key={index} onPress={() => handleLevelSelect(item.level)}>
<Stack  w={'full'} borderBottomWidth={'1px'} borderColor={'#39404D'} py={'8px'}>
    <HStack alignItems={'center'}>
    <Stack flex={1}></Stack>
<Text fontFamily={'Almarai_Bold'}    color={selectedLevel === item.level ? '#EFB054' : 'white'} fontSize={'16px'} alignItems={'center'}>{item.level}</Text>
<SvgXml xml={svgs[0].mark} width="36" height="36" opacity={selectedLevel === item.level ? 1 : 0} />

</HStack>
</Stack>
</Pressable>
    )})
}
</VStack>
</VStack>
      </Stack>}
      </ImageBackground>
   
    </View>
   );

};

export default NewSesson;
