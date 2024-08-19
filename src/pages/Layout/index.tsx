/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-14 23:39:04
 */


import { user } from "@/api";
import enums from "@/enums";
import { useEffect, useState } from "react";
import { NavLink, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./index.css"
import { history } from "@/utils/history";
import { useUserStore } from "@/store";
import { isEmpty } from "lodash";


const Layout = () => {
    const { data, setUserInfo } = useUserStore();
    const [list, setList] = useState([
        {
            name: 'Home',
            path: '/home',
        },
        {
            name: 'Responsible',
            path: '/responsible'
        },
        {
            name: 'Participant',
            path: '/participant'
        },
        {
            name: 'Events',
            path: '/events',
        },
        {
            name: 'Tasks',
            path: '/tasks',
        },
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            key: 'logout',
        }
    ])
    const currentOutlet = useOutlet();

    useEffect(() => {
        setUserInfo?.()
    }, [])

    useEffect(() => {
        if (!isEmpty(data)) {
            if (data?.superAdmin) {
                // key logout before insert one user List
                list.splice(list.length - 1, 0, {
                    name: 'UserList',
                    path: '/userList'
                })
                setList([...list])
            }
        }
    }, [data])


    const onLogout = () => {
        user.logout().then(res => {
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                history.push('/user/login')
            }
        })
    }

    return <div className="w-screen h-screen overflow-auto overflow-x-hidden bg-[#F4F4F4]">
        <div className="h-14 bg-black text-white flex justify-center items-center">
            {
                list?.map((item: any, index) => {
                    return !item?.key ? <span
                        key={index}
                        className="cursor-pointer select-none"
                    ><NavLink

                        to={item.path}
                        className={({ isActive, isPending }) =>
                            (isPending ? "pending " : isActive ? "bg-gray-700 " : "") + "flex justify-center items-center px-5 py-3 hover:bg-gray-700"
                        }
                    >{item.name}</NavLink></span> : <span key={index} className="px-5 py-3 cursor-pointer" onClick={onLogout}>{item.name}</span>
                })
            }
        </div>
        <div className="w-3/4 m-auto">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={location.pathname}
                    appear={true}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {currentOutlet}
                </CSSTransition>
            </SwitchTransition>
        </div>
    </div>
}
export default Layout