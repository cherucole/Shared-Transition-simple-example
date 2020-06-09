import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const Listing = props => {
  const listing = props.navigation.getParam('listing');
  return (
    <View style={styles.container}>
      <Text onPress={() => props.navigation.goBack()}>Go Back</Text>
      <SharedElement id={listing.id}>
        <Image style={{ height: 400, width: 500 }} source={listing.picture} />
      </SharedElement>
      <Text>
        When transitions aren't working as expected, you can enable debug-mode
        to log scene transitions and shared-element id's to the console. The log
        output is useful for understanding scene changes and for reporting
        issues.
      </Text>
    </View>
  );
};

Listing.sharedElements = navigation => {
  const listing = navigation.getParam('listing');
  return [listing.id];
};

export default Listing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});
