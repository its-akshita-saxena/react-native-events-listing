import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { TouchableOpacity } from 'react-native';
const App = () => {
  const sections = Array.from({ length: 10 }, (_, i) => i);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>

          <View style={styles.headerRow}>
            <Text style={styles.backIcon}>←</Text>
            <Text style={styles.headerTitle}>Events</Text>    
            {/* title */}
          </View>

          <Text style={styles.headerSubtitle}> Discover what's happening </Text>
        </View>

        <TextInput
          placeholder="Search events"
          style={styles.search}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Arts', 'Fashion', 'Kids', 'All', 'Arts', 'Fashion', 'Kids', 'All', 'Arts', 'Fashion', 'Kids'].map((item, index) => (
            <View key={index} style={styles.tab}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>


        {sections.map((item, index) => (
          <View key={index} style={{ marginBottom: 30 }}>

            {/* Only Event Card here */}
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: `https://picsum.photos/seed/${index}/400/200`,
                  }}
                  style={styles.image}
                />

                {/* Date Badge */}
                <View style={styles.dateBadge}>
                  <Text style={styles.badgeText}>15 May</Text>
                </View>

                {/* Category Badge */}
                <View style={styles.categoryBadge}>
                  <Text style={styles.badgeText}>Art</Text>
                </View>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}> Summer Fashion Show</Text>
                <View style={styles.bottomRow}>

                  {/* Left side */}
                  <View style={styles.leftInfo}>
                    <Text style={styles.infoText}>🕒 7:00 PM</Text>
                    <Text style={styles.infoText}>📍 Main Atrium</Text>
                  </View>

                  {/* Right side button */}
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Reserve Spot</Text>
                  </View>

                </View>

              </View>
            </View>
          </View>
        ))
        }
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
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 20,
    margin: 16,
    padding: 10
  },
  tab: {
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  card: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    overflow: "hidden", //for rounded image corners
    elevation: 5, //for shadow on android
  },
  cardContent: {
    padding: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
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
    borderRadius: 10,
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