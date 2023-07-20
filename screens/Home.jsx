import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 
import {Welcome} from '../components/index'
import Carousel from '../components/Carousel';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>

        <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>Mogadishu-Somalia</Text>

            <View style={{alignItems: "flex-end"}}>

              <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>9</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="shopping-bag" size={24} />
              </TouchableOpacity>
              
            </View>
        </View>
      </View>

      <ScrollView>
      <Welcome/>
      <Carousel/>
      <Heading/>
      <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home