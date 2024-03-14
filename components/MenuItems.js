import React from 'react';
import tw from 'twrnc';

import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={tw`flex-1`}>
      <ScrollView
        style={tw`
        pt-40px
        pl-40px
        bg-[#495E57]`}
      >
        <Text style={tw`text-white text-40px flex-wrap`}>View Menu</Text>
        <Text style={tw`text-[#F4CE14] text-36px`}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;
