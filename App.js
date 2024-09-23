import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: '1',
    icon: 'checkmark-circle-outline',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    timestamp: '20/08/2020, 06:00',
    type: 'task',
  },
  {
    id: '2',
    icon: 'people-outline',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    timestamp: '20/08/2020, 06:00',
    type: 'new_customer',
  },
  {
    id: '3',
    icon: 'people-outline',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    timestamp: '20/08/2020, 06:00',
    type: 'duplicate',
  },
  {
    id: '4',
    icon: 'people-outline',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    timestamp: '20/08/2020, 06:00',
    type: 'duplicate',
  },
  {
    id: '5',
    icon: 'checkmark-circle-outline',
    title: 'Công việc sắp đến hạn trong hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    timestamp: '20/08/2020, 06:00',
    type: 'task',
  },
  {
    id: '6',
    icon: 'checkmark-circle-outline',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    timestamp: '20/08/2020, 06:00',
    type: 'task',
  },
];

const NotificationItem = ({ item }) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={30} color={item.type === 'task' ? '#007AFF' : '#555'} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  message: {
    color: '#555',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default NotificationsScreen;
