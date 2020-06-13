import React, {useState, useEffect} from 'react'
import '../public/style/components/header.css'
import {Row,Col,Menu} from 'antd'
import Head from 'next/head';
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/api'


const Header = () => {
    const [navList, setnavList] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const res = await axios(servicePath.getType).then(d => {
                return d.data.data
            })
            setnavList(res)
        }
        fetchData()
    },[])

    const handleClick = (e) => {
        if(e.key == 0) {
            Router.push('/')
        }else {
            Router.push('/list?id='+e.key)
        }
    }

    return (
        <div className='header'>
            <Row type='flex' justify='center'>
                <Col xs={24} sm={24} md={8} lg={8} xl={11}>
                    <span className='header-logo'>咕噜先森</span>
                    <span className='header-text'>专注前端学习</span>
                </Col>
                <Col xs={0} sm={0} md={16} lg={15} xl={7}>
                    <Menu mode='horizontal' onClick={handleClick}>
                        <Menu.Item key='0'>
                            首页
                        </Menu.Item>
                        {
                            navList.map(i => {
                                return (
                                    <Menu.Item key={i.id}>
                                        {i.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )

}

export default Header