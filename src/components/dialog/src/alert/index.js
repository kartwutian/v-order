import Vue from 'vue';
import AlertModule from './alert.vue';

const AlertConstructor = Vue.extend(AlertModule);


const instance = new AlertConstructor({
  el: document.createElement('div'),
});

const hashChange = function () {
  $utils.pageScroll.unlock();

  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};

AlertConstructor.prototype.closeAlert = function () {
  $utils.pageScroll.unlock();

  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  window.removeEventListener('hashchange', hashChange);

  typeof this.callback === 'function' && this.callback();
};

const Alert = (options = {}) => {
  instance.mes = options.mes;
  instance.callback = options.callback;
  window.addEventListener('hashchange', hashChange);

  document.body.appendChild(instance.$el);

  $utils.pageScroll.lock();
};

export default Alert;
