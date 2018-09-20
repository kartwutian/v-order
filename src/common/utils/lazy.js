/*! base on lozad.js - v1.0.9 - 2017-10-25
 * https://github.com/ApoorvSaxena/lozad.js
 * Copyright (c) 2017 Apoorv Saxena; Licensed MIT */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.lazy = factory());
}(this, (() => {
  const _extends = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
      const source = arguments[i];
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

  const defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
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
    },
  };

  function markAsLoaded(element) {
    element.setAttribute('data-loaded', true);
  }

  const isLoaded = function isLoaded(element) {
    return element.getAttribute('data-loaded') === 'true';
  };

  const onIntersection = function onIntersection(load) {
    return function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          observer.unobserve(entry.target);
          if (!isLoaded(entry.target)) {
            load(entry.target);
            markAsLoaded(entry.target);
          }
        }
      });
    };
  };

  const lazy = function (options) {
    options = options || {};
    let _defaultConfig$option = _extends({}, defaultConfig, options),
      rootMargin = _defaultConfig$option.rootMargin,
      threshold = _defaultConfig$option.threshold,
      load = _defaultConfig$option.load;

    let observer = void 0;

    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(onIntersection(load), {
        rootMargin,
        threshold,
      });
    }

    return {
      observe: function observe(element) {
        if (isLoaded(element)) {
          return;
        }
        if (observer) {
          element.style.minWidth = '1px';
          element.style.minHeight = '1px';
          observer.observe(element);
          return;
        }
        load(element);
        markAsLoaded(element);
      },
      triggerLoad: function triggerLoad(element) {
        if (isLoaded(element)) {
          return;
        }

        load(element);
        markAsLoaded(element);
      },
    };
  };

  return lazy;
})));
