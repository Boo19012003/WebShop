import React, { useState, memo } from 'react';
import './style.scss';
import { formatter } from 'utils/formater';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import img
import cate_1 from 'assest/cate_1.jpg';
import cate_2 from 'assest/cate_2.jpg';
import cate_3 from 'assest/cate_3.jpg';
import cate_4 from 'assest/cate_4.jpg';
import cate_5 from 'assest/cate_5.jpg';
import cate_6 from 'assest/cate_6.jpg';
import sp2 from 'assest/fruit/fruit_10.jpg';
import sp3 from 'assest/fruit/fruit_9.jpg';
import sp5 from 'assest/fruit/fruit_11.jpg';
import sp6 from 'assest/fruit/fruit_12.jpg';
import sp22 from 'assest/fruit/fruit_13.jpg';
import fire from 'assest/fire.png';
import banner from 'assest/banner_section_3.jpg';
import ngori from 'assest/vegetable/vegetable_14.jpg';
import daucove from 'assest/vegetable/vegetable_10.jpg';
import cachua from 'assest/vegetable/vegetable_6.jpg';
import bidao from 'assest/vegetable/vegetable_4.jpg';
import daubap from 'assest/vegetable/vegetable_8.jpg';

const HomePage = () => {

  const listProduct_1 = [
    {
      img: cate_1,
      name: 'Trứng và bơ'
    },
    {
      img: cate_2,
      name: 'Thực phẩm khô'
    },
    {
      img: cate_3,
      name: 'Thịt tươi sống'
    },
    {
      img: cate_4,
      name: 'Trái cây'
    },
    {
      img: cate_5,
      name: 'Rau củ quả'
    },
    {
      img: cate_6,
      name: 'Nước ép'
    }
  ];
  const listProduct_2 = [
    {
      img: sp22,
      name: 'Ổi lê ruột đỏ',
      price: 20000,
      oldPrice: 50000
    },
    {
      img: sp2,
      name: 'Đào đỏ Mỹ',
      price: 40000,
      oldPrice: 60000
    },
    {
      img: sp3,
      name: 'Dâu tây',
      price: 138000,
      oldPrice: 238000
    },
    {
      img: sp5,
      name: 'Cam mật',
      price: 98000,
      oldPrice: 132000
    },
    {
      img: sp6,
      name: 'Chanh tươi vỏ xanh',
      price: 30000,
      oldPrice: 38000
    },
  ];
  const listProduct_3 = [
    {
      img: ngori,
      name: 'Ngò rí',
      price: 25000,
      oldPrice: 21000
    },
    {
      img: daucove,
      name: 'Đậu cove',
      price: 55000,
      oldPrice: 47000
    },
    {
      img: cachua,
      name: 'Ca chua',
      price: 55000,
      oldPrice: 50000
    },
    {
      img: bidao,
      name: 'Bí đao',
      price: 44000,
      oldPrice: 42500
    },
    {
      img: daubap,
      name: 'Đậu bắp',
      price: 33000,
      oldPrice: 31000
    }
  ];
  const [likedItems, setLikedItems] = useState({});

  const icon = [
    { icon: <FaRegHeart /> },
    { icon: <FaHeart /> }
  ];

  const handleIconClick = (productId) => {
    setLikedItems(prevLikedItems => ({
      ...prevLikedItems,
      [productId]: !prevLikedItems[productId]
    }));
  };

  function indexSwiper (thamSo) {
    const chieuRongManHinh = window.innerWidth;
  
    const nguongNho = 768;
    const nguongTrungBinh = 1024;
  
    if (chieuRongManHinh < nguongNho) {
      thamSo = "giaTriChoManHinhNho";
    } else if (chieuRongManHinh < nguongTrungBinh) {
      thamSo = "giaTriChoManHinhTrungBinh";
    } else {
      thamSo = "giaTriChoManHinhLon";
    }
  
    return thamSo;
  }

  return (
    <>
    <div className='section-1'>
      <div className="container ">
        <div className="cate">
          <div className="swiper_container ">
              <Swiper
                slidesPerView={5.98}
                spaceBetween={0}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                  430: {
                    slidesPerView: 1.98,
                  },
                  768: {
                    slidesPerView: 2.98,
                  },
                  1024: {
                    slidesPerView: 3.98,
                  },
                  1200: {
                    slidesPerView: 4.98,
                  },
                }}
              >
                {listProduct_1.map((item, key) => (
                  <SwiperSlide>
                    <div key={key} className="cate_item col-md-6">
                      <img src={item.img} alt='' />
                      <h3>{item.name}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div className="section-2">
      <div className="container ">
        <div className="product">
          <div className="block_title">
            <h2>
              <a href="san-pham-giam-gia" >
                <img src={fire} alt="" />
                Ưu đãi hấp dẫn
              </a>
            </h2>
          </div>
          <div className="block_product">
            <div className="product_block_item">
              <Swiper
                slidesPerView={4.98}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                  430: {
                    slidesPerView: 1.98,
                  },
                  768: {
                    slidesPerView: 2.98,
                  },
                  1024: {
                    slidesPerView: 3.98,
                  },
                  1200: {
                    slidesPerView: 4.98,
                  },
                }}
                className="mySwiper"
              >
                {listProduct_2.map((item, key) => (
                  <SwiperSlide>
                    <div className={`product_item ${key === listProduct_2.length - 1 ? 'last-item' : ''}`}>
                      <img src={item.img} alt="" />
                      <div className="product_action">
                        <i 
                          className="icon_action" 
                          onClick={() => handleIconClick(key)}
                        >
                          {likedItems[key] ? icon[1].icon : icon[0].icon} 
                        </i>
                      </div>
                      <div className="product_info">
                        <a href='Oi-len-ruot-do' className="item_product_name">{item.name}</a>
                        <div className="product_price">
                          <span className="price">{formatter(item.price)}</span>
                          <span className="old_price">{formatter(item.oldPrice)}</span>
                        </div>
                        <button type='submit' className='button'>Mua</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-3">
      <div className="container ">
        <div className="box_section">
          <div className="banner">
            <img src={banner} alt="" />
            <div className="conten_banner">
              <h2>Bán chạy nhất hàng ngày</h2>
              <p className="title_banner_1">Ưu đãi độc quyền - giảm giá 20%</p>
              <p className="title_banner_2">Mua sắm thoải mãi chỉ từ {formatter(20000)}</p>
              <p className="title_banner_3">Chỉ trong tuần này đừng bỏ lỡ...</p>
              <a href="san-pham-noi-bat">Mua ngay</a>
            </div>
          </div>
          <div className="product_3">
            <div className="box_product">
                <Swiper
                  slidesPerView={4}
                  freeMode={true}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    430: {
                      slidesPerView: 1.98,
                    },
                    768: {
                      slidesPerView: 2.98,
                    },
                    1024: {
                      slidesPerView: 3.98,
                    },
                    1200: {
                      slidesPerView: 4.98,
                    },
                  }}
                >
                  {listProduct_3.map((item, key) => (
                    <SwiperSlide>
                      <div className={`product_item ${key === listProduct_3.length - 1 ? 'last-item' : ''}`}>
                        <img src={item.img} alt="" />
                        <div className="product_action">
                          <i className="icon_action" onClick={() => handleIconClick(key)}>
                            {likedItems[key] ? icon[1].icon : icon[0].icon} 
                          </i>
                        </div>
                        <div className="product_info">
                          <a href='san-pham-noi-bat' className="item_product_name">{item.name}</a>
                          <div className="product_price">
                            <span className="price">{formatter(item.price)}</span>
                            <span className="old_price">{formatter(item.oldPrice)}</span>
                          </div>
                          <button type='submit' className='button'>Mua</button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default memo(HomePage);