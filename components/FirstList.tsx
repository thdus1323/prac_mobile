import Icon from '@react-native-vector-icons/fontawesome6';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const FirstList = () => {
  const navigation = useNavigation();

  const list = [
    {name: '주문목록', iconName: 'list'},
    {name: '취소/반품/교환목록', iconName: 'reply'},
    {name: '선물함', iconName: 'gift'},
    {name: '리뷰 관리', iconName: 'star'},
    {name: '와우 멤버십', iconName: 'face-smile'},
    {name: '구독 관리', iconName: 'file'},
    {name: '정기배송', iconName: 'truck'},
    {name: '결제수단/쿠페이', iconName: 'receipt'},
    {name: '로켓프레시 프레시백', iconName: 'credit-card'},
    {name: '쿠팡캐시/기프트카드/제휴포인트', iconName: 'thumbs-up'},
    {name: '할인쿠폰', iconName: 'tag'},
    {name: '쿠팡 무상 A/S', iconName: 'wrench'},
    {name: '고객센터', iconName: 'headset'},
    {name: '언어 Language', iconName: 'globe'},
    // {name: '두 번째', iconName: 'face-smile'},
  ];

  return (
    <ScrollView>
      {list.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={() => navigation.navigate('Detail', {item: item})}
          style={styles.container}>
          <Icon
            name={item.iconName}
            iconStyle="solid"
            size={18}
            color="#4a4f5a"
          />
          <Text style={{fontSize: 20, color: '#4a4f5a'}}>{item.name} </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    marginHorizontal: 12,
    gap: 10,
  },
});

export default FirstList;
