import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
import { useSectionId } from '../section-id'

describe('useSectionId', () => {
  it('should return correct section ID and name for given character name and class modifier', () => {
    const charName = ref('TestName')
    const classModifier = ref(3)
    const isBlueBurst = ref(true)

    const { idValue, idName } = useSectionId(charName, classModifier, isBlueBurst)

    expect(idValue.value).toBe(9)
    expect(idName.value).toBe('whitill')
  })

  it('should return -1 and empty name when character name is empty', () => {
    const charName = ref('')
    const classModifier = ref(3)
    const isBlueBurst = ref(true)

    const { idValue, idName } = useSectionId(charName, classModifier, isBlueBurst)

    expect(idValue.value).toBe(-1)
    expect(idName.value).toBe('')
  })

  it('should use default class modifier when isBlueBurst is false', () => {
    const charName = ref('TestName')
    const classModifier = ref(3)
    const isBlueBurst = ref(false)

    const { idValue, idName } = useSectionId(charName, classModifier, isBlueBurst)

    expect(idValue.value).toBe(1)
    expect(idName.value).toBe('greenill')
  })

  it('should handle special characters correctly', () => {
    const charName = ref('ĀTest')
    const classModifier = ref(3)
    const isBlueBurst = ref(true)

    const { idValue, idName } = useSectionId(charName, classModifier, isBlueBurst)

    expect(idValue.value).toBe(5)
    expect(idName.value).toBe('pinkal')
  })
})
