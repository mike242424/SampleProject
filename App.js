import { View, Text } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';

const App = () => {
  return (
    <View style={tw` flex-1 bg-[#495E57]`}>
      <Header />
    </View>
  );
};

export default App;
