import Server from './server'


class API extends Server {

  /**
   * name 获取文章全文
   * @method get
   * 200 -> success
   * params
   */
  async getArticle(params = {}) {
    try {
      let result = await this.axios('get','/data/articles/vue.json', params);
      if(result && result.code === 200 && result.data instanceof Object) {
        return result.data
      } else {
        let err = {
          message: '获取数据失败了',
        }
        throw err;
      }
     } catch(err) {
      throw err;  
    }
  }

}

export default new API();