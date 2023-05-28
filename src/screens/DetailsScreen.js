import React from 'react';
import {Text, View, Button} from 'react-native';

export const DetailsScreen = ({ navigation }) => {

  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
