import { type ComputedRef, type Ref, computed, toValue } from 'vue'

enum UC_CHARACTERS {
    UA_MACRON = 0x0100,
    HW_FLSTOP = 0xff61,
    HW_KANAMU = 0xff91,
}

export type SectionIdData = {
    idValue: ComputedRef<number>
    idName: ComputedRef<string>
}

export function useSectionId(
    charName: Ref<string> | string,
    classModifier: Ref<number> | number,
    isBlueBurst: Ref<boolean> | boolean,
): SectionIdData {
    enum SectionIdVal {
        VIRIDIA = 0,
        GREENILL = 1,
        SKYLY = 2,
        BLUEFULL = 3,
        PURPLENUM = 4,
        PINKAL = 5,
        REDRIA = 6,
        ORAN = 7,
        YELLOWBOZE = 8,
        WHITILL = 9,
    }

    const secIdValue = computed(() => {
        const name = toValue(charName)
        const mod = toValue(isBlueBurst) ? toValue(classModifier) : 5

        if (name === '' || mod === -1) return -1

        const chars = name.split('')

        let flag = 0

        return (
            chars.reduce((a: number, c: string) => {
                const addedValue = c.charCodeAt(0)

                let newVal = a + addedValue

                if (addedValue >= UC_CHARACTERS.UA_MACRON && addedValue < UC_CHARACTERS.HW_FLSTOP) {
                    if (flag !== 2) {
                        flag = 2
                        newVal += 45
                    }
                } else if (addedValue <= UC_CHARACTERS.HW_KANAMU) {
                    if (flag !== 1) {
                        flag = 1
                        newVal += 45
                    }
                }

                return newVal
            }, mod) % 10
        )
    })

    const secIdName = computed(() => {
        const value = toValue(secIdValue)
        return value === -1 ? '' : SectionIdVal[secIdValue.value].toLowerCase()
    })

    return { idValue: secIdValue, idName: secIdName }
}
