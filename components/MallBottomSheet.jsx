// import React, { forwardRef, useMemo, useState, useEffect, useRef } from 'react';
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Keyboard,
//   View,
// } from 'react-native';

// import {
//   BottomSheetModal,
//   BottomSheetBackdrop,
//   BottomSheetTextInput,
//   BottomSheetScrollView,
// } from '@gorhom/bottom-sheet';

// const MallBottomSheet = forwardRef(
//   ({ malls, selectedMall, setSelectedMall }, ref) => {

//     // ✅ IMPORTANT: create internal ref for controlling sheet
//     const sheetRef = useRef(null);

//     const snapPoints = useMemo(() => ['30%', '60%', '90%'], []);

//     const [searchText, setSearchText] = useState('');

//     const renderBackdrop = (props) => (
//       <BottomSheetBackdrop
//         {...props}
//         disappearsOnIndex={-1}
//         appearsOnIndex={0}
//         pressBehavior='close'
//       />
//     );

//     const handleMallSelect = (mall) => {
//       setSelectedMall(mall);
//       sheetRef.current?.dismiss();
//     };

//     // ✅ FILTER
//     const filteredMalls = malls.filter(
//       mall => mall.toLowerCase().includes(searchText.toLowerCase())
//     );

//     // ✅ VALIDATION
//     const isValid = searchText.length >= 6;

//     // ✅ ✅ KEYBOARD LISTENER (MAIN FEATURE)
//     useEffect(() => {

//       const showSub = Keyboard.addListener('keyboardDidShow', () => {
//         // console.log('keyboard opened');
//         sheetRef.current?.snapToIndex(2); // expand to 90%
//       });

//       const hideSub = Keyboard.addListener('keyboardDidHide', () => {
//         // console.log('keyboard closed');
//         sheetRef.current?.snapToIndex(1); // go back to 60%
//       });

//       return () => {
//         showSub.remove(); //  cleaned up the listenersto prevent memeory leaks
//         hideSub.remove();
//       };
//     }, []);

//     return (
//       <BottomSheetModal
//         ref={(instance) => {
//           sheetRef.current = instance;
//           if (typeof ref === 'function') ref(instance);
//           else if (ref) ref.current = instance;
//         }}

//         snapPoints={snapPoints}
//         index={1} // ✅ start at medium height

//         backdropComponent={renderBackdrop}

//         // ✅ KEEP THIS (helps resize)
//         android_keyboardInputMode="adjustResize"
//       >
//         <BottomSheetScrollView
//           contentContainerStyle={styles.container}
//           keyboardShouldPersistTaps="handled"
//         >
//           <Text style={styles.title}>Select Mall</Text>

//           <BottomSheetTextInput
//             placeholder="Search Mall (min 6 letters)"
//             value={searchText}
//             onChangeText={setSearchText}
//             style={styles.searchInput}
//           />

//           {/* ✅ ERROR TEXT */}
//           {searchText.length > 0 && searchText.length < 6 && (
//             <Text style={styles.error}>
//               Type at least 6 characters
//             </Text>
//           )}

//           {/* ✅ LIST */}
//           {filteredMalls.map((mall, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.mallItem,
//                 selectedMall === mall && styles.selectedMall,
//               ]}
//               onPress={() => handleMallSelect(mall)}
//             >
//               <Text style={styles.mallText}>
//                 {mall}
//               </Text>
//             </TouchableOpacity>
//           ))}

//           {/* ✅ OK BUTTON */}
//           <TouchableOpacity
//             style={[
//               styles.okButton,
//               !isValid && styles.disabledButton
//             ]}
//             disabled={!isValid}
//             onPress={() => Keyboard.dismiss()}
//           >
//             <Text style={styles.okButtonText}>OK</Text>
//           </TouchableOpacity>

//           {/* Extra spacing */}
//           <View style={{ height: 40 }} />

//         </BottomSheetScrollView>
//       </BottomSheetModal>
//     );
//   }
// );

// export default MallBottomSheet;

// const styles = StyleSheet.create({

//   container: {
//     padding: 20,
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },

//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     marginBottom: 10,
//     fontSize: 16,
//   },

//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 10,
//   },

//   mallItem: {
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     backgroundColor: '#f1f1f1',
//   },

//   selectedMall: {
//     backgroundColor: '#f5c542',
//   },

//   mallText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },

//   okButton: {
//     marginTop: 20,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: '#f5c542',
//     alignItems: 'center',
//   },

