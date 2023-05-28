import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const styles = StyleSheet.create({
  coupon: {
    paddingHorizontal: 2,
    display: 'flex',
    flexDirection: 'column',

  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textDet: {
    fontSize: 14,
    color: 'black'
  },
  textCat: {
    fontSize: 14,
    color: 'lightgrey'
  },
})
export default function CategoryFigure ({props}) {

const photo = props.photo ? props.photo : false

// const [categName, setCategName] = useState(props.name.ru)
const originalWidth = 90; 
const originalHeight = 90;
const aspectRatio = originalWidth / originalHeight;

  return (
    <View style={styles.coupon}>
      <Image source={props.photo} style={[styles.img]} />
      <Text style={styles.textDet}>{props.companyProduct}</Text>
      <Text style={styles.textCat}>{props.companyName}</Text>
    </View>
  )
}