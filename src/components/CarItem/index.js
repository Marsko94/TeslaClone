import React from 'react';
import {View, Text, ImageBackground, } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';


const CarItem = () => {
    return (
        
      <View style={styles.carContainer}>

      <ImageBackground source={require('../../../assets/images/ModelX.jpeg')}
      style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Fra 400.000</Text>
        </View>

        <StyledButton type="primary" 
        content={"Custom Order"}
         onPress={() => {
           console.warn("Custom order was pressed")
         }}/>
        <StyledButton type="secondary" 
        content={"Existing Inventory"}
         onPress={() => {
           console.warn("Existing order was pressed")
         }}/>
      </View>
    );
};

export default CarItem; 