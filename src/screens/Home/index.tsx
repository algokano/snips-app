import { useHome } from '@/hooks/useHome';
import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Components from '@/components';
import colors from '@/theme/colors';

import styles from './styles';
import { HomeComponent } from '@/types/home';

const HomeScreen = () => {
  const { components = [], refetch, loading } = useHome();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const renderSection = ({ item }: ListRenderItemInfo<HomeComponent>) => {
    switch (item.componentType) {
      case 'LARGE_COVERS':
        return <Components.HeroCarousel section={item} />;

      case 'REGULAR_COVERS':
        return <Components.HorizontalRow section={item} />;

      case 'MORE_TITLES':
        return <Components.CardGrid section={item} />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {loading && !refreshing ? (
        <View style={styles.container}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={components}
          keyExtractor={item => item.id + item.sectionTitle}
          renderItem={renderSection}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={colors.white}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
