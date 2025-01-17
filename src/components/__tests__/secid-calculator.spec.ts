import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SecidCalculator from '../secid-calculator.vue'

describe('secid-calculator.vue', () => {
  it('should render the secid calculator component', () => {
    const wrapper = mount(SecidCalculator)
    expect(wrapper.exists()).toBe(true)
  })

  it('should disable the character name input when no class is selected', () => {
    const wrapper = mount(SecidCalculator)
    const charNameInput = wrapper.find('input[type="text"]')
    expect(charNameInput.attributes('disabled')).toBeDefined()
  })

  it('should enable the character name input when a class is selected', async () => {
    const wrapper = mount(SecidCalculator)
    const classSelector = wrapper.findComponent({ name: 'ClassSelector' })

    await classSelector.setValue(1) // Simulate selecting a class
    const charNameInput = wrapper.find('input[type="text"]')
    expect(charNameInput.attributes('disabled')).toBeUndefined()
  })

  it('should update the sprite class name based on the section ID', async () => {
    const wrapper = mount(SecidCalculator)
    const charNameInput = wrapper.find('input[type="text"]')
    const classSelector = wrapper.findComponent({ name: 'ClassSelector' })

    await classSelector.setValue(3)
    await charNameInput.setValue('TestName')

    const calculatorDiv = wrapper.find('.secid-calculator')
    expect(calculatorDiv.classes()).toContain('append-badge-whitill-icon')
  })

  it('should toggle the Blue Burst checkbox', async () => {
    const wrapper = mount(SecidCalculator)
    const blueBurstCheckbox = wrapper.find('input[type="checkbox"]')

    expect(wrapper.vm.isBlueBurst).toBe(true)
    await blueBurstCheckbox.setChecked(false)
    expect(wrapper.vm.isBlueBurst).toBe(false)
  })
})
