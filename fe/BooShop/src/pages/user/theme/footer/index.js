import { memo } from 'react';
import './style.scss';
import LOGO from "assest/Logo_web.png"
import { Link } from 'react-router-dom';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return <footer className="footer">
    <div className='container'>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="footer_about">
            <img src={LOGO} alt="" className="footer_about_logo"/>
            <ul>
              <li>Địa chỉ: 831-Quốc lộ 20-Liên Nghĩa-Đức Trọng-Lâm Đồng</li>
              <li>Phone: 0369577790</li>
              <li>Email: boo19012003@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="footer_widget">
            <h6>Cửa hàng</h6>
            <ul>
              <li>
                <Link to="">Liên hệ</Link>
              </li>
              <li>
                <Link to="">Thông tin về chúng tôi</Link>
              </li>
              <li>
                <Link to="">Sản phẩm kinh doanh</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">Thông tin tài khoản</Link>
              </li>
              <li>
                <Link to="">Giỏ hàng</Link>
              </li>
              <li>
                <Link to="">Danh sách ưa thích</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <div className="footer_widget">
            <h6>Khuyễn mãi & ưu đãi</h6>
            <p>Đăng ký nhận thông tin tại đây</p>
            <form action="">
              <div className="input_group">
                <input type="text" placeholder="Nhập email " />
                <button type="submit" className="button_submit">Đăng ký</button>
              </div>
              <div className="footer_widget_social">
                <div>
                  <AiOutlineFacebook />
                </div>
                <div>
                  <AiOutlineInstagram />
                </div>
                <div>
                  <AiOutlineLinkedin />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>;
}

export default memo(Footer);