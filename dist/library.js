'use strict';

var vue = require('vue');

var script$1 = {
  name: 'PrimaryButton',
};

const _hoisted_1$1 = { class: "btn" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", _hoisted_1$1, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$1.render = render$1;
script$1.__file = "src/PrimaryButton.vue";

var script = {
  name: 'TextField',
};

const _hoisted_1 = { class: "text" };
const _hoisted_2 = /*#__PURE__*/vue.createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    vue.createElementVNode("label", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script.render = render;
script.__file = "src/TextField.vue";

var components = { PrimaryButton: script$1, TextField: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
