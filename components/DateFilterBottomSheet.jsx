import React, { forwardRef, useMemo } from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetView,BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const DateFilterBottomSheet = forwardRef(
  (
    {
      dateOptions,
      selectedDate,
      setSelectedDate,
    },
    ref
  ) => {

    const snapPoints = useMemo(() => ['40%'], []);

    const renderBackdrop=(props)=>(
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior='close'
      />
    );


    const handleSelect = (date) => {

      setSelectedDate(date);

      ref.current?.dismiss();
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.container}>

          <Text style={styles.title}>
            Filter Events
          </Text>

          {dateOptions.map((date, index) => (

            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedDate === date &&
                  styles.selectedOption,
              ]}
              onPress={() =>
                handleSelect(date)
              }
            >
              <Text style={styles.optionText}>
                {date}
              </Text>
            </TouchableOpacity>

          ))}

        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default DateFilterBottomSheet;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },

  option: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  selectedOption: {
    backgroundColor: '#f5c542',
  },

  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },

});