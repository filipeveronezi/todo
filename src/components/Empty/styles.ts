import { StyleSheet } from 'react-native'
import { colors } from './../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  icon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    color: colors.gray300,
    fontFamily: 'InterBold',
    fontSize: 14,
  },
  description: {
    marginTop: 5,
    color: colors.gray300,
    fontFamily: 'Inter',
    fontSize: 14,
  },
})
