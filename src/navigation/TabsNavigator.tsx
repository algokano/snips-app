import React from 'react';
import { View } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '@/screens/Home';
import FeedScreen from '@/screens/Feed';
import { ROUTES } from './routes';
import colors from '@/theme/colors';

import HomeIcon from '../assets/icon_home.svg';
import HomeActiveIcon from '../assets/icon_home_active.svg';
import ForYouIcon from '../assets/icon_for_you.svg';
import RewardsIcon from '../assets/icon_rewards.svg';
import ProfileIcon from '../assets/icon_profile.svg';
import { TAB_BAR_HEIGHT } from '@/constants';

const Tab = createBottomTabNavigator();

function Placeholder() {
  return <View style={{ flex: 1, backgroundColor: colors.black }} />;
}

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.white,
  tabBarStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 0,
    elevation: 0,
    minHeight: TAB_BAR_HEIGHT,
  },
  tabBarLabelStyle: {
    marginTop: 6,
    fontSize: 11,
  },
};

export default function TabsNavigator() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{ title: 'Home', tabBarIcon: HomeTabBarIcon }}
      />
      <Tab.Screen
        name={ROUTES.FOR_YOU}
        component={FeedScreen}
        options={{ title: 'For You', tabBarIcon: ForYouTabBarIcon }}
      />
      <Tab.Screen
        name={ROUTES.REWARDS}
        component={Placeholder}
        options={{ title: 'Rewards', tabBarIcon: RewardsTabBarIcon }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Placeholder}
        options={{ title: 'Profile', tabBarIcon: ProfileTabBarIcon }}
      />
    </Tab.Navigator>
  );
}

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const HomeTabBarIcon = ({
  color,
  size,
  focused,
}: IconProps): React.ReactElement =>
  focused ? (
    <HomeActiveIcon color={color} width={size} height={size} />
  ) : (
    <HomeIcon color={color} width={size} height={size} />
  );

const ForYouTabBarIcon = ({ color, size }: IconProps): React.ReactElement => (
  <ForYouIcon color={color} width={size} height={size} />
);

const RewardsTabBarIcon = ({ color, size }: IconProps): React.ReactElement => (
  <RewardsIcon color={color} width={size} height={size} />
);

const ProfileTabBarIcon = ({ color, size }: IconProps): React.ReactElement => (
  <ProfileIcon color={color} width={size} height={size} />
);
