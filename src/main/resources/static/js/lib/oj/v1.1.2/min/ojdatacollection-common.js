/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery"],function(a,f){a.Og=function(a){this.data=a;this.Init()};o_("DataSource",a.Og,a);a.b.ga(a.Og,a.Pg,"oj.DataSource");a.Og.prototype.Init=function(){a.Og.q.Init.call(this)};a.b.i("DataSource.prototype.Init",{Init:a.Og.prototype.Init});a.Og.prototype.getCapability=function(){return null};a.b.i("DataSource.prototype.getCapability",{getCapability:a.Og.prototype.getCapability});a.Uc=function(d){a.Uc.q.constructor.call(this,d)};o_("TreeDataSource",a.Uc,a);a.b.ga(a.Uc,a.Og,"oj.TreeDataSource");
a.Uc.prototype.nf=function(){return-1};a.b.i("TreeDataSource.prototype.getChildCount",{nf:a.Uc.prototype.nf});a.Uc.prototype.Rd=function(){a.j.Ya()};a.b.i("TreeDataSource.prototype.fetchChildren",{Rd:a.Uc.prototype.Rd});a.Uc.prototype.ll=function(){a.j.Ya()};a.b.i("TreeDataSource.prototype.fetchDescendants",{ll:a.Uc.prototype.ll});a.Uc.prototype.sort=function(){a.j.Ya()};a.b.i("TreeDataSource.prototype.sort",{sort:a.Uc.prototype.sort});a.Uc.prototype.lw=function(){return{key:null,direction:"none"}};
a.b.i("TreeDataSource.prototype.getSortCriteria",{lw:a.Uc.prototype.lw});a.Uc.prototype.move=function(){a.j.Ya()};a.b.i("TreeDataSource.prototype.move",{move:a.Uc.prototype.move});a.Uc.prototype.cj=function(){return"valid"};a.b.i("TreeDataSource.prototype.moveOK",{cj:a.Uc.prototype.cj});a.Uc.prototype.getCapability=function(){return null};a.b.i("TreeDataSource.prototype.getCapability",{getCapability:a.Uc.prototype.getCapability});a.iq=function(){this.id=null;this.depth=0;this.parent=null;this.children=
[];this.vK=this.attr=this.title=null};a.iq.prototype.n4=function(a){return function(b,c){return b.attr&&c.attr&&b.attr[a]&&c.attr[a]?b.attr[a]<c.attr[a]?-1:b.attr[a]===c.attr[a]?0:1:b[a]<c[a]?-1:b[a]===c[a]?0:1}};a.iq.prototype.v6=function(a){return function(b,c){return b.attr&&c.attr&&b.attr[a]&&c.attr[a]?b.attr[a]<c.attr[a]?1:b.attr[a]===c.attr[a]?0:-1:b[a]<c[a]?1:b[a]===c[a]?0:-1}};a.iq.prototype.xW=function(a){var b=a.key;"ascending"===a.direction?this.children.sort(this.n4(b)):"descending"===
a.direction&&this.children.sort(this.v6(b));for(var b=0,c=this.children.length;b<c;b++)this.children[b].xW(a)};a.Ic=function(d){var b;b=new a.iq;d.id||(b.id="root");this.data=this.NP({count:0},b,d);a.Ic.q.constructor.call(this,b)};o_("JsonTreeDataSource",a.Ic,a);a.b.ga(a.Ic,a.Uc,"oj.JsonTreeDataSource");a.Ic.prototype.Init=function(){a.Ic.q.Init.call(this)};a.b.i("JsonTreeDataSource.prototype.Init",{Init:a.Ic.prototype.Init});a.Ic.prototype.NP=function(d,b,c,e){var g,f,k,l,m,n,q;e||(e=0);for(l in c)if("children"==
l||0==e&&c instanceof Array)for(g=0==e&&c instanceof Array?c:c[l],e++,q=0;q<g.length;q++){k=g[q];f=new a.iq;k.id||(d.count++,k.attr?k.attr.id||(k.attr.id="rid_"+d.count):f.id="rid_"+d.count);for(m in k)for(n in f)m==n&&"children"!=m&&(f[n]=k[m]),"depth"==n&&(f[n]=e);b.children.push(f);for(n in k)"children"==n&&this.NP(d,b.children[q],k,e)}return b};a.Ic.prototype.nf=function(a){a||(a=this.data.id);a=this.Sm(this.data,a);return a.children?a.children.length:0};a.b.i("JsonTreeDataSource.prototype.getChildCount",
{nf:a.Ic.prototype.nf});a.Ic.prototype.Rd=function(d,b,c){var e,g,f,k,l;f=[];d||(d=this.data.id);k=this.Sm(this.data,d);b||(b=[],b.start=0,b.count=k.children.length);b.count||(b.count=k.children.length);b.start||(b.start=0);e=b.start;g=Math.min(k.children.length,e+b.count);for(b=e;b<g;b+=1)l=new a.iq,k.children[b].attr&&(l.attr=k.children[b].attr),k.children[b].id&&(l.id=k.children[b].id),k.children[b].depth&&(l.depth=k.children[b].depth),k.children[b].title&&(l.title=k.children[b].title),k.children[b].parent&&
(l.parent=k.children[b].parent),l.vK=0<k.children[b].children.length?!1:!0,f.push(l);d=new a.Fe(e,g,f,d);null!=c&&null!=c.success&&c.success.call(null,d)};a.b.i("JsonTreeDataSource.prototype.fetchChildren",{Rd:a.Ic.prototype.Rd});a.Ic.prototype.ll=function(d,b){var c,e,g,f;g=[];d||(d=this.data.id);f=this.Sm(this.data,d);c=[];c.start=0;c.count=f.children.length;e=c.start;for(c=Math.min(f.children.length,e+c.count);e<c;e+=1)f.children[e].vK=0<f.children[e].children.length?!1:!0,g.push(f.children[e]);
g=new a.Fe(0,g.length,g,d);null!=b&&null!=b.success&&b.success.call(null,g)};a.b.i("JsonTreeDataSource.prototype.fetchDescendants",{ll:a.Ic.prototype.ll});a.Ic.prototype.move=function(d,b,c,e){var g;g=b;if(!g||g==this.data.id){if("inside"!=c){a.u.log("Error: root can not be the reference node if position equals to "+c);return}g||(g=this.data.id)}d=this.Sm(null,d);this.Sm(d,g)?a.u.log("Error: the node to move contains the reference node as its sub-tree."):(b=this.Sm(null,g),g=this.dG(g),this.xca(d),
"inside"==c?(this.fl(d,d.depth-(b.depth+1)),b.children.push(d)):"before"==c?(this.fl(d,d.depth-b.depth),c=g.children.indexOf(b),-1<c&&(0!=c?g.children.splice(c-1,0,d):g.children.unshift(d))):"after"==c?(this.fl(d,d.depth-b.depth),c=g.children.indexOf(b),-1<c&&g.children.splice(c,0,d)):"first"==c?(this.fl(d,d.depth-b.depth),g.children.unshift(d)):"last"==c&&(this.fl(d,d.depth-b.depth),g.children.push(d)),null!=e&&null!=e.success&&e.success.call(null,this.data))};a.b.i("JsonTreeDataSource.prototype.move",
{move:a.Ic.prototype.move});a.Ic.prototype.sort=function(a,b){var c;c=this.Sm(this.data,this.data.id);c.xW(a);null!=b&&null!=b.success&&b.success.call(null,c)};a.b.i("JsonTreeDataSource.prototype.sort",{sort:a.Ic.prototype.sort});a.Ic.prototype.dG=function(a,b){var c,e=null;if(a==this.data.id)return null;b||(b=this.data);if(b.children&&0<b.children.length){for(c=0;c<b.children.length;c++)if(b.children[c].id&&b.children[c].id==a||b.children[c].attr&&b.children[c].attr.id==a)return b;for(c=0;c<b.children.length&&
!(e=this.dG(a,b.children[c]));c++);}return e};a.Ic.prototype.Sm=function(a,b){var c,e=null;a||(a=this.data);if(a.id&&a.id==b||a.attr&&a.attr.id==b)return a;if(null!=a.children)for(c=0;c<a.children.length&&!e;c++)e=a.children[c].id&&a.children[c].id==b||a.children[c].attr&&a.children[c].attr.id==b?a.children[c]:this.Sm(a.children[c],b);return e};a.Ic.prototype.fl=function(a,b){var c;a.depth-=b;if(a.children&&0!=a.children.length)for(c=0;c<a.children.length;c++)this.fl(a.children[c],b)};a.Ic.prototype.xca=
function(a){var b;a.id?b=a.id:a.attr&&(b=a.attr.id);(b=this.dG(b))||(b=this.data);a=b.children.indexOf(a);-1<a&&b.children.splice(a,1)};a.Ic.prototype.getCapability=function(a){return"fetchDescendants"===a?"enable":"sort"===a?"default":"batchFetch"===a?"disable":"move"===a?"full":null};a.b.i("JsonTreeDataSource.prototype.getCapability",{getCapability:a.Ic.prototype.getCapability});a.O=function(d,b){if(this.constructor==a.O)throw Error(a.O.nc.$ha+"\n"+a.O.nc.Zha);this.data=d;this.options=b;this.aa=
0;this.Init()};o_("TableDataSource",a.O,a);a.b.ga(a.O,a.Og,"oj.TableDataSource");a.O.prototype.Init=function(){a.O.q.Init.call(this)};a.b.i("TableDataSource.prototype.Init",{Init:a.O.prototype.Init});a.O.prototype.at=function(){a.j.Ya();return Promise.reject()};a.b.i("TableDataSource.prototype.at",{at:a.O.prototype.at});a.O.prototype.fetch=function(){a.j.Ya();return Promise.reject()};a.b.i("TableDataSource.prototype.fetch",{fetch:a.O.prototype.fetch});a.O.prototype.get=function(){a.j.Ya();return Promise.reject()};
a.b.i("TableDataSource.prototype.get",{get:a.O.prototype.get});a.O.prototype.getCapability=function(){return null};a.b.i("TableDataSource.prototype.getCapability",{getCapability:a.O.prototype.getCapability});a.O.prototype.sort=function(){a.j.Ya();return Promise.reject()};a.b.i("TableDataSource.prototype.sort",{sort:a.O.prototype.sort});a.O.prototype.totalSize=function(){a.j.Ya();return 0};a.b.i("TableDataSource.prototype.totalSize",{totalSize:a.O.prototype.totalSize});a.O.F={ADD:"add",REMOVE:"remove",
RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("TableDataSource.EventType",a.O.F,a);a.O.nc={_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.",_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.",_ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.",_ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};
a.Ja=function(d,b){this.data={};if(!(d instanceof Array)&&"function"!=typeof d&&"function"!=typeof d.Dha)throw Error(a.O.nc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.O.nc._ERR_DATA_INVALID_TYPE_DETAIL);null!=b&&null!=b.idAttribute||a.u.info(a.Ja.nc._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);a.Ja.q.constructor.call(this,d,b);this.Yc=[];this.ca=[];if(null!=d&&void 0!==d&&(this.WG=null,null!=b&&null!=b.idAttribute&&(this.WG=b.idAttribute),this.f=d instanceof Array?d:d(),this.ca=this.xm(this.f),this.Qd=this.f.length,
!(d instanceof Array))){var c=this;d.subscribe(function(a){var b,d=[],f=[];for(b=0;b<a.length;b++)"deleted"===a[b].status&&d.push(a[b].value);c.Rm(d,null);d=[];f=[];for(b=0;b<a.length;b++)"added"===a[b].status&&(d.push(a[b].value),f.push(a[b].index));c.add(d,{at:f})},null,"arrayChange")}if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.Fv=!0};o_("ArrayTableDataSource",a.Ja,a);a.b.ga(a.Ja,a.O,"oj.ArrayTableDataSource");a.Ja.prototype.Init=function(){a.Ja.q.Init.call(this)};a.b.i("ArrayTableDataSource.prototype.Init",
{Init:a.Ja.prototype.Init});a.Ja.prototype.add=function(a,b){b=b||{};return this.Y3(a,b.at,b)};a.b.i("ArrayTableDataSource.prototype.add",{add:a.Ja.prototype.add});a.Ja.prototype.at=function(a){var b;b=0>a||a>=this.ca.length?null:{data:this.ca.data[a],index:a,key:this.ca.keys[a]};return new Promise(function(a){a(b)})};a.b.i("ArrayTableDataSource.prototype.at",{at:a.Ja.prototype.at});a.Ja.prototype.change=function(d,b){b=b||{};var c=b.silent,e,g,f,k={data:[],keys:[],indexes:[]};d instanceof Array||
(d=[d]);for(e=0;e<d.length;e++)g=d[e],null!=g&&(f=this.pu(g),f=this.$g(f,null),k.data.push(g),k.keys.push(f.key),k.indexes.push(f.index),this.ca.data[f.index]=g);!c&&0<k.data.length&&a.O.q.handleEvent.call(this,a.O.F.CHANGE,k);return Promise.resolve(k)};a.b.i("ArrayTableDataSource.prototype.change",{change:a.Ja.prototype.change});a.Ja.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.Fv?this.ee(a):Promise.resolve()};a.b.i("ArrayTableDataSource.prototype.fetch",{fetch:a.Ja.prototype.fetch});
a.Ja.prototype.get=function(a,b){return Promise.resolve(this.$g(a,b))};a.b.i("ArrayTableDataSource.prototype.get",{get:a.Ja.prototype.get});a.Ja.prototype.getCapability=function(){return"full"};a.b.i("ArrayTableDataSource.prototype.getCapability",{getCapability:a.Ja.prototype.getCapability});a.Ja.prototype.remove=function(a,b){b=b||{};return this.Rm(a,b)};a.b.i("ArrayTableDataSource.prototype.remove",{remove:a.Ja.prototype.remove});a.Ja.prototype.reset=function(d,b){b=b||{};b.previousRows=this.ca;
var c=b.silent;this.ca.data=[];this.ca.keys=[];this.ca.indexes=[];this.Qd=0;null!=d&&this.add(d,{silent:!0});c||a.O.q.handleEvent.call(this,a.O.F.RESET,null);return Promise.resolve()};a.b.i("ArrayTableDataSource.prototype.reset",{reset:a.Ja.prototype.reset});a.Ja.prototype.sort=function(d){if(null==d)return this.comparator=null,Promise.resolve();var b=d.key,c=d.direction,e=null;"ascending"==c?e=function(a){return f.isFunction(a[b])?a[b]():a[b]}:"descending"==c&&(e=function(a,c){var d,e;f.isFunction(a[b])?
(d=a[b](),e=c[b]()):(d=a[b],e=c[b]);return d===e?0:d>e?-1:1});this.comparator=e;this.direction=c;var g=this;return new Promise(function(b){d=d||{};if(g.yz()){var c=g.comparator;g.ca.data.sort(function(b,d){return a.Ja.wW(b,d,c,g)});g.bca(g.ca);g.Tda=!0;var e={header:d.key,direction:d.direction};a.O.q.handleEvent.call(g,a.O.F.SORT,e);b(e)}})};a.b.i("ArrayTableDataSource.prototype.sort",{sort:a.Ja.prototype.sort});a.Ja.prototype.totalSize=function(){return this.Qd};a.b.i("ArrayTableDataSource.prototype.totalSize",
{totalSize:a.Ja.prototype.totalSize});a.Ja.prototype.Y3=function(d,b,c){var e,g,f;c=c||{};var k=c.silent,l={data:[],keys:[],indexes:[]};d instanceof Array||(d=[d]);null==b||b instanceof Array||(b=[b]);for(c=0;c<d.length;c++)if(g=d[c],null!=g){f=this.pu(g);l.data.push(g);l.keys.push(f);if(!0==this.Tda&&0<this.ca.data.length)for(e=0;e<this.ca.data.length;e++)if(0>a.Ja.wW(g,this.ca.data[e],this.comparator,this)){this.ca.data.splice(e,0,g);this.ca.keys.splice(e,0,f);l.indexes.push(e);break}else{if(e==
this.ca.data.length-1){this.ca.data.push(g);this.ca.keys.push(f);l.indexes.push(e+1);break}}else null==b?(this.ca.data.push(g),this.ca.keys.push(f),l.indexes.push(this.ca.data.length-1)):(this.ca.data.splice(b[c],0,g),this.ca.keys.splice(b[c],0,f),l.indexes.push(b[c]));this.Qd++;this.pv()}!k&&0<l.data.length&&a.O.q.handleEvent.call(this,a.O.F.ADD,l);return Promise.resolve(l)};a.Ja.prototype.ee=function(d){d=d||{};this.Ev(d);var b;try{b=0<d.pageSize?d.pageSize:-1;this.aa||(this.aa=0);if(null==this.ca||
0==this.ca.length)this.ca=this.xm(this.f),this.Qd=this.f.length;this.aa=null==d.startIndex?this.aa:d.startIndex;var c=a.Ja.fz(this.ca,this.aa,b),e=[],g=[],f;for(f=this.aa;f<=c;f++)e[f-this.aa]=this.ca.data[f],g[f-this.aa]=this.ca.keys[f]}catch(k){return this.ug(d,null,k),Promise.reject(k)}c<this.aa&&(this.aa=c+1);d.pageSize=b;d.startIndex=this.aa;d.refresh=!0;b={data:e,keys:g,startIndex:this.aa};this.ug(d,b,null);return Promise.resolve(b)};a.Ja.prototype.$g=function(a){var b,c,e,g,h=null;for(b=0;b<
this.ca.data.length;b++)if(e=this.ca.data[b],void 0!==e)if(g=this.ca.keys[b],f.isArray(g)&&f.isArray(a)){if(g.length==a.length){var k=!0;for(c=0;c<a.length;c++)if(g[c]!=a[c]){k=!1;break}k&&(h={data:e,key:g,index:this.ca.indexes[b]})}}else g==a&&(h={data:e,key:g,index:this.ca.indexes[b]});return h};a.Ja.prototype.yz=function(){var a=this.comparator;return void 0!==a&&null!==a};a.Ja.prototype.pv=function(){for(var a=0;a<this.ca.data.length;a++)this.ca.indexes[a]=a};a.Ja.prototype.bca=function(a){var b;
for(b=0;b<a.data.length;b++)a.keys[b]=this.pu(a.data[b])};a.Ja.prototype.Rm=function(d,b){var c,e;b=b||{};var g=b.silent,f=[];f.data=[];f.keys=[];f.indexes=[];d instanceof Array||(d=[d]);var k=[];for(c=0;c<d.length;c++)e=d[c],null!=e&&(e=this.pu(e),e=this.$g(e,null),k.push({data:e.data,key:e.key,index:e.index}));k.sort(function(a,b){return a.index-b.index});for(c=0;c<k.length;c++)f.data.push(k[c].data),f.keys.push(k[c].key),f.indexes.push(k[c].index);for(c=f.indexes.length-1;0<=c;c--)this.ca.data.splice(f.indexes[c],
1),this.ca.keys.splice(f.indexes[c],1),this.ca.indexes.splice(f.indexes[c],1),this.Qd--,this.pv();!g&&0<f.data.length&&a.O.q.handleEvent.call(this,a.O.F.REMOVE,f);return Promise.resolve(f)};a.Ja.prototype.Ev=function(d){d.silent||a.O.q.handleEvent.call(this,a.O.F.REQUEST,{startIndex:d.startIndex})};a.Ja.prototype.ug=function(d,b,c){null!=c?a.O.q.handleEvent.call(this,a.O.F.ERROR,c):d.silent||a.O.q.handleEvent.call(this,a.O.F.SYNC,b)};a.Ja.Ck=function(a,b,c){if("descending"==c){if(a<b)return 1;if(b<
a)return-1}else{if(a>b)return 1;if(b>a)return-1}return 0};a.Ja.fz=function(a,b,c){var e=a.data.length-1;0<c&&(e=b+c-1,e=e>a.data.length-1?a.data.length-1:e);return e};a.Ja.um=function(a,b){return f.isFunction(a[b])?a[b]():a[b]};a.Ja.prototype.xm=function(a){var b=a.length-1,c={},e,g;c.data=[];c.keys=[];c.indexes=[];this.Lt=null;for(e=0;e<=b;e++){var f={},k=a[e];for(g in k)k.hasOwnProperty(g)&&(f[g]=k[g],0==e&&(null==this.Lt&&(this.Lt=[]),this.Lt.push(g)));c.data[e]=f;c.keys[e]=this.pu(f);c.indexes[e]=
e}return c};a.Ja.prototype.pu=function(a){var b,c=this.RF();if("string"===f.type(c))b=a[c];else if(f.isArray(c)){var e;b=[];for(e=0;e<c.length;e++)b[e]=a[c[e]]}return b};a.Ja.prototype.RF=function(){return null!=this.WG?this.WG:this.Lt.hasOwnProperty("id")?"id":this.Lt};a.Ja.wW=function(d,b,c,e){var g,h;if(f.isFunction(c)){if(1===c.length){g=c.call(e,d);h=c.call(e,b);d=a.Ba.rd(g)?g.split(","):[g];b=a.Ba.rd(h)?h.split(","):[h];for(c=0;c<d.length;c++)if(g=a.Ja.Ck(d[c],b[c],e.direction),0!==g)return g;
return 0}return c.call(e,d,b)}if(a.Ba.rd(c)){var k=c.split(",");for(c=0;c<k.length;c++)if(g=a.Ja.um(d,k[c]),h=a.Ja.um(b,k[c]),g=a.Ja.Ck(g,h,e.direction),0!==g)return g}return 0};a.Ja.nc={_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields."};a.Tc=function(d,b){this.data={};if(!(d instanceof a.l))throw Error(a.O.nc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.O.nc._ERR_DATA_INVALID_TYPE_DETAIL);a.Tc.q.constructor.call(this,
d,b);this.ic=d;this.J3();this.Init();if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.Fv=!0};o_("CollectionTableDataSource",a.Tc,a);a.b.ga(a.Tc,a.O,"oj.CollectionTableDataSource");a.Tc.prototype.Init=function(){a.Tc.q.Init.call(this)};a.b.i("CollectionTableDataSource.prototype.Init",{Init:a.Tc.prototype.Init});a.Tc.prototype.at=function(d,b){b=b||{};b.deferred=!0;var c=this.ic.at(d,b),e=this;e.Ru=!0;var g;return new Promise(function(b,f){null!=c?c.then(function(a){e.Ru=!1;g=
{data:a.attributes,index:d,key:a.id};b(g)},function(b){e.Ru=!1;a.O.q.handleEvent.call(e,a.O.F.ERROR,b);f(b)}):b(null)})};a.b.i("CollectionTableDataSource.prototype.at",{at:a.Tc.prototype.at});a.Tc.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.Fv?this.ee(a):Promise.resolve()};a.b.i("CollectionTableDataSource.prototype.fetch",{fetch:a.Tc.prototype.fetch});a.Tc.prototype.get=function(d,b){b=b||{};b.deferred=!0;var c=this.ic.get(d,b),e=this,g;return new Promise(function(b,d){null!=
c?c.then(function(a){g={data:a.attributes,index:a.index,key:a.id};b(g)},function(b){a.O.q.handleEvent.call(e,a.O.F.ERROR,b);d(b)}):b(null)})};a.b.i("CollectionTableDataSource.prototype.get",{get:a.Tc.prototype.get});a.Tc.prototype.sort=function(a){if(null==a)return Promise.resolve();var b=this;return new Promise(function(c){b.hda(a);b.ic.sort(null);c({header:a.key,direction:a.direction})})};a.b.i("CollectionTableDataSource.prototype.sort",{sort:a.Tc.prototype.sort});a.Tc.prototype.totalSize=function(){var a=
0<=this.ic.totalResults?this.ic.totalResults:-1;if(-1<a){var b=this.ic.size();return b>a?b:a}0<this.pF&&(a=this.pF);return a};a.b.i("CollectionTableDataSource.prototype.totalSize",{totalSize:a.Tc.prototype.totalSize});a.Tc.prototype.J3=function(){var d=this;this.ic.on(a.$.F.SYNC,function(b){if(b instanceof a.l&&!d.Ru&&!d.pT){var c=b.offset,e=b.lastFetchCount;0<e?(d.aa=c,d.Ra=e,d.Ru=!0,b.Qp(c,c+e).then(function(a){d.Ru=!1;var b=[],e=[],f;for(f=0;f<a.length;f++)null!=a[f]&&(b.push(a[f].attributes),
e.push(a[f].id));d.ug.call(d,{silent:!1},{data:b,keys:e,startIndex:c},null)})):(b=d.xm(),d.ug.call(d,{silent:!1},b,null))}});this.ic.on(a.$.F.ALLADDED,function(b,c){var e=[],g=[],f=[],k;for(k=0;k<c.length;k++)e.push(c[k].attributes),g.push(c[k].id),f.push(c[k].index);a.O.q.handleEvent.call(d,a.O.F.ADD,{data:e,keys:g,indexes:f})});this.ic.on(a.$.F.ALLREMOVED,function(b,c){var e=[],g=[],f=[],k;for(k=0;k<c.length;k++)e.push(c[k].attributes),g.push(c[k].id),f.push(c[k].index);a.O.q.handleEvent.call(d,
a.O.F.REMOVE,{data:e,keys:g,indexes:f})});this.ic.on(a.$.F.RESET,function(b){a.O.q.handleEvent.call(d,a.O.F.RESET,b)});this.ic.on(a.$.F.SORT,function(b,c){null!=c&&c.add||a.O.q.handleEvent.call(d,a.O.F.SORT,b)});this.ic.on(a.$.F.CHANGE,function(b){a.O.q.handleEvent.call(d,a.O.F.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]})});this.ic.on(a.$.F.DESTROY,function(b){a.O.q.handleEvent.call(d,a.O.F.DESTROY,b)});this.ic.on(a.$.F.REFRESH,function(b){a.O.q.handleEvent.call(d,a.O.F.REFRESH,b)});
this.ic.on(a.$.F.ERROR,function(b,c,e){a.O.q.handleEvent.call(d,a.O.F.ERROR,b,c,e)})};a.Tc.prototype.ee=function(a){this.Ev(a);a=a||{};var b=this;this.maa=0<a.pageSize?!0:!1;this.aa=null==a.startIndex?this.aa:a.startIndex;this.Iz=!0;this.Ra=0<a.pageSize?a.pageSize:-1;a.pageSize=this.Ra;a.startIndex=this.aa;a.refresh=!0;return new Promise(function(c,e){if(b.maa)b.ic.Rw(b.aa,b.Ra).then(function(e){var g=[],f=[],m;for(m=0;m<e.models.length;m++)g[m]=e.models[m].attributes,f[m]=e.models[m].id;g={data:g,
keys:f,startIndex:b.aa};e.models.length<b.Ra?0>b.totalSize()&&(b.pF=b.aa+e.models.length):b.pF=null;b.ug.call(b,a,g,null);c(g)},function(c){b.ug.call(b,a,null,c);e(c)});else if(0<b.ic.size()){var g=b.xm();b.ug.call(b,a,g,null);c(g)}else b.ic.fetch({success:function(e){b.ic=e;e=b.xm();b.ug.call(b,a,e,null);c(e)},error:function(c,g){b.ic=c;b.ug.call(b,a,null,g);e(g)}})})};a.Tc.prototype.Ev=function(d){this.pT=!0;d.silent||a.O.q.handleEvent.call(this,a.O.F.REQUEST,{startIndex:d.startIndex})};a.Tc.prototype.ug=
function(d,b,c){this.pT=!1;null!=c?a.O.q.handleEvent.call(this,a.O.F.ERROR,c):d.silent||a.O.q.handleEvent.call(this,a.O.F.SYNC,b)};a.Tc.prototype.hda=function(a){if(null==a)this.ic.comparator=null;else{var b=a.key;a=a.direction;var c=null;this.ic.ab()?(this.ic.comparator=b,this.ic.sortDirection="ascending"===a?1:-1):("ascending"==a?c=function(a){return f.isFunction(a.get)?a.get(b):a[b]()}:"descending"==a&&(c=function(a,c){var d,k;f.isFunction(a.get)?(d=a.get(b),k=c.get(b)):(d=a[b](),k=c[b]());return d===
k?0:d>k?-1:1}),this.ic.comparator=c)}};a.Tc.prototype.xm=function(){var a=this.ic.size()-1,b=[],c=[],e;for(e=0;e<=a;e++)b[e]=this.ic.at(e).attributes,c[e]=this.ic.at(e).id;return{data:b,keys:c,startIndex:this.aa}};a.hg=function(a,b,c){c=c||{};this.f=b;this.Mq=a;this.Sq=c.fetchSize;this.Sq=0<this.Sq?this.Sq:25;this.ur=c.maxCount;this.ur=0<this.ur?this.ur:500;this.uA=0;this.GW=c.success;this.S6=c.error;this.Yo();f(this.Mq).on("scroll.domscroller",function(a){var b=f(a.target).scrollTop();a=f(a.target)[0].scrollHeight-
f(a.target)[0].clientHeight;0<a&&this.f$(b,a)}.bind(this))};a.hg.prototype.destroy=function(){this.Pj();f(this.Mq).off("scroll.domscroller")};a.b.i("DomScroller.prototype.destroy",{destroy:a.hg.prototype.destroy});a.hg.prototype.checkViewport=function(){return 0<this.Mq[0].clientHeight&&!this.X4()?this.KQ():Promise.resolve(null)};a.b.i("DomScroller.prototype.checkViewport",{checkViewport:a.hg.prototype.checkViewport});a.hg.prototype.f$=function(a,b){if(1>=b-a){var c=this;this.KQ().then(function(a){null!=
c.GW&&c.GW(a)},this.S6)}};a.hg.prototype.X4=function(){var a=this.Mq;return a[0].scrollHeight>a[0].clientHeight?!0:!1};a.hg.prototype.KQ=function(){if(this.Ly)return this.Ly;var a=this.ur-this.uA;if(0<a){var b=this.Sq,c=this;a<this.Sq&&(b=a);var e=this.c7({pageSize:b});return this.Ly=new Promise(function(b){e.then(function(e){c.Ly=null;null!=e&&(c.uA=e.data.length+e.startIndex,a<c.Sq&&(e.maxCount=c.ur,e.maxCountLimit=!0));b(e)})})}return Promise.resolve({maxCount:this.ur,maxCountLimit:!0})};a.hg.prototype.c7=
function(a){a=a||{};var b=a.pageSize;this.Yg=this.Yg?this.Yg+b:b;if(-1==this.f.totalSize()||this.f.totalSize()>this.Yg){var c=this;return new Promise(function(a,d){c.f.fetch({startIndex:c.Yg,pageSize:b}).then(function(b){a(b)},function(){d(null)})})}return Promise.resolve()};a.hg.prototype.ym=function(){this.Yg=null;this.uA=0};a.hg.prototype.l9=function(a){this.Yg=a.startIndex;this.uA=a.data.length+this.Yg};a.hg.prototype.Yo=function(){var d=this.f;if(null!=d){this.Pj();this.Va=[];this.Va.push({eventType:a.O.F.SORT,
eventHandler:this.ym.bind(this)});this.Va.push({eventType:a.O.F.REFRESH,eventHandler:this.ym.bind(this)});this.Va.push({eventType:a.O.F.RESET,eventHandler:this.ym.bind(this)});this.Va.push({eventType:a.O.F.SYNC,eventHandler:this.l9.bind(this)});var b,c;for(b=0;b<this.Va.length;b++)(c=d.on(this.Va[b].eventType,this.Va[b].eventHandler))&&(this.Va[b].eventHandler=c)}};a.hg.prototype.Pj=function(){var a=this.f;if(null!=this.Va&&null!=a){var b;for(b=0;b<this.Va.length;b++)a.off(this.Va[b].eventType,this.Va[b].eventHandler)}};
a.gc=function(){};o_("PagingModel",a.gc,a);a.gc.prototype.getPage=function(){};a.b.i("PagingModel.prototype.getPage",{getPage:a.gc.prototype.getPage});a.gc.prototype.setPage=function(){};a.b.i("PagingModel.prototype.setPage",{setPage:a.gc.prototype.setPage});a.gc.prototype.getStartItemIndex=function(){};a.b.i("PagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.gc.prototype.getStartItemIndex});a.gc.prototype.getEndItemIndex=function(){};a.b.i("PagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.gc.prototype.getEndItemIndex});
a.gc.prototype.getPageCount=function(){};a.b.i("PagingModel.prototype.getPageCount",{getPageCount:a.gc.prototype.getPageCount});a.gc.prototype.totalSize=function(){};a.b.i("PagingModel.prototype.totalSize",{totalSize:a.gc.prototype.totalSize});a.gc.F={BEFOREPAGE:"beforePage",PAGE:"page",PAGECOUNT:"pageCount"};o_("PagingModel.EventType",a.gc.F,a);a.qa=function(d){if(!(d instanceof a.O))throw Error(a.O.nc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.O.nc._ERR_DATA_INVALID_TYPE_DETAIL);this.Ec=d;this.Ei=this.aa=
0;this.Init()};o_("PagingTableDataSource",a.qa,a);a.b.ga(a.qa,a.O,"oj.PagingTableDataSource");a.qa.prototype.Init=function(){a.qa.q.Init.call(this)};a.b.i("PagingTableDataSource.prototype.Init",{Init:a.qa.prototype.Init});a.qa.prototype.getWrappedDataSource=function(){return this.Ec};a.b.i("PagingTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.qa.prototype.getWrappedDataSource});a.qa.prototype.getPage=function(){return"loadMore"==this.My?0:this.nz()};a.b.i("PagingTableDataSource.prototype.getPage",
{getPage:a.qa.prototype.getPage});a.qa.prototype.setPage=function(d,b){b=b||{};d=parseInt(d,10);try{a.qa.q.handleEvent.call(this,a.gc.F.BEFOREPAGE,{page:d,previousPage:this.nz()})}catch(c){return Promise.reject(null)}var e=this.nz();this.Ra=null!=b.pageSize?b.pageSize:this.Ra;b.pageSize=this.Ra;b.startIndex=d*this.Ra;this.aa=null==b.startIndex?this.aa:b.startIndex;this.My="page";var g=this;return new Promise(function(c,d){0<g.Ra?g.Ec.fetch(b).then(function(b){b.startIndex=0;g.VA();a.qa.q.handleEvent.call(g,
a.gc.F.PAGE,{page:g.nz(),previousPage:e});c(null)},function(){g.aa=e*g.Ra;d(null)}):c(null)})};a.b.i("PagingTableDataSource.prototype.setPage",{setPage:a.qa.prototype.setPage});a.qa.prototype.getStartItemIndex=function(){return"loadMore"==this.My?0:this.aa};a.b.i("PagingTableDataSource.prototype.getStartItemIndex",{getStartItemIndex:a.qa.prototype.getStartItemIndex});a.qa.prototype.getEndItemIndex=function(){return this.Ei};a.b.i("PagingTableDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.qa.prototype.getEndItemIndex});
a.qa.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.Ra)};a.b.i("PagingTableDataSource.prototype.getPageCount",{getPageCount:a.qa.prototype.getPageCount});a.qa.prototype.at=function(a,b){return this.Ec.at(a,b)};a.b.i("PagingTableDataSource.prototype.at",{at:a.qa.prototype.at});a.qa.prototype.fetch=function(a){a=a||{};if(null==a.startIndex)return this.setPage(this.getPage());this.My="loadMore";this.aa=null==a.startIndex?this.aa:a.startIndex;var b=null!=a.pageSize?
a.pageSize:this.Ra;a.pageSize=b;a.startIndex=this.aa;var c=this;return new Promise(function(e,g){0<b?c.Ec.fetch(a).then(function(a){c.VA();e(a)},function(a){g(a)}):e(null)})};a.b.i("PagingTableDataSource.prototype.fetch",{fetch:a.qa.prototype.fetch});a.qa.prototype.get=function(a,b){return this.Ec.get(a,b)};a.b.i("PagingTableDataSource.prototype.get",{get:a.qa.prototype.get});a.qa.prototype.getCapability=function(a){return this.Ec.getCapability(a)};a.b.i("PagingTableDataSource.prototype.getCapability",
{getCapability:a.qa.prototype.getCapability});a.qa.prototype.on=function(d,b){var c=this,e=this.Ec;if(d==a.O.F.SYNC){var g=function(a){c.i$(a,b)};e.on(d,g);return g}if(d==a.O.F.ADD||d==a.O.F.REMOVE||d==a.O.F.CHANGE)return g=function(a){c.b$(a,b)},e.on(d,g),g;if(d==a.O.F.REFRESH||d==a.O.F.RESET)return g=function(a){c.aa=0;b(a)},e.on(d,g),g;if(d==a.gc.F.PAGE||d==a.gc.F.PAGECOUNT)a.qa.q.on.call(this,d,b);else e.on(d,b);return b};a.b.i("PagingTableDataSource.prototype.on",{on:a.qa.prototype.on});a.qa.prototype.off=
function(d,b){return d==a.gc.F.PAGE||d==a.gc.F.PAGECOUNT?(a.qa.q.off.call(this,d,b),b):this.Ec.off(d,b)};a.b.i("PagingTableDataSource.prototype.off",{off:a.qa.prototype.off});a.qa.prototype.sort=function(a){return this.Ec.sort(a)};a.b.i("PagingTableDataSource.prototype.sort",{sort:a.qa.prototype.sort});a.qa.prototype.totalSize=function(){return this.Ec.totalSize()};a.b.i("PagingTableDataSource.prototype.totalSize",{totalSize:a.qa.prototype.totalSize});a.qa.prototype.nz=function(){return 0<this.Ra?
Math.floor(this.aa/this.Ra):0};a.qa.prototype.b$=function(a,b){var c=[],e;for(e=0;e<a.indexes.length;e++){var g=a.indexes[e];void 0!==g&&(g-=this.aa,(0>g||g>=this.aa+this.Ra)&&c.push(e))}if(0<c.length)for(c.sort(function(a,b){return a-b}),e=c.length-1;0<=e;e--)a.data.splice(c[e],1),a.indexes.splice(c[e],1),a.keys.splice(c[e],1);this.VA();a.startIndex=this.aa;b(a)};a.qa.prototype.i$=function(d,b){d.startIndex!=this.aa&&(this.aa=d.startIndex);this.VA();if("page"==this.My){var c={};a.Ac.Qf(c,d);c.startIndex=
0;b(c)}else b(d)};a.qa.prototype.VA=function(){var a=this.totalSize();this.Ei=this.aa+this.Ra-1;0<a&&(this.Ei=this.Ei>a-1?a-1:this.Ei)};a.qa.F={ADD:"add",REMOVE:"remove",RESET:"reset",SYNC:"sync",REFRESH:"refresh",SORT:"sort"};o_("PagingTableDataSource.EventType",a.qa.F,a);a.Fe=function(d,b,c,e){a.j.pc(d,null);a.j.pc(b,null);this.Nga=e;this.sn=d;this.IB=b;this.tf=c};o_("JsonNodeSet",a.Fe,a);a.Fe.prototype.getParent=function(){return this.Nga};a.b.i("JsonNodeSet.prototype.getParent",{getParent:a.Fe.prototype.getParent});
a.Fe.prototype.ua=function(){return this.sn};a.b.i("JsonNodeSet.prototype.getStart",{ua:a.Fe.prototype.ua});a.Fe.prototype.R=function(){return Math.max(0,this.IB-this.sn)};a.b.i("JsonNodeSet.prototype.getCount",{R:a.Fe.prototype.R});a.Fe.prototype.getData=function(d){a.j.assert(d<=this.IB&&d>=this.sn);d-=this.sn;return this.tf[d]?this.tf[d].attr:null};a.b.i("JsonNodeSet.prototype.getData",{getData:a.Fe.prototype.getData});a.Fe.prototype.getMetadata=function(d){var b=[];a.j.assert(d<=this.IB&&d>=this.sn);
d-=this.sn;b.key=this.tf[d].id?this.tf[d].id:this.tf[d].attr.id;b.leaf=this.tf[d].vK;b.depth=this.tf[d].depth;null==b.leaf&&(b.leaf=this.tf[d].children&&0<this.tf[d].children.length?!1:!0);return b};a.b.i("JsonNodeSet.prototype.getMetadata",{getMetadata:a.Fe.prototype.getMetadata});a.Fe.prototype.fl=function(a,b){var c;b++;a.depth=b;if(a.children&&0!=a.children.length)for(c=0;c<a.children.length;c++)this.fl(a.children[c],b)};a.Fe.prototype.pf=function(d){var b,c,e;a.j.assert(d<=this.IB&&d>=this.sn);
d-=this.sn;c=this.tf[d].depth;b=this.tf[d].children;if(0==b.length)return null;d=this.tf[d].id?this.tf[d].id:this.tf[d].attr.id;for(e=0;e<b.length;e++)this.fl(b[e],c);return new a.Fe(0,b.length,b,d)};a.b.i("JsonNodeSet.prototype.getChildNodeSet",{pf:a.Fe.prototype.pf});a.fc=function(d){a.fc.q.constructor.call(this,d)};o_("DataGridDataSource",a.fc,a);a.b.ga(a.fc,a.Og,"oj.DataGridDataSource");a.fc.prototype.R=function(){return 0};a.b.i("DataGridDataSource.prototype.getCount",{R:a.fc.prototype.R});a.fc.prototype.Sf=
function(){return"exact"};a.b.i("DataGridDataSource.prototype.getCountPrecision",{Sf:a.fc.prototype.Sf});a.fc.prototype.Sd=function(){a.j.Ya()};a.b.i("DataGridDataSource.prototype.fetchHeaders",{Sd:a.fc.prototype.Sd});a.fc.prototype.ke=function(){a.j.Ya()};a.b.i("DataGridDataSource.prototype.fetchCells",{ke:a.fc.prototype.ke});a.fc.prototype.keys=function(){a.j.Ya();return null};a.b.i("DataGridDataSource.prototype.keys",{keys:a.fc.prototype.keys});a.fc.prototype.oe=function(){a.j.Ya();return null};
a.b.i("DataGridDataSource.prototype.indexes",{oe:a.fc.prototype.oe});a.fc.prototype.sort=function(){a.j.Ya()};a.b.i("DataGridDataSource.prototype.sort",{sort:a.fc.prototype.sort});a.fc.prototype.move=function(){a.j.Ya()};a.b.i("DataGridDataSource.prototype.move",{move:a.fc.prototype.move});a.fc.prototype.cj=function(){return"valid"};a.b.i("DataGridDataSource.prototype.moveOK",{cj:a.fc.prototype.cj});a.fc.prototype.getCapability=function(){return null};a.b.i("DataGridDataSource.prototype.getCapability",
{getCapability:a.fc.prototype.getCapability})});