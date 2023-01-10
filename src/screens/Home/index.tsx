import { useState } from 'react'
import { Alert, FlatList, Text, TextInput, View } from 'react-native'
import uuid from 'react-native-uuid'
import { AddButton } from '../../components/AddButton'
import { Divider } from '../../components/Divider'
import { Empty } from '../../components/Empty'
import { Logo } from '../../components/Logo'
import { Quantity } from '../../components/Quantity'
import { Task } from '../../components/Task'
import { colors } from '../../styles/colors'
import { styles } from './styles'

interface ITask {
  id: string
  description: string
  isDone: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [taskInput, setTaskInput] = useState('')

  const handleRemoveTask = (id: string) => {
    const execute = () => {
      setTasks((prevState) => prevState.filter((task) => task.id !== id))
    }

    Alert.alert(`Tem certeza que deseja remover esta tarefa?`, '', [
      {
        text: 'Sim',
        onPress: execute,
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  const handleAddTask = () => {
    if (taskInput.trim() === '') return
    setTasks((prevState) => [
      ...prevState,
      {
        id: uuid.v4().toString(),
        description: taskInput.trim(),
        isDone: false,
      },
    ])
    setTaskInput('')
  }

  const handleFinishTask = (id: string) => {
    setTasks((prevState) => {
      const newState = prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        }
        return task
      })

      return newState
    })
  }

  return (
    <>
      <View style={styles.headingContainer}>
        <Logo />
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            value={taskInput}
            onChangeText={(text) => setTaskInput(text)}
          />
          <AddButton onPress={() => handleAddTask()} />
        </View>
        <View style={styles.quantitiesContainer}>
          <Quantity value={tasks.length}>
            <Text style={styles.createdText}>Criadas</Text>
          </Quantity>
          <Quantity value={tasks.filter((task) => task.isDone).length}>
            <Text style={styles.doneText}>Concluídas</Text>
          </Quantity>
        </View>
        {tasks.length === 0 ? <Divider /> : null}
        <FlatList
          keyboardShouldPersistTaps="handled"
          scrollEnabled={tasks.length > 0}
          style={{ flex: 1, marginTop: 24 }}
          data={tasks}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              description={item.description}
              isDone={item.isDone}
              onDelete={() => handleRemoveTask(item.id)}
              onDone={() => handleFinishTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </>
  )
}
