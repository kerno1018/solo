define(['jquery','knockout','datatables'],function($,ko,dt){
    function any(){
        var self = this;
        function instance(source){

        }
        self.id           =ko.observable(0);
        self.price        =ko.observable(0);
        self.buyOnePrice  =ko.observable(0);
        self.sellOnePrice =ko.observable(0);
        self.buyOne       =ko.observable(0);
        self.sellOne      =ko.observable(0);
        self.date         =ko.observable(0);
        self.time         =ko.observable(0);
        self.buyPriminum  =ko.observable(0);
        self.sellPriminum =ko.observable(0);
        self.load = function(){
            $.get("/perminum").done(function(response,b,c){
                self.id(response.id);
                self.price(response.price);
                self.buyOnePrice(response.buyOnePrice);
                self.sellOnePrice(response.sellOnePrice);
                self.buyOne(response.buyOne);
                self.sellOne(response.sellOne);
                self.date(response.date);
                self.time(response.time);
                self.buyPriminum(response.buyPriminum);
                self.sellPriminum(response.sellPriminum);
            });
        }
        self.load();
        self.after = function(){
            $('#example').DataTable( {
                "ajax": "/perminum",
                "processing": true,
                "serverSide":false,
                "order": [[ 2, "asc" ]],
                // "createdRow": function ( row, data, index ) {
                //     if (data.last-data.index< 0) {
                //         $('td', row).eq(3).css('color', '#00E400');
                //         $('td', row).eq(4).css('color', '#00E400');
                //         // $('td', row).eq(0).css('color', '#fff')
                //     } else if (data.last-data.index > 0) {
                //         $('td', row).eq(3).css('color', '#ff0e0b');
                //         $('td', row).eq(4).css('color', '#ff0e0b');
                //     }
                // },
                // "serverSide": true,
                "columns": [
                    {"data":"id"},
                    {"data":"price"},
                    {"data":"buyPriminum"},
                    {"data":"sellPriminum"},
                    {"data":"buyOne"},
                    {"data":"buyOnePrice"},
                    {"data":"sellOne"},
                    {"data":"sellOnePrice"},
                    {"data":"date"},
                    {"data":"time"}
                    // ,
                    // {
                    //     "render":function(data,type,row){
                    //         var mix = (row.last -  row.index).toFixed(3);
                    //         return (mix/row.index*100).toFixed(3)+"%";
                    //     }
                    // }
                ]
            });
        }
    }

    return new any();
});