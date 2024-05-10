import { Box, Button, HStack, Image, Input, Stack, Text, VStack, View } from "native-base";
import { BlurView } from 'expo-blur';
import React from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { Pressable } from "react-native";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from "yup"
const Index: React.FC  = () => {
   //This for when you end the app use this to hadnle iputes

   //*************************/
  // const validationSchema = yup.object().shape({
  //   fullName: yup.string().required("Full name is required"),
  //   emailOrPhone: yup
  //     .string()
  //     .matches(
  //       /^((\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+)|(00213|\+213|0)(5|6|7)[0-9]{8})$/,
  //       `Invalid input`
  //     )
  //     .required(`Email or phone is required`),
  //   password: yup
  //     .string()
  //     .required("password is required")
  //     .min(8, "Password must be longer then  8 characters"),
  //   passwordConfirmation: yup
  //     .string()
  //     .oneOf([yup.ref("password")], "Passwords must match")
  //     .required("password confirmation is required"),
  // });
     //*************************/
    const plagin :any= require('../assets/plagin.png')
   
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
      const navigation:any = useNavigation();
   return (
    <View style={styles.viewContainer}>
        <Box position={'absolute'} width={'full'} h={'full'} zIndex={1} backgroundColor={'#000000d9'}  >

        </Box>
        <Stack px={'8px'} w={'full'}>
        <VStack px={'13.5px'}>
        <Box  zIndex={333333333333} w={'full'} alignItems={'center'} justifyContent={'center'} paddingTop={'75.2px'}> 
        <SvgXml xml={svgs[0].Qaid}   width="189" height="241.58" fill='#EFB054'  />
        </Box>
        
        <VStack zIndex={10} alignItems={'center'} justifyContent={'center'} w={'full'}   marginTop={'71px'}    >
        <BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
            <Text color={'white'} fontFamily={'Almarai_Bold'} fontWeight={600} marginBottom={'16px'}>
            قم بتسجيل الدخول
            </Text>
            <VStack width={'full'} space={'8px'}>
                <Stack  backgroundColor={'#39404D'} borderRadius={'8px'}>
                <Input placeholder="البريد الالكتروني" pl={'16px'} fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].message2}   width="36" height="36"  />}  borderWidth={0} _focus={{
                    backgroundColor:'transparent'
                }}  />
                </Stack>
          <Stack backgroundColor={'#39404D'} borderRadius={'8px'}>
          <Input placeholder="كلمة المرور " fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].key}   width="36" height="36"  />}  pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'transparent'
          }}  />
          </Stack>
             
            </VStack>
            <Pressable style={{
                width:'100%',
                alignItems:'center',
                justifyContent:'center'
            }}  onPress={() => navigation.navigate('SingUp')} >
                <Stack w={'full'} py={'12px'} style={{elevation:10,shadowColor:'#EFB054'}} borderRadius={'8px'} marginTop={'18px'} backgroundColor={'#EFB054'} justifyContent={'center'} alignItems={'center'}>
                    <Text color={'white'}  fontSize={'12px'} justifyContent={'center'} alignItems={'center'}  fontFamily={'Almarai_Bold'} >
                    تسجيل الدخول
                    </Text>
                </Stack>
            </Pressable> 
            <Stack marginTop={'16px'}>
                <Text color={'white'}  fontFamily={'Almarai_Light'}>
                أو سجل دخولك عن طريق:
                </Text>
            </Stack>
            <HStack space={'10px'} marginTop={'16px'}>
                <Stack w={'32px'} h={'32px'} backgroundColor={'#39404D'} alignItems={'center'} justifyContent={'center'} borderRadius={'4px'}>
                <SvgXml xml={svgs[0].twitter}   width="20" height="20"  />
                </Stack>
                <Stack w={'32px'} h={'32px'} backgroundColor={'#39404D'} alignItems={'center'} justifyContent={'center'} borderRadius={'4px'}>
                <SvgXml xml={svgs[0].fb}   width="20" height="20"  />
                </Stack>
                <Stack w={'32px'} h={'32px'} backgroundColor={'#39404D'} alignItems={'center'} justifyContent={'center'} borderRadius={'4px'}>
                <SvgXml xml={svgs[0].google}   width="20" height="20"  />
                </Stack>
            </HStack>
            <HStack space={'16px'} marginTop={'32px'}>
                <Stack py={'12px'} px={'25px'} backgroundColor={'#4D5666'} rounded={'8px'}>
                    <Text color={'#F2BE72'} fontFamily={'Almarai_Bold'} fontSize={'12px'} >
                    إنشاء حساب جديد
                    </Text>
                </Stack>
                <Stack py={'12px'} px={'25px'} backgroundColor={'#4D5666'} rounded={'8px'}>
                    <Text color={'#F2BE72'} fontFamily={'Almarai_Bold'}  fontSize={'12px'}>
                    نسيت كلمة المرور
                    </Text>
                </Stack>
            </HStack>
            </BlurView>
        </VStack>

        </VStack>
        </Stack>
        <Image position={'absolute'} top={0} left={0}  source={plagin} w={'100%'} h={'100%'} alt="plagin"/>
    </View>
   );

};

export default Index;
// style={{
//     shadowColor: '#EFB054',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 1,
//     shadowRadius: 3.84,
//     elevation: 10
// }} 