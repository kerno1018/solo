define(['jquery','knockout','datatables'],function($,ko,dt){
   function any(){
        var self = this;
        self.after = function(){
           $('#example').DataTable( {
               "ajax": "/list?coinType=ltc_usd",
               "processing": true,
               "serverSide":true,
               "createdRow": function ( row, data, index ) {
                   if (data.last-data.index< 0) {
                       $('td', row).eq(3).css('color', '#00E400');
                       $('td', row).eq(4).css('color', '#00E400');
                           // $('td', row).eq(0).css('color', '#fff')
                   } else if (data.last-data.index > 0) {
                       $('td', row).eq(3).css('color', '#ff0e0b');
                       $('td', row).eq(4).css('color', '#ff0e0b');
                   }
               },
               // "serverSide": true,
               "columns": [
                   { "data": "contract_id" },
                   { "data": "last" },
                   { "data": "index" },
                   { "render":function(data,type,row,meta){
                       return (row.last -  row.index).toFixed(3);
                   }},
                   {
                       "render":function(data,type,row){
                           var mix = (row.last -  row.index).toFixed(3);
                           return (mix/row.index*100).toFixed(3)+"%";
                       }
                   }
               ]
           });
        }
    }

    return new any();
});

