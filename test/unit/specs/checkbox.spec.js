import { mount } from 'avoriaz'
import Checkbox from 'packages/checkbox'
import CheckboxTestComponent from '../components/checkbox'
/*eslint-disable*/
describe('CheckboxGroup', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a checkbox-group', () => {
    wrapper = mount(CheckboxTestComponent)

    expect(wrapper.hasClass('vu-checkbox-group')).to.be.true

    expect(wrapper.vNode.child.value.length).to.equal(2)
    expect(wrapper.vNode.child.disabled).to.be.false
  })

  it('emit a change event', (done) => {
    wrapper = mount(CheckboxTestComponent)
    expect(wrapper.vNode.child.value.length).to.equal(2)
    const eventStub = sinon.stub(wrapper.vNode.child, '$emit')

    wrapper.setData({
      'result': ['a']
    })
    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vNode.child.value.length).to.equal(1)
      expect(eventStub.calledOnce).to.be.true
      expect(eventStub.calledWith('change'))
      done()
    })
  })

  it('click on checked checkbox', (done) => {
    wrapper = mount(CheckboxTestComponent)

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit')

    const firstCheckboxLabel = wrapper.find('.vu-checkbox')[0].find('.vu-checkbox__label')[0]
    firstCheckboxLabel.trigger('click')

    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true
      expect(eventStub.calledWith('input'))
      done()
    })
  })

  it('click on unchecked checkbox', (done) => {
    wrapper = mount(CheckboxTestComponent)

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit')

    const lastCheckboxLabel = wrapper.find('.vu-checkbox')[3].find('.vu-checkbox__label')[0]
    lastCheckboxLabel.trigger('click')

    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true
      expect(eventStub.calledWith('input'))
      done()
    })
  })

  it('click on disabled item', (done) => {
    wrapper = mount(CheckboxTestComponent)

    const eventStub = sinon.stub(wrapper.vNode.child, '$emit')

    const disabledLabel = wrapper.find('.vu-checkbox')[2].find('.vu-checkbox__label')[0]
    disabledLabel.trigger('click')

    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.false
      expect(wrapper.vm.result.indexOf('c')).to.equal(-1)
      done()
    })
  })
})

describe('Checkbox', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: true,
        disabled: false
      }
    })

    expect(wrapper.hasClass('vu-checkbox')).to.be.true
    expect(wrapper.vm.currentValue).to.be.true
    expect(wrapper.vm.isDisabled).to.be.false
    expect(wrapper.vm.isChecked).to.be.true
  })

  it('create a checkbox with name', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        name: 'a',
        disabled: false
      }
    })

    expect(wrapper.hasClass('vu-checkbox')).to.be.true
    expect(!!wrapper.vm.isChecked).to.be.false
  })

  it('create a not boolean value checkbox', (done) => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: 'test',
        name: 'test'
      }
    })

    expect(wrapper.hasClass('vu-checkbox')).to.be.true
    expect(wrapper.vm.currentValue).to.equal('test')
    expect(wrapper.vm.isDisabled).to.be.false
    expect(wrapper.vm.isChecked).to.be.true

    wrapper.vm.value = null
    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.currentValue).to.equal(null)
      done()
    })
  })

  it('click on a checkbox', (done) => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        disabled: false
      }
    })

    expect(wrapper.hasClass('vu-checkbox')).to.be.true
    const eventStub = sinon.stub(wrapper.vm, '$emit')

    const checkboxLabel = wrapper.find('.vu-checkbox__label')[0]
    checkboxLabel.trigger('click')

    wrapper.update()
    wrapper.vm.$nextTick(() => {
      expect(eventStub.calledOnce).to.be.true
      expect(eventStub.calledWith('input'))
      done()
    })
  })

  it('click on a disabled checkbox', () => {
    wrapper = mount(Checkbox, {
      propsData: {
        value: false,
        disabled: true
      }
    })

    expect(wrapper.hasClass('vu-checkbox')).to.be.true
    expect(wrapper.hasClass('is-disabled')).to.be.true
    expect(wrapper.vm.currentValue).to.be.false
    expect(wrapper.vm.isDisabled).to.be.true

    const checkboxLabel = wrapper.find('.vu-checkbox__label')[0]
    checkboxLabel.trigger('click')
    wrapper.update()
    expect(wrapper.vm.currentValue).to.be.false
  })
})
