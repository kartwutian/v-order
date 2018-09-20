import Vue from 'vue';
import ConfirmModule from './confirm.vue';

const ConfirmConstructor = Vue.extend(ConfirmModule);

const instance = new ConfirmConstructor({
  el: document.createElement('div'),
});

const hashChange = function () {
  $utils.pageScroll.unlock();

  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};

ConfirmConstructor.prototype.closeConfirm = function (stay, callback) {
  typeof callback === 'function' && callback();

  if (stay) return;

  $utils.pageScroll.unlock();

  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  window.removeEventListener('hashchange', hashChange);
};

const Confirm = (options = {}) => {
  instance.mes = options.mes || '';
  instance.title = options.title || '提示';
  instance.opts = options.opts;

  window.addEventListener('hashchange', hashChange);

  document.body.appendChild(instance.$el);

  $utils.pageScroll.lock();
};

export default Confirm;
