import { memo } from 'react';
import './style.scss';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
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
                  <MdAccountCircle />
                </Link>
              </li>
              <span>Đăng Nhập</span>
            </ul>
          </div>
        </div>
      </div >
    </div>
  );
}

export default memo(Header);