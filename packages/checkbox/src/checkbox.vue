<template>
  <div
    class="checkbox"
    :class="[
      `checkbox--${shape}`, {
      'checkbox--disabled': isDisabled
    }]">
    <span class="checkbox__input">
      <input
        v-model="currentValue"
        type="checkbox"
        class="checkbox__control"
        :disabled="isDisabled"
      />
      <VUIcon name="success" />
    </span>
    <span class="checkbox__label" @click="onClickLabel">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import findParent from '../../../src/mixins/find-parent'
export default {
  name: 'VUCheckbox',
  mixins: [findParent],
  props: {
    value: {},
    disabled: Boolean,
    name: [String, Number],
    shape: {
      type: String,
      default: 'round'
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },
  computed: {
    // whether is in checkbox-group
    isGroup() {
      return !!this.findParentByName('VUCheckboxGroup');
    },

    currentValue: {
      get() {
        return this.isGroup && this.parentGroup ? this.parentGroup.value.indexOf(this.name) !== -1 : this.value;
      },

      set(val) {
        if (this.isGroup && this.parentGroup) {
          const parentValue = this.parentGroup.value.slice();
          if (val) {
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name);
              this.parentGroup.$emit('input', parentValue);
            }
          } else {
            const index = parentValue.indexOf(this.name);
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.parentGroup.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
      }
    },

    isChecked() {
      const { currentValue } = this;
      if ({}.toString.call(currentValue) === '[object Boolean]') {
        return currentValue;
      } else if (currentValue !== null && currentValue !== undefined) {
        return currentValue === this.name;
      }
    },

    isDisabled() {
      return (this.isGroup && this.parentGroup && this.parentGroup.disabled) || this.disabled;
    }
  },
  methods: {
    onClickLabel() {
      if (!this.isDisabled) {
        this.currentValue = !this.currentValue;
      }
    }
  }
}
</script>
