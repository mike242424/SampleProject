import { View, Text } from 'react-native';
import tw from 'twrnc';

const Footer = () => {
  return (
    <View style={tw`bg-[#F4CE14] items-center mb-[10px]`}>
      <Text style={tw`text-black text-[18px]`}>
        All rights reserved by Little Lemon 2022
      </Text>
    </View>
  );
};

export default Footer;
