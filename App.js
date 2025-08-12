import { useState } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';

export default function App() {

  const [taskList, setTaskList] = useState([]);

  const addTaskToListHandler = (task) => {
    setTaskList((currTask) => [...currTask, {
      id: Math.random().toString(),
      task: task
    }]);
  }

  const onDeleteTask = (id) => {
    setTaskList((currTask) => currTask.filter((task) => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <CreateTask addTaskToList={addTaskToListHandler} />
      <View style={styles.listTasks}>

        {taskList.length > 0 ? <>
          <Text style={styles.listLabel}>To Do List</Text>
          <ListTasks taskList={taskList} onDeleteTask={onDeleteTask} />
        </> : <Text style={styles.emptyListLabel}>Add tasks to view the list</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  listTasks: {
    flex: 4
  },
  listLabel: {
    textAlign: 'center'
  },
  emptyListLabel: {
    margin: 20,
    padding: 10
  }
});
