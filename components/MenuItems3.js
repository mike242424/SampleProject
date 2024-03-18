import { View, Text, StyleSheet, FlatList } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];
const MenuItems3 = () => {
  function renderItem({ item }) {
    return <Item name={item.name} />;
  }

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<Seperator />}
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer />}
      />
    </View>
  );
};

export default MenuItems3;

const Item = ({ name }) => {
  return (
    <View>
      <Text style={menuStyles.bodyText}>{name}</Text>
    </View>
  );
};

const Seperator = () => {
  return <View style={menuStyles.seperator} />;
};

const Header = () => {
  return (
    <View>
      <Text style={menuStyles.headerText}>View Menu</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View>
      <Text style={menuStyles.footerText}>
        All rights reserved by Little Lemon 2022
      </Text>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: '#495E57',
  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
    padding: 10,
  },
  bodyText: {
    color: '#F4CE14',
    fontSize: 36,
    padding: 20,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    backgroundColor: '#F4CE14',
    textAlign: 'center',
    padding: 10,
  },
});
