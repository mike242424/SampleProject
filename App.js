import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';

const App = () => {
  return (
    <>
      <View style={tw`flex-1 bg-[#495E57]`}>
        <Header />
        {/* <Welcome /> */}
        <MenuItems />
      </View>

      <View style={tw`bg-[#495E57]`}>
        <Footer />
      </View>
    </>
  );
};

export default App;
