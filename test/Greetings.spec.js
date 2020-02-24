import { shallowMount, mount } from '@vue/test-utils'
import Greetings from '@/components/Greetings.vue'

describe('Greetings.vue', () => {
  it('Check the greetings message', () => {
    const wrapper = mount(Greetings, {
        propsData:{
            greeting:'test'
        }
    })
    expect(wrapper.text()).toMatch("Vue without TDD")
  })
})
