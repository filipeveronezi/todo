import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Inter',
  },
})
