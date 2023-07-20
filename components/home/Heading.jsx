import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './headings.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS, SIZES } from '../../constants';

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>

            <TouchableOpacity>
            <Ionicons name='md-grid' size={SIZES.xLarge} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading