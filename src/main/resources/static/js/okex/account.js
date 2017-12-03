define(['jquery','knockout','datatables'],function($,ko,dt){
    function any(){
        var self = this;
        function instance(source){

        }
        self.eachOrderCont=ko.observable(0);
        self.levelRage=ko.observable(0);
        self.maxAllowCont=ko.observable(0);
        self.right=ko.observable(0.0);
        self.load = function(){
            $.get("/account").done(function(response,b,c){
                self.eachOrderCont(response.eachOrderCont);
                self.levelRage(response.levelRage);
                self.maxAllowCont(response.maxAllowCont);
                self.right(response.right);
            });
        }
        self.load();
        self.update = function(){
            var body = {};
            body.eachOrderCont = self.eachOrderCont();
            body.levelRage = self.levelRage();
            body.maxAllowCont = self.maxAllowCont();
            body.right = self.right();
            $.ajax({
                url:"/account",
                data:JSON.stringify(body),
                type:"post",
                contentType:'application/json;charset=UTF-8'
            }).done(function(){self.load();});
        }
        self.after = function(){

        }
    }

    return new any();
});