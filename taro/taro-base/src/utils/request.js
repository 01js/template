import Taro from '@tarojs/taro'
export default {
  fetch(options, method) {
    const { url } = options
    const token = Taro.getStorageSync(TOKEN_NAME)
    return Taro.request({
      ...options,
      method: method || 'GET',
      url: `${BASE_URL}${url}`,
      header: {
        'content-type': 'application/json',
        Cookie: `${COOKIE_NAME}=${token}`,
        ...options.header
      }
    })
  },
  get(options) {
    return this.request({
      ...options
    });
  },
  post(options) {
    return this.request(
      {
        ...options,
        data: options.data
      },
      'POST'
    );
  },
  put(options) {
    return this.request(
      {
        ...options,
        data: options.data
      },
      'PUT'
    );
  },
  delete(options) {
    return this.request(
      {
        ...options,
        data: options.data
      },
      'DELETE'
    );
  }
}
