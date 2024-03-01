import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import Header from '../../components/Header';
import {Button, Icon, Input} from '@rneui/themed';
import AddFoddModal from '../../components/AddFoodModal/AddFoodModal';
import useFoodStorage from '../../hooks/useFoodStorage';
import {Meal} from '../../types';
import MealItem from '../../components/MealItem';

const AddFood = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const [foods, setFoods] = useState<Meal[]>([]);
  const {onGetFood} = useFoodStorage();

  const loadFoods = async () => {
    try {
      const foodsResponse = await onGetFood();
      setFoods(foodsResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFoods().catch(null);
  }, []);

  const handleModalClose = async (shouldUpdate?: boolean) => {
    if (shouldUpdate) {
      Alert.alert('Cominda guardada exitosamente');
      loadFoods();
    }
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoddLegend}>Add Food</Text>
        </View>
        <View style={styles.addFoddBtnContainer}>
          <Button
            icon={<Icon name="add-circle-outline" color="#fff" />}
            radius="lg"
            color="#4ecb71"
            onPress={() => setIsVisible(true)}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input placeholder="apples, frie, soda..." />
        </View>
        <Button
          title="Search"
          color="#ade8af"
          titleStyle={styles.searchBtnTile}
          radius="lg"
        />
      </View>
      <ScrollView style={styles.content}>
        {foods?.map(meal => (
          <MealItem key={`my-meal-item-${meal.name}`} {...meal} />
        ))}
      </ScrollView>
      <AddFoddModal visible={visible} onClose={handleModalClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  legendContainer: {
    flex: 1,
  },
  addFoddBtnContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  addFoddLegend: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    marginLeft: -12,
  },
  searchBtnTile: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default AddFood;
