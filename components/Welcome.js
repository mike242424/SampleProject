import { Text, ScrollView } from 'react-native';
import tw from 'twrnc';

const Welcome = () => {
  return (
    <ScrollView
      indicatorStyle="white"
      style={tw`flex-1`}
      contentContainerStyle={tw`items-center`}
    >
      <Text style={tw`text-50px p-10 pb-4 text-[#EDEFEE] text-center`}>
        Welcome to Little Lemon
      </Text>
      <Text style={tw`text-[#EDEFEE] p-10 text-40px text-center`}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us.
      </Text>
    </ScrollView>
  );
};

export default Welcome;
