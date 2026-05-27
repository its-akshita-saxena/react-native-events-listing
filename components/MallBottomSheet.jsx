import React, { forwardRef, useMemo } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetView, BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const MallBottomSheet = forwardRef(
  (
    {
      malls,
      selectedMall,
      setSelectedMall,
    },
    ref
  ) => {

    const snapPoints = useMemo(() => ['50%'],[]);
  const renderBackdrop=(props)=>(
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior='close'
        />
      );

    const handleMallSelect = (mall) => {
      setSelectedMall(mall);
      ref.current?.dismiss(); //bottom sheet closes after filtering mall based events
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.container}>

          <Text style={styles.title}>
            Select Mall
          </Text>

          {malls.map((mall, index) => (

            <TouchableOpacity
              key={index}
              style={[
                styles.mallItem,

                selectedMall === mall &&
                styles.selectedMall,
              ]}
              onPress={() =>
                handleMallSelect(mall)
              }
            >

              <Text style={styles.mallText}>
                {mall}
              </Text>

            </TouchableOpacity>

          ))}

        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default MallBottomSheet;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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

});