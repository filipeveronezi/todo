import { Image } from 'react-native'

export function Logo() {
  return (
    <Image
      style={{ width: 150, resizeMode: 'contain' }}
      source={require('../../../assets/logo.png')}
    />
  )
}
