import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
    borderRadius: 14,
    backgroundColor: colors.gray400,
    minWidth: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 14,
    fontFamily: 'InterBold',
    overflow: 'hidden',
    color: colors.gray200,
  },
})
