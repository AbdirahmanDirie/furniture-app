import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { SIZES, COLORS } from '../../constants'
import styles from './productRow.style'
import ProductCardView from './ProductCardView'
import useFetch from '../../hook/useFetch'


const ProductRow = () => {
  const {data, isLoading, error} = useFetch();

  // console.log(data.products[0])

  const product = data.products;

    const products = [1,2,3,4,]



  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <ActivityIndicator color={COLORS.primary} size={SIZES.xxLarge}/>
        )  : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            data={product}
            keyExtractor={(item)=> item?.id}
            renderItem={({item})=> <ProductCardView item={item}/>}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}
            />
        )
      }
    </View>
  )
}

export default ProductRow