import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '../AppButton.vue'

describe('AppButton', () => {
  it('renders slot', () => {
    const wrapper = mount(AppButton, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
