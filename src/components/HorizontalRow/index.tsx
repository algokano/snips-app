import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { HomeComponent } from '@/types/home';
import styles from './styles';
import PosterCard from '../PosterCard';

import ArrowIcon from '../../assets/icon_arrow.svg';

type Props = {
  section: HomeComponent;
  seeAllHandler?: () => void;
};

const HorizontalRow = ({ section, seeAllHandler }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={seeAllHandler}>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
      <FlatList
        data={section.titles}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PosterCard
            imageSource={{ uri: item.posterUrl }}
            viewCount={item.snipsCount}
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

export default HorizontalRow;
