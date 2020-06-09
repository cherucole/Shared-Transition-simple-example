import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const listings = [
  {
    id: 'tiny-home',
    title: 'Tiny Home',
    subtitle: 'Entire Flat · 1 Bed',
    picture: require('./assets/tiny-home.jpg'),
    rating: 4.93,
    ratingCount: 861,
  },
  {
    id: 'cook-house',
    title: 'Cook House',
    subtitle: 'Entire Flat · 1 Bed',
    picture: require('./assets/cook-house.jpg'),
    rating: 4.93,
    ratingCount: 861,
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

const Explore = props => {
  return (
    <View style={styles.container}>
      {listings.map(listing => (
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => props.navigation.navigate('Listing', { listing })}>
          <View key={listing.id} style={{ margin: 20, flex: 1 }}>
            <>
              <SharedElement id={listing.id}>
                <Image
                  style={{ height: 200, width: 400 }}
                  source={listing.picture}
                />
              </SharedElement>
              <Text>{listing.title}</Text>
            </>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Explore;
