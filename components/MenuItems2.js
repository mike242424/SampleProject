import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
  ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems2 = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView style={menuStyles.innerContainer}>
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.bodyText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems2;

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: '#495E57',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  bodyText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});
