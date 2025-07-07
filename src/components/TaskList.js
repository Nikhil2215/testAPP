import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { taskData } from '../data/taskData';

const TaskList = () => {
  return (
    <View style={styles.container}>
      {taskData.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskList;
