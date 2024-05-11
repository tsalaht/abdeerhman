import { Box, Button, FlatList, HStack, Image, Input, Stack, Text, VStack, View } from "native-base";
import { BlurView } from 'expo-blur';
import React,{useState,useRef} from "react";
import styles from "./Styles/Index";
import { SvgXml } from 'react-native-svg';
import { svgs } from "./Svg/svg";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Pressable,Animated } from "react-native";
import { StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, {
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import Swiper from "react-native-swiper";
import SwiperSlide from "../Components/SwiperSlide";
import { data } from "./data";

const Store: React.FC  = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [one, setOne] =useState(false)
    const [two, setTwo] =useState(true)
    const [three, setThree] =useState(false)
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
        blurContainer2: {
      flex:1,
            width:'100%',
            overflow: 'hidden',
            paddingHorizontal:32,
            paddingTop:1,
            backgroundColor:'#252a3298',
            alignItems:'center',
            justifyContent:'center',
          
            borderTopLeftRadius:24,
            borderTopRightRadius:24,
          },
      
        
      });
      
    
   return (
    <View style={styles.viewContainer}>
       <ImageBackground style={styles.background}  source={plagin}  alt="plagin">
        <Box position={'absolute'} width={'full'} h={'full'} zIndex={1} backgroundColor={'#000000d9'}  >

        </Box>
        <HStack mb={'24px'}  px={'32px'} justifyContent={'space-between'} alignItems={'center'}  zIndex={333333333333} w={'100%'} pb={3}  pt={'20px'} backgroundColor={'#262B33'} borderBottomRightRadius={'24px'} borderBottomLeftRadius={'24px'}> 
    
        <HStack backgroundColor={'#4D5666'} p={'12px'} alignItems={'center'} space={'4px'} rounded={'16px'} style={{elevation:-10,shadowColor:'#EFB054'}}>
        <Text color={"white"} fontFamily={'Almarai_Light'} fontSize={'12px'}>1478</Text>
        <SvgXml xml={svgs[0].dimond}   width="20" height="20"  />
       </HStack>
       <HStack backgroundColor={'#404040'} p={'14px'} rounded={'8px'} style={{elevation:-10,shadowColor:'#EFB054'}}>
        <Text color={"#EFB054"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>المتجر</Text>
       </HStack>
       <HStack backgroundColor={'#4D5666'} alignItems={'center'} p={'12px'} rounded={'16px'} space={'4px'}>
        <Text color={"#262B33"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>عودة</Text>
        <SvgXml xml={svgs[0].right}   width="12" height="12"  />
       </HStack>
     
        </HStack>
      <VStack zIndex={4} px={'16px'} space={'16px'} marginTop={-4}>
        <VStack>
            <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'} marginBottom={'5px'}>أقسام المتجر</Text>
            <HStack justifyContent={'space-between'} >
<VStack alignItems={'center'} space={'8px'} justifyContent={'center'} px={'16px'} py={'8px'} backgroundColor={'#4D5666'} rounded={'8px'}>
<SvgXml xml={svgs[0].gallery}   width="18" height="18" stroke={"black"}  />
    <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'10px'}>
    خلفيات{'\n'}الجلسة
    </Text>
</VStack>
<VStack alignItems={'center'} space={'8px'} justifyContent={'center'} px={'16px'} py={'8px'} backgroundColor={'#4D5666'} rounded={'8px'}>
<SvgXml xml={svgs[0].heart}   width="18" height="18" stroke={"black"}  />
    <Text color={'white'}  textAlign={'center'} fontFamily={'Almarai_Regular'} fontSize={'10px'}>
    تصاميم{'\n'}الورق
    </Text>
</VStack>
<VStack alignItems={'center'} space={'8px'} justifyContent={'center'} px={'16px'} py={'8px'} backgroundColor={'#4D5666'} rounded={'8px'}>
<SvgXml xml={svgs[0].whiteD}   width="18" height="18"   />
    <Text color={'white'}  textAlign={'center'} fontFamily={'Almarai_Regular'} fontSize={'10px'}>
    الالماس
    </Text>
</VStack>
<VStack alignItems={'center'} space={'2px'} justifyContent={'center'} px={'10px'} py={'2px'} backgroundColor={'#4D5666'} rounded={'8px'}>
<SvgXml xml={svgs[0].king}   width="36" height="36"   />
    <Text color={'#FFCF0B'}  textAlign={'center'} fontFamily={'Almarai_Regular'} fontSize={'10px'}>
    الاشتراكات
    </Text>
</VStack>
<VStack alignItems={'center'} space={'8px'} justifyContent={'center'} px={'16px'} py={'8px'} backgroundColor={'#4D5666'} rounded={'8px'}>
<SvgXml xml={svgs[0].shop}   width="18" height="18"   />
    <Text color={'white'}  textAlign={'center'} fontFamily={'Almarai_Regular'} fontSize={'10px'}>
    المتجر{'\n'}الرئيسي
    </Text>
</VStack>
            </HStack>
        </VStack>

{/* <Stack zIndex={10} alignItems={'center'} justifyContent={'center'} w={'full'} marginTop={'0px'}>
<FlatList   onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
              )}    showsHorizontalScrollIndicator={false} w={'full'} data={data}
              
              pagingEnabled
              horizontal
              decelerationRate={"normal"}
       
              scrollEventThrottle={16}
              renderItem={({item})=>(
                <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
         {    item.title}
        </Text>
        <VStack space={'10px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            {    item.description}
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            {    item.description2}
            </Text>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={item.imageSource} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
              )}
              
              />
              </Stack> */}
              <View  w={'full'} width={'full'} h={'125px'}> 
                <Swiper style={styles.wrapper} paginationStyle={styles.pagination}  dotStyle={{ backgroundColor: '#262B33', marginHorizontal: 5 }} // Change the color of the pagination dots
    activeDotStyle={{ backgroundColor: '#EFB054', marginHorizontal: 5 }}  loop={false}>
    <View testID="Hello" style={styles.slide1}>
    <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
        مميزات اخرى
        </Text>
        <VStack space={'10px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            تميز بمميزات جديدة كل فترة!
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            أرسل تعابير جاهزة في دردشة الجلسة.
ميز اسمك بوسام المشتركين.
أولوية الدعم الفني.
 والمزيد من المميزات.
            </Text>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/crown-removebg-preview.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
    <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
        مزايا إضافية للدوريات
        </Text>
        <VStack space={'10px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            مشاركات لا محدودة وخصومات اضافية.
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            استمتع بمحاولات لا نهائية في الدوريات العامة.
واحصل على خصم على تذاكر الدوريات
            </Text>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/winner cup.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
    </View>
    <View testID="Simple" style={styles.slide3}>
    <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
        لعب لا محدود
        </Text>
        <VStack space={'10px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            وفر وقتك وجهدك بالاشتراك معنا
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            العب بدون إعلانات وبدون دفع بالألماس واكسب قطع الألماس في مشروع اليوم بدون إعلانات.
            </Text>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/infinity.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
    </View>
    <View testID="Simple" style={styles.slide3}>
    <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
        ملكية وإدارة الجلسات
        </Text>
        <VStack space={'2px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            جلسة تتحكم في كل خصائصها من نوع اللعب ومستوى اللاعبين.
            </Text>
            <VStack>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          .  اغلاق الجلسات بكلمة مرور.
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          .  اختر ادنى مستوى للاعبين، سرعة اللعب.
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          . حدد اللعب المصنف أو الودي. حر أو محدود.
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          . يمكنك اسكات وطرد اللاعبين في الجلسات الودية
            </Text>
            </VStack>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/tarot card with crown.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
    </View>
    <View testID="Hello" style={styles.slide1}>
    <HStack w={'full'} alignItems={'center'} pl={'10px'} space={'11px'}>
    <VStack space={'6px'} width={'65%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'}>
        القطع والقيد
        </Text>
        <VStack space={'10px'}>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            لعب احترافي وتنافسي يكسبك نقاط أكثر.
            </Text>
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            لعب واقعي وحماسي. احترف فن القطع والتقييد لتكسب نقاط أكثر
            </Text>
        </VStack>
    </VStack>
    <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/stacked plastic cards.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box>
</HStack>
    </View>
    <View testID="Hello" style={styles.slide1}>
    <VStack w={'full'} alignItems={'center'} pl={'10px'}  h={'100%'}>
    <VStack space={'4px'}  width={'100%'}>
        <Text color={'white'} fontFamily={'Almarai_Bold'} fontSize={'16px'} textAlign={'center'}>
        مميزات الاشتراك
        </Text>
        <HStack space={'35px'} alignItems={'center'} justifyContent={'center'}>
          
            <VStack alignItems={'center'}>
            <SvgXml xml={svgs[0].fini} width="30" height="30"   />
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            لعب لا محدود
            </Text>
            </VStack>
            <VStack alignItems={'center'}>
            <SvgXml xml={svgs[0].chear} width="30" height="30"   />
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            ملكية وإدارة الجلسات
            </Text>
            </VStack>
            <VStack alignItems={'center'}>
            <SvgXml xml={svgs[0].up} width="30" height="30"   />
            <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
            لعب لا محدود
            </Text>
            </VStack>
        </HStack>
        <HStack space={'30px'} alignItems={'center'} justifyContent={'center'}>
          
          <VStack alignItems={'center'}>
          <SvgXml xml={svgs[0].done} width="30" height="30"   />
          <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          مزايا إضافية اخرى
          </Text>
          </VStack>
          <VStack alignItems={'center'}>
          <SvgXml xml={svgs[0].wine} width="30" height="30"   />
          <Text color={'#FDF5E9'} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
          مزايا إضافية للدوريات
          </Text>
          </VStack>
          
      </HStack>
    </VStack>
    {/* <Box width={'100px'} height={'100px'} overflow="hidden">
        <Image alt="ss" source={require('../assets/stacked plastic cards.png')} width={'100%'} height={'100%'} resizeMode="contain"/>
    </Box> */}
</VStack>
    </View>
  </Swiper>
  </View>
       
 

   
        <VStack zIndex={10} alignItems={'center'} justifyContent={'center'} w={'full'}   marginTop={'0px'}    >
        <BlurView intensity={80} tint="dark" style={{zIndex:22222222,...blure.blurContainer}}>
        <VStack space={'8px'}>
    <HStack w={'full'} >
        <HStack flex={1} backgroundColor={'#39404D'} py={'12px'} px={'8px'} justifyContent={'flex-end'} space={'8px'} rounded={'4px'}>
            <HStack alignItems={'center'} space={'8px'}>
                <Text color={"white"} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
              
                    اسبوعياً
                </Text>
                <Text color={"white"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>12.99 ر.س</Text>
            </HStack>
            <Pressable onPress={()=>setOne(!one)}>
            <Stack rounded={9999999} p={'5px'} backgroundColor={one?'#EFB054':'#4D5666'}>
                <SvgXml xml={svgs[0].markw} width="10" height="10" style={{ opacity:one? 1:0 }} />
            </Stack>
            </Pressable>
        </HStack>
    </HStack>
    <VStack  backgroundColor={'#39404D'} rounded={'8px'} >
        <Text color={'#EFB054'} fontSize={'10px'} pr={'8px'} pt={'8px'} fontFamily={'Almarai_Regular'}>
        الأكثر رواجاً
        </Text>
    <HStack w={'full'}  >
        <HStack flex={1} backgroundColor={'#39404D'} alignItems={'center'} py={'12px'} px={'8px'} justifyContent={'flex-end'} space={'8px'} rounded={'4px'}>
        <Stack px={'8px'} py={'4px'} backgroundColor={'#C0E5D1'} rounded={'4px'}>
            <Text color={"#47B881"} fontSize={'12px'} fontFamily={'Almarai_Regular'}>
            وفر 30%
            </Text>
        </Stack>
            <HStack flex={1} alignItems={'center'} justifyContent={'flex-end'} space={'8px'}>
                <Text color={"white"} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
              
                شهرياً
                </Text>
                <Text color={"white"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>34.99 ر.س</Text>
            </HStack>
            <Pressable onPress={()=>setTwo(!two)}>
            <Stack rounded={9999999} p={'5px'} backgroundColor={two?'#EFB054':'#4D5666'}>
                <SvgXml xml={svgs[0].markw} width="10" height="10" style={{ opacity:two? 1:0 }} />
            </Stack>
            </Pressable>
     
        </HStack>
      
    </HStack>
    </VStack>
    <HStack w={'full'}  >
        <HStack flex={1} backgroundColor={'#39404D'} alignItems={'center'} py={'12px'} px={'8px'} justifyContent={'flex-end'} space={'8px'} rounded={'4px'}>
        <Stack px={'8px'} py={'4px'} backgroundColor={'#C0E5D1'} rounded={'4px'}>
            <Text color={"#47B881"} fontSize={'12px'} fontFamily={'Almarai_Regular'}>
            وفر 55%
            </Text>
        </Stack>
            <HStack flex={1} alignItems={'center'} justifyContent={'flex-end'} space={'8px'}>
                <Text color={"white"} fontSize={'10px'} fontFamily={'Almarai_Regular'}>
              
                سنوياً
                </Text>
                <Text color={"white"} fontFamily={'Almarai_Bold'} fontSize={'12px'}>289.99 ر.س</Text>
            </HStack>
            <Pressable onPress={()=>setThree(!three)}>
            <Stack rounded={9999999} p={'5px'} backgroundColor={three?'#EFB054':'#4D5666'}>
                <SvgXml xml={svgs[0].markw} width="10" height="10" style={{ opacity:three? 1:0 }} />
            </Stack>
            </Pressable>
     
        </HStack>
      
    </HStack>
    <Text color={'white'} fontSize={'12px'} fontFamily={'Almarai_Regular'}>
    ** سيكون الدفع عن طريق حسابك في الآيتونز.
    </Text>
    <Text color={'white'} fontSize={'12px'} fontFamily={'Almarai_Regular'}>
    ** الاشتراك والدفع يتجدد تلقائياً قبل 24 ساعة من نهاية المدة.
    </Text>
    <HStack w={'full'} px={'16px'}>
        <HStack flex={1} py={'8px'} rounded={'8px'} alignItems={'center'} justifyContent={'center'} backgroundColor={'#EFB054'} style={{elevation:10,shadowColor:'#EFB054'}}>
<Text color={'white'}  fontSize={'12px'} fontFamily={'Almarai_Bold'}>
اشترك الان
</Text>
        </HStack>
    </HStack>
    <HStack w={'full'} px={'16px'}>
        <HStack flex={1} py={'8px'} rounded={'8px'} alignItems={'center'} justifyContent={'center'} space={'8px'} >
<Stack backgroundColor={'#4D5666'} py={'8px'} px={'20px'} rounded={'8px'} flexDirection={'row'} alignItems={'center'} >

    <Text color={'#F2BE72'} fontFamily={'Almarai_Regular'} mr={'4px'}>
    اهداء لصديق
    </Text>
    <SvgXml xml={svgs[0].gift} width="16" height="16"  />
</Stack>
<Stack backgroundColor={'#4D5666'} py={'8px'} px={'20px'} rounded={'8px'}>
    <Text color={'#F2BE72'} fontFamily={'Almarai_Regular'}>
        
    اشترك بالألماس
    </Text>
</Stack>
        </HStack>
    </HStack>
</VStack>
            </BlurView>
        </VStack>

      </VStack>
   
      <VStack w={'full'}  flex={1} pt={3} >
      <BlurView intensity={0} tint="dark" style={{zIndex:22222222,...blure.blurContainer2}}>
        <HStack justifyContent={'space-between'} alignItems={'center'} space={'28px'}>
            <VStack  alignItems={'center'}>
            <Stack borderRadius={'16px'}  p={'2px'} backgroundColor={'#4D5666'} alignItems={'center'} justifyContent={'center'}>
                <SvgXml xml={svgs[0].shopy} width="38" height="38"  />
                </Stack>
                <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'12px'}>
                المتجر
                </Text>
               
            </VStack>
            <VStack  alignItems={'center'}>
            <Stack borderRadius={'16px'}  p={'11px'} backgroundColor={'#4D5666'} alignItems={'center'} justifyContent={'center'}>
                <SvgXml xml={svgs[0].users} width="20" height="20"  />
                </Stack>
                <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'12px'}>
                المجتمع
                </Text>
               
            </VStack>
            <VStack  alignItems={'center'}>
            <Stack borderRadius={'16px'}  p={'11px'} backgroundColor={'#4D5666'} alignItems={'center'} justifyContent={'center'}>
                <SvgXml xml={svgs[0].homme} width="20" height="20"  />
                </Stack>
                <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'12px'}>
                الرئيسية
                </Text>
               
            </VStack>
            <VStack  alignItems={'center'}>
            <Stack borderRadius={'16px'}  p={'11px'} backgroundColor={'#4D5666'} alignItems={'center'} justifyContent={'center'}>
                <SvgXml xml={svgs[0].win} width="20" height="20"  />
                </Stack>
                <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'12px'}>
                الدوريات
                </Text>
               
            </VStack>
            <VStack  alignItems={'center'}>
            <Stack borderRadius={'16px'}  p={'11px'} backgroundColor={'#4D5666'} alignItems={'center'} justifyContent={'center'}>
                <SvgXml xml={svgs[0].chat} width="20" height="20"  />
                </Stack>
                <Text color={'white'} fontFamily={'Almarai_Regular'} fontSize={'12px'}>
                الدردشة
                </Text>
               
            </VStack>
        </HStack>
      </BlurView>
</VStack>
      </ImageBackground>
   
    </View>
   );

};

export default Store;
