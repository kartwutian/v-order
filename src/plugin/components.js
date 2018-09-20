/* 全局组件引入 */

import { Confirm, Alert, Toast, Notify, Loading, Preload, Notice } from 'components/dialog';
import { Layout } from 'components/layout';
import { Lazyload } from 'components/lazyload';
import { Badge, Dot } from 'components/badge';
import { BackTop } from 'components/backtop';
import { Button, ButtonGroup } from 'components/button';
import { ActionSheet } from 'components/actionsheet';
import { BScroll } from 'components/bscroll';
import Slide from 'components/slide/slide.vue';

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(Lazyload.name, Lazyload);
  Vue.component(Badge.name, Badge);
  Vue.component(Dot.name, Dot);
  Vue.component(BackTop.name, BackTop);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(ActionSheet.name, ActionSheet);
  Vue.component(BScroll.name, BScroll);
  Vue.component(Slide.name, Slide);

  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
    preload: Preload,
    notice: Notice,
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
