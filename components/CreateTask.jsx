import {
    StyleSheet, View, TextInput,
    Button
} from 'react-native';
import { useState } from 'react';

const CreateTask = (props) => {

    const [task, setTask] = useState('');

    const getTask = (enteredText) => {
        setTask(enteredText);
    }

    const addTaskHandler = () => {
        if (task !== '') {
            props.addTaskToList(task);
            setTask('');
        }
    }

    return (
        <View style={styles.taskContainer}>
            <TextInput style={styles.textInput} placeholder='Create Task'
                onChangeText={getTask} value={task} />
            <Button title='Add Task' onPress={addTaskHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginRight: 8,
        padding: 8
    },
})

export default CreateTask;