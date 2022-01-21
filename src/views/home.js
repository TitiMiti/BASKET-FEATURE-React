import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>BASKET FEATURE</title>
        <meta
          name="description"
          content="ÐÑÑÐ¸ÑÑÐµÐ½Ñ Ð±Ð°ÑÐºÐµÑÐ±Ð¾Ð»ÑÐ½Ð¾Ð³Ð¾ ÑÑÐµÐ½ÐµÑÐ° Ð´Ð»Ñ\nÑÐ±Ð¾ÑÐ°, Ð¿Ð¾Ð´ÑÑÐµÑÐ° Ð¸ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸"
        />
        <meta property="og:title" content="BASKET FEATURE" />
        <meta
          property="og:description"
          content="ÐÑÑÐ¸ÑÑÐµÐ½Ñ Ð±Ð°ÑÐºÐµÑÐ±Ð¾Ð»ÑÐ½Ð¾Ð³Ð¾ ÑÑÐµÐ½ÐµÑÐ° Ð´Ð»Ñ\nÑÐ±Ð¾ÑÐ°, Ð¿Ð¾Ð´ÑÑÐµÑÐ° Ð¸ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸"
        />
      </Helmet>
      <div className={styles['container01']}>
        <span className={styles['text']}>
          <span>
            Basket
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text02']}>Feature</span>
        </span>
        <span className={styles['text03']}>
          <span>Ð°ÑÑÐ¸ÑÑÐµÐ½Ñ ÑÑÐµÐ½ÐµÑÐ° Ð´Ð»Ñ</span>
          <span></span>
          <br></br>
          <span></span>
          <span className={styles['text08']}>ÑÐ±Ð¾ÑÐ°</span>
          <span>
            ,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text10']}></span>
          <span className={styles['text11']}></span>
          <span className={styles['text12']}>Ð¿Ð¾Ð´ÑÑÐµÑÐ°</span>
          <span className={styles['text13']}></span>
          <span className={styles['text14']}></span>
          <span>
            {' '}
            Ð¸
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text16']}>Ð°Ð½Ð°Ð»Ð¸Ð·Ð°</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text18']}>ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸</span>
          <span>.</span>
        </span>
        <img
          alt="image"
          src="/playground_assets/court21-1500w.png"
          loading="lazy"
          className={styles['image']}
        />
      </div>
      <div className={styles['container02']}>
        <h1 className={styles['text20']}>Ð£Ð½Ð¸ÐºÐ°Ð»ÑÐ½ÑÐ¹ Ð¼ÐµÑÐ¾Ð´</h1>
        <span className={styles['text21']}>
          Ð¼Ñ Ð¿ÑÐµÐ´Ð»Ð°Ð³Ð°ÐµÐ¼ Ð²ÑÐµÑÑÐ¾ÑÐ¾Ð½Ð½Ð¸Ð¹ Ð¿Ð¾Ð´ÑÐ¾Ð´ Ðº ÑÐ±Ð¾ÑÑ ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸, ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð±ÑÐ»
          ÑÐ°Ð·ÑÐ°Ð±Ð¾ÑÐ°Ð½ Ð¸ Ð¿ÑÐ¾ÑÐµÑÑÐ¸ÑÐ¾Ð²Ð°Ð½ Ð² Ð¿ÑÐ¾ÑÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑÐ½ÑÑ Ð±Ð°ÑÐºÐµÑÐ±Ð¾Ð»ÑÐ½ÑÑ Ð»Ð¸Ð³Ð°Ñ
          Ð Ð¾ÑÑÐ¸Ð¸
        </span>
        <div className={styles['Pricing']}>
          <div className={styles['container03']}>
            <span className={styles['text22']}>ÐÐ»Ð°Ð´ÐµÐ½Ð¸Ðµ</span>
            <span className={styles['text23']}>
              ÐºÐ°ÐºÐ¸Ðµ Ð¸Ð³ÑÐ¾ÐºÐ¸ Ð²Ð»Ð°Ð´ÐµÐ»Ð¸ Ð¼ÑÑÐ¾Ð¼ Ð²Ð¾ Ð²ÑÐµÐ¼Ñ Ð°ÑÐ°ÐºÐ¸ Ð¸ ÐºÐ¾Ð³Ð´Ð° Ð¾Ð½Ð° Ð±ÑÐ»Ð°
              ÑÐ¾Ð²ÐµÑÑÐµÐ½Ð°
            </span>
            <img
              alt="image"
              src="/playground_assets/24sec-1400w.jpg"
              className={styles['image01']}
            />
          </div>
          <div className={styles['container04']}>
            <span className={styles['text24']}>ÐÐÐÐ«</span>
            <span className={styles['text25']}>
              Ð¿ÑÐ¾Ð´ÑÐºÑÐ¸Ð²Ð½Ð¾ÑÑÑ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ Ð¸ Ð¸Ð³ÑÐ¾ÐºÐ¾Ð² Ð² Ð¾Ð¿ÑÐµÐ´ÐµÐ»ÐµÐ½Ð½ÑÑ Ð·Ð¾Ð½Ð°Ñ Ð½Ð° Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐµ
            </span>
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202021-11-19%20at%202.12.59%20am-1400w.jpeg"
              className={styles['image02']}
            />
          </div>
          <div className={styles['container05']}>
            <span className={styles['text26']}>ÐÐ°ÑÐ¸ÑÐ°</span>
            <span className={styles['text27']}>
              ÑÑÑÐµÐºÑÐ¸Ð²Ð½Ð¾ÑÑÑ ÑÐ°Ð·Ð»Ð¸ÑÐ½ÑÑ ÑÐ¸Ð¿Ð¾Ð² Ð·Ð°ÑÐ¸ÑÑ
            </span>
            <img
              alt="image"
              src="/playground_assets/index-1400w.jpg"
              className={styles['image03']}
            />
          </div>
        </div>
      </div>
      <div className={styles['container06']}>
        <h1 className={styles['text28']}>Ð­ÐºÑÐ¿Ð¾ÑÑ ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸</h1>
        <div className={styles['container07']}>
          <div className={styles['container08']}>
            <img
              alt="image"
              src="/playground_assets/my%20project-1500w.png"
              className={styles['image04']}
            />
            <span className={styles['text29']}>
              ÐÐ½ÑÐµÑÐ°ÐºÑÐ¸Ð²Ð½Ð°Ñ Ð¸Ð½ÑÐ¾ÑÐ³ÑÐ°ÑÐ¸ÐºÐ° Ð² Ð¿ÑÐ¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ð¸
            </span>
          </div>
          <div className={styles['container09']}>
            <img
              alt="image"
              src="/playground_assets/screen%20shot%202022-01-19%20at%2012.12.22%20am-1500w.png"
              className={styles['image05']}
            />
            <span className={styles['text30']}>
              <span>Ð­ÐºÑÐ¿Ð¾ÑÑ Ð² Excel</span>
              <br></br>
              <span>Ð´Ð»Ñ ÑÐ°Ð¼Ð¾ÑÑÐ¾ÑÑÐµÐ»ÑÐ½Ð¾Ð³Ð¾ Ð°Ð½Ð°Ð»Ð¸Ð·Ð°</span>
            </span>
          </div>
        </div>
        <button
          type="button"
          className={` ${styles['button']} ${projectStyles['button']} `}
        >
          <span className={styles['text33']}>
            cÐºÐ°ÑÐ°ÑÑ BASKET FEATURE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </button>
      </div>
      <div className={styles['container10']}>
        <span className={styles['text34']}>
          <span className={styles['text35']}>ÐÐ°ÑÐºÐµÑÐ±Ð¾Ð»</span>
        </span>
        <span className={styles['text36']}>
          <span>ÐÐ°ÑÐºÐµÑÐ±Ð¾Ð»</span>
          <span className={styles['text38']}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            ÑÑÐ¾
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text40']}>Ð¿Ð¾Ð·Ð¸ÑÐ¸Ð¾Ð½Ð½ÑÐ¹</span>
          <span> Ð²Ð¸Ð´ ÑÐ¿Ð¾ÑÑÐ°.</span>
          <span className={styles['text42']}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            ÐÐ°Ð¶Ð´ÑÐ¹ Ð¸Ð³ÑÐ¾Ðº Ð¸Ð³ÑÐ°ÐµÑ Ð¾Ð¿ÑÐµÐ´ÐµÐ»ÐµÐ½Ð½ÑÑ
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text44']}>ÑÐ¾Ð»Ñ</span>
          <br></br>
          <span>
            (ÑÐ°Ð·ÑÐ³ÑÑÐ²Ð°ÑÑÐ¸Ð¹, ÑÐµÐ½ÑÑÐ¾Ð²Ð¾Ð¹, ÑÐ¾ÑÐ²Ð°ÑÐ´)
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Ð¸ Ð·Ð°Ð½Ð¸Ð¼Ð°ÐµÑ
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text48']}></span>
          <span className={styles['text49']}>Ð¿Ð¾Ð·Ð¸ÑÐ¸Ñ</span>
          <span className={styles['text50']}></span>
          <span> Ð½Ð° Ð¸Ð³ÑÐ¾Ð²Ð¾Ð¹ Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐµ</span>
        </span>
        <div className={styles['container11']}>
          <img
            alt="image"
            src="/playground_assets/nnn-300h.jpg"
            className={styles['Image06']}
          />
          <img
            alt="image"
            src="/playground_assets/mmmm%5B1%5D-500w.png"
            className={styles['image07']}
          />
          <img
            alt="image"
            src="/playground_assets/thumbnail%20copy-1500w.png"
            className={styles['image08']}
          />
        </div>
        <div className={styles['container12']}>
          <img
            alt="image"
            src="/playground_assets/%D1%82%D1%80%D0%B5%D0%BD%D0%B5%D1%80-1500w.jpg"
            className={styles['image09']}
          />
          <div className={styles['container13']}>
            <span className={styles['text52']}>ÐÐ°Ð´Ð°ÑÐ° Ð¢ÑÐµÐ½ÐµÑÐ°</span>
            <span className={styles['text53']}>
              <span>
                Ð³ÑÐ°Ð¼Ð¾ÑÐ½Ð¾ ÑÐ°ÑÐ¿ÑÐµÐ´ÐµÐ»Ð¸ÑÑ
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>ÑÐ¾Ð»Ð¸</span>
              <span>
                {' '}
                Ð¸Ð³ÑÐ¾ÐºÐ¾Ð² Ð¸ Ð¿Ð¾ÑÑÑÐ¾Ð¸ÑÑ Ð°ÑÐ°ÐºÑ Ð² ÑÐµÑ
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Ð·Ð¾Ð½Ð°Ñ</span>
              <span>
                , Ð³Ð´Ðµ ÐµÐ³Ð¾ Ð¸Ð³ÑÐ¾ÐºÐ¸ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÑÑ Ð½Ð°Ð¸Ð»ÑÑÑÐ¸Ð¹ ÑÐµÐ·ÑÐ»ÑÑÐ°Ñ.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className={styles['container14']}>
          <span className={styles['text59']}>
            ÐÐ°ÑÐ° ÐÐ°Ð´Ð°ÑÐ°
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text60']}>
            <span>
              Ð£Ð¿ÑÐ¾ÑÑÐ¸ÑÑ Ð¸ ÑÑÐºÐ¾ÑÐ¸ÑÑ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text62']}>Ð²Ð²Ð¾Ð´ Ð´Ð°Ð½Ð½ÑÑ</span>
            <span>
              {' '}
              Ð²Ð¾ Ð²ÑÐµÐ¼Ñ Ð¸ Ð¿Ð¾ÑÐ»Ðµ Ð¼Ð°ÑÑÐ°, Ð° ÑÐ°ÐºÐ¶Ðµ Ð¼Ð³Ð½Ð¾Ð²ÐµÐ½Ð½Ð¾ Ð¿Ð¾Ð´ÑÑÐ¸ÑÑÐ²Ð°ÑÑ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text64']}>ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÑ</span>
            <span>.</span>
          </span>
        </div>
        <button
          type="button"
          className={` ${styles['button1']} ${projectStyles['button']} `}
        >
          <span className={styles['text66']}>
            cÐºÐ°ÑÐ°ÑÑ BASKET FEATURE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Home
