import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  headingContainer: {
    flex: 0.2,
    backgroundColor: colors.gray700,
    paddingHorizontal: 24,
    paddingVertical: 64,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Inter',
    backgroundColor: colors.gray500,
    padding: 20,
    color: colors.gray100,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: colors.gray700,
    borderWidth: 1,
    width: 'auto',
    zIndex: 10,
  },
  tasksContainer: {
    flex: 1,
    backgroundColor: colors.gray600,
    paddingTop: 64,
  },
  quantitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  createdText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: 'InterBold',
  },
  doneText: {
    color: colors.purple,
    fontSize: 14,
    fontFamily: 'InterBold',
  },
})
