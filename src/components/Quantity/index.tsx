import { Text, View } from 'react-native'
import { styles } from './styles'

interface Props {
  value: number
  children: React.ReactElement
}

export function Quantity({ children, value }: Props) {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}
