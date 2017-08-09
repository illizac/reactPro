import { put } from 'redux-saga/effects'
import { getMenu } from '../createAction.js'

const testMenu = [
    {
        type: 'setting',
        text: '系统管理',
        subMenu: [
            {
                path: '/home/userManage',
                text: '用户管理'
            },{
                path: '/',
                text: '角色管理'
            },{
                path: '/',
                text: '菜单管理'
            },{
                path: '/',
                text: '机构管理'
            }
        ]
    },
    {
        type: 'laptop',
        text: '我的面板',
        subMenu: [
            {
                path: '/',
                text: '个人信息'
            },{
                path: '/',
                text: '修改密码'
            }
        ]
    },
    {
        type: 'user',
        text: '用户管理',
        subMenu: [
            {
                path: '/',
                text: '商家用户管理'
            },{
                path: '/',
                text: '微信用户管理'
            }
        ]
    },
    {
        type: 'solution',
        text: '账单管理',
        subMenu: [
            {
                path: '/',
                text: '账单管理'
            }
        ]
    },
    {
        type: 'shop',
        text: '店铺管理',
        subMenu: [
            {
                path: '/',
                text: '店铺管理'
            }
        ]
    },
    {
        type: 'wallet',
        text: '卡包管理',
        subMenu: [
            {
                path: '/',
                text: '卡包管理'
            }
        ]
    },
    {
        type: 'tool',
        text: '店铺审核',
        subMenu: [
            {
                path: '/',
                text: '店铺审核'
            }
        ]
    },
    {
        type: 'pay-circle',
        text: '结算管理',
        subMenu: [
            {
                path: '/',
                text: '提现审核'
            }
        ]
    },
    {
        type: 'credit-card',
        text: '银行卡管理',
        subMenu: [
            {
                path: '/',
                text: '银行卡管理'
            }
        ]
    },
    {
        type: 'qrcode',
        text: '二维码管理',
        subMenu: [
            {
                path: '/',
                text: '二维码管理'
            }
        ]
    },
    {
        type: 'pie-chart',
        text: '统计',
        subMenu: [
            {
                path: '/',
                text: '店铺分析'
            },{
                path: '/',
                text: '用户分析'
            },{
                path: '/',
                text: '账单分析'
            }
        ]
    },
    {
        type: 'team',
        text: '公众管理',
        subMenu: [
            {
                path: '/',
                text: '微信公众号管理'
            },{
                path: '/',
                text: '自定义菜单'
            },{
                path: '/',
                text: '欢迎关注'
            }
        ]
    },
    {
        type: 'line-chart',
        text: '基础数据维护',
        subMenu: [
            {
                path: '/',
                text: '基础数据维护'
            }
        ]
    }
]

export function* getSideMenu() {
  yield put(getMenu(testMenu))
}