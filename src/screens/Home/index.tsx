import { Text, TextInput, View } from 'react-native'
import { Logo } from '../../components/Logo'
import { colors } from '../../styles/colors'
import { styles } from './styles'

export function Home() {
  return (
    <>
      <View style={styles.headingContainer}>
        <Logo />
      </View>
      <View style={styles.tasksContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
        />
        <Text>Teste</Text>
      </View>
    </>
  )
}
