import jsonp from '../utils/jsonp';
import { commonParams, options } from './config';
import axios from 'axios';

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
  });

  return jsonp(url, data, options);
}

export function getDiscList() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg';

  const data = Object.assign({}, commonParams, {
    jsonpCallback: 'recom7842231101288446',
    callback: 'recom7842231101288446',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    format: 'jsonp',
    data: '{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"QQMusic.MusichallServer","method":"GetNewSong","param":{"type":0}},"new_album":{"module":"QQMusic.MusichallServer","method":"GetNewAlbum","param":{"type":0,"category":"-1","genre":0,"year":1,"company":-1,"sort":1,"start":0,"end":39}},"toplist":{"module":"music.web_toplist_svr","method":"get_toplist_index","param":{}},"focus":{"module":"QQMusic.MusichallServer","method":"GetFocus","param":{}}}',

  });

  return jsonp(url, data, {
    param: 'callback',
  });
}

/**
 *
 * 调用qq音乐pc端首页的接口基本加载了首页的所有数据
 */

export function getCDInfo(disstid) {
  const url = '/api/getCDInfo';
  const data = Object.assign({}, commonParams, {
    disstid,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    format: 'json',
    needNewCode: 0,
  });
  return axios.get(url, {
    params: data,
  });
}

