<template>
  <transition name="vu-fade">
    <div class="vu-toast-wrapper" v-show="visible">
      <div class="vu-toast" :class="[`vu-toast--${displayStyle}`, `vu-toast--${position}`]">
        <!-- text only -->
        <div v-if="displayStyle === 'text'">{{ message }}</div>
        <div v-if="displayStyle === 'html'" v-html="message" />

        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <loading v-if="type === 'loading'" color="white" />
          <icon-button v-else class="vu-toast__icon" :name="type" />
          <div v-if="message !== undefined" class="vu-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="vu-toast__overlay" :class="{ 'vu-toast__overlay--mask': mask }" v-if="forbidClick || mask" />
    </div>
  </transition>
</template>

<script>
  const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading'];
  import IconButton from 'vui/packages/icon-button';
  import Loading from 'vui/packages/loading';


  export default {
    name: 'VuToast',

    components: {
      IconButton,
      Loading
    },
    props: {
      mask: Boolean,
      message: [String, Number],
      forbidClick: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      position: {
        type: String,
        default: 'middle'
      }
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
      displayStyle() {
        return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type;
      }
    }
  };
</script>
