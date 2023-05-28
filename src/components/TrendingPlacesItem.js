import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  places: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    width: 420,
    height: 100,
    // backgroundColor: 'blue',
  },
  coupon: {
    paddingHorizontal: 2,
    display: "flex",
    flexDirection: "row",
    width: '75%',
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 5,
  },
  textCat: {
    fontSize: 16,
    color: "black",
    fontWeight: 900,
  },
  textDet: {
    fontSize: 16,
    color: "black",
  },
  arrow: {
    width: '25%',
    display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "center",
    color: "black",
  },
});
export default function StoryItem ({props}) {

const photo = props.photo ? props.photo : false

// const [categName, setCategName] = useState(props.name.ru)
const originalWidth = 90; 
const originalHeight = 90;
const aspectRatio = originalWidth / originalHeight;

  return (
    <TouchableOpacity  style={styles.places}>
      <View style={styles.coupon}>
        <Image source={props.photo} style={[styles.img]} />
        <View>
          <Text style={styles.textCat}>{props.companyName}</Text>
          <Text style={styles.textDet}>{props.companyInfo}</Text>
        </View>
      </View>
      <View style={styles.arrow}>
        <Text style={styles.textCat}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );
}