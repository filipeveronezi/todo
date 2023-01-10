import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function Empty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../../assets/icons/clipboard.png')}
      />
      <Text style={styles.title}>
        Você ainda não tem tarefas cadastradas 😥
      </Text>
      <Text style={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
