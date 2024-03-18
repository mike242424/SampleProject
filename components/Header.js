import { View, Text } from 'react-native';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`flex-0.17 bg-[#F4CE14] items-center`}>
      <Text style={tw`pt-20 text-30px text-black`}>Little Lemon</Text>
    </View>
  );
};

export default Header;
