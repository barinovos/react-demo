import apiProvider from './apiProvider'
import storageProvider from './storageProvider'
const config = require('../config.json')

export const useRemoteProvider = () => (config.isRemoteStorage = true)

export const useLocalProvider = () => (config.isRemoteStorage = false)

export default {
  getProvider: () =>
    config.isRemoteStorage ? apiProvider(config) : storageProvider(config),
  useRemoteProvider,
  useLocalProvider,
}
