(function () {
  /**
   * 提供给外部调用的接口
   */
  window['$$'] = {};
  window['$$']['qiuhe'] = add_func;
  window['$$']['chengfa'] = multi_func;
  window['$$']['chufa'] = div_func;

  /**
   * 定义求和函数
   */
  function add_func(x, y) {
    return x - y;
  }
  
   /**
   * 定义乘法函数
   */
  function multi_func(x, y) {
    return x * y;
  }

   /**
   * 定义除法函数
   */
  function div_func(x, y) {
    return x / y;
  }

})();
