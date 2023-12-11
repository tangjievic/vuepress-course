import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '../docs/theme/lib/node'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '这是我的个人博客',
  description: '这是我的第一个 这是我的个人博客 站点',
  theme:defaultTheme({
    colorMode:'light',
    sidebar:{
        '/docs/':[
            {
                text: 'VuePress Reference',
                link:'',
            },
            {
                text: 'VuePress Reference',
                collapsible: true,
                children: [
                    {
                        text:'配置',
                        link:'/reference/cli.md'
                    }, 
                    '/reference/config.md'
                ],
            },
            {
                text: 'Bundlers Reference',
                collapsible: true,
                children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
            },
        ]
    },
    navbar:[
        {
            text: '文档',
            link: '/docs/',
            icon:'/desk.png'
        },
        {
            text: '文档x',
            link: '/docs/',
            icon:'/desk.png'
        },
    ],
    customFiled:'这是我自定义的一个功能字段',
    contributors:true,
    lastUpdated:true,
  }),
  dest:'./website'
})