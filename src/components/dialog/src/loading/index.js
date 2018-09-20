import Vue from 'vue';
import LoadingModule from './loading';

const LoadingConstructor = Vue.extend(LoadingModule);

const instance = new LoadingConstructor({
  el: document.createElement('div'),
});

LoadingConstructor.prototype.open = (title) => {
  instance.title = title || '加载中';

  document.body.appendChild(instance.$el);

  $utils.pageScroll.lock();
};

LoadingConstructor.prototype.close = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  $utils.pageScroll.unlock();
};

export default {
  open: instance.open,
  close: instance.close,
};

