import 'styled-components'

import { type dark } from '../styles/themes/dark'

// CRIANDO TIPAGEM DO NOSSO TEMA DE FORMA DINÂMICA
type ThemeType = typeof dark

// SOBRESCREVENDO O MODULO DE TIPAGENS DEFAULT DO STYLE-COMPONENTS

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
