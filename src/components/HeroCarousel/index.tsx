import React from 'react';
import { FlatList, View } from 'react-native';

import { HomeComponent } from '@/types/home';
import styles from './styles';
import LargeCoverCard from '../LargeCoverCard';

type Props = {
  section: HomeComponent;
};

const HeroCarousel = ({ section }: Props) => {
  return (
    <View style={styles.container}>
      {/* <SectionHeader title={section.sectionTitle} /> */}

      <FlatList
        data={section.titles}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <LargeCoverCard
            imageSource={{ uri: item.posterUrl }}
            badgeVariant={index === 0 ? 'mostPopular' : 'hot'}
            genres={item.genres}
            title={item.nameEn}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default HeroCarousel;
