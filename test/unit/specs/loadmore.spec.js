import Loadmore from 'packages/loadmore'
import { mount } from 'avoriaz'
import { triggerTouch } from '../utils'

/*eslint-disable*/
describe('Loadmore', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a Loadmore', () => {
    wrapper = mount(Loadmore)

    expect(wrapper.hasClass('vu-loadmore')).to.be.true
  })

  // it('change head content when pulling down', (done) => {
  //   wrapper = mount(Loadmore)

  //   const track = wrapper.find('.vu-loadmore__content')[0]
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 0, 10)

  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.find('.vu-loadmore__text')[0].text()).to.equal('下拉刷新')

  //     triggerTouch(track, 'touchmove', 0, 30)
  //     triggerTouch(track, 'touchmove', 0, 60)
  //     triggerTouch(track, 'touchmove', 0, 100)

  //     wrapper.vm.$nextTick(() => {
  //       expect(wrapper.find('.vu-loadmore__text')[0].text()).to.equal('释放更新')

  //       triggerTouch(track, 'touchend', 0, 100)

  //       wrapper.vm.$nextTick(() => {
  //         expect(wrapper.find('.vu-loadmore__text')[0].text()).to.equal('加载中')
  //         done()
  //       })
  //     })
  //   })
  // })

  // it('change loading status when pulling down', (done) => {
  //   wrapper = mount(Loadmore, {
  //     propsData: {
  //       value: false
  //     }
  //   })

  //   wrapper.vm.$on('input', value => {
  //     wrapper.vm.value = value

  //     setTimeout(() => {
  //       wrapper.vm.value = false
  //       setTimeout(() => {
  //         expect(wrapper.vm.status).to.equal('normal')
  //         done()
  //       }, 0)
  //     }, 30)
  //   })

  //   const track = wrapper.find('.van-pull-refresh__track')[0]
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 0, 100)
  //   triggerTouch(track, 'touchend', 0, 100)

  //   expect(wrapper.vm.value).to.be.true
  //   expect(wrapper.vm.status).to.equal('loading')

  //   // ignore touch event when loading
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 0, 100)
  //   triggerTouch(track, 'touchend', 0, 100)
  // })

  // it('pull a short distance', () => {
  //   wrapper = mount(Loadmore, {
  //     propsData: {
  //       value: false
  //     }
  //   })

  //   const track = wrapper.find('.van-pull-refresh__track')[0]
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 0, 10)
  //   triggerTouch(track, 'touchend', 0, 10)

  //   expect(wrapper.vm.value).to.be.false
  //   expect(wrapper.vm.status).to.equal('normal')
  // })

  // it('not in page top', () => {
  //   wrapper = mount(Loadmore, {
  //     propsData: {
  //       value: false
  //     }
  //   })

  //   window.scrollTop = 100

  //   const track = wrapper.find('.van-pull-refresh__track')[0]
  //   // ignore touch event when not at page top
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 0, 100)
  //   triggerTouch(track, 'touchend', 0, 100)
  //   expect(wrapper.vm.ceiling).to.be.false

  //   window.scrollTop = 0
  //   triggerTouch(track, 'touchmove', 0, 100)
  //   expect(wrapper.vm.ceiling).to.be.true
  // })

  // it('horizontal direction', () => {
  //   wrapper = mount(Loadmore, {
  //     propsData: {
  //       value: false
  //     }
  //   })

  //   const track = wrapper.find('.van-pull-refresh__track')[0]
  //   triggerTouch(track, 'touchstart', 0, 0)
  //   triggerTouch(track, 'touchmove', 10, 0)
  //   triggerTouch(track, 'touchend', 10, 0)
  //   expect(wrapper.vm.direction).to.equal('horizontal')
  // })
})
