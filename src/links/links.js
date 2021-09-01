import s from './links.module.css';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import React from 'react';

export let Links = (props) => {
    return (
        <div className={s.links}>
            <a className={s.lnk} target='__blank' href='https://github.com/Byeraon'><div className={s.link}><GithubOutlined style={{ fontSize: '40px' }} />  </div></a>
            <div onClick={props.setCard} className={s.link + ' ' + s.lnk}>Contact</div>
            <a className={s.lnk} target='__blank' href='https://www.instagram.com/byeraon/'><div className={s.link}><InstagramOutlined style={{ fontSize: '40px' }} /></div></a>
        </div>
    )
}