import { View, Text, StyleSheet } from 'react-native';
import tw from 'twrnc';

const Header2 = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Little Lemon</Text>
    </View>
  );
};

export default Header2;

const headerStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#EE9972',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    paddingTop: 40,
    fontSize: 30,
  },
});
