import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Meal} from '../../types';
import {Button, Icon} from '@rneui/base';

const MealItem: FC<Meal> = ({calories, portion, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" />}
          type="clear"
          style={styles.iconButton}
        />
        <Text style={styles.calories}>{calories} cal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ade8af',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  portion: {
    fontSize: 13,
    color: '#808080',
    fontWeight: '500',
  },
  calories: {
    fontSize: 18,
  },
  iconButton: {
    marginBottom: -8,
  },
});

export default MealItem;
