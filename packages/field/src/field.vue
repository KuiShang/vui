<template>
  <VuCell
    :title="label"
    :required="required"
    class="vu-field"
    :class="{
      'vu-field--has-textarea': type === 'textarea',
      'vu-field--nolabel': !label,
      'vu-field--disabled': $attrs.disabled,
      'vu-field--error': error,
      'vu-field--border': border,
      'vu-field--autosize': autosize,
      'vu-field--has-icon': hasIcon,
      'vu-hairline--surround': border
    }"
  >
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      v-on="listeners"
      ref="textarea"
      class="vu-field__control"
      :value="value"
    />
    <input
      v-else
      v-bind="$attrs"
      v-on="listeners"
      class="vu-field__control"
      :type="type"
      :value="value"
    >
    <div
      v-if="errorMessage"
      v-text="errorMessage"
      class="vu-field__error-message"
    />
    <div
      v-if="hasIcon"
      v-show="$slots.icon || value"
      class="vu-field__icon"
      @touchstart.prevent="onClickIcon"
    >
      <slot name="icon">
        <VuIconButton :name="icon" />
      </slot>
    </div>
  </VuCell>
</template>

<script>
import VuCell from 'vui/packages/cell';
import VuIconButton from 'vui/packages/icon-button';

export default({
  name: 'VuField',

  inheritAttrs: false,

  components: {
    VuCell,
    VuIconButton
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {},
    icon: String,
    label: String,
    error: Boolean,
    border: Boolean,
    required: Boolean,
    autosize: Boolean,
    errorMessage: String,
    onIconClick: {
      type: Function,
      default: () => {}
    }
  },

  watch: {
    value() {
      if (this.autosize && this.type === 'textarea') {
        this.$nextTick(this.adjustSize);
      }
    }
  },

  mounted() {
    if (this.autosize && this.type === 'textarea') {
      const el = this.$refs.textarea;
      const scrollHeight = el.scrollHeight;
      if (scrollHeight !== 0) {
        el.style.height = scrollHeight + 'px';
      }
      el.style.overflowY = 'hidden';
    }
  },

  computed: {
    hasIcon() {
      return this.$slots.icon || this.icon;
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onClickIcon() {
      console.log(123)
      this.$emit('click-icon');
      this.onIconClick();
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = this.value.indexOf('.') === -1;
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint);
        if (!isValidKey) {
          event.preventDefault();
        }
      }
      this.$emit('keypress', event);
    },

    adjustSize() {
      const el = this.$refs.textarea;
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }
});
</script>
