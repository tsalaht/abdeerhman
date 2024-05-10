import { Box, Button, HStack, Image, Input, Stack, Text, VStack, View } from "native-base";
import { BlurView } from 'expo-blur';
import React from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Pressable } from "react-native";
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SingUp: React.FC  = () => {
    const navigation:any = useNavigation();
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

   return (
    <View style={styles.viewContainer}>
        <Box position={'absolute'} width={'full'} h={'full'} zIndex={1} backgroundColor={'#000000d9'}  >

        </Box>
        <Stack px={'8px'} w={'full'}>
        <VStack px={'13.5px'}>
        <Box  zIndex={333333333333} w={'full'} alignItems={'center'} justifyContent={'center'} paddingTop={'40px'}> 
        <SvgXml xml={svgs[0].Qaid}   width="133" height="170" fill='#EFB054'  />
        </Box>
        
        <VStack zIndex={10} alignItems={'center'} justifyContent={'center'} w={'full'}   marginTop={'32px'}    >
        <BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
            <Text color={'white'} fontFamily={'Almarai_Bold'} fontWeight={600} marginBottom={'16px'}>
            أنشئ حساب جديد
            </Text>
            <VStack width={'full'} space={'8px'}>
                <Stack  backgroundColor={'#39404D'} borderRadius={'8px'}>
                <Input alignItems={'center'} placeholder="البريد الالكتروني" pl={'16px'} fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].message2}   width="36" height="36"  />}  borderWidth={0} _focus={{
                    backgroundColor:'transparent'
                }}  />
                </Stack>
          <Stack backgroundColor={'#39404D'} borderRadius={'8px'}>
          <Input placeholder="كلمة المرور " fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].key}   width="36" height="36"  />}  pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'transparent'
          }}  />
          </Stack>
          <Stack backgroundColor={'#39404D'} borderRadius={'8px'}>
          <Input placeholder="اسم المستخدم" fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].user}   width="36" height="36"  />}  pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'transparent'
          }}  />
          </Stack>
          <Stack backgroundColor={'#39404D'} borderRadius={'8px'}>
          <Input placeholder="رقم الجوال" fontFamily={'Almarai_Bold'} color={'white'} rightElement={ <SvgXml xml={svgs[0].phone}   width="36" height="36"  />}  pl={'16px'}  borderWidth={0} _focus={{
            backgroundColor:'transparent'
          }}  />
          </Stack>
             
            </VStack>
            <HStack marginTop={'18px'} marginBottom={'4px'}>
 <Text fontSize={'10px'} color={'#EFB054'} style={{ textDecorationLine: 'underline' }} fontFamily={'Almarai_Regular'}>
 الشروط والاحكام
 </Text>
 <Text fontSize={'10px'} color={'white'} fontFamily={'Almarai_Regular'}>بنقرك على إنشاء حساب جديد أنت توافق على </Text>
            </HStack>
            <Pressable style={{
                width:'100%',
                alignItems:'center',
                justifyContent:'center'
            }} onPress={() => navigation.navigate('New Sesson')}>
                <Stack w={'full'}  py={'12px'} style={{elevation:10,shadowColor:'#EFB054'}} borderRadius={'8px'}  backgroundColor={'#EFB054'} justifyContent={'center'} alignItems={'center'}>
                    <Text color={'white'}  fontSize={'12px'} justifyContent={'center'} alignItems={'center'}  fontFamily={'Almarai_Bold'} >
                    إنشاء حساب جديد
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
            <HStack marginTop={'32px'}>
              <Pressable  style={{flex:1 , width:'100%'}}  onPress={() => navigation.navigate('Home')}>
                <Stack py={'12px'} px={'25px'} backgroundColor={'#4D5666'} rounded={'8px'}  alignItems={'center'} justifyContent={'center'}>
                    <Text color={'#F2BE72'} fontFamily={'Almarai_Bold'}  fontSize={'12px'}>
                    تسجيل الدخول
                    </Text>
                </Stack>
                </Pressable>
            </HStack>
            </BlurView>
        </VStack>

        </VStack>
        </Stack>
        <Image position={'absolute'} top={0} left={0}  source={plagin} w={'100%'} h={'100%'} alt="plagin"/>
    </View>
   );

};

export default SingUp;
