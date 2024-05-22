import { useSectionId } from '../section-id'

const dataSet: [string, number, number, string][] = [
    ['7', 0, 0, 'viridia'],
    ['8', 0, 1, 'greenill'],
    ['9', 0, 2, 'skyly'],
    ['0', 0, 3, 'bluefull'],
    ['1', 0, 4, 'purplenum'],
    ['2', 0, 5, 'pinkal'],
    ['3', 0, 6, 'redria'],
    ['4', 0, 7, 'oran'],
    ['5', 0, 8, 'yellowboze'],
    ['6', 0, 9, 'whit'],
]

describe('useSectionId', () => {

    it('should return -1 as id and an empty string as name when charName is an empty string', () => {

        const result = useSectionId('', -1, true)

        expect(result.idValue.value).toBe(-1)
        expect(result.idName.value).toBe('')
    })

    describe('Blue Burst modifier is on', () => {

        for (let i = 0; i < dataSet.length; i += 1) {

            const [charName, classModifier, idValue, idName] = dataSet[i]

            it(`should return ${idValue} as id and ${idName} as name when charName is ${charName} and class modifier is ${classModifier}`, () => {

                const result = useSectionId(charName, classModifier, true)

                expect(result.idValue.value).toBe(idValue)
                expect(result.idName.value).toBe(idName)
            })
        }
    })
})
