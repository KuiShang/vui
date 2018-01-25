import Vue from 'vue';
import VueToast from './src/toast';

let instance;

const defaultOptions = {
  type: 'text',
  mask: false,
  visible: true,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  clear: () => {
    instance.visible = false;
  }
};

const createInstance = () => {
  if (!instance) {
    const ToastConstructor = Vue.extend(VueToast);
    instance = new ToastConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
  }
};

const VuToast = (options = {}) => {
  createInstance();

  options = typeof options === 'object' ? options : { message: options };
  options = { ...defaultOptions, ...options };
  Object.assign(instance, options);

  clearTimeout(instance.timer);

  if (options.duration !== 0) {
    instance.timer = setTimeout(() => {
      instance.clear();
    }, options.duration);
  }

  return instance;
};

const createMethod = type => (options = {}) => VuToast({
  type,
  message: typeof options === 'object' ? options.message : options,
  ...options
});

VuToast.loading = createMethod('loading');
VuToast.success = createMethod('success');
VuToast.fail = createMethod('fail');
VuToast.clear = () => {
  instance && instance.clear();
};

Vue.prototype.$toast = VuToast;

export default VuToast;
