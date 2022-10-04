/* funciones que se encarguen de trabajar con el async storage */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

// ACCEDES A LOS DATOS.
export async function getPokemonsFavoriteApi () {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return response ? JSON.parse(response) : []
    // return JSON.parse(response || [])
  } catch (error) {
    throw error
  }
}

export async function addPokemonFavoriteApi (id) {
  try {
    const favorites = await getPokemonsFavoriteApi()
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}

// GUARDA LOS DATOS
export async function isPokemonFavoriteApi (id) {
  try {
    const response = await getPokemonsFavoriteApi(id)
    return includes(response, id)
  } catch (error) {
    throw error
  }
}

export async function removePokemonFavoriteApi (id) {
  try {
    const favorites = await getPokemonsFavoriteApi()
    const newFavorites = pull(favorites, id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
  } catch (error) {
    throw error
  }
}
