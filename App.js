import { View } from 'react-native';
import tw from 'twrnc';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';
import MenuItems2 from './components/MenuItems2';
import Welcome2 from './components/Welcome2';
import Header2 from './components/Header2';
import Footer2 from './components/Footer2';
import MenuItems3 from './components/MenuItems3';
import MenuItems4 from './components/MenuItems4';

const App = () => {
  return (
    <>
      <View style={tw`flex-1 bg-[#333333]`}>
        <Header />
        {/* <Header2 /> */}
        {/* <Welcome /> */}
        {/* <Welcome2 /> */}
        {/* <MenuItems /> */}
        {/* <MenuItems2 /> */}
        <MenuItems3 />
        {/* <MenuItems4 /> */}
      </View>

      <View style={tw`bg-[#333333]`}>
        {/* <Footer /> */}
        {/* <Footer2 /> */}
      </View>
    </>
  );
};

export default App;
