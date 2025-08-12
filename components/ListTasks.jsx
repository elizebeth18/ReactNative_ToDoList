import { StyleSheet, FlatList, View, Text, Button } from "react-native";

const ListTasks = (props) => {

    const onDeleteHandler = (id) => {
        props.onDeleteTask(id);
    }
    return (
        <>
            <FlatList data={props.taskList} renderItem={(itemData) => {
                return (<View style={styles.listTask}>
                    <Text style={styles.taskText}>{itemData.item.task}</Text>
                    <Button title="Delete" onPress={() => onDeleteHandler(itemData.item.id)} />
                </View>)
            }} />
        </>
    )
}

const styles = StyleSheet.create({
    listTask: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#5e0acc',
    },
    taskText: {
        width: '70%',
        color: 'white',
    },
    deleteButton: {
        //width
    }
});
export default ListTasks;