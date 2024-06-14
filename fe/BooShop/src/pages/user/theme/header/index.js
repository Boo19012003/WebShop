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
import LOGO from "assest/Logo_web.png"
import { ROUTERS } from 'utils/router';
import React, { useState } from 'react';
import banner1 from "assest/banner.png";
import banner2 from "assest/banner2.png";
import banner3 from "assest/banner3.png";
import banner2_1 from "assest/banner2_1.png";
import banner2_2 from "assest/banner2_2.png";
import banner2_3 from "assest/banner2_3.jpg";
import overlayImage from "assest/img.png";

const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(banner1);
  const [menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
      banner: banner1,
    },
    {
      name: "Sản phẩm",
      path: ROUTERS.USER.PRODUCTS,
      banner: banner2,
      isShowSubMenu: false,
      Child: [
        {
          name: "Rau củ",
          path: "",
          banner: banner2_1,
        },
        {
          name: "Trái cây",
          path: "",
          banner: banner2_2,
        },
        {
          name: "Hoa",
          path: "",
          banner: banner2_3,
        }
      ],
    },
    {
      name: "Giới thiệu",
      path: ROUTERS.USER.INFO,
      banner: banner3,
    }
  ]);

  const handleMouseEnter = (menu) => {
    setCurrentBanner(menu.banner);
  };

  return (
    <>
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left">
            <ul>
              <li><IoIosMail /></li>
              <li>boo19012003@gmail.com</li>
              <li>Rau sạch tươi ngon, trọn vị thiên nhiên. </li>
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
    <div className='container '>
      <div className='row'>
        <div className='col-xl-3'>
          <nav className='header_menu'>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
              {menus?.map((menu, menuKey) => (
                  <li key={menuKey} onClick={() => handleMouseEnter(menu)} className={menuKey === 0 ? "active" : ""}>
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
              <li className='fa-search-icon'><FaSearch /></li>
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <ul>
              <li><FaShoppingCart /> <span>5</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='banner-container col-xs-12'>
      <img src={currentBanner} alt="" className='banner' />
      <img src={overlayImage} alt="" className='overlay' />
    </div>
    </>
  );
}

export default memo(Header);

