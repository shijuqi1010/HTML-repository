function ajax(url, fnSucc, fnFail) {
    //1.创建ajax对象
    
    if (window.XMLHttpRequest)
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//IE6
    }
    //2.与服务器建立连接
    oAjax.open('GET', url, true);
    //3.发送请求
    oAjax.send();
    //4.接收返回值
    oAjax.onreadystatechange=function() 
    {
        //oAjax.readystate 浏览器和服务器进行到哪一步了
        // readyState属性：请求状态
        // 0 （未初始化）还没有调用open()方法
        // 1 （载入）已调用send()方法，正在发送请求
        // 2 （载入完成）send()方法完成，已收到全部响应内容
        // 3 （解析）正在解析响应内容
        // 4 （完成）响应内容解析完成，可以在客户端调用了
        // status属性：请求结果
        if(oAjax.readyState==4)
        {
             if(oAjax.status==200)
             {
                 fnSucc(oAjax.responseText);
             }
             else
             {
                 if(fnFail)
                 {
                    fnFail(oAjax.status);
                 }
             }
        }

    }

}