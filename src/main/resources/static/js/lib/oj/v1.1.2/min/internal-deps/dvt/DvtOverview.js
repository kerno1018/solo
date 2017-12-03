/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.hP={Vl:function(){return(0,D.Mf)()}};D.z.q(D.hP,D.z,"DvtTimeUtils");D.hP.te=function(a,b,c,d){c=(c-a)*d;a=b-a;return 0==c||0==a?0:c/a};D.hP.wg=function(a,b,c,d){b=c*(b-a);return 0==b||0==d?a:b/d+a};
D.pp=function(a,b,c){this.Init(a,b,c)};(0,D.ca)("DvtOverview",D.pp);D.z.q(D.pp,D.D,"DvtOverview");
D.pp.prototype.Init=function(a,b,c){D.pp.u.Init.call(this,a);this.pb=b;this.ta=c;this.rq=this.AH()?7:6;if(this.pb!=D.o||this.ta!=D.o)this.Ta=new D.gP(this),this.Ta.We(this),D.hP.Vl()?(this.oa(D.vh.Yf,this.XT,D.p,this),this.oa(D.vh.Hk,this.$ea,D.p,this),this.oa(D.vh.ij,this.WT,D.p,this),this.oa(D.vn,this.wE,D.p,this)):(this.oa(D.hA,this.ST,D.p,this),this.oa(D.iA,this.RT,D.p,this),this.oa(D.vn,this.wE,D.p,this),this.oa(D.zj,this.vN,D.p,this),this.oa(D.Aj,this.P1,D.p,this));this.K6=0};
D.pp.prototype.Sl=function(a,b,c){c==D.o&&(c=this.Za);a=this.te(a);var d=this.te(b);a<this.jt||d>(0,D.iP)(this)||(b=window.Math.max(d-a,(0,D.jP)(this)),0<b&&(0<=a&&d<=c)&&(d=this.la(1),(0,D.kP)(this)?(0,D.lP)(this,d,c-(a+b)):(0,D.lP)(this,d,a),(0,D.mP)(this,d,b),(0,D.nP)(this)))};D.oP=function(a){return a.sW==D.o?D.p:-1!=a.sW.indexOf("zoom")};
D.pp.prototype.U=function(a,b,c){if(a==D.o){var d=this.vb,e=this.hc,f=this.la(1),g=(0,D.pP)(this,f);f!=D.o&&0!=g&&(this.hoa=D.hP.wg(d,e,g,this.Za));this.Ql()}b!=D.o&&c!=D.o&&(this.Za=b,this.ob=c);a&&(a=this.EI(a),this.Jw(a));a=this.pb!=D.o||this.ta!=D.o;this.KL(b,c);if(a){e=(d=this.Tc())?new D.F(this.j(),0,0,b,0,"window"):new D.F(this.j(),0,0,0,c,"window");e.va(this.TY,this.OFa);(0,D.Ti)(e);if(!(0,D.oP)(this)){var h=(0,D.qP)(),j=(0,D.rP)();if(d){var l=(b-36)/2,m=D.M.moveTo(l,0)+D.M.bd(l+3,6,l+8,8)+
D.M.lineTo(l+28,8)+D.M.bd(l+33,6,l+36,0);D.M.closePath();g=D.M.moveTo(l,0)+D.M.bd(l+3,-6,l+8,-8)+D.M.lineTo(l+28,-8)+D.M.bd(l+33,-6,l+36,0);D.M.closePath();var f=new D.F(this.j(),0,0,b,h,"lhb"),h=new D.F(this.j(),0,0,b,h,"rhb"),n="row-resize";if(this.v6)var q=(0,D.sP)(this,b,10),l=(0,D.sP)(this,b,10);else q=(0,D.tP)(this,l),l=(0,D.tP)(this,l)}else l=(c-36)/2,m=D.M.moveTo(0,l)+D.M.bd(6,l+3,8,l+8)+D.M.lineTo(8,l+28)+D.M.bd(6,l+33,0,l+36),D.M.closePath(),g=D.M.moveTo(0,l)+D.M.bd(-6,l+3,-8,l+8)+D.M.lineTo(-8,
l+28)+D.M.bd(-6,l+33,0,l+36),D.M.closePath(),f=new D.F(this.j(),0-j,0,h,c,"lhb"),h=new D.F(this.j(),j,0,h,c,"rhb"),n="col-resize",this.v6?(q=(0,D.sP)(this,10,c),l=(0,D.sP)(this,10,c)):(q=(0,D.tP)(this,l),l=(0,D.tP)(this,l));f.va(this.TY,0);h.va(this.TY,0);(0,D.Ti)(f);(0,D.Ti)(h);m=new D.Vh(this.j(),m,"lh");g=new D.Vh(this.j(),g,"rh");m.va(this.pP);m.Ya(this.pP);g.va(this.pP);g.Ya(this.pP);this.TY==this.pP&&((0,D.Ti)(m),(0,D.Ti)(g));f.setCursor(n);h.setCursor(n);m.setCursor(n);g.setCursor(n);q.setCursor(n);
l.setCursor(n);e.k(f);e.k(m);e.k(q);e.k(h);e.k(g);e.k(l)}e.setCursor("move");this.k(e);e=d?this.Oc()?new D.Si(this.j(),this.wD(),0,this.wD(),c,"tab"):new D.Si(this.j(),b-this.wD(),0,b-this.wD(),c,"tab"):"above"==this.MX?new D.Si(this.j(),0,(0,D.uP)(this),b,(0,D.uP)(this),"tab"):new D.Si(this.j(),0,c-(0,D.uP)(this),b,c-(0,D.uP)(this),"tab");e.Ya(this.zFa,this.AFa);(0,D.Ti)(e);this.Voa=e;this.k(e);this.au()&&(d?(e=new D.F(this.j(),0,0,b,0,"lbg"),f=new D.F(this.j(),0,0,b,0,"rbg")):(e=new D.F(this.j(),
0,0,0,c,"lbg"),f=new D.F(this.j(),0,0,0,c,"rbg")),e.va(this.Kla,this.GCa),this.k(e),f.va(this.moa,this.YEa),this.k(f),D.hP.Vl()&&j!=D.i&&((0,D.rP)(),d?(d=new D.F(this.j(),0,0,b,j,"lbgrh"),j=new D.F(this.j(),0,0,b,j,"rbgrh")):(d=new D.F(this.j(),0,0,j,c,"lbgrh"),j=new D.F(this.j(),0,0,j,c,"rbgrh")),d.va(this.Kla,0),this.k(d),j.va(this.moa,0),this.k(j)))}if(this.TQ!=D.o){this.Tc();j=(0,D.vP)(this);for(d=0;d<this.TQ.length;d++)f=this.TQ[d],e=(0,window.parseInt)(f.B("time"),10),e=this.te(e),f=f.B("label"),
g=0,d+1<this.TQ.length?(g=(0,window.parseInt)(this.TQ[d+1].B("time"),10),g=this.te(g)-e):g=j-e,(0,D.kP)(this)&&(e=j-e),this.FL(e,b,c,"tick"+d),this.CL(e,f,b,c,g,"label"+d)}if(this.Z5!=D.o)for(j=0;j<this.Z5.length;j++)f=this.Z5[j],d=b,e=c,n=(0,window.parseInt)(f.B("rs"),10),g=(0,window.parseInt)(f.B("re"),10),f=f.B("c"),n!=D.o&&g!=D.o&&(h=(0,D.vP)(this),n=this.te(n),g=this.te(g)-n,(0,D.kP)(this)&&(n=h-n-g),d=this.Tc()?new D.F(this.j(),0,n,d-this.wD(),g,"ftr"):new D.F(this.j(),n,"above"==this.MX?(0,D.uP)(this):
0,g,e-(0,D.uP)(this),"ftr"),f!=D.o&&d.va(f,0.4),d.setCursor("move"),(0,D.Ti)(d),this.k(d));this.n5==D.o||(0,window.isNaN)(this.n5)||(j=this.te(this.n5),this.Tc()?j=new D.Si(this.j(),0,j,b,j,"ocd"):(this.Oc()&&(j=b-j),j=new D.Si(this.j(),j,0,j,c,"ocd")),j.Ya(this.uAa),(0,D.Ti)(j),this.k(j));this.MS(b,c);a&&(g=this.la(1),this.Tc()?(a=g.qa(),j=a+0.5,d=a+g.getHeight(),q=d-0.5,e=0,f=0.5,m=b-0.5,g=new D.Si(this.j(),e,j,b,j,"lh"),h=new D.Si(this.j(),e,q,b,q,"rh"),n=new D.Si(this.j(),f,0,f,a,"ltb"),b=new D.Si(this.j(),
f,d,f,c,"rtb"),q=new D.Si(this.j(),m,a,m,d,"bb"),c=new D.Si(this.j(),f,a,f,d,"tb")):(a=0,j=a+0.5,d=c,q=d-0.5,e=g.pa(),f=e+0.5,c=e+g.getWidth(),m=c-0.5,g=new D.Si(this.j(),f,a,f,d,"lh"),h=new D.Si(this.j(),m,a,m,d,"rh"),n=new D.Si(this.j(),0,j,e+1,j,"ltb"),b=new D.Si(this.j(),c-1,j,b,j,"rtb"),q=new D.Si(this.j(),e,q,c,q,"bb"),c=new D.Si(this.j(),e,j,c,j,"tb")),(0,D.Ti)(g),(0,D.Ti)(h),(0,D.Ti)(n),(0,D.Ti)(b),(0,D.Ti)(q),(0,D.Ti)(c),"none"!=this.SFa&&g.Ya(this.RFa),this.k(g),"none"!=this.UFa&&h.Ya(this.TFa),
this.k(h),"none"!=this.Mza&&this.t4&&(n.Ya(this.t4),b.Ya(this.t4)),this.k(n),this.k(b),"none"!=this.QFa&&q.Ya(this.PFa),this.k(q),"none"!=this.WFa&&c.Ya(this.VFa),this.k(c),this.AH()&&(b=this.Tc()?D.M.moveTo(6,0)+D.M.lineTo(0,5)+D.M.lineTo(5,5)+D.M.lineTo(5,17)+D.M.lineTo(0,17)+D.M.lineTo(6,22)+D.M.lineTo(12,17)+D.M.lineTo(7,17)+D.M.lineTo(7,5)+D.M.lineTo(12,5)+D.M.closePath():D.M.moveTo(5,0)+D.M.lineTo(0,6)+D.M.lineTo(5,12)+D.M.lineTo(5,7)+D.M.lineTo(17,7)+D.M.lineTo(17,12)+D.M.lineTo(22,6)+D.M.lineTo(17,
0)+D.M.lineTo(17,4)+D.M.lineTo(5,4)+D.M.lineTo(5,0)+D.M.closePath(),b=new D.Vh(this.j(),b,"arr"),b.va("#ffffff"),b.Ya("#000000"),b.sb(D.p),this.k(b),this.TK=b),a=this.Tc(),c=this.la(1),b=(0,D.vP)(this),j=a?this.ob:this.Za,e=this.Ha,f=this.vb,g=this.hc,a=this.hoa,d=D.hP.wg(f,g,0,e),e=D.hP.wg(f,g,j,e),d=this.te(d),j=window.Math.min(j,this.te(e)),a=this.te(a),j-=d,(0,D.kP)(this)?(0,D.lP)(this,c,b-a-j):(0,D.lP)(this,c,a),(0,D.mP)(this,c,j),(0,D.nP)(this),c=this.Ha,a=this.vb,j=this.hc,d=D.hP.wg(a,j,1,
b),b=D.hP.wg(a,j,2,b),d=D.hP.te(a,j,d,c),this.aK=D.hP.te(a,j,b,c)-d);this.Zka!=D.o&&(this.K6=window.Math.max(0,D.hP.te(this.vb,this.hc,this.Zka,this.Ha)));0<this.K6&&(b=this.K6/this.aK,(0,D.kP)(this)&&(b=0-b),(0,D.wP)(this,b))};D.pp.prototype.render=D.pp.prototype.U;D.y=D.pp.prototype;D.y.sra=function(){return new D.xP(this)};D.y.EI=function(a){return this.sra(a).parse(a)};
D.y.Jw=function(a){this.vb=a.start;this.hc=a.end;this.Ha=a.width;this.hoa=a.yca;this.n5=a.currentTime;this.Zka=a.PKa;this.aza=a.vpa;this.jt=window.Math.max(0,a.xLa);this.UK=window.Math.max(0,a.xMa);(0,window.isNaN)(this.jt)&&(this.jt=0);(0,window.isNaN)(this.UK)&&(this.UK=0);this.rG=a.orientation;this.MX=a.Tsa;this.wCa=a.Eba;a.fqa!=D.o&&(this.sW=a.fqa.split(" "));a.Wba!=D.o&&0<a.Wba&&(this.oma=a.Wba);this.Lza=a.pGa;this.UQ=a.xta;a.xta!=D.o&&(this.TQ=this.UQ.bNa);this.Z5=a.yHa;this.Mza=a.borderTopStyle;
this.t4=a.borderTopColor;this.TY=a.cda;this.OFa=a.Cta;this.WFa=a.kda;this.UFa=a.ida;this.QFa=a.eda;this.SFa=a.gda;this.VFa=a.jda;this.TFa=a.hda;this.PFa=a.dda;this.RFa=a.fda;this.cCa=a.nba;this.pP=a.lba;this.v6=a.Jra;this.Jka=a.Vra;this.Eka=a.Sra;this.EDa=a.cca;this.uAa=a.N$;this.BFa=a.Wca;this.zFa=a.vta;this.AFa=a.wta;this.Kla=a.ssa;this.GCa=a.rsa;this.moa=a.jta;this.YEa=a.ita};D.y.te=function(a){return window.Math.max(0,D.hP.te(this.vb,this.hc,a,(0,D.vP)(this)))+this.jt};
D.y.wg=function(a){return D.hP.wg(this.vb,this.hc,window.Math.max(0,a-this.jt),(0,D.vP)(this))};D.y.Oc=function(){return"true"==this.wCa};D.kP=function(a){return a.Oc()&&!a.Tc()};D.pp.prototype.Tc=function(){return"vertical"==this.rG};D.vP=function(a){return a.Tc()?a.ob-a.jt-a.UK:a.Za-a.jt-a.UK};D.iP=function(a){return a.Tc()?a.ob-a.UK:a.Za-a.UK};D.jP=function(a){return a.P7!=D.o?a.P7:a.oma!=D.o?(a.P7=D.hP.te(a.vb,a.hc,a.vb+a.oma,(0,D.vP)(a)),a.P7):10};
D.rP=function(){return D.hP.Vl()?(0,D.qP)()/2:0};D.qP=function(){return D.hP.Vl()?30:10};D.yP=function(a){var b=a.getId();return"lh"==b||"rh"==b||"lhb"==b||"rhb"==b||"grpy"==b||"lbgrh"==b||"rbgrh"==b||a.getParent()!=D.o&&"grpy"==a.getParent().getId()};D.pp.prototype.wD=function(){if(this.UQ==D.o)return 0;if(this.VQ==D.o){var a=(0,window.parseInt)(this.UQ.width,10);this.VQ=!(0,window.isNaN)(a)&&a<this.Za?a:40}return this.VQ};
D.uP=function(a){if(a.UQ==D.o)return 0;if(a.Uoa==D.o){var b=(0,window.parseInt)(a.UQ.height,10);a.Uoa=!(0,window.isNaN)(b)&&b<a.ob?b:20}return a.Uoa};D.zP=function(a){return D.hP.Vl()&&a.targetTouches!=D.o?0<a.targetTouches.length?a.targetTouches[0].pageX:D.o:a.pageX};D.AP=function(a){return D.hP.Vl()&&a.targetTouches!=D.o?0<a.targetTouches.length?a.targetTouches[0].pageY:D.o:a.pageY};D.pp.prototype.au=(0,D.ba)(D.p);D.BP=function(a){return a.au()?a.la(3):D.o};
D.CP=function(a){return a.au()?a.la(4):D.o};D.DP=function(a){return a.au()&&!(0,D.oP)(a)?a.la(6):D.o};D.EP=function(a){return a.la(a.Ka()-(a.rq-1))};D.FP=function(a,b,c,d){a.Tc()?(-1!=c&&b.Ul(c),-1!=d&&b.Hn(d)):(-1!=c&&b.Tl(c),-1!=d&&b.Fm(d))};D.GP=function(a,b){return a.Tc()?b.Mq():b.Cp()};D.pp.prototype.PJ=function(a){a=a.target;if(a!=D.o){var b=a.getId();if(b==D.o)return D.o;if("_border"==b.substr(b.length-7))return this.oaa(a);if("tick"!=b.substr(0,4)&&"ltb"!=b&&"rtb"!=b&&"bb"!=b&&"tab"!=b)return a}return D.o};
D.HP=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||(0,D.yP)(a)?D.k:D.p};D.pp.prototype.AH=function(){return window&&window.AH};D.pp.prototype.KL=function(a,b){var c=new D.F(this.j(),0,0,a,b,"bg");c.va(this.EDa);(0,D.Ti)(c);this.k(c);return c};D.sP=function(a,b,c){a=new D.Ve(a.j(),a.v6,(b-a.Jka)/2,(c-a.Eka)/2,a.Jka,a.Eka,"grpy");a.ua(D.p);return a};
D.tP=function(a,b){var c=new D.D(a.j(),"grpy"),d=a.cCa;if(a.Tc()){for(var e=8+b,f=3,g=0;9>g;g++){var h=new D.Si(a.j(),e+2*g,f,e+2*g+1,f,"dot1"+g);h.Ya(d);c.k(h);f+=2;h=new D.Si(a.j(),e+1+2*g,f,e+1+2*g+1,f,"dot2"+g);h.Ya(d);c.k(h);f+=2;h=new D.Si(a.j(),e+2*g,f,e+2*g+1,f,"dot3"+g);h.Ya(d);c.k(h);f=3}h=new D.Si(a.j(),e+18,f,e+18+1,f,"dot4");h.Ya(d);c.k(h);f+=4;h=new D.Si(a.j(),e+18,f,e+18+1,f,"dot5")}else{e=3;f=8+b;for(g=0;9>g;g++)h=new D.Si(a.j(),e,f+2*g,e,f+2*g+1,"dot1"+g),h.Ya(d),c.k(h),e+=2,h=new D.Si(a.j(),
e,f+1+2*g,e,f+1+2*g+1,"dot2"+g),h.Ya(d),c.k(h),e+=2,h=new D.Si(a.j(),e,f+2*g,e,f+2*g+1,"dot3"+g),h.Ya(d),c.k(h),e=3;h=new D.Si(a.j(),e,f+18,e,f+18+1,"dot4");h.Ya(d);c.k(h);e+=4;h=new D.Si(a.j(),e,f+18,e,f+18+1,"dot5")}h.Ya(d);c.k(h);(0,D.Ti)(c);return c};D.IP=function(a,b){return a.Tc()?b.getHeight():b.getWidth()};D.pP=function(a,b){return a.Tc()?b.R():b.V()};
D.lP=function(a,b,c){c=window.Math.max(0,c);a.Tc()?b.W(c):b.N(c);if(a.au()){(0,D.BP)(a).sa(c);b=c+(0,D.IP)(a,b);var d=(0,D.CP)(a);d.ha(b);d.sa(window.Math.max(0,a.Za-b));D.hP.Vl()&&!(0,D.oP)(a)&&(d=(0,D.rP)(),(a.au()&&!(0,D.oP)(a)?a.la(5):D.o).ha(c-d),(0,D.DP)(a).ha(b))}};
D.mP=function(a,b,c){c=window.Math.max((0,D.jP)(a),c);var d=c=window.Math.min(a.Tc()?a.ob:a.Za,c);a.Tc()?b.Ia(d):b.sa(d);if(a.au()){var d=(0,D.pP)(a,b)+c,e=(0,D.CP)(a);e.ha(d);e.sa(window.Math.max(0,a.Za-d));D.hP.Vl()&&!(0,D.oP)(a)&&(0,D.DP)(a).ha(d)}(0,D.oP)(a)||(d=b.la(3),e=b.la(4),b=b.la(5),a.Tc()?(e.W(c),d.W(c-(0,D.qP)()),b.W(c-10)):(e.N(c),d.N(c-(0,D.qP)()),b.N(c-10)))};
D.pp.prototype.FL=function(a,b,c,d){a=this.Tc()?new D.Si(this.j(),0,a,b,a,d):new D.Si(this.j(),a,0,a,c,d);b=new D.J(this.BFa);b.ca(1,3);a.ba(b);(0,D.Ti)(a);this.k(a)};
D.pp.prototype.CL=function(a,b,c,d,e,f){this.Tc()?(b=this.Oc()?new D.Nf(this.j(),b,this.wD()+4,a,f):new D.Nf(this.j(),b,4,a,f),b.Na(new D.I("font-weight:bold"))):(c="above"==this.MX?2:d-(0,D.uP)(this)+2,b=new D.Nf(this.j(),b,a+5,c,f),b.Na(new D.I("font-weight:bold")),(0,D.kP)(this)&&(this.k(b),f=b.G(),this.removeChild(b),e-=10,b.ha(a-window.Math.min(f.e,e)-5)));D.af.Vb(b,e,window.Infinity,this);b.cEa=b.yo()};D.pp.prototype.MS=(0,D.t)();
D.wP=function(a,b){var c=a.la(1);c.la(3);c.la(4);c.la(5);if(b!=(0,D.pP)(a,c)){var d=a.la(a.Ka()-a.rq),e=(0,D.EP)(a),f=a.la(a.Ka()-(a.rq-2)),g=a.la(a.Ka()-(a.rq-3)),h=a.la(a.Ka()-(a.rq-4)),j=a.la(a.Ka()-(a.rq-5));if(a.Tc())var l=c.R,m=c.W,n=d.Mq,q=d.Ul,r=d.Qv,s=d.Hn,u=e.Mq,A=e.Ul,w=e.Qv,E=e.Hn,P=f.Qv,N=f.Hn,L=g.Mq,W=g.Ul,U=h.Mq,ga=h.Ul,qa=h.Qv,Fa=h.Hn,Ga=j.Mq,cb=j.Ul,Gb=j.Qv,yb=j.Hn;else l=c.V,m=c.N,n=d.Cp,q=d.Tl,r=d.bs,s=d.Fm,u=e.Cp,A=e.Tl,w=e.bs,E=e.Fm,P=f.bs,N=f.Fm,L=g.Cp,W=g.Tl,U=h.Cp,ga=h.Tl,
qa=h.bs,Fa=h.Fm,Ga=j.Cp,cb=j.Tl,Gb=j.bs,yb=j.Fm;var zb=a.jt,sc=(0,D.iP)(a),gc=(0,D.IP)(a,c);b=window.Math.max(zb,window.Math.min(sc-gc,b));zb="off"!==a.aza?new D.Zr(a.j(),0.5,0,D.ID):D.o;(0,D.JP)(zb,c,l,m,b);(0,D.JP)(zb,d,n,q,b);(0,D.JP)(zb,d,r,s,b);(0,D.JP)(zb,e,u,A,b+gc);(0,D.JP)(zb,e,w,E,b+gc);(0,D.JP)(zb,f,P,N,b+1);(0,D.JP)(zb,g,L,W,b+gc-1);(0,D.JP)(zb,h,U,ga,b);(0,D.JP)(zb,j,Ga,cb,b);(0,D.JP)(zb,h,qa,Fa,b+gc);(0,D.JP)(zb,j,Gb,yb,b+gc);a.au()&&(c=(0,D.BP)(a),(0,D.JP)(zb,c,c.getWidth,c.sa,b),gc=
b+gc,c=(0,D.CP)(a),d=c.getWidth,e=c.sa,f=c.pa,g=c.ha,h=a.Tc()?a.ob:a.Za,(0,D.JP)(zb,c,d,e,h-gc),(0,D.JP)(zb,c,f,g,gc),D.hP.Vl()&&!(0,D.oP)(a)&&(c=(0,D.rP)(),d=a.au()&&!(0,D.oP)(a)?a.la(5):D.o,e=d.pa,f=d.ha,g=(0,D.DP)(a),h=g.pa,j=g.ha,(0,D.JP)(zb,d,e,f,b-c),(0,D.JP)(zb,g,h,j,gc)));zb!=D.o&&zb.play()}};D.JP=function(a,b,c,d,e){a!=D.o?(0,D.T)(a,"typeNumber",b,c,d,e):d.call(b,e)};D.y=D.pp.prototype;
D.y.ST=function(a){var b=this.PJ(a);if(b&&!("bg"==b.getId()||"ocd"==b.getId()))if("label"==b.getId().substr(0,5)&&(b instanceof D.Nf||b instanceof D.zk))b.fl()&&this.j().jd().YM(a.pageX,a.pageY,b.cEa,"#000000");else if(this.TK!=D.o&&(0,D.yP)(b)&&(a=(0,D.nv)(this.j(),a.pageX,a.pageY),a=this.lc(a),this.Tc()?(0,D.Ik)(this.TK,a.x+6,a.y-10):(0,D.Ik)(this.TK,a.x-6,a.y-20),this.TK.sb(D.k)),"window"==b.getId()||"ftr"==b.getId()||"arr"==b.getId()||(0,D.yP)(b))this.AH()&&this.setCursor("move");else return b};
D.y.RT=function(a){this.dp==D.o&&this.setCursor("default");a=this.PJ(a);if(a!=D.o)return(0,D.yP)(a)&&this.TK!=D.o&&this.TK.sb(D.p),a};
D.y.wE=function(a,b,c){a.stopPropagation();var d=this.PJ(a);if(d&&!("window"==d.getId()||(0,D.yP)(d)))if("bg"==d.getId()||"label"==d.getId().substr(0,5)||"ocd"==d.getId()||"lbg"==d.getId()||"rbg"==d.getId()){b==D.i&&(b=a.pageX);c==D.i&&(c=a.pageY);a=(0,D.nv)(this.j(),b,c);a=this.lc(a);this.Tc()?(c=a.y,d=this.ob):(c=a.x,d=this.Za);a=this.la(1);b=c-(0,D.IP)(this,a)/2;(0,D.wP)(this,b);(0,D.kP)(this)&&(c=this.Za-c);var e=this.wg(c);c=new D.KP("scrollTime");c.setTime(e);b=window.Math.max(0,window.Math.min(b,
d-(0,D.IP)(this,a)));(0,D.kP)(this)?(d=this.wg(this.Za-(b+(0,D.IP)(this,a))),a=this.wg(this.Za-b)):(d=this.wg(b),a=this.wg(b+(0,D.IP)(this,a)));(0,D.LP)(c,d);(0,D.MP)(c,a);this.dispatchEvent(c)}else return d};
D.y.lR=function(a,b,c){a=this.PJ(a);if(a!=D.o&&(0,D.HP)(a)){if("ftr"==a.getId()||"sta"==a.getId())a=this.la(1);this.QW=b;this.Wka=c;if((0,D.yP)(a)){b=this.la(1);(0,D.kP)(this)?(this.Z7=this.Za-b.pa(),this.i8=this.Z7-b.getWidth()):(this.i8=b.pa(),this.Z7=this.i8+b.getWidth());"grpy"==a.getParent().getId()&&(a=a.getParent());c=a.getId();"grpy"==c&&(a=b.BR(a),c=a.getId());if("lh"==c||"rh"==c)a=b.BR(a),c=a.getId();"lbgrh"==c&&(a=b.la(0));"rbgrh"==c&&(a=b.la(b.Ka()-3));D.hP.Vl()||(this.Tc()?(a.ya(-20),
a.Ia(2*(a.getHeight()+20))):(a.ha(-20),a.sa(2*(a.getWidth()+20))));b=a.getCursor();c=this.la(1);c!=D.o&&c.setCursor(b);if(this.au()){c=(0,D.BP)(this);var d=(0,D.CP)(this);c!=D.o&&d!=D.o&&(c.setCursor(b),d.setCursor(b))}}this.dp=a;a=new D.KP("dropCallback");this.dispatchEvent(a);return D.k}return D.p};
D.y.NL=function(){if(this.dp!=D.o){if("window"==this.dp.getId())this.iqa(0,0);else if((0,D.yP)(this.dp)){this.Y$();D.hP.Vl()||(this.Tc()?(this.dp.ya(0),this.dp.Ia((0,D.qP)())):(this.dp.ha(0),this.dp.sa((0,D.qP)())));var a=this.la(1);a!=D.o&&a.setCursor("move");if(this.au()){var a=(0,D.BP)(this),b=(0,D.CP)(this);a!=D.o&&b!=D.o&&(a.setCursor("default"),b.setCursor("default"))}}this.dp=D.o;this.QW=-1}};
D.y.mR=function(a,b,c){if(this.dp!=D.o&&-1!=this.QW){var d=b-this.QW,e=c-this.Wka;this.QW=b;this.Wka=c;"window"==this.dp.getId()?this.Wra(0,d,e):"lh"==this.dp.getId()||"lhb"==this.dp.getId()?(0,D.NP)(this,a,d,e,D.k):("rh"==this.dp.getId()||"rhb"==this.dp.getId())&&this.mba(a,d,e)}};
D.y.XT=function(a){var b=a.touches;this.tL=b[0].pageX;this.QG=b[0].pageY;2==b.length&&(a.preventDefault(),this.uL=b[1].pageX,this.cR=b[1].pageY,20>window.Math.abs(this.QG-this.cR)?this.HO=0:this.cR=this.uL=this.QG=this.tL=D.o)};
D.y.$ea=function(a){a.preventDefault();a=a.touches;if(this.uL!=D.o&&this.cR!=D.o)50>this.HO?this.HO++:(this.mba(D.o,a[1].pageX-this.uL,0),this.uL=a[1].pageX,this.HO=0);else{var b=window.Math.abs(this.QG-a[0].pageY);if(3<window.Math.abs(this.tL-a[0].pageX)||3<b)this.QG=this.tL=D.o}};D.y.WT=function(a){this.uL!=D.o&&this.cR!=D.o?this.Y$():this.tL!=D.o&&this.QG!=D.o&&this.wE(a,this.tL,this.QG);this.cR=this.uL=this.QG=this.tL=D.o};
D.y.vN=function(a){var b=a.keyCode;if(37===b||39===b)b=37===b?-1:1,(a.shiftKey?this.mba:this.Wra).call(this,a,b,b)};D.y.P1=function(a){var b=a.keyCode;if(37===b||39===b)b=37===b?-1:1,(a.shiftKey?this.Y$:this.iqa).call(this,b,b)};D.y.Wra=function(a,b,c){(0,D.OP)(this,"scrollPos",b,c)};D.y.iqa=function(a,b){(0,D.OP)(this,"scrollEnd",a,b)};
D.OP=function(a,b,c,d){var e=a.la(1),f=(0,D.pP)(a,e),g=(0,D.IP)(a,e),h=a.jt,j=(0,D.iP)(a);c=a.Tc()?d:c;f+c<=h?((0,D.lP)(a,e,h),g=(0,D.kP)(a)?-2:-1):f+g+c>=j?((0,D.lP)(a,e,j-g),g=(0,D.kP)(a)?-1:-2):((0,D.lP)(a,e,f+c),g=(0,D.kP)(a)?(j-g-f-a.jt)*a.aK:(f-a.jt)*a.aK);(0,D.nP)(a);b=new D.KP(b);b.cj(g);(0,D.kP)(a)?(g=a.wg(a.Za-(f+(0,D.IP)(a,e))),e=a.wg(a.Za-f)):(g=a.wg(f),e=a.wg(f+(0,D.IP)(a,e)));(0,D.LP)(b,g);(0,D.MP)(b,e);a.dispatchEvent(b)};D.pp.prototype.mba=function(a,b,c){(0,D.NP)(this,a,b,c,D.p)};
D.NP=function(a,b,c,d,e){var f=(0,D.vP)(a);d=a.Tc()?d:c;if(0!=d){c=a.la(1);var g=(0,D.pP)(a,c),h=(0,D.IP)(a,c);if(e){if(h-d<=(0,D.jP)(a)||g+d<=a.jt)return;b=a.Tc()?(0,D.nv)(a.j(),(0,D.zP)(b),(0,D.AP)(b)).y:(0,D.nv)(a.j(),(0,D.zP)(b),(0,D.AP)(b)).x;b=a.lc(b);if(0<d&&b<=g||0>d&&b>=g)return;(0,D.lP)(a,c,g+d);(0,D.mP)(a,c,h-d)}else{if(h+d<=(0,D.jP)(a)||g+h+d>=(0,D.iP)(a))return;b=a.Tc()?(0,D.nv)(a.j(),(0,D.zP)(b),(0,D.AP)(b)).y:(0,D.nv)(a.j(),(0,D.zP)(b),(0,D.AP)(b)).x;b=a.lc(b);if(0<d&&b<=g+h||0>d&&
b>=g+h)return;(0,D.mP)(a,c,h+d)}(0,D.nP)(a);b=a.wg((0,D.IP)(a,c));b=f*(a.hc-a.vb)/(b-a.vb);f=new D.KP("rangeChanging");(0,D.km)(f,"newSize",b);b=(0,D.kP)(a)?e:!e;(0,D.km)(f,"endHandle",b);e?(0,D.km)(f,"expand",0>d):(0,D.km)(f,"expand",0<d);(0,D.kP)(a)?(e=a.wg(a.Za-((0,D.pP)(a,c)+(0,D.IP)(a,c))),c=a.wg(a.Za-(0,D.pP)(a,c))):(e=a.wg((0,D.pP)(a,c)),c=a.wg((0,D.pP)(a,c)+(0,D.IP)(a,c)));(0,D.LP)(f,e);(0,D.MP)(f,c);a.dispatchEvent(f)}};
D.pp.prototype.Y$=function(){var a=this.vb,b=this.hc,c=this.Ha,d=(0,D.vP)(this),e=this.la(1),f=this.wg((0,D.IP)(this,e)),a=d*(b-a)/(f-a),b=this.wg(this.i8),d=this.wg(this.Z7);(0,D.kP)(this)?(f=this.wg(this.Za-((0,D.pP)(this,e)+(0,D.IP)(this,e))),e=this.wg(this.Za-(0,D.pP)(this,e))):(f=this.wg((0,D.pP)(this,e)),e=this.wg((0,D.pP)(this,e)+(0,D.IP)(this,e)));var g=new D.KP("rangeChange");(0,D.km)(g,"oldSize",c);(0,D.km)(g,"newSize",a);(0,D.km)(g,"oldStartTime",b);(0,D.km)(g,"oldEndTime",d);(0,D.LP)(g,
f);(0,D.MP)(g,e);this.dispatchEvent(g)};D.nP=function(a){var b=a.la(1),c=(0,D.pP)(a,b),d=c+0.5,b=c+(0,D.IP)(a,b)-0.5,e=a.la(a.Ka()-a.rq),f=(0,D.EP)(a),g=a.la(a.Ka()-(a.rq-2)),h=a.la(a.Ka()-(a.rq-3)),j=a.la(a.Ka()-(a.rq-4)),l=a.la(a.Ka()-(a.rq-5));(0,D.FP)(a,e,d,d);(0,D.FP)(a,f,b,b);(0,D.FP)(a,g,-1,c);(0,D.FP)(a,h,(0,D.GP)(a,f),-1);(0,D.FP)(a,j,(0,D.GP)(a,e),(0,D.GP)(a,f));(0,D.FP)(a,l,(0,D.GP)(a,e),(0,D.GP)(a,f))};D.pp.prototype.dispatchEvent=function(a){D.MC.dispatchEvent(this.pb,this.ta,this,a)};
D.pp.prototype.Y=function(){this.Ta&&(this.Ta.zk(this),this.Ta.Y(),this.Ta=D.o);D.hP.Vl()?(this.eb(D.vh.Yf,this.XT,D.p,this),this.eb(D.vh.Hk,this.$ea,D.p,this),this.eb(D.vh.ij,this.WT,D.p,this),this.eb(D.vn,this.wE,D.p,this)):(this.eb(D.hA,this.ST,D.p,this),this.eb(D.iA,this.RT,D.p,this),this.eb(D.vn,this.wE,D.p,this),this.eb(D.zj,this.vN,D.p,this),this.eb(D.Aj,this.P1,D.p,this));D.pp.u.Y.call(this)};
D.xP=function(a){this.Init(a)};D.z.q(D.xP,D.z,"DvtOverviewParser");D.xP.prototype.Init=(0,D.v)("K");D.xP.prototype.parse=function(a){return this.Cy(a)};
D.xP.prototype.Cy=function(a){var b={};b.vpa=a.animationOnClick;a.startTime!=D.o&&(b.start=a.startTime);a.endTime!=D.o&&(b.end=a.endTime);b.start==D.o&&(b.start=(new window.Date).getTime());if(b.end==D.o||b.end<=b.start)b.end=b.start+864E5;a.currentTime!=D.o&&(b.currentTime=a.currentTime);a.initialFocusTime!=D.o&&(b.PKa=a.initialFocusTime);b.orientation="horizontal";a.orientation!=D.o&&(b.orientation=a.orientation);b.fqa=a.featuresOff;b.Wba=a.minimumWindowSize;b.xLa=a.leftMargin;b.xMa=a.rightMargin;
if(a.viewportEndTime!=D.o){var c=a.viewportEndTime,d=b.start;a.viewportStartTime!=D.o&&a.viewportStartTime<c&&(d=a.viewportStartTime);b.width=a.viewportEndPos!=D.o?(0,D.PP)(b.start,b.end,d,c,a.viewportEndPos):(0,D.PP)(b.start,b.end,d,c,this.K.Za);b.yca=d}else b.yca=b.start;0==b.width&&(b.width=1E3);b.Tsa="below";b.TS="none";b.Eba=(0,D.G)(this.K.j()).toString();a.rtl!=D.o&&(b.Eba=a.rtl.toString());b.lba="#FFFFFF";b.nba="#B3C6DB";b.cda="#FFFFFF";b.Cta=1;b.kda="solid";b.ida="solid";b.eda="solid";b.gda=
"solid";b.jda="#4F4F4F";b.hda="#4F4F4F";b.dda="#4F4F4F";b.fda="#4F4F4F";b.cca="#E6ECF3";b.N$="#C000D1";b.Wca="#BCC7D2";b.vta="#e5e5e5";b.wta=1;b.ssa="#FFFFFF";b.rsa=0.7;b.jta="#FFFFFF";b.ita=0.7;a.style!=D.o&&(a.style.handleFillColor!=D.o&&(b.lba=a.style.handleFillColor),a.style.handleTextureColor!=D.o&&(b.nba=a.style.handleTextureColor),a.style.handleBackgroundImage!=D.o&&(b.Jra=a.style.handleBackgroundImage),a.style.handleWidth!=D.o&&(b.Vra=a.style.handleWidth),a.style.handleHeight!=D.o&&(b.Sra=
a.style.handleHeight),a.style.windowBackgroundColor!=D.o&&(b.cda=a.style.windowBackgroundColor),a.style.windowBackgroundAlpha!=D.o&&(b.Cta=a.style.windowBackgroundAlpha),a.style.windowBorderTopStyle!=D.o&&(b.kda=a.style.windowBorderTopStyle),a.style.windowBorderRightStyle!=D.o&&(b.ida=a.style.windowBorderRightStyle),a.style.windowBorderBottomStyle!=D.o&&(b.eda=a.style.windowBorderBottomStyle),a.style.windowBorderLeftStyle!=D.o&&(b.gda=a.style.windowBorderLeftStyle),a.style.windowBorderTopColor!=D.o&&
(b.jda=a.style.windowBorderTopColor),a.style.windowBorderRightColor!=D.o&&(b.hda=a.style.windowBorderRightColor),a.style.windowBorderBottomColor!=D.o&&(b.dda=a.style.windowBorderBottomColor),a.style.windowBorderLeftColor!=D.o&&(b.fda=a.style.windowBorderLeftColor),a.style.overviewBackgroundColor!=D.o&&(b.cca=a.style.overviewBackgroundColor),a.style.currentTimeIndicatorColor!=D.o&&(b.N$=a.style.currentTimeIndicatorColor),a.style.timeIndicatorColor!=D.o&&(b.Wca=a.style.timeIndicatorColor),a.style.leftFilterPanelColor!=
D.o&&(b.ssa=a.style.leftFilterPanelColor),a.style.leftFilterPanelAlpha!=D.o&&(b.rsa=a.style.leftFilterPanelAlpha),a.style.rightFilterPanelColor!=D.o&&(b.jta=a.style.rightFilterPanelColor),a.style.rightFilterPanelAlpha!=D.o&&(b.ita=a.style.rightFilterPanelAlpha));return b};D.PP=function(a,b,c,d,e){a=e*(b-a);c=d-c;return 0==a||0==c?0:a/c};
D.KP=function(a){this.Init("overview");this.rm=a};D.z.q(D.KP,D.$i,"DvtOverviewEvent");D.KP.prototype.Dj=(0,D.x)("rm");D.KP.prototype.setTime=function(a){(0,D.km)(this,"time",a)};D.KP.prototype.getTime=function(){return this.$i("time")};D.LP=function(a,b){(0,D.km)(a,"newStartTime",b)};D.MP=function(a,b){(0,D.km)(a,"newEndTime",b)};D.KP.prototype.cj=function(a){(0,D.km)(this,"pos",a)};D.KP.prototype.hg=function(){return this.$i("pos")};
D.gP=function(a){this.Init(a.j(),a.Rd,a);this.rc=a};D.z.q(D.gP,D.hk,"DvtOverviewEventManager");D.y=D.gP.prototype;D.y.We=function(a){D.gP.u.We.call(this,a);D.Sm.iR(this.rc,this.qG,this.pG,this.oG,this)};D.y.qG=function(a){return(0,D.Mf)()?this.mQ(a):this.jQ(a)};D.y.pG=function(a){return(0,D.Mf)()?this.lQ(a):this.iQ(a)};D.y.oG=function(a){return(0,D.Mf)()?this.kQ(a):this.hQ(a)};D.y.Bg=function(a,b){this.si||(this.si=(0,D.Um)(this.$));return new D.H(a-this.si.x,b-this.si.y)};
D.y.jQ=function(a){if(2!=a.button){var b=this.Bg(a.pageX,a.pageY);(0,D.ti)(a);this.j().Lc.Hy.parentNode.focus();return this.rc.lR(a,b.x,b.y)}return D.p};D.y.iQ=function(a){var b=this.Bg(a.pageX,a.pageY);a.stopPropagation();this.rc.mR(a,b.x,b.y);return D.k};D.y.hQ=function(a){a.stopPropagation();this.rc.NL();this.si=D.o};D.y.mQ=function(a){var b=a.touches;a.stopPropagation();return 1==b.length?(b=this.Bg(b[0].pageX,b[0].pageY),a.preventDefault(),this.rc.lR(a,b.x,b.y)):D.p};
D.y.lQ=function(a){var b=a.touches;1==b.length&&(b=this.Bg(b[0].pageX,b[0].pageY),this.rc.mR(a,b.x,b.y),a.preventDefault());a.stopPropagation()};D.y.kQ=function(a){this.rc.NL();(0,D.ti)(a);this.si=D.o};
  return D;
});