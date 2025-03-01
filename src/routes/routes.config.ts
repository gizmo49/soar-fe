import React, { JSX } from 'react'

export interface RouteConfig {
  path: string
  name: string
  icon: string
  component: React.LazyExoticComponent<() => JSX.Element>
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Dashboard',
    icon: 'home',
    component: React.lazy(() => import('../features/Dashboard/Dashboard'))
  },
  {
    path: '/transfer',
    name: 'Transactions',
    icon: 'transfer',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/accounts',
    name: 'Accounts',
    icon: 'user',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/investments',
    name: 'Investments',
    icon: 'investment',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/credit-cards',
    name: 'Credit Cards',
    icon: 'credit',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/loans',
    name: 'Loans',
    icon: 'loan',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/services',
    name: 'Services',
    icon: 'service',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/privileges',
    name: 'My Privileges',
    icon: 'privileges',
    component: React.lazy(() => import('../features/Default/Default'))
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'bolt',
    component: React.lazy(() => import('../features/Settings/Settings'))
  }
]