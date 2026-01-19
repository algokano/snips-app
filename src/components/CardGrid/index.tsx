import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { HomeComponent } from '@/types/home';
import styles from './styles';
import PosterCard from '../PosterCard';

type Props = {
  section: HomeComponent;
};

const CardGrid = ({ section }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
        <Text style={styles.rightText}>New every week!</Text>
      </View>
      <FlatList
        data={section.titles}
        contentContainerStyle={styles.listContentContainer}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PosterCard
            imageSource={{ uri: item.posterUrl }}
            viewCount={item.snipsCount}
            containerStyle={styles.card}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CardGrid;
