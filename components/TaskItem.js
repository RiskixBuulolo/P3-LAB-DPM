import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Icon name="trash" size={24} color="#d11a2a" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TaskItem;
