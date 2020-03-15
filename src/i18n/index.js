/*
 * @Author: your name
 * @Date: 2020-03-01 12:34:38
 * @LastEditTime: 2020-03-15 12:54:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-blog\src\i18n\index.js
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './languages'
// console.log('messages',messages);

Vue.use(VueI18n)
const i18n =  new VueI18n({
    locale:localStorage.lang || 'zh',
    messages,
    // silentTranslationWarn: true,

})
export default i18n
