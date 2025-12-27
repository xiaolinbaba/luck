import Layout from '@/layout/index.vue'
import i18n from '@/locales/i18n'
import Home from '@/views/Home/index.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const envMode = import.meta.env.MODE

// 导出配置路由的 children，供 Config/index.vue 使用
export const configRoutesChildren = [
  {
    path: '',
    redirect: '/config/person',
  },
  {
    path: '/config/person',
    name: 'PersonConfig',
    component: () => import('@/views/Config/Person/PersonConfig.vue'),
    meta: {
      title: i18n.global.t('sidebar.personConfiguration'),
      icon: 'person',
    },
    children: [
      {
        path: '',
        redirect: '/config/person/all',
      },
      {
        path: '/config/person/all',
        name: 'AllPersonConfig',
        component: () => import('@/views/Config/Person/PersonAll.vue'),
        meta: {
          title: i18n.global.t('sidebar.personList'),
          icon: 'all',
        },
      },
      {
        path: '/config/person/already',
        name: 'AlreadyPerson',
        component: () => import('@/views/Config/Person/PersonAlready.vue'),
        meta: {
          title: i18n.global.t('sidebar.winnerList'),
          icon: 'already',
        },
      },
    ],
  },
  {
    path: '/config/prize',
    name: 'PrizeConfig',
    component: () => import('@/views/Config/Prize/PrizeConfig.vue'),
    meta: {
      title: i18n.global.t('sidebar.prizeConfiguration'),
      icon: 'prize',
    },
  },
  {
    path: '/config/global',
    name: 'GlobalConfig',
    redirect: '/config/global/all',
    meta: {
      title: i18n.global.t('sidebar.globalSetting'),
      icon: 'global',
    },
    children: [
      {
        path: '/config/global/face',
        name: 'FaceConfig',
        component: () => import('@/views/Config/Global/FaceConfig.vue'),
        meta: {
          title: i18n.global.t('sidebar.viewSetting'),
          icon: 'face',
        },
      },
      {
        path: '/config/global/image',
        name: 'ImageConfig',
        component: () => import('@/views/Config/Global/ImageConfig.vue'),
        meta: {
          title: i18n.global.t('sidebar.imagesManagement'),
          icon: 'image',
        },
      },
      {
        path: '/config/global/music',
        name: 'MusicConfig',
        component: () => import('@/views/Config/Global/MusicConfig.vue'),
        meta: {
          title: i18n.global.t('sidebar.musicManagement'),
          icon: 'music',
        },
      },
    ],
  },
  {
    path: '/config/readme',
    name: 'Readme',
    component: () => import('@/views/Config/Readme/index.vue'),
    meta: {
      title: i18n.global.t('sidebar.operatingInstructions'),
      icon: 'readme',
    },
  },
]

// 使用根路径路由配置（适用于 file 模式和 Cloudflare Pages 部署）
const rootRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/Demo/index.vue'),
      },
      {
        path: '/config',
        name: 'Config',
        component: () => import('@/views/Config/index.vue'),
        children: configRoutesChildren,
      },
    ],
  },
]
// 在 file 模式下使用 hash 路由，其他模式使用 history 路由
const finalRoutes = rootRoutes

const router = createRouter({
  // 读取环境变量：file 模式使用 hash 路由，其他模式使用 history 路由
  history: envMode === 'file' ? createWebHashHistory() : createWebHistory(),
  routes: finalRoutes,
})

export default router
