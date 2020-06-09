import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Listing from './Listing';
import Explore from './Explore';

const stackNavigation = createSharedElementStackNavigator(
  {
    Explore,
    Listing,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyleInterpolator: ({ current: { progress } }) => {
        return { cardStyle: { opacity: progress } };
      },
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);

export default createAppContainer(stackNavigation);
