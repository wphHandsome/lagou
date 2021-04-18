import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b914365 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _7dc20fda = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3ab833ce = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _46a148ce = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _1ec7e19e = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _0fc269a8 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _2d6b8c1b = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1b914365,
    children: [{
      path: "",
      component: _7dc20fda,
      name: "home"
    }, {
      path: "/login",
      component: _3ab833ce,
      name: "login"
    }, {
      path: "/register",
      component: _3ab833ce,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _46a148ce,
      name: "profile"
    }, {
      path: "/settings",
      component: _1ec7e19e,
      name: "settings"
    }, {
      path: "/editor",
      component: _0fc269a8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2d6b8c1b,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
