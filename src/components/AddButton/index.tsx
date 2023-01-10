import {
  GestureResponderEvent,
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import { colors } from '../../styles/colors'
import { styles } from './styles'

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export function AddButton({ onPress }: Props) {
  return (
    <View style={{ backgroundColor: colors.blue, borderRadius: 8 }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={styles.button}
      >
        <Image
          style={styles.icon}
          source={require('../../../assets/icons/plus.png')}
        />
      </TouchableOpacity>
    </View>
  )
}
