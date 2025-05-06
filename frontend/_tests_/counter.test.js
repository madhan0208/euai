import { mount } from '@vue/test-utils'
import App from '@/App.vue'

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ value: 5 })
  })
)

describe('App.vue Counter Component', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('fetches initial counter on mount', async () => {
    const wrapper = mount(App)
    await new Promise(resolve => setTimeout(resolve)) 
    expect(wrapper.text()).toContain('Counter: 5')
  })

  it('increments counter when button is clicked', async () => {
    fetch
      .mockResolvedValueOnce({ json: async () => ({ value: 5 }) }) 
      .mockResolvedValueOnce({ json: async () => ({ value: 6 }) }) 

    const wrapper = mount(App)
    await new Promise(resolve => setTimeout(resolve))

    await wrapper.find('button').trigger('click')
    await new Promise(resolve => setTimeout(resolve))

    expect(wrapper.text()).toContain('Counter: 6')
  })
})
