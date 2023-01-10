import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { DeleteButton } from '../DeleteButton'
import { styles } from './styles'

interface Props {
  description: string
  isDone: boolean
  onDone: () => void
  onDelete: () => void
}

export function Task({ description, isDone, onDelete, onDone }: Props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        hitSlop={{ bottom: 25, top: 25, left: 50, right: 50 }}
        style={{ flex: 1 }}
        onPress={onDone}
      >
        <View style={isDone ? styles.checked : styles.unchecked}>
          {isDone ? (
            <Image
              style={{ width: 10, resizeMode: 'contain' }}
              source={require('../../../assets/icons/check.png')}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <Text
        style={isDone ? styles.checkedDescription : styles.uncheckedDescription}
      >
        {description}
      </Text>
      <TouchableWithoutFeedback>
        <DeleteButton onPress={onDelete} />
      </TouchableWithoutFeedback>
    </View>
  )
}
