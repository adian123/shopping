/**
 * Created by acer on 2017/10/18.
 */
app.factory('shoppingServer',['ajaxServer',function(ajaxServer){

    var shoppingServer={

        getTab:function(){
            return ajaxServer.ajax('get','./Data/tab.json');
        }
    }
    return shoppingServer;

}])

