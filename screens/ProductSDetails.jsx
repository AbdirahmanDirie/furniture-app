import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './productSDetails.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { useRoute } from '@react-navigation/native';

const ProductSDetails = ({navigation}) => {
  const route = useRoute();

  const {item} = route.params;

  const [count, setCount] = useState(1);

  const increment =()=>{
    setCount(count + 1); 
  }

  const decrement =()=>{
    if(count > 1){
        setCount(count - 1); 
    }
  
  }

  return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary}/>
          </TouchableOpacity>
  
        </View>

        <Image 
         source={{uri: item?.images[0]}}
         style={styles.image}
         />           

         <View style={styles.details}>

          <View style={styles.titleRow}>
          <Text style={styles.title}>{item?.title}</Text>

          <View style={styles.priceWrapper}>
          <Text style={styles.price}>${item?.price}</Text>
          </View>
          </View>

          <View style={styles.ratingRow}>

          <View style={styles.rating}>
            {[1,2,3,4].map((index) =>(
              <Ionicons
              key={index}
              name='star'
              size={24}
              color="gold"
              />
            ))}
            <Text style={styles.ratingText}>{item?.rating}</Text>
          </View>


          <View style={styles.rating}>

           <TouchableOpacity onPress={()=> increment()}>
            <AntDesign name="pluscircleo" size={20} color="black" />
           </TouchableOpacity>
           
            <Text style={styles.ratingText}> {count} </Text>

           <TouchableOpacity onPress={()=> decrement()}>
            <AntDesign name="minuscircleo" size={20} color="black" />
           </TouchableOpacity>
          </View>

          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{item?.description}</Text>
          </View>

          <View style={{marginBottom: SIZES.small}}>
            <View style={styles.location}>
            
            <View style={{flexDirection: "row"}}>
            <Ionicons name="location-outline" size={20} />
            <Text>  Mogadishu-somalia</Text>
            </View>

            <View style={{flexDirection: "row"}}>
            <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
            <Text>  Free Delivery</Text>
            </View>

            </View>


            <View style={styles.cartRow}>

              <TouchableOpacity style={styles.cartBtn}>
                <Text style={styles.cartTitle}>BUY NOW</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.addCart}>
              <MaterialCommunityIcons name="shopping" size={24} color={COLORS.lightWhite} />
              </TouchableOpacity>

            </View>


          </View>
          
         </View>

      </View>
  )
}

export default ProductSDetails