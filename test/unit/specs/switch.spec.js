import Switch from 'packages/switch'
import { mount } from 'avoriaz'
/*eslint-disable*/
describe('Switch', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create switch default', () => {
    wrapper = mount(Switch);
    
    expect(wrapper.hasClass('vu-switch')).to.be.true
    expect(wrapper.hasClass('vu-switch--default')).to.be.true

    // const switchDom = wrapper.find('.vu-switch')[0]
    wrapper.trigger('click')

    wrapper.vm.$nextTick(() => {
        expect(wrapper.hasClass('vu-loading--checked')).to.be.true
    })
  });
  
  it('create a large switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        size: 'large'
      }
    });

    expect(wrapper.hasClass('vu-switch--large')).to.be.true;
  });
  
  it('create a small switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        size: 'small'
      }
    });

    expect(wrapper.hasClass('vu-switch--small')).to.be.true;
  });
  
  it('create a disabled switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.hasClass('is-disabled')).to.be.true;

    wrapper.trigger('click')
    wrapper.vm.$nextTick(() => {
        expect(wrapper.hasClass('vu-loading--checked')).to.be.false;
    })
  });
  
  it('create a checked switch', () => {
    wrapper = mount(Switch, {
      propsData: {
        value: true
      }
    });

    expect(wrapper.hasClass('vu-switch--checked')).to.be.true;

    wrapper.trigger('click')
    wrapper.vm.$nextTick(() => {
        expect(wrapper.hasClass('vu-loading--checked')).to.be.false;
    })
  });
});
