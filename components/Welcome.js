import { View, Text } from 'react-native';
import tw from 'twrnc';

const Welcome = () => {
  return (
    <View style={tw`flex-1 items-center`}>
      <Text style={tw`text-3xl p-10 pb-4 text-#EDEFEE text-center`}>
        Welcome to Little Lemon
      </Text>
      <Text style={tw`text-#EDEFEE p-10 text-xl text-center`}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us.
      </Text>
    </View>
  );
};

export default Welcome;
