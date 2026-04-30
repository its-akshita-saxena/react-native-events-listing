import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const events = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString(),
    title: "Summer Fashion Show",
    time: "7:00 PM",
    location: "Main Atrium",
    image: `https://picsum.photos/seed/${i}/400/200`,
  }));
  const categories = [
    { name: 'All', icon: 'grid-outline' },
    { name: 'Music', icon: 'musical-notes-outline' },
    { name: 'Arts', icon: 'color-palette-outline' },
    { name: 'Fashion', icon: 'shirt-outline' },
    { name: 'Food', icon: 'restaurant-outline' },
    { name: 'Sports', icon: 'football-outline' },
    { name: 'Tech', icon: 'laptop-outline' },
    { name: 'Kids', icon: 'happy-outline' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>

          <View style={styles.headerRow}>
            <Icon name="arrow-back" size={22} color="#fff" />
            <Text style={styles.headerTitle}>   Events</Text>
            {/* title */}
          </View>

          <Text style={styles.headerSubtitle}> Discover what's happening </Text>
        </View>

        <View style={styles.searchRow}>

          {/* Search Box */}
          <View style={styles.searchContainer}>
            <Icon name="search-outline" size={19} color="white" />

            <TextInput
              placeholder="    Search events"
              placeholderTextColor="#888"   // 👈 lighter gray
              style={{ flex: 1, color: '#fff' }}   // 👈 WHITE text
            />
          </View>

          {/* Calendar Icon */}
          <TouchableOpacity style={styles.calendarButton}>
            <Icon name="calendar-outline" size={20} color="black" />
          </TouchableOpacity>

        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }} >
          {categories.map((item, index) => (
            <View key={index} style={styles.tab}>

              <Icon name={item.icon} size={16} color="black" />

              <Text style={{ marginLeft: 5 }}>
                {item.name}
              </Text>

            </View>
          ))}
        </ScrollView>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={{ marginBottom: 15 }}>
              <View style={styles.card}>

                {/* Image */}
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />

                  <View style={styles.dateBadge}>
                    <Text style={styles.badgeText}>15 May</Text>
                  </View>

                  <View style={styles.categoryBadge}>
                    <Text style={styles.badgeText}>Art</Text>
                  </View>
                </View>

                {/* Content */}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>

                  <View style={styles.bottomRow}>
                    <View style={styles.leftInfo}>

                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Icon name="time-outline" size={16} color="#ccc" />
                        <Text style={styles.infoText}>{item.time}</Text>
                      </View>

                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Icon name="location-outline" size={16} color="#ccc" />
                        <Text style={styles.infoText}>{item.location}</Text>
                      </View>

                    </View>

                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Reserve Spot</Text>
                    </View>
                  </View>
                </View>

              </View>

            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'Blue',
  },

  subtitle: {
    color: 'yellow',
    fontSize: 20,
  },
  search: {
    backgroundColor: '#ccc',
    marginTop: 20,
    borderRadius: 20,
    margin: 16,
    padding: 10
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },

  calendarButton: {
    marginLeft: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 130,
  },
  card: {
    backgroundColor: '#1c1c1e',
    margin: 10,
    borderRadius: 12,
    overflow: "hidden", //for rounded image corners
    elevation: 5, //for shadow on android
  },
  cardContent: {
    padding: 8,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  cardSub: {
    color: 'gray',
  },
  imageContainer: {
    position: 'relative',
  },

  dateBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#555',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  categoryBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'purple',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },


  button: {
    backgroundColor: '#f5c542',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  buttonText: {
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  leftInfo: {
    flexDirection: 'row',
    gap: 10, // spacing between time & location
  },

  infoText: {
    color: 'gray',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  headerSubtitle: {
    color: '#aaaaaae6',
    marginTop: 5,
    fontSize: 14,
  },
});