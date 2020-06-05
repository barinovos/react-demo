import apiProvider from './apiProvider'
import storageProvider from './storageProvider'

const config = {
  useLocal: true,
}

export const useRemoteProvider = () => (config.useLocal = false)

export const useLocalProvider = () => (config.useLocal = true)

export default {
  getProvider: () => (config.useLocal ? storageProvider : apiProvider),
}
