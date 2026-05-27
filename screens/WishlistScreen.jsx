// import React, { useContext } from 'react';
// import {  View, Text,  StyleSheet,  FlatList, Image,  TouchableOpacity } from 'react-native';
// import { AppContext } from '../context/AppContext';
// import Icon from 'react-native-vector-icons/Ionicons';

// const WishlistScreen = () => {

//   const { wishlist, toggleWishlist, addReservation } = useContext(AppContext);
//   const { theme } = useContext(AppContext);

//   return (
//     <View style={[styles.container, { backgroundColor: theme.background }]}>

//       {/* Header */}
//       <Text style={[styles.header, { color: theme.text }]}>
//         Wishlist
//       </Text>

//       {wishlist.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Icon name="heart-outline" size={50} color="#888" />
//           <Text style={[styles.emptyText, { color: theme.text }]}>
//             Your wishlist is empty
//           </Text>
//         </View>
//       ) : (
//         <FlatList
//           data={wishlist}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//           ItemSeparatorComponent={() => <View style={{ height: 10 }} />}

//           renderItem={({ item }) => (
//             <TouchableOpacity
//               activeOpacity={0.9}
//               style={styles.card}
//             >

//               {/* Image */}
//               <Image source={{ uri: item.image }} style={styles.image} />

//               {/* Info Container */}
//               <View style={styles.infoContainer}>

//                 {/* Title + Heart */}
//                 <View style={styles.topRow}>
//                   <Text
//                     numberOfLines={1}
//                     style={[styles.title, { color: theme.text }]}
//                   >
//                     {item.title}
//                   </Text>

//                   <TouchableOpacity onPress={() => toggleWishlist(item)}>
//                     <Icon name="heart" size={20} color="#ff4d4d" />
//                   </TouchableOpacity>
//                 </View>

//                 {/* Category */}
//                 <View style={styles.infoRow}>
//                   <Icon name="pricetag-outline" size={14} color="#bbb" />
//                   <Text style={styles.subText}>{item.category}</Text>
//                 </View>

//                 {/* Time */}
//                 <View style={styles.infoRow}>
//                   <Icon name="time-outline" size={14} color="#bbb" />
//                   <Text style={styles.subText}>{item.time}</Text>
//                 </View>

//                 {/* Location */}
//                 <View style={styles.infoRow}>
//                   <Icon name="location-outline" size={14} color="#bbb" />
//                   <Text style={styles.subText}>{item.location}</Text>
//                 </View>

//                 {/* Bottom Row */}
//                 <View style={styles.bottomRow}>
//                   <TouchableOpacity
//                     style={styles.reserveBtn}
//                     onPress={() => addReservation(item)}
//                   >
//                     <Text style={styles.reserveText}>
//                       Reserve Spot
//                     </Text>
//                   </TouchableOpacity>
//                 </View>

//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       )}

//     </View>
//   );
// };

// export default WishlistScreen;

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     paddingHorizontal: 12,
//     paddingTop: 10,
//   },

//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },

//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   emptyText: {
//     marginTop: 10,
//     fontSize: 16,
//   },

//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#1f1f23',
//     borderRadius: 14,
//     padding: 10,
//     elevation: 4,
//   },

//   image: {
//     width: 95,
//     height: 95,
//     borderRadius: 12,
//   },

//   infoContainer: {
//     flex: 1,
//     marginLeft: 12,
//     justifyContent: 'space-between',
//   },

//   topRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     flex: 1,
//     marginRight: 10,
//   },

//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 4,
//   },

//   subText: {
//     color: '#bbb',
//     fontSize: 12,
//     marginLeft: 6,
//   },

//   bottomRow: {
//     marginTop: 8,
//     alignItems: 'flex-end',
//   },

//   reserveBtn: {
//     backgroundColor: '#f5c542',
//     paddingHorizontal: 14,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },

//   reserveText: {
//     fontWeight: 'bold',
//     fontSize: 12,
//     color: '#000',
//   },

// });


import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../context/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const { wishlist, toggleWishlist, addReservation, theme } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}>

      {/* Header */}
      <Text
        style={[
          styles.header,
          {
            color: theme.text,
          },
        ]}>
        Your  Wishlist
      </Text>

      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="heart-outline" size={60} color="#888" />

          <Text
            style={[
              styles.emptyText,
              {
                color: theme.text,
              },
            ]}>
            Your wishlist is empty
          </Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.card}>

              {/* Event Image */}
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              {/* Right Content */}
              <View style={styles.infoContainer}>

                {/* Title + Heart */}
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

                  <TouchableOpacity
                    onPress={() => toggleWishlist(item)}>
                    <Icon
                      name="heart"
                      size={22}
                      color="#ff4d4d"
                    />
                  </TouchableOpacity>
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

                {/* Button */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.reserveBtn}
                    onPress={() => {
                      addReservation(item);
                      navigation.navigate('Reservations');
                    }}>
                    <Text style={styles.reserveText}>
                      Reserve Spot
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 12,
    fontSize: 17,
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

  buttonContainer: {
    marginTop: 12,
    alignItems: 'flex-end',
  },

  reserveBtn: {
    backgroundColor: '#F5C542',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  reserveText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 13,
  },
});