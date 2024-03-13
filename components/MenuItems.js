import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
  'Hummus\nMoutabal\nFalafel\nMarinated Olives\nKofta\nEggplant Salad\nLentil Burger\nSmoked Salmon\nKofta Burger\nTurkish Kebab\nFries\nButtered Rice\nBread Sticks\nPita Pocket\nLentil Soup\nGreek Salad\nRice Pilaf\nBacklava\nTartufo\nTiramisu\nPanna Cotta',
];

const MenuItems = () => {
  return (
    <View style={tw`flex-[0.75]`}>
      <ScrollView horizontal={false} style={tw`p-[40px] bg-[${green}]`}>
        <Text style={tw`text-white text-[40px] flex-wrap`}>View Menu</Text>
        <Text style={tw`text-[${yellow}] text-[30px]`}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
