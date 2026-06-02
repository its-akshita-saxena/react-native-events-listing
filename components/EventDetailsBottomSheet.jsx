import React, { forwardRef, useMemo, useContext, } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';

import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop, } from '@gorhom/bottom-sheet';

import { AppContext } from '../context/AppContext';

const EventDetailsBottomSheet = forwardRef(({ selectedEvent }, ref) => {
    const snapPoints = useMemo(() => ['55%'], []);

    const { toggleWishlist, addReservation, wishlist, reservations, } = useContext(AppContext);

    const isWishlisted = selectedEvent && wishlist.some(item => item.id === selectedEvent.id);
    const isReserved = selectedEvent && reservations.some(item => item.id === selectedEvent.id);

    const renderBackdrop = (props) => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="close"
        />
    );

    return (
        <BottomSheetModal
            ref={ref}
            // snapPoints={snapPoints}
            enableDynamicSizing={true}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={styles.content}>

                {!selectedEvent ? (
                    <Text>No Event Selected, Try another mall or date filter </Text>
                ) : (
                    <>
                        <Image
                            source={{ uri: selectedEvent.image }}
                            style={styles.image}
                        />

                        <Text style={styles.title}>
                            {selectedEvent.title}
                        </Text>

                        <Text style={styles.info}>
                            Category: {selectedEvent.category}
                        </Text>
                        <Text style={styles.info}>
                            Mall: {selectedEvent.mall}
                        </Text>

                        <Text style={styles.info}>
                            Time: {selectedEvent.time}
                        </Text>

                        <Text style={styles.info}>
                            Location: {selectedEvent.location}
                        </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                toggleWishlist(selectedEvent)
                            }
                        >
                            <Text style={styles.buttonText}>
                                {isWishlisted
                                    ? 'Remove from Wishlist'
                                    : 'Add to Wishlist'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.button,
                                isReserved ? styles.reservedBtn : styles.reserveBtn,
                            ]}
                            onPress={() => {
                                addReservation(selectedEvent);

                            }
                            }
                        >
                            <Text style={styles.buttonText}>
                                {isReserved ? 'Reserved ✓' : 'Reserve Spot'}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}

            </BottomSheetView>
        </BottomSheetModal>
    );
}
);

export default EventDetailsBottomSheet;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
    },

    image: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 15,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    info: {
        fontSize: 16,
        marginBottom: 5,
    },

    button: {
        backgroundColor: '#333',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    reserveBtn: {
        backgroundColor: '#f5c542',
    },
    reservedBtn: {
        backgroundColor: '#22c55e',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});




// import React, { forwardRef, useMemo, useContext } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// import {BottomSheet,   BottomSheetModal } from '@gorhom/bottom-sheet';
// import { AppContext } from '../context/AppContext';

// const EventDetailsBottomSheet = forwardRef(({ selectedEvent }, ref) => {
//   const snapPoints = useMemo(() => ['65%'], []);
// //   console.log('BottomSheet selectedEvent:', selectedEvent);

//   const {
//     toggleWishlist,
//     addReservation,
//     wishlist,
//   } = useContext(AppContext);

//  if (!selectedEvent) {
//   return (
//     <BottomSheet
//       ref={ref}
//       index={-1}
//       snapPoints={snapPoints}
//       enablePanDownToClose
//     >
//       <View />
//     </BottomSheet>
//   );
// }

//   const isWishlisted =
//   selectedEvent &&
//   wishlist.some(item => item.id === selectedEvent.id);

// // return (
// //   <BottomSheet
// //     ref={ref}
// //     index={-1}
// //     snapPoints={snapPoints}
// //     enablePanDownToClose
// //   >
// //     {!selectedEvent ? (
// //       <View style={{ flex: 1 }} />
// //     ) : (
// //       <View style={styles.content}>
// //         <Image
// //           source={{ uri: selectedEvent.image }}
// //           style={styles.image}
// //         />

// //         <Text style={styles.title}>
// //           {selectedEvent.title}
// //         </Text>

// //         <Text style={styles.info}>
// //           Category: {selectedEvent.category}
// //         </Text>

// //         <Text style={styles.info}>
// //           Time: {selectedEvent.time}
// //         </Text>

// //         <Text style={styles.info}>
// //           Location: {selectedEvent.location}
// //         </Text>

// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => toggleWishlist(selectedEvent)}
// //         >
// //           <Text style={styles.buttonText}>
// //             {isWishlisted
// //               ? 'Remove from Wishlist'
// //               : 'Add to Wishlist'}
// //           </Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={[styles.button, styles.reserveBtn]}
// //           onPress={() => addReservation(selectedEvent)}
// //         >
// //           <Text style={styles.buttonText}>
// //             Reserve Spot
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     )}
// //   </BottomSheet>
// // );
// // });
// return (
//   <View
//     style={{
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       height: 300,
//       backgroundColor: 'red',
//       zIndex: 9999,
//     }}
//   >
//     <Text>TEST SHEET</Text>
//   </View>
// );
// export default EventDetailsBottomSheet;

// const styles = StyleSheet.create({
//   content: {
//     flex: 1,
//     padding: 20,
//   },

//   image: {
//     width: '100%',
//     height: 180,
//     borderRadius: 12,
//     marginBottom: 15,
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },

//   info: {
//     fontSize: 16,
//     marginBottom: 5,
//   },

//   description: {
//     marginTop: 15,
//     marginBottom: 20,
//     color: '#666',
//   },

//   button: {
//     backgroundColor: '#333',
//     padding: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   reserveBtn: {
//     backgroundColor: '#f5c542',
//   },

//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });