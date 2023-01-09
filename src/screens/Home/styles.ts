import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  headingContainer: {
    flex: 0.2,
    backgroundColor: colors.gray700,
    paddingHorizontal: 32,
    paddingVertical: 64,
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.gray500,
    padding: 20,
    color: colors.gray100,
    borderRadius: 8,
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    marginHorizontal: 40,
    width: 'auto',
    zIndex: 10,
  },
  tasksContainer: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
})
