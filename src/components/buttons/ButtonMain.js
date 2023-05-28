import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function ButtonMain({ label, onPress }) {

  return (
    <TouchableOpacity
      style={{
        height: 27,
        paddingHorizontal: 6,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 22,
          color: '#000'
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}