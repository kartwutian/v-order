const Lazy = require('common/utils/lazy');

const ob = Lazy.lazy({
  rootMargin: '10px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
});
const ob_slow = Lazy.lazy({
  rootMargin: '10px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  load: function load(element) {
    if (element.getAttribute('data-src')) {
      element.src = element.getAttribute('data-src');
    }
    if (element.getAttribute('data-srcset')) {
      element.srcset = element.getAttribute('data-srcset');
    }
    if (element.getAttribute('data-background-image')) {
      element.style.backgroundImage = `url(${element.getAttribute('data-background-image')})`;
    }
    element.onload = function () {
      this.className += ' m-lazy-img-loaded';
    };
    element.onerror = function () {
      this.src = 'http://static.ydcss.com/uploads/ydui/2.jpg';
      this.className += ' m-lazy-img-loaded';
    };
  },
});


export default function (Vue) {
  // 注册一个全局自定义指令 `v-lazy`
  Vue.directive('lazy', {
    bind(el) {
      // 观察元素
      ob.observe(el);
    },
    update(el) {
      ob.observe(el);
    },
  });
  Vue.directive('lazy-slow', {
    bind(el) {
      // 观察元素
      ob_slow.observe(el);
    },
    update(el) {
      ob_slow.observe(el);
    },
  });
  Vue.directive('tapmode', {
    bind(el) {
      el.addEventListener('touchstart', (e) => {
        el.style.opacity = '.6';
        setTimeout(() => {
          el.style.opacity = '1';
        }, 100);
      });
    },
  });
}
