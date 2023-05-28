import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const styles = StyleSheet.create({
  coupon: {
    paddingHorizontal: 2,
    display: 'flex',
    flexDirection: 'column',

  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textCat: {
    fontSize: 16,
    color: 'black'
  },
})
export default function StoryItem ({props}) {

const photo = props.photo ? props.photo : false

// const [categName, setCategName] = useState(props.name.ru)
const originalWidth = 90; 
const originalHeight = 90;
const aspectRatio = originalWidth / originalHeight;

  return (
    <View style={styles.coupon}>
      <Image source={props.photo} style={[styles.img]} />
      <Text style={styles.textCat}>{props.companyName}</Text>
    </View>
  )
}