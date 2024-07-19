import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native-web';

const profileData = {
  name: "Chalidah Azzahrah",
  email: "105841107321@student.unismuh.ac.id",
  profilePicture: "https://via.placeholder.com/150", // Ganti dengan URL gambar profil yang sebenarnya
};

const profileOptions = [
  { id: '1', title: 'My orders', subtitle: 'Already have 12 orders' },
  { id: '2', title: 'Shipping addresses', subtitle: '3 addresses' },
  { id: '3', title: 'Payment methods', subtitle: 'Visa **34' },
  { id: '4', title: 'Promocodes', subtitle: 'You have special promocodes' },
  { id: '5', title: 'My reviews', subtitle: 'Reviews for 4 items' },
  { id: '6', title: 'Settings', subtitle: 'Notifications, password' },
];
function ProfilePages () {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'sasacantik.png' }} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileEmail}>{profileData.email}</Text>
        </View>
      </View>
      <FlatList
        data={profileOptions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem}>
            <View>
              <Text style={styles.optionTitle}>{item.title}</Text>
              <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'thistle',
    padding: 20
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'thistle',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: 'gray',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSubtitle: {
    color: 'gray',
  },
});
export default ProfilePages;
