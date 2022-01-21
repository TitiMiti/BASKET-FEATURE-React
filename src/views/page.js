import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - BASKET FEATURE</title>
        <meta
          name="description"
          content="ÐÑÑÐ¸ÑÑÐµÐ½Ñ Ð±Ð°ÑÐºÐµÑÐ±Ð¾Ð»ÑÐ½Ð¾Ð³Ð¾ ÑÑÐµÐ½ÐµÑÐ° Ð´Ð»Ñ\nÑÐ±Ð¾ÑÐ°, Ð¿Ð¾Ð´ÑÑÐµÑÐ° Ð¸ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸"
        />
        <meta property="og:title" content="Page - BASKET FEATURE" />
        <meta
          property="og:description"
          content="ÐÑÑÐ¸ÑÑÐµÐ½Ñ Ð±Ð°ÑÐºÐµÑÐ±Ð¾Ð»ÑÐ½Ð¾Ð³Ð¾ ÑÑÐµÐ½ÐµÑÐ° Ð´Ð»Ñ\nÑÐ±Ð¾ÑÐ°, Ð¿Ð¾Ð´ÑÑÐµÑÐ° Ð¸ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° ÑÑÐ°ÑÐ¸ÑÑÐ¸ÐºÐ¸"
        />
      </Helmet>
      <div className={styles['container1']}>
        <span className={styles['text']}>Alpha-ÑÐµÑÑ</span>
        <span className={styles['text1']}>
          <span>
            ÐÐ° Ð´Ð°Ð½Ð½ÑÐ¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ BASKET FEATURE Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑÑ Ð½Ð° ÑÑÐ°Ð¿Ðµ ÑÐ°Ð·ÑÐ°Ð±Ð¾ÑÐºÐ¸ Ð¸
            Ð´Ð¾ÑÑÑÐ¿ Ðº Ð¿ÑÐ¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ Ð¾Ð³ÑÐ°Ð½Ð¸ÑÐµÐ½.
          </span>
        </span>
        <span className={styles['text3']}>
          ÐÐ°Ð¿Ð¸ÑÐ¸ÑÐµÑÑ Ð½Ð° Beta ÑÐµÑÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð¸Ðµ, ÑÑÐ¾Ð±Ñ Ð¾Ð´Ð½Ð¸Ð¼ Ð¸Ð· Ð¿ÐµÑÐ²ÑÑ Ð¾Ð¿ÑÐ¾Ð±Ð¾Ð²Ð°ÑÑ
          BASKET FEATURE Ð´Ð¾ Ð¾ÑÐ¸ÑÐ¸Ð°Ð»ÑÐ½Ð¾Ð³Ð¾ ÑÐµÐ»Ð¸Ð·Ð°
        </span>
        <input
          type="text"
          placeholder="placeholder"
          className={projectStyles['input']}
        />
      </div>
    </div>
  )
}

export default Page
