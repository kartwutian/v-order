import axios from 'axios';
import jsonp from '../utils/jsonp';

export function queryTest(options) {
  return jsonp('http://list.ydui.org/getdata.php?type=backposition', {
    page: options.page,
    pagesize: options.pageSize,
  });
}

export function refreshTest(options) {
  return jsonp('http://list.ydui.org/getdata.php', {
    type: 'pulldown',
    page: 1,
  });
}
