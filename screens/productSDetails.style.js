import { StyleSheet } from 'react-native'
import {COLORS, SIZES} from '../constants/index'

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:COLORS.lightWhite
},
upperRow:{
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    position: 'absolute',
    top:SIZES.xxLarge,
    width:SIZES.width -44,
    zIndex:999
},
image:{
    aspectRatio:1,
    resizeMode: 'cover',
},
details:{
    marginTop:-SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width:SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius:SIZES.medium,
},
titleRow:{
    marginHorizontal: 20,
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:SIZES.width -44,
    top:20
},
cartRow:{
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:SIZES.width,
    top:20
},
cartBtn:{
width:SIZES.width*0.7,
backgroundColor: COLORS.black,
padding: SIZES.small/2,
borderRadius:SIZES.large,
marginLeft:12,
},
cartTitle:{
    marginLeft:SIZES.small,
    fontSize:SIZES.medium,
    fontFamily:"semibold",
    color:COLORS.lightWhite
},
addCart:{
    width:37,
    height:37,
    borderRadius: 50,
    margin: SIZES.medium,
    backgroundColor:COLORS.black,
    justifyContent:"center",
    alignItems:"center",
    
},
ratingRow:{
    paddingBottom:SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:SIZES.width -10,
    top:5
},
rating:{
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    top:SIZES.large,
},
ratingText:{
    color: COLORS.gray,
    fontFamily: "medium",
    marginHorizontal: SIZES.xSmall
},
descriptionWrapper:{
    marginTop: SIZES.large+2,
    marginHorizontal: SIZES.large
},
description:{
fontFamily: "medium",
fontSize: SIZES.large+2,
},
descText:{
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign:"justify",
    marginBottom: SIZES.large
},
location:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding:5,
    borderRadius: SIZES.large,
    marginHorizontal: 12
},
title:{
    fontFamily:"bold",
    fontSize:SIZES.large
},
price:{
    fontFamily:"semibold",
    fontSize:SIZES.large,
    paddingHorizontal:10
},
priceWrapper:{
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
}


})

export default styles