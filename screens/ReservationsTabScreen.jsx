import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { AppContext } from '../context/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReservationsTabScreen = () => {
  const { reservations, theme } = useContext(AppContext);

  return (
    <SafeAreaView
  style={[
    styles.container,
    { backgroundColor: theme.background }
  ]}
>
      
      {/* Header */}
      <Text
        style={[
          styles.header,
          {
            color: theme.text,
          },
        ]}>
       Your Reservations
      </Text>

      {reservations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon
            name="ticket-outline"
            size={60}
            color="#888"
          />

          <Text
            style={[
              styles.emptyText,
              {
                color: theme.text,
              },
            ]}>
            No Reservations Yet
          </Text>
        </View>
      ) : (
        <FlatList
          data={reservations}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 12 }} />
          )}
          renderItem={({ item }) => (
            <View style={styles.card}>
              
              {/* Event Image */}
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              {/* Right Content */}
              <View style={styles.infoContainer}>

                {/* Title + Badge */}
                <View style={styles.topRow}>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.title,
                      {
                        color: theme.text,
                      },
                    ]}>
                    {item.title}
                  </Text>

                  <View style={styles.reservedBadge}>
                    <Text style={styles.badgeText}>
                      Reserved
                    </Text>
                  </View>
                </View>

                {/* Category */}
                <View style={styles.infoRow}>
                  <Icon
                    name="pricetag-outline"
                    size={16}
                    color="#BDBDBD"
                  />
                  <Text style={styles.subText}>
                    {item.category}
                  </Text>
                </View>

                {/* Time */}
                <View style={styles.infoRow}>
                  <Icon
                    name="time-outline"
                    size={16}
                    color="#BDBDBD"
                  />
                  <Text style={styles.subText}>
                    {item.time}
                  </Text>
                </View>

                {/* Location */}
                <View style={styles.infoRow}>
                  <Icon
                    name="location-outline"
                    size={16}
                    color="#BDBDBD"
                  />
                  <Text style={styles.subText}>
                    {item.location}
                  </Text>
                </View>

              </View>

            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default ReservationsTabScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '500',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#1F1F23',
    borderRadius: 18,
    padding: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 6,
  },

  image: {
    width: 115,
    height: 115,
    borderRadius: 14,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    marginRight: 10,
  },

  reservedBadge: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  subText: {
    color: '#CFCFCF',
    fontSize: 13,
    marginLeft: 8,
  },

});





// import {
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';

// const ReservationsTabScreen = () => {

//   return (

//     <View style={styles.container}>

//       <Text style={styles.emptyText}>
//         No Reservations Yet
//       </Text>

//     </View>
//   );
// };

// export default ReservationsTabScreen;

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   text: {
//     color: '#fff',
//     fontSize: 22,
//   },

// });