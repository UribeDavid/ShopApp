(self.webpackChunkshopapp=self.webpackChunkshopapp||[]).push([[609],{7609:(t,n,o)=>{"use strict";o.r(n),o.d(n,{CartModule:()=>Q});var i=o(8583),c=o(5987);function r(t,n,o,i,c,r,e){try{var d=t[r](e),u=d.value}catch(s){return void o(s)}d.done?n(u):Promise.resolve(u).then(i,c)}function e(t){return function(){var n=this,o=arguments;return new Promise(function(i,c){var e=t.apply(n,o);function d(t){r(e,i,c,d,u,"next",t)}function u(t){r(e,i,c,d,u,"throw",t)}d(void 0)})}}var d=o(3942),u=o(7716),s=o(3065),a=o(910),l=o(4453),p=o(9374),g=o(4514),f=o(7018),Z=o(6630),h=o(6442),m=o(2482);function v(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"div",6),u.TgZ(1,"button",7),u.NdJ("click",function(){return u.CHM(t),u.oxw().saveCart()}),u._uU(2," Guardar Carrito "),u.qZA(),u.qZA()}if(2&t){const t=u.oxw();u.xp6(1),u.Q6J("nzLoading",t.isLoading)}}function y(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"div",21),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u._uU(3),u.qZA(),u.TgZ(4,"div",6),u.TgZ(5,"i",22),u.NdJ("click",function(){u.CHM(t);const n=u.oxw().$implicit;return u.oxw(2).deleteProduct(n.id)}),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.oxw().$implicit;u.xp6(3),u.Oqu(t.nombre)}}const z=function(){return{width:"100%",textAlign:"center",fontWeight:"500"}},T=function(){return{backgroundColor:"#2db7f5"}},x=function(){return{width:"100%",textAlign:"left"}};function A(t,n){if(1&t){const t=u.EpF();u.TgZ(0,"div",9),u.TgZ(1,"nz-card",10),u.YNc(2,y,6,1,"ng-template",null,11,u.W1O),u.TgZ(4,"div",12),u.TgZ(5,"div",13),u.TgZ(6,"div",1),u.TgZ(7,"div",14),u._uU(8),u.qZA(),u.TgZ(9,"div",15),u.NdJ("click",function(){const n=u.CHM(t).$implicit;return u.oxw(2).changeQuantityProduct(n.id,!0)}),u._UZ(10,"i",16),u.qZA(),u.TgZ(11,"div",17),u._UZ(12,"nz-badge",18),u.qZA(),u.TgZ(13,"div",19),u.NdJ("click",function(){const n=u.CHM(t).$implicit;return u.oxw(2).changeQuantityProduct(n.id,!1)}),u._UZ(14,"i",20),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"div",12),u._uU(16),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=n.$implicit,o=u.MAs(3);u.xp6(1),u.Q6J("nzTitle",o),u.xp6(3),u.Q6J("nzHoverable",!1)("ngStyle",u.DdM(9,z)),u.xp6(4),u.hij(" ",t.sku," "),u.xp6(4),u.Q6J("nzCount",t.quantity)("nzStyle",u.DdM(10,T)),u.xp6(3),u.Q6J("nzHoverable",!1)("ngStyle",u.DdM(11,x)),u.xp6(1),u.Oqu(t.descripcion)}}function q(t,n){if(1&t&&(u.ynx(0),u.YNc(1,A,17,12,"div",8),u.BQk()),2&t){const t=u.oxw();u.xp6(1),u.Q6J("ngForOf",t.products)}}const C=function(){return["/products"]};function w(t,n){1&t&&(u.TgZ(0,"a",26),u._uU(1,"Agregar productos"),u.qZA()),2&t&&u.Q6J("routerLink",u.DdM(1,C))}function k(t,n){if(1&t&&(u.TgZ(0,"div",23),u._UZ(1,"nz-empty",24),u.YNc(2,w,2,2,"ng-template",null,25,u.W1O),u.qZA()),2&t){const t=u.MAs(3);u.xp6(1),u.Q6J("nzNotFoundContent","No hay productos en el carrito")("nzNotFoundFooter",t)}}const N=c.Bz.forChild([{path:"",component:(()=>{class t{constructor(t,n){this.store=t,this._cartService=n,this.products=[],this.isLoading=!1,this.getCartProducts()}ngOnInit(){}getCartProducts(){this.store.select(t=>t.cartState).subscribe(t=>{this.products=t})}saveCart(){var t=this;return e(function*(){t.isLoading=!0;try{const n=yield t._cartService.addOrder({status:"pending"});t.products.forEach(function(){var o=e(function*(o){yield t._cartService.addProductCart({cart_id:n.id,product_id:o.id,quantity:o.quantity})});return function(t){return o.apply(this,arguments)}}()),t.products.forEach(function(){var n=e(function*(n){t.deleteProduct(n.id)});return function(t){return n.apply(this,arguments)}}()),t.isLoading=!1}catch(n){t.isLoading=!1}})()}changeQuantityProduct(t,n){this.store.dispatch((0,d.mB)({id:t,increase:n}))}deleteProduct(t){this.store.dispatch((0,d.HG)({id:t}))}}return t.\u0275fac=function(n){return new(n||t)(u.Y36(s.yh),u.Y36(a.N))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-cart"]],decls:10,vars:3,consts:[[1,"container-fluid","pt-3"],[1,"row"],[1,"col-8"],["class","col-4",4,"ngIf"],[4,"ngIf","ngIfElse"],["noProducts",""],[1,"col-4"],["nz-button","","nzType","primary",1,"float-right","app-btn-success",3,"nzLoading","click"],["class","col-12 col-md-4 mt-2",4,"ngFor","ngForOf"],[1,"col-12","col-md-4","mt-2"],[1,"w-100","shadow-sm","nz-grid-padding",3,"nzTitle"],["productTitle",""],["nz-card-grid","",3,"nzHoverable","ngStyle"],[1,"container-fluid"],[1,"col-12","my-1","my-md-0","col-md-6","text-left"],[1,"col-4","my-1","my-md-0","col-md-2","cursor-pointer","text-success",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline",1,""],[1,"col-4","my-1","my-md-0","col-md-2"],["nzStandalone","",3,"nzCount","nzStyle"],[1,"col-4","my-1","my-md-0","col-md-2","cursor-pointer","text-danger",3,"click"],["nz-icon","","nzType","minus","nzTheme","outline",1,""],[1,"container-fluid","px-0"],["nz-icon","","nzType","close","nzTheme","outline",1,"text-danger","float-right","cursor-pointer",3,"click"],[1,"col-12"],["nzNotFoundImage","simple",3,"nzNotFoundContent","nzNotFoundFooter"],["footerNoProducts",""],["nz-button","","nzType","link",3,"routerLink"]],template:function(t,n){if(1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"h3"),u._uU(4,"Productos del Carrito"),u.qZA(),u.qZA(),u.YNc(5,v,3,1,"div",3),u.qZA(),u.TgZ(6,"div",1),u.YNc(7,q,2,1,"ng-container",4),u.YNc(8,k,4,2,"ng-template",null,5,u.W1O),u.qZA(),u.qZA()),2&t){const t=u.MAs(9);u.xp6(5),u.Q6J("ngIf",n.products.length),u.xp6(2),u.Q6J("ngIf",n.products.length)("ngIfElse",t)}},directives:[i.O5,l.ix,p.dQ,g.w,i.sg,f.bd,f.hC,i.PC,Z.Ls,h.x7,m.p9,c.yS],styles:[".nz-grid-padding>.ant-card-body>.ant-card-grid{padding:8px 24px!important}"]}),t})()}]);var b=o(1841),J=o(6390);const P=[J.eLU,J.daL,J.zdJ];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[i.ez,N,b.JF,Z.PV.forChild(P),f.vh,h.mS,m.Xo,l.sL]]}),t})()}}]);