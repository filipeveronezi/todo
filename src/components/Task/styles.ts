import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray400,
    borderRadius: 8,
    paddingVertical: 10,
    paddingLeft: 18,
    paddingRight: 12,
    marginHorizontal: 24,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.purple,
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: colors.blue,
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedDescription: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 14,
    fontFamily: 'Inter',
    color: colors.gray300,
    textDecorationLine: 'line-through',
  },
  uncheckedDescription: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 14,
    fontFamily: 'Inter',
    color: colors.gray100,
  },
})
