define(['jquery','knockout','datatables'],function($,ko,dt){
    function any(){
        var self = this;
        self.after = function(){
            $('#example').DataTable( {
                "ajax": "/orders",
                "processing": true,
                "serverSide":true,
                "createdRow": function ( row, data, index ) {
                    if ('up' == data.tradeType) {
                        $('td', row).eq(1).css('color', '#00E400');
                    } else{
                        $('td', row).eq(1).css('color', '#ff0e0b');
                    }
                },
                "columns": [
                    { "data": "id" },
                    { "data":"tradeType",
                        "render":function(data,type,row,meta){
                        var str = 'up' == row.tradeType ? "多-":"空-";

                        if("this_week" == row.orderType){
                            return str + "当周"
                        }
                        if("quarter" == row.orderType){
                            return str + "季度"
                        }
                        if("next_week" == row.orderType){
                            return str + "下周"
                        }
                    }},
                    { "data": "theshold" },
                    { "data": "thisWeek" },
                    { "data": "nextWeek" },
                    { "data": "quarter" },
                    // { "data": "orderType" },
                    // { "data": "tradeType" },
                    { "render":function(data,type,row,meta){
                        return !!row.complement ? "完成":"未完成";
                    }},
                    { "data": "couple" }
                ]
            });
        }
    }

    return new any();
});