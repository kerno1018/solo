define(['jquery','knockout','datatables'],function($,ko,dt){
   function any(){
        var self = this;
        self.after = function(){
           $('#example').DataTable( {
               // "ajax": "data/object.txt",
               "ajax": "/listex?coinType=ltc_usd",
               "processing": true,
               // "serverSide":true,
               "createdRow": function ( row, data, index ) {
                   if (data.targetPrice-data.oriPrice< 0) {
                       $('td', row).eq(4).css('color', '#00E400');
                       $('td', row).eq(5).css('color', '#00E400');
                           // $('td', row).eq(0).css('color', '#fff')
                   } else if (data.targetPrice-data.oriPrice > 0) {
                       $('td', row).eq(4).css('color', '#ff0e0b');
                       $('td', row).eq(5).css('color', '#ff0e0b');
                   }
               },
               // "serverSide": true,"oriId":"20171103116","oriPrice":54.314,"targetPrice":54.617,"targetId":"20171110135"
               "columns": [
                   { "data": "oriId" },
                   { "data": "targetId" },
                   { "data": "oriPrice" },
                   { "data": "targetPrice" },
                   { "render":function(data,type,row,meta){
                       return ( row.targetPrice-row.oriPrice ).toFixed(3);
                   }},
                   {
                       "render":function(data,type,row){
                           // var original = row.oriPrice > row.targetPrice ? row.oriPrice : row.targetPrice;
                           // var target = row.oriPrice < row.targetPrice ? row.oriPrice : row.targetPrice;
                           var mix = (row.targetPrice - row.oriPrice ).toFixed(3);
                           return (mix/ row.oriPrice*100).toFixed(3)+"%";
                       }
                   }
               ]
           });
        }
    }

    return new any();
});

