import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'
import {
    GithubOutlined,
    WechatOutlined,
    QqOutlined,
  } from "@ant-design/icons";

const Author = ()=> {
    return (
        <div className='author-div comm-box'>
            <div>
                <Avatar size={100} src='http://wanghuagang.cn/images/psb.jpg'></Avatar>
            </div>
            <div className='author-introduction'>
                前端开发小白
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined/>} className='account' />
                <Avatar size={28} icon={<QqOutlined/>} className='account' />
                <Avatar size={28} icon={<WechatOutlined/>} className='account' />
            </div>
        </div>
    )
}

export default Author