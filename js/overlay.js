google.maps.__gjsload__('overlay', function(_){'use strict';var kB=_.na("j"),lB=_.l(),mB=function(){var a=this.Sh;if(this.getPanes()){if(this.getProjection()){if(!a.j&&this.onAdd)this.onAdd();a.j=!0;this.draw()}}else{if(a.j)if(this.onRemove)this.onRemove();else this.remove();a.j=!1}},nB=function(a){a.Sh=a.Sh||new lB;return a.Sh},oB=function(a){_.S.call(this);this.Ma=(0,_.u)(mB,a)},pB=_.l();_.w(kB,_.J);
kB.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.E(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.w(oB,_.S);pB.prototype.j=function(a){var b=a.getMap(),c=nB(a),d=c.Cp;c.Cp=b;d&&(c=nB(a),(d=c.Xa)&&d.unbindAll(),(d=c.wk)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.G(c.Ea,_.H.removeListener),c.Ea=null,c.Wb&&(c.Wb.Ma(),c.Wb=null),_.hm("Ox","-p",a));if(b){c=nB(a);d=c.Wb;d||(d=c.Wb=new oB(a));_.G(c.Ea,_.H.removeListener);var e=c.Xa=c.Xa||new _.yl,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",
f);e=c.wk=c.wk||new kB(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=(0,_.u)(d.Ga,d);c.Ea=[_.H.addListener(a,"panes_changed",e),_.H.addListener(f,"zoom_changed",e),_.H.addListener(f,"offset_changed",e),_.H.addListener(b,"projection_changed",e),_.H.addListener(f,"projectioncenterq_changed",e),_.H.forward(b,"forceredraw",d)];d.Ga();b instanceof _.od&&(_.em(b,"Ox"),_.gm("Ox","-p",a,!!b.Ka))}};_.kc("overlay",new pB);});
