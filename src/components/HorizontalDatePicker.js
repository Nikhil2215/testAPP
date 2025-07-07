import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { colors } from '../style/globalStyles';

const HorizontalDatePicker = ({ dates, selectedDate, onDateSelect }) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {dates.map((dateObj, index) => (
        <TouchableOpacity
          key={index}
          style={styles.dateItem}
          onPress={() => onDateSelect(dateObj.date)}
        >
          <View
            style={[
              styles.dayContainer,
              selectedDate === dateObj.date && styles.selectedDayContainer,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                selectedDate === dateObj.date && styles.selectedDayText,
              ]}
            >
              {dayNames[dateObj.dayIndex]}
            </Text>
          </View>
          <View
            style={[
              styles.dateContainer,
              selectedDate === dateObj.date && styles.selectedDateContainer,
            ]}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === dateObj.date && styles.selectedDateText,
              ]}
            >
              {dateObj.date}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    
  },
  scrollContent: {
    paddingHorizontal: 5,
  },
  dateItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    minWidth: 52,
    
  },
  dayContainer: {
    paddingBottom: 18,
    paddingTop:4,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.lightGray,
    width: '100%',
    alignItems: 'center',
    
  },
  selectedDayContainer: {
    backgroundColor:  colors.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dateContainer: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius:20,
    backgroundColor:colors.darkGray,
    width: '100%',
    alignItems: 'center',
    bottom:16
  },
  selectedDateContainer: {
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  dayText: {
    fontSize: 12,
    color: '#888',
   
    fontWeight: '500',
   
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  dateText: {
    fontSize: 17,
    
    fontWeight: 'bold',
    color: '#444',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
});

export default HorizontalDatePicker;
