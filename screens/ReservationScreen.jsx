// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ReservationScreen = ({ route, navigation }) => {

//   const reservedEvent = route.params.reservedEvent;

//   return (
//     <SafeAreaView style={styles.container}>

//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={22} color="#fff" />
//         </TouchableOpacity>

//         <Text style={styles.headerTitle}>Reservation</Text>
//       </View>

//       {/* Success Section */}
//       <View style={styles.successContainer}>
//         <Icon name="checkmark-circle" size={60} color="#4CAF50" />

//         <Text style={styles.successText}>
//           Booking Confirmed
//         </Text>

//         <Text style={styles.subText}>
//           Your spot has been reserved successfully
//         </Text>
//       </View>

//       {/* ✅ Premium Card */}
//       <View style={styles.card}>

//         {/* Image */}
//         <Image
//           source={{ uri: reservedEvent.image }}
//           style={styles.image}
//         />

//         {/* Info */}
//         <View style={styles.infoContainer}>

//           <Text style={styles.title}>
//             {reservedEvent.title}
//           </Text>

//           {/* Category */}
//           <View style={styles.infoRow}>
//             <Icon name="pricetag-outline" size={15} color="#bbb" />
//             <Text style={styles.infoText}>
//               {reservedEvent.category}
//             </Text>
//           </View>

//           {/* Time */}
//           <View style={styles.infoRow}>
//             <Icon name="time-outline" size={15} color="#bbb" />
//             <Text style={styles.infoText}>
//               {reservedEvent.time}
//             </Text>
//           </View>

//           {/* Location */}
//           <View style={styles.infoRow}>
//             <Icon name="location-outline" size={15} color="#bbb" />
//             <Text style={styles.infoText}>
//               {reservedEvent.location}
//             </Text>
//           </View>

//         </View>

//       </View>

//       {/* ✅ Action Button */}
//       <TouchableOpacity
//         style={styles.doneButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.doneText}>
//           Done
//         </Text>
//       </TouchableOpacity>

//     </SafeAreaView>
//   );
// };

// export default ReservationScreen;

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 16,
//   },

//   headerRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },

//   headerTitle: {
//     color: '#fff',
//     fontSize: 18,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },

//   successContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },

//   successText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },

//   subText: {
//     color: '#aaa',
//     marginTop: 6,
//     fontSize: 14,
//   },

//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#1f1f23',
//     borderRadius: 14,
//     padding: 10,
//     elevation: 4,
//   },

//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 12,
//   },

//   infoContainer: {
//     flex: 1,
//     marginLeft: 12,
//     justifyContent: 'space-between',
//   },

//   title: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 4,
//   },

//   infoText: {
//     color: '#bbb',
//     marginLeft: 6,
//     fontSize: 13,
//   },

//   doneButton: {
//     marginTop: 30,
//     backgroundColor: '#f5c542',
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: 'center',
//   },

//   doneText: {
//     fontWeight: 'bold',
//     color: '#000',
//   },

// });


















import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';
const ReservationScreen = ({ route, navigation }) => {

  // Receiving event data from HomeScreen
  const reservedEvent = route.params.reservedEvent;

  return (

    <SafeAreaView style={styles.container}>

      {/* Back Button */}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Success Message */}

      <View style={styles.successContainer}>

        <Icon name="checkmark-circle" size={80} color="#4CAF50" />

        <Text style={styles.successText}>   Your Event Has Been Reserved! </Text>

        <Text style={styles.subText}>  Enjoy your event experience 🎉 </Text>

      </View>

      {/* Event Card */}

      <View style={styles.card}>

        <Image source={{ uri: reservedEvent.image }} style={styles.image} />

        <View style={styles.cardContent}>
          <Text style={styles.title}>      {reservedEvent.title}    </Text>

          <View style={styles.infoRow}>

            <Icon
              name="time-outline"
              size={18}
              color="#ccc"
            />

            <Text style={styles.infoText}>
              {reservedEvent.time}
            </Text>

          </View>

          <View style={styles.infoRow}>

            <Icon
              name="location-outline"
              size={18}
              color="#ccc"
            />

            <Text style={styles.infoText}>
              {reservedEvent.location}
            </Text>

          </View>

          <View style={styles.categoryBadge}>
            <Text style={styles.badgeText}>
              {reservedEvent.category}
            </Text>
          </View>

        </View>

      </View>
      {/* ✅ Action Button */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.doneText}>  Done  </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default ReservationScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },

  backButton: {
    marginBottom: 20,
  },

  successContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  successText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },

  subText: {
    color: '#aaa',
    marginTop: 8,
    fontSize: 15,
  },

  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 18,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 220,
  },

  cardContent: {
    padding: 18,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  infoText: {
    color: '#ccc',
    marginLeft: 10,
    fontSize: 16,
  },

  categoryBadge: {
    marginTop: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#f5c542',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  badgeText: {
    fontWeight: 'bold',
    color: '#000',
  },
  doneButton: {
  marginTop: 25,
  backgroundColor: '#f5c542',
  paddingVertical: 14,
  borderRadius: 6,
  alignItems: 'center',
},

doneText: {
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
},

});