import { message } from "ant-design-vue"

/**
 * 
 * @param {String} type 消息类型 , 成功，失败，警告
 * @param {String} message 消息内容
 */
const createMessage = (type='success', message) => {
  // ，默认时间
  const __baseTime = 2
  if (type && message !== '') {
    message[type](message, __baseTime)
  }
}
