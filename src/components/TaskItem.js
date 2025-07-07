import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { colors } from '../style/globalStyles';
import IMAGES from '../assets/images';

const TaskItem = ({ task }) => {
  const getTagColor = (tag) => {
    switch (tag) {
      case 'Habit':
        return '#E8F5E8';
      case 'Must':
        return '#FFF3E0';
      case 'Important':
        return '#FFE8E8';
      default:
        return '#F0F0F0';
    }
  };

  const getTagTextColor = (tag) => {
    switch (tag) {
      case 'Habit':
        return '#4CAF50';
      case 'Must':
        return '#FF9800';
      case 'Important':
        return '#F44336';
      default:
        return '#666';
    }
  };

  const getTaskIcon = (type) => {
    switch (type) {
      case 'meeting':
        return IMAGES.MEET;
      case 'meditation':
        return IMAGES.YOGA;
      case 'savings':
        return IMAGES.SAVE;
      case 'exercise':
        return IMAGES.RUN;
      case 'shopping':
        return  IMAGES.BUY;
      case 'creative':
        return IMAGES.MAKE;
      default:
        return  task;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
       
        <Image 
          source={getTaskIcon(task.type)}
          style={styles.logoImage}
          resizeMode="contain"
        />
       
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{task.title}</Text>
          <TouchableOpacity>
            <Icon
              name={task.completed ? 'check-circle' : 'radio-button-unchecked'}
              size={20}
              color={task.completed ? '#4CAF50' : '#ccc'}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.details}>
          <View style={styles.timeContainer}>
            <Icon name="access-time" size={12} color="#666" />
            <Text style={styles.time}>{task.time}</Text>
          </View>
          
          <View style={styles.tagsContainer}>
            {task.tags.map((tag, index) => (
              <View
                key={index}
                style={[
                  styles.tag,
                  { backgroundColor: getTagColor(tag) },
                ]}
              >
                <Text
                  style={[
                    styles.tagText,
                    { color: getTagTextColor(tag) },
                  ]}
                >
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>
        
        {task.subtitle && (
          <Text style={styles.subtitle}>{task.subtitle}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    //marginBottom: 12,
    borderRadius: 12,
   
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:colors.darkGray,
   paddingBottom:10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  time: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 6,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});

export default TaskItem;
