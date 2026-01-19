import { useHome } from '@/hooks/useHome';
import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import Components from '@/components';
import colors from '@/theme/colors';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { components = [], refetch, loading } = useHome();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const renderSection = ({ item }: any) => {
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
    </SafeAreaView>
  );
};

export default HomeScreen;
