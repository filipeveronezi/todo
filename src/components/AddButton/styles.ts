import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blueDark,
    padding: 20,
    borderRadius: 8,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
})
