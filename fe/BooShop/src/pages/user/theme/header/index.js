import { memo } from 'react';
import './style.scss';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import LOGO from "assest/Logo.svg"
import { ROUTERS } from 'utils/router';
import React, { useState } from 'react';

const Header = () => {

  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCTS,
      isShowSubMenu: false,
      Child: [
        {
          name: "Rau củ",
          path: ""
        },
        {
          name: "Trái cây",
          path: ""
        },
        {
          name: "Hoa",
          path: ""
        }
      ],
    },
    {
      name: "Giới thiệu",
      path: ROUTERS.USER.INFO,
    }
  ]);

  return (
    <>
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left">
            <ul>
              <li><IoIosMail /></li>
              <li>boo19012003@gmail.com</li>
              <li>Rau Đà Lạt được trồng trong nhà kính </li>
            </ul>
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <FaFacebook /> 
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <MdAccountCircle />
                </Link>
              </li>
              <span>Đăng Nhập</span>
            </ul>
          </div>
        </div>
      </div >
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-3'>
          <nav className='header_menu'>
            <ul>
              {
                menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {
                      menu.Child && (
                        <ul className="header_menu_dropdown">
                          {
                            menu.Child.map((childItem, childKey) => (
                              <li key={`${menuKey}-${childKey}`}>
                                <Link to={childItem.path}>{childItem.name}</Link>
                              </li>
                            ))}
                        </ul>
                      )}
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className='col-xl-6'>
          <div className='header_logo'>
            <img src={LOGO} alt="" />
          </div>
        </div>
        <div className='col-xl-3'>
          <div className='header_card'>
            <div className="header_card_search">
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <ul>
              <li><FaSearch /></li>
              <li><FaShoppingCart /> <span>5</span> </li> 
              <li><IoMenu /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default memo(Header);