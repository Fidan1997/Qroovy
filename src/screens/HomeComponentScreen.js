import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ButtonMain from '../components/buttons/ButtonMain';
import { CategoryList } from '../components/CategoryList';
import { StoryList } from '../components/StoryList';
import { TrendingPlacesList } from '../components/TrendingPlacesList';

export const HomeComponentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>

          <View style={styles.discount}>
            <StoryList />
          </View>

          <View style={styles.discount}>
            <View style={styles.row}>
              <Text style={styles.textS}>Recommended</Text>
              <ButtonMain
                label={'Full list >'}
                // onPress={() => navigation.navigate("Category")}
              />
            </View>
            <CategoryList />
          </View>

          <View style={styles.discount}>
            <View style={styles.row}>
              <Text style={styles.textS}>Trending Places</Text>
              <ButtonMain
                label={'Full list >'}
                // onPress={() => navigation.navigate("Category")}
              />
            </View>
            <TrendingPlacesList />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingBottom: 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingRight: 10,
    marginVertical: 10,
  },
  textS: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 900,
    color: "#000",
  },
  discount:{
    marginTop:10,
  },
});