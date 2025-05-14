import Icon from '@react-native-vector-icons/fontawesome6';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const FirstList = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.container}>
        <Icon name="list" iconStyle="solid" size={24} />
        <Text style={{fontSize: 24}}>첫번째 상세보기 </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4285F4',
    marginHorizontal: 12,
    gap: 10,
  },
});

export default FirstList;