//   disabledButton: {
//     backgroundColor: '#ccc',
//   },

//   okButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

// });








// import React, { forwardRef, useMemo, useState } from 'react';
// import {
//   Text,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   BottomSheetModal,
//   BottomSheetView, BottomSheetBackdrop,
//   BottomSheetTextInput,
// } from '@gorhom/bottom-sheet';

// const MallBottomSheet = forwardRef(
//   (
//     {
//       malls,
//       selectedMall,
//       setSelectedMall,
//     },
//     ref
//   ) => {

//     const snapPoints = useMemo(() => ['50%'], []);
//     const renderBackdrop = (props) => (
//       <BottomSheetBackdrop
//         {...props}
//         disappearsOnIndex={-1}
//         appearsOnIndex={0}
//         pressBehavior='close'
//       />
//     );

//     const handleMallSelect = (mall) => {
//       setSelectedMall(mall);
//       ref.current?.dismiss(); //bottom sheet closes after filtering mall based events
//     };
//     const [searchText, setSearchText] = useState('');
//     const filteredMalls = malls.filter(
//       mall => mall.toLowerCase().includes(searchText.toLowerCase())
//     );

//     return (
//       <BottomSheetModal
//         ref={ref}
//         // snapPoints={snapPoints}
//         keyboardBehavior="extend"
//         enableDynamicSizing={true}
//         android_keyboardInputMode="adjustResize"
//         backdropComponent={renderBackdrop}
//       >
//         <BottomSheetView style={styles.container}>

//           <Text style={styles.title}>
//             Select Mall
//           </Text>
//           <BottomSheetTextInput
//             placeholder="Search Mall"
//             value={searchText}
//             onChangeText={setSearchText}
//             style={styles.searchInput}
//           />

//           {filteredMalls.map((mall, index) => (

//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.mallItem,

//                 selectedMall === mall &&
//                 styles.selectedMall,
//               ]}
//               onPress={() =>
//                 handleMallSelect(mall)
//               }
//             >

//               <Text style={styles.mallText}>
//                 {mall}
//               </Text>

//             </TouchableOpacity>

//           ))}

//         </BottomSheetView>
//       </BottomSheetModal>
//     );
//   }
// );

// export default MallBottomSheet;

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     padding: 20,
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },

//   mallItem: {
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     backgroundColor: '#f1f1f1',
//   },

//   selectedMall: {
//     backgroundColor: '#f5c542',
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     marginBottom: 15,
//     fontSize: 16,
//   },

//   mallText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },

// });








import React, { forwardRef, useMemo, useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

const MallBottomSheet = forwardRef(
  ({ malls, selectedMall, setSelectedMall }, ref) => {

    const snapPoints = useMemo(() => ['50%'], []);

    const [searchText, setSearchText] = useState('');

    const renderBackdrop = (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior='close'
      />
    );

    const handleMallSelect = (mall) => {
      setSelectedMall(mall);
      ref.current?.dismiss();
    };

    const filteredMalls = malls.filter(
      mall => mall.toLowerCase().includes(searchText.toLowerCase())
    );

    // ✅ validation
    const isValid = searchText.length >= 6;

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}

        // ✅ KEYBOARD FIX 
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustPan"
      >
        <BottomSheetScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >

          <Text style={styles.title}>Select Mall</Text>

          <BottomSheetTextInput
            placeholder="Search Mall (min 6 letters)"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchInput}
          />

          {/* ✅ validation text */}
          {searchText.length > 0 && searchText.length < 6 && (
            <Text style={styles.error}>
              Type at least 6 characters
            </Text>
          )}

          {/* LIST */}
          {filteredMalls.map((mall, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.mallItem,
                selectedMall === mall && styles.selectedMall,
              ]}
              onPress={() => handleMallSelect(mall)}
            >
              <Text style={styles.mallText}>{mall}</Text>
            </TouchableOpacity>
          ))}

          {/* ✅ OK BUTTON */}
          <TouchableOpacity
            style={[
              styles.okButton,
              !isValid && styles.disabledButton
            ]}
            disabled={!isValid}
            onPress={() => Keyboard.dismiss()}
          >
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>

        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);

export default MallBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 16,
  },

  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

  mallItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
  },

  selectedMall: {
    backgroundColor: '#f5c542',
  },

  mallText: {
    fontSize: 16,
    fontWeight: '500',
  },

  okButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#f5c542',
    alignItems: 'center',
  },

  disabledButton: {
    backgroundColor: '#ccc',
  },

  okButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});