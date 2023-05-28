import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar, FlatList, } from 'react-native';
import TrendingPlacesItem from './TrendingPlacesItem';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// import { getallcategoryshops } from '../store/actions/content';

export const TrendingPlacesList = () => {

   const dataTrendingPlaces = [
     {
       id: 0,
       photo: require("../../assets/icons/cof.png"),
       companyName: "Starbucks",
       companyInfo: "Free coffee",
     },
     {
       id: 1,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyInfo: "Burger Menu",
     },
     {
       id: 2,
       photo: require('../../assets/icons/cof.png'),
       companyName: "Starbucks",
       companyInfo: "Free coffee",
     },
     {
       id: 3,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyInfo: "Burger Menu",
     },
     {
       id: 4,
       photo: require("../../assets/icons/cof.png"),
       companyName: "Starbucks",
       companyInfo: "Free coffee",
     },
     {
       id: 5,
       photo: require("../../assets/icons/cof.png"),
       companyName: "McDonald's",
       companyInfo: "Burger Menu",
     },
   ];
  return (
    <FlatList
      data={dataTrendingPlaces}
      style={{ paddingHorizontal: 5 }}
      renderItem={({ item }) => 
      <TouchableOpacity style={styles.item} 
    //   onPress={() => { navigation.navigate('Discounts by id', { item }) }}
      >
        <TrendingPlacesItem props={item} />
      </TouchableOpacity>}
      keyExtractor={(item, index) => item.id + 'index' + index.toString()}
      horizontal={false}
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
  