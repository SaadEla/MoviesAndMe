// Store/configureStore.js

import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'
//kat  dir comme parametre tes reducers
export default createStore(toggleFavorite)