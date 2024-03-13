import { View, Text } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <View style={tw`flex-1 bg-[#495E57]`}>
        <Header />
      </View>
      <View style={tw`bg-[#495E57]`}>
        <Footer />
      </View>
    </>
  );
};

export default App;
