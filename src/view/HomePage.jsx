import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/Navbar';
import Footer from './components/Footer';

// data
import ProductData from '../assets/data/product.json'
const HomePage = () => {
    let [infoOption, setInfoOption] = useState('運費')

    const handleEvent = {
        changeInfoButton: function (e) {
            let { value, nodeName } = e.target
            if (nodeName !== 'BUTTON') {
                return
            }
            setInfoOption(value)
        }
    }
    return (
        <>
            <NavBar />
            {/* 商品區 */}
            <div className='bg-secondary p-3'>
                <div className='d-table' style={{ height: '20px' }}></div>
                <p className='text-end fw-bolder text-brown'>＞請往右滑看更多</p>
                <ul className='list-unstyled d-flex product-box'>
                    {
                        ProductData.data.map((item, index) => {
                            return (
                                <>
                                    <li className={`col-7 col-md-3 product-item ${item.tag ? 'tag' : ''}`} key={index}>
                                        <img src={require(`../assets/images/product/${item.name}.jpg`)} className='img-fluid' width='300px' alt={item.name} />
                                        <div className='mt-2'>
                                            <h5 className='text-center fw-bolder py-2'>{item.name}</h5>
                                            <div className='text-start d-flex justify-content-between align-items-center py-2'>
                                                <p>{item.quantity}</p>
                                                <p className='fw-bolder text-primary fs-5'>$ {item.price} 元</p>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
                <div className='text-center my-2'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfvSmwCtoEp98jp5KvFMSzhUjS7iiX-hPAFuS6VtYLut5oprQ/viewform' target='_blank' className='btn btn-brown rounded-pill px-5'>立即訂購</a>
                </div>
            </div>
            {/* 資訊站 */}
            <div className='p-3 mt-2 info-box'>
                <h4 className='fw-bolder text-center text-brown'>資訊站</h4>
                {/* button list */}
                <div className='row mt-3 col-12 col-lg-8 mx-auto' onClick={handleEvent.changeInfoButton}>
                    <div className="col-4">
                        <button className={`btn ${infoOption == '運費' ? 'btn-primary text-light' : 'btn-outline-primary text-brown'} w-100 rounded-pill fw-bolder`} value='運費'>運費</button>
                    </div>
                    <div className="col-4">
                        <button className={`btn ${infoOption == '匯款' ? 'btn-primary text-light' : 'btn-outline-primary text-brown'} w-100 rounded-pill fw-bolder`} value='匯款'>匯款</button>
                    </div>
                    <div className="col-4">
                        <button className={`btn ${infoOption == '聯絡' ? 'btn-primary text-light' : 'btn-outline-primary text-brown'} w-100 rounded-pill fw-bolder`} value='聯絡'>聯絡</button>
                    </div>
                </div>
                {/* 內容 */}
                <div className='col-12 col-md-6 m-2 bg-secondary rounded content-box mx-auto'>
                    { //運費
                        infoOption == '運費' &&
                        <div className='p-3'>
                            <h5 className='fw-bolder text-brown title'>運費規則</h5>
                            <ul className='list-unstyled mt-3'>
                                <li>
                                    <p className='bg-primary text-light rounded py-1 px-5 text-center mb-2' style={{ fontSize: '18px' }}>高雄地區</p>
                                    <p className='fw-bolder'>＊免運費</p>
                                    <p className='fw-bolder'>＊付款：貨到付款 / 帳號匯款</p>
                                </li>
                                <li className='mt-3'>
                                    <p className='bg-primary text-light rounded py-1 px-5 text-center mb-2' style={{ fontSize: '18px' }}>外縣市地區</p>
                                    <p className='fw-bolder'>＊採用冷凍宅配</p>
                                    <p className='fw-bolder'>＊20 盒(含)以上<span className='text-red'>【免運】</span></p>
                                    <p className='fw-bolder'>＊未達 20 盒，酌收運費<span className='text-red'>【160 元】</span></p>
                                    <p className='text-red fw-bolder text-center mt-2'>！宅配須先匯款才會出貨！</p>
                                </li>
                            </ul>
                            <hr />
                            <p>＊ 匯款帳號資訊請點擊「匯款」</p>
                        </div>
                    }
                    { //匯款
                        infoOption == '匯款' &&
                        <div className='p-3'>
                            <h5 className='fw-bolder text-brown title'>匯款帳戶</h5>
                            <ul className='list-unstyled mt-3'>
                                <li>
                                    <span className='bg-primary text-light rounded py-1 px-5'>銀行</span>
                                    <span className='fw-bolder ms-3' style={{ fontSize: '18px' }}>中國信託 822</span>
                                </li>
                                <li className='my-3'>
                                    <span className='bg-primary text-light rounded py-1 px-5'>帳號</span>
                                    <span className='fw-bolder ms-3' style={{ fontSize: '18px' }}>263540263458</span>
                                </li>
                                <li>
                                    <span className='bg-primary text-light rounded py-1 px-5'>戶名</span>
                                    <span className='fw-bolder ms-3' style={{ fontSize: '18px' }}>陳麗月</span>
                                </li>
                            </ul>
                        </div>
                    }
                    {//聯絡我們
                        infoOption == '聯絡' &&
                        <div className='p-3'>
                            <h5 className='fw-bolder text-brown title'>與我們聯絡</h5>
                            <ul className='list-unstyled mt-3'>
                                <li>
                                    <p className='bg-primary text-light rounded py-1 px-5 text-center mb-2' style={{ fontSize: '18px' }}>社群聊聊</p>
                                    <a href="https://lin.ee/xOtVwFW" target='_blank'><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入葳茗官方" className='mt-2' height="46" border="0" /></a>
                                    <p className='fw-bolder text-red mt-1'>加入Line 官方好友更方便！！</p>
                                    {/* <a href="https://www.facebook.com/%E8%91%B3%E8%8C%97%E9%A4%9B%E9%A3%A9-116435126424428" className='btn bg-fb-blue text-light fw-bolder mt-2' target='_blank'> Facebook 粉絲專頁</a> */}
                                </li>
                                <li className='mt-3'>
                                    <p className='bg-primary text-light rounded py-1 px-5 text-center mb-2' style={{ fontSize: '18px' }}>連絡電話</p>
                                    <p className='fw-bolder my-2'><FontAwesomeIcon icon={faPhoneSquareAlt} className='me-1 fs-5 text-brown' /> <a href="tel:+886-955905158">0955905158</a> / 陳小姐</p>
                                    <p className='fw-bolder my-2'><FontAwesomeIcon icon={faPhoneSquareAlt} className='me-1 fs-5 text-brown' /> <a href="tel:+886-936353171">0936353171</a> / 陳先生</p>
                                </li>
                            </ul>
                            <hr />
                            <p>＊ 請多多以社群跟我們聊聊呦~</p>
                        </div>
                    }

                </div>
            </div>
            {/* 座右銘 */}
            <div className='mb-4'>
                <img src={require('../assets/images/product/banner.jpg')} className='img-fluid' alt='廣告圖' />
                <div className='my-3'>
                    <h3 className='fw-bolder text-center text-primary'>堅持：吃的到料的最實在</h3>
                    <div className='fw-bolder mt-2 text-center'>
                        <p>完全純手工！</p>
                        <p className='my-2'>生鮮採用現宰溫體豬肉<br />不添加防腐劑、人工香料</p>
                        <p>蝦採用新鮮且鮮甜</p>
                    </div>
                </div>
                <div className='text-center mt-2'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfvSmwCtoEp98jp5KvFMSzhUjS7iiX-hPAFuS6VtYLut5oprQ/viewform' target='_blank' className='btn btn-brown rounded-pill px-5'>立即訂購</a>
                </div>
            </div>
            {/* 價目表 */}
            <div className='p-3 mt-2 bg-secondary text-center'>
                <h4 className='fw-bolder text-center text-brown mb-3'>價目表</h4>
                <img src={require('../assets/images/price-table.jpg')} className='img-fluid' alt='價目表' />
                <p className='text-center mt-3'>歡迎長壓儲存照片~~</p>
            </div>
            <Footer />
        </>
    )
}
export default HomePage