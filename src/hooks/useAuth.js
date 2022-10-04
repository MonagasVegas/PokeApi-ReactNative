/* Este hook lo que hace es acceder a nuestro contexto, extraer el value y devolverlo */

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default () => useContext(AuthContext)
