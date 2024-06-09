import React, { useState, memo } from 'react';
import './style.scss';
import cate_1 from 'assest/cate_1.jpg';
import cate_2 from 'assest/cate_2.jpg';
import cate_3 from 'assest/cate_3.jpg';
import cate_4 from 'assest/cate_4.jpg';
import cate_5 from 'assest/cate_5.jpg';
import cate_6 from 'assest/cate_6.jpg';
import sp2 from 'assest/fruit/sp2.jpg';
import sp3 from 'assest/fruit/sp3.jpg';
import sp5 from 'assest/fruit/sp5.jpg';
import sp6 from 'assest/fruit/sp6.jpg';
import sp22 from 'assest/fruit/sp22.jpg';
import fire from 'assest/fire.png';
import { formatter } from 'utils/formater';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const HomePage = () => {

  const listCategory = [
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
  ]
  const listProduct = [
    {
      pdImg: sp22,
      name: 'Ổi lê ruột đỏ',
      price: 20000,
      oldPrice: 50000
    },
    {
      pdImg: sp2,
      name: 'Đào đỏ Mỹ',
      price: 40000,
      oldPrice: 60000
    },
    {
      pdImg: sp3,
      name: 'Dâu tây',
      price: 138000,
      oldPrice: 238000
    },
    {
      pdImg: sp5,
      name: 'Chanh tươi vỏ xanh',
      price: 30000,
      oldPrice: 38000
    },
    {
      pdImg: sp6,
      name: 'Cam mật',
      price: 98000,
      oldPrice: 132000
    },
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

  return (
  <div>
    <div className="cate">
      {listCategory.map((item, key) => (
        <div key={key}>
          <img src={item.img} alt='' />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
    <div className="container">
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
          {listProduct.map((item, key) => (
              <>
                <div className="product_item">
                  <img src={item.pdImg} alt="" />
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
              </>
            ))}
          </div>
        </div>
      </div>
    </div> 
  </div>
  );
}

export default memo(HomePage);