import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HorizontalDatePicker from './src/components/HorizontalDatePicker';
import TodaysQuote from './src/components/TodaysQuote';
import TaskList from './src/components/TaskList';
import FloatingActionButton from './src/components/FloatingActionButton';
import BottomModal from './src/components/BottomModal';
import { globalStyles } from './src/styles/globalStyles';
import { generateWeekDates } from './src/utils/dateUtils';
import Header from './src/components/Header';
import { colors } from './src/style/globalStyles';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(18); // Default selected date
  const [isModalVisible, setIsModalVisible] = useState(false);
  const weekDates = generateWeekDates();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleModalOptionSelect = (option) => {
    console.log('Selected option:', option);
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
     
      {/* Header */}
      <Header 
        appName="WingsFly"
        onSearchPress={() => handleHeaderAction('search')}
        onCalendarPress={() => handleHeaderAction('calendar')}
        onMenuPress={() => handleHeaderAction('menu')}
      />
 <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
     
        {/* Date Picker */}
        <HorizontalDatePicker
          dates={weekDates}
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />

        {/* Today's Quote */}
        <TodaysQuote />

        {/* Task List */}
       
        <TaskList />
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton onPress={handleAddTask} />

      {/* Bottom Modal */}
      <BottomModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onOptionSelect={handleModalOptionSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 15,
  },
  content: {
   // flex: 1,
    paddingHorizontal: 20,
    
  },
});

export default App;
