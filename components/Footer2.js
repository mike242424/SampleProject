import { View, Text, StyleSheet } from 'react-native';

const Footer2 = () => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        All rights reserved by Little Lemon 2022
      </Text>
    </View>
  );
};

export default Footer2;

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
