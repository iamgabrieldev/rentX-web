import { DefaultTheme } from 'styled-components'
import merge from 'deepmerge'

import { dark } from './dark'
import { light } from './light'

const selectTheme = (theme: 'light' | 'dark'): DefaultTheme => {
  let selectedTheme

  switch (theme.toLowerCase()) {
    case 'light':
      selectedTheme = light()
      break

    default:
      selectedTheme = {}
      break
  }

  const overwriteMerge = (__destinationArray: any, sourceArray: any, __options: any) => sourceArray

  // TODO: Tipar corretamente
  return merge<any>(dark(), selectedTheme, {
    arrayMerge: overwriteMerge,
  })
}

export default selectTheme
