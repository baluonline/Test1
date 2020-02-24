import { shallowMount, mount } from '@vue/test-utils'
import Greetings from '@/components/AdminPrevilege.vue'

describe('AdminPrevelege.vue', () => {
  it('Check the greetings message', () => {
    const msg="submit"
    const isAdmin=true
    const wrapper = mount(Greetings, {
        propsData:{
            msg:msg,
            isAdmin
        }
    })
    expect(wrapper.find("span").text()).toBe("Admin Privilege")
    expect(wrapper.find("button").text()).toBe("submit")
  })

})
