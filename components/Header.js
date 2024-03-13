import { View, Text } from 'react-native';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`flex-[0.2] bg-[#F4CE14] items-center`}>
      <Text style={tw`pt-14 pb-1 text-[30px] text-black `}>Little Lemon</Text>
    </View>
  );
};

export default Header;
