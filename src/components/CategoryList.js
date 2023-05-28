import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar, FlatList, } from 'react-native';
import CategoryFigure from './CategoryFigure';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import { getallcategoryshops } from '../store/actions/content';

export const CategoryList = () => {

//   const dispatch = useDispatch()
  const navigation = useNavigation()
//   const [dataCategory, setDataCategory] = useState();

//   const dataCategoryArr = useSelector(state => state.content.allcategoryshops)

//   useEffect(() => {
//     if (dataCategoryArr) {
//       setDataCategory(dataCategoryArr.slice([0], [8]))
//     }
//   }, [dataCategoryArr])

//   useEffect(() => {
//     if (!dataCategoryArr) {
//       dispatch(getallcategoryshops())
//     }
//   }, [dispatch, dataCategoryArr])
   const dataCategory = [
     {
       id: 0,
       photo: require("../../assets/icons/cof.png"),
       companyName: "Starbucks",
       companyProduct: "Free coffee",
     },
     {
       id: 1,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyProduct: "Burger Menu",
     },
     {
       id: 2,
       photo: require('../../assets/icons/cof.png'),
       companyName: "Starbucks",
       companyProduct: "Free coffee",
     },
     {
       id: 3,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyProduct: "Burger Menu",
     },
     {
       id: 4,
       photo: require("../../assets/icons/cof.png"),
       companyName: "Starbucks",
       companyProduct: "Free coffee",
     },
     {
       id: 5,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyProduct: "Burger Menu",
     },
   ];
  return (
    <FlatList
      data={dataCategory}
      style={{ paddingHorizontal: 5 }}
      renderItem={({ item }) => 
      <TouchableOpacity style={styles.item} 
    //   onPress={() => { navigation.navigate('Discounts by id', { item }) }}
      >
        <CategoryFigure props={item} />
      </TouchableOpacity>}
      keyExtractor={(item, index) => item.id + 'index' + index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bg: {
      flex: 1,
      position: 'relative',
      paddingHorizontal: 10,
      // paddingVertical: 20,
    },
    wrapper: {
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      // justifyContent: 'space-between',
      // alignItems: 'center',
    },
    compItem: {
      width: 106,
      paddingBottom: 20,
      paddingHorizontal: 3
    },
    item: {
      width: 115,
      paddingHorizontal: 3
    },
});
  