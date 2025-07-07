import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { colors } from '../style/globalStyles';
import IMAGES from '../assets/images';

const BottomModal = ({ visible, onClose, onOptionSelect }) => {
  const modalOptions = [
    {
      id: 'habit',
      title: 'Habit',
      subtitle: 'Activity that repeats over time it has detailed tracking and statistics.',
      icon: IMAGES.HABIT,
      
      iconColor: '#4CAF50',
    },
    {
      id: 'recurring',
      title: 'Recurring Task',
      subtitle: 'Activity that repeats over time it has detailed tracking and statistics.',
      icon: IMAGES.RETASK,
      
      iconColor: '#2196F3',
    },
    {
      id: 'task',
      title: 'Task',
      subtitle: 'Single instance activity without tracking over time.',
      icon: IMAGES.TASK,
      
      iconColor: '#9C27B0',
    },
    {
      id: 'goal',
      title: 'Goal of the Day',
      subtitle: 'A specific target set for oneself to achieve within a single day.',
      icon: IMAGES.GOAL,
      
      iconColor: '#FF9800',
    },
  ];

  const handleOptionPress = (option) => {
    onOptionSelect(option);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.handle} />
              
              <Text style={styles.modalTitle}>Add New</Text>
              
              <View style={styles.optionsContainer}>
                {modalOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={styles.optionItem}
                    onPress={() => handleOptionPress(option)}
                  >
                    <View style={styles.optionContent}>
                      <View style={[styles.optionIcon, { backgroundColor: option.color }]}>
                       <Image 
                                source={option.icon}
                                
                                resizeMode="contain"
                              />
                      </View>
                      <View style={styles.optionTextContainer}>
                        <Text style={styles.optionTitle}>{option.title}</Text>
                        <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                      </View>
                      <Icon name="chevron-right" size={20} color="#999" />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    minHeight: 300,

  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  optionItem: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default BottomModal;
