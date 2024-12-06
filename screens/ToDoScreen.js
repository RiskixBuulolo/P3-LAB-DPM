import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TaskItem from '../components/TaskItem';

const ToDoScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Lifecycle: componentDidMount (simulasi fetch data)
  useEffect(() => {
    console.log('Fetching initial tasks...');
    setTimeout(() => {
      setTasks([{ id: '1', text: 'Belajar React Native' }]);
    }, 1000);
  }, []);

  // Lifecycle: componentDidUpdate
  useEffect(() => {
    if (tasks.length > 0) {
      console.log(`Task updated. Total: ${tasks.length}`);
    }
  }, [tasks]);

  const addTask = () => {
    if (taskText.trim() === '') return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), text: taskText },
    ]);
    setTaskText('');
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header title="List Kegiatan" />
      <TextInput
        style={styles.input}
        placeholder="Tambah kegiatan..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Tambah" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} />
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 10,
  },
});

export default ToDoScreen;
