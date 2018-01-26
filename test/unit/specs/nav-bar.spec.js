import NavBar from 'packages/nav-bar'
import { mount } from 'avoriaz'
import { DOMChecker } from '../utils'

/*eslint-disable*/
describe('Navbar', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a NavBar', () => {
    wrapper = mount(NavBar, {
      propsData: {
        title: '标题',
        leftText: '返回',
        rightText: '按钮',
        leftArrow: true
      }
    })

    DOMChecker(wrapper, {
      text: {
        '.vu-nav-bar__title': '标题',
        '.vu-nav-bar__left .vu-nav-bar__text': '返回',
        '.vu-nav-bar__right .vu-nav-bar__text': '按钮'
      },
      count: {
        '.vu-nav-bar__arrow': 1
      }
    });

    expect(wrapper.hasClass('vu-nav-bar')).to.be.true;
  });

  it('NavBar fixed', () => {
    wrapper = mount(NavBar, {
      propsData: {
        fixed: true
      }
    });

    expect(wrapper.hasClass('vu-nav-bar')).to.be.true;
  })
});
