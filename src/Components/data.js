import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { FaHome, FaRegBell, FaSlidersH, FaEnvelope } from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: '#',
    icon: <FaHome/>,
  },
  {
    id: 2,
    url: '#',
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    url: '#',
    icon: <AiFillSetting />,
  },
  {
    id: 4,
    url: '#',
    icon: <><FaUserAlt /> &nbsp;&nbsp; Admin</>,
  },
]

export const users = [
  {
    id: 1,
    name: 'JackAndJill',
    email: 'jack@gmail.com',
    status : 'Active',
  },
  {
    id: 2,
    name: 'AliceareyouGood',
    email: 'alice@gmail.com',
    status : 'Running',
  },
  {
    id: 3,
    name: 'BobtheBuilder',
    email: 'bob@gmail.com',
    status : 'Active',
  },
  {
    id: 4,
    name: 'DuckDuckGo',
    email: 'duck@gmail.com',
    status : 'Removed',
  },
  
]
