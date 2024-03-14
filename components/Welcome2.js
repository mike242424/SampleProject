import { Text, ScrollView, StyleSheet } from 'react-native';

const Welcome2 = () => {
  return (
    <ScrollView
      indicatorStyle="white"
      style={welcomeStyles.scrollbar}
      contentContainerStyle={welcomeStyles.container}
    >
      <Text style={welcomeStyles.textHeader}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyles.textBody}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us.
      </Text>
    </ScrollView>
  );
};

export default Welcome2;

const welcomeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollbar: {
    flex: 1,
  },
  textHeader: {
    fontSize: 50,
    padding: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  textBody: {
    fontSize: 40,
    padding: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
