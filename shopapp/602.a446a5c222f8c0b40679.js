(self.webpackChunkshopapp=self.webpackChunkshopapp||[]).push([[602],{3602:(n,e,t)=>{"use strict";t.r(e),t.d(e,{OrdersModule:()=>G});var i=t(8583),o=t(5987),s=t(7716),c=t(910),a=t(3521),r=t(4762),l=t(7070),d=t(2729),h=t(641),p=t(6182),z=t(9765),u=t(6782),g=t(946),f=t(8178),C=t(6630);const m=["*"];function v(n,e){if(1&n&&(s.ynx(0),s._UZ(1,"i",6),s.BQk()),2&n){const n=e.$implicit,t=s.oxw(2);s.xp6(1),s.Q6J("nzType",n||"right")("nzRotate",t.nzActive?90:0)}}function y(n,e){if(1&n&&(s.ynx(0),s.YNc(1,v,2,2,"ng-container",2),s.BQk()),2&n){const n=s.oxw();s.xp6(1),s.Q6J("nzStringTemplateOutlet",n.nzExpandedIcon)}}function w(n,e){if(1&n&&(s.ynx(0),s._uU(1),s.BQk()),2&n){const n=s.oxw();s.xp6(1),s.Oqu(n.nzHeader)}}function k(n,e){if(1&n&&(s.ynx(0),s._uU(1),s.BQk()),2&n){const n=s.oxw(2);s.xp6(1),s.Oqu(n.nzExtra)}}function x(n,e){if(1&n&&(s.TgZ(0,"div",7),s.YNc(1,k,2,1,"ng-container",2),s.qZA()),2&n){const n=s.oxw();s.xp6(1),s.Q6J("nzStringTemplateOutlet",n.nzExtra)}}const b="collapse";let A=(()=>{class n{constructor(n,e,t,i){this.nzConfigService=n,this.cdr=e,this.elementRef=t,this.directionality=i,this._nzModuleName=b,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new z.xQ,this.elementRef.nativeElement.classList.add("ant-collapse"),this.nzConfigService.getConfigChangeEventForComponent(b).pipe((0,u.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var n;null===(n=this.directionality.change)||void 0===n||n.pipe((0,u.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(n){this.listOfNzCollapsePanelComponent.push(n)}removePanel(n){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(n),1)}click(n){this.nzAccordion&&!n.nzActive&&this.listOfNzCollapsePanelComponent.filter(e=>e!==n).forEach(n=>{n.nzActive&&(n.nzActive=!1,n.nzActiveChange.emit(n.nzActive),n.markForCheck())}),n.nzActive=!n.nzActive,n.nzActiveChange.emit(n.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(d.jY),s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(g.Is,8))},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-collapse"]],hostVars:10,hostBindings:function(n,e){2&n&&s.ekj("ant-collapse-icon-position-left","left"===e.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===e.nzExpandIconPosition)("ant-collapse-ghost",e.nzGhost)("ant-collapse-borderless",!e.nzBordered)("ant-collapse-rtl","rtl"===e.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:m,decls:1,vars:0,template:function(n,e){1&n&&(s.F$t(),s.Hsn(0))},encapsulation:2,changeDetection:0}),(0,r.gn)([(0,d.oS)(),(0,p.yF)(),(0,r.w6)("design:type",Boolean)],n.prototype,"nzAccordion",void 0),(0,r.gn)([(0,d.oS)(),(0,p.yF)(),(0,r.w6)("design:type",Boolean)],n.prototype,"nzBordered",void 0),(0,r.gn)([(0,d.oS)(),(0,p.yF)(),(0,r.w6)("design:type",Boolean)],n.prototype,"nzGhost",void 0),n})();const O="collapsePanel";let S=(()=>{class n{constructor(n,e,t,i,o){this.nzConfigService=n,this.cdr=e,this.nzCollapseComponent=t,this.elementRef=i,this.noAnimation=o,this._nzModuleName=O,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new s.vpe,this.destroy$=new z.xQ,this.elementRef.nativeElement.classList.add("ant-collapse-item"),this.nzConfigService.getConfigChangeEventForComponent(O).pipe((0,u.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(d.jY),s.Y36(s.sBO),s.Y36(A,1),s.Y36(s.SBq),s.Y36(h.P,8))},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-collapse-panel"]],hostVars:6,hostBindings:function(n,e){2&n&&s.ekj("ant-collapse-no-arrow",!e.nzShowArrow)("ant-collapse-item-active",e.nzActive)("ant-collapse-item-disabled",e.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:m,decls:7,vars:8,consts:[["role","tab",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(n,e){1&n&&(s.F$t(),s.TgZ(0,"div",0),s.NdJ("click",function(){return e.clickHeader()}),s.YNc(1,y,2,1,"ng-container",1),s.YNc(2,w,2,1,"ng-container",2),s.YNc(3,x,2,1,"div",3),s.qZA(),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.Hsn(6),s.qZA(),s.qZA()),2&n&&(s.uIk("aria-expanded",e.nzActive),s.xp6(1),s.Q6J("ngIf",e.nzShowArrow),s.xp6(1),s.Q6J("nzStringTemplateOutlet",e.nzHeader),s.xp6(1),s.Q6J("ngIf",e.nzExtra),s.xp6(1),s.ekj("ant-collapse-content-active",e.nzActive),s.Q6J("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("@collapseMotion",e.nzActive?"expanded":"hidden"))},directives:[i.O5,f.f,C.Ls],encapsulation:2,data:{animation:[l.J_]},changeDetection:0}),(0,r.gn)([(0,p.yF)(),(0,r.w6)("design:type",Object)],n.prototype,"nzActive",void 0),(0,r.gn)([(0,p.yF)(),(0,r.w6)("design:type",Object)],n.prototype,"nzDisabled",void 0),(0,r.gn)([(0,d.oS)(),(0,p.yF)(),(0,r.w6)("design:type",Boolean)],n.prototype,"nzShowArrow",void 0),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[g.vT,i.ez,C.PV,f.T,h.g]]}),n})();var T=t(6461),E=t(665),D=t(9374),N=t(9238);const Y=["switchElement"];function Q(n,e){1&n&&s._UZ(0,"i",8)}function B(n,e){if(1&n&&(s.ynx(0),s._uU(1),s.BQk()),2&n){const n=s.oxw(2);s.xp6(1),s.Oqu(n.nzCheckedChildren)}}function I(n,e){if(1&n&&(s.ynx(0),s.YNc(1,B,2,1,"ng-container",9),s.BQk()),2&n){const n=s.oxw();s.xp6(1),s.Q6J("nzStringTemplateOutlet",n.nzCheckedChildren)}}function q(n,e){if(1&n&&(s.ynx(0),s._uU(1),s.BQk()),2&n){const n=s.oxw(2);s.xp6(1),s.Oqu(n.nzUnCheckedChildren)}}function J(n,e){if(1&n&&s.YNc(0,q,2,1,"ng-container",9),2&n){const n=s.oxw();s.Q6J("nzStringTemplateOutlet",n.nzUnCheckedChildren)}}let F=(()=>{class n{constructor(n,e,t,i){this.nzConfigService=n,this.cdr=e,this.focusMonitor=t,this.directionality=i,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.dir="ltr",this.destroy$=new z.xQ}onHostClick(n){n.preventDefault(),this.nzDisabled||this.nzLoading||this.nzControl||this.updateValue(!this.isChecked)}updateValue(n){this.isChecked!==n&&(this.isChecked=n,this.onChange(this.isChecked))}onKeyDown(n){this.nzControl||this.nzDisabled||this.nzLoading||(n.keyCode===T.oh?(this.updateValue(!1),n.preventDefault()):n.keyCode===T.SV?(this.updateValue(!0),n.preventDefault()):n.keyCode!==T.L_&&n.keyCode!==T.K5||(this.updateValue(!this.isChecked),n.preventDefault()))}focus(){var n;this.focusMonitor.focusVia(null===(n=this.switchElement)||void 0===n?void 0:n.nativeElement,"keyboard")}blur(){var n;null===(n=this.switchElement)||void 0===n||n.nativeElement.blur()}ngOnInit(){var n;null===(n=this.directionality.change)||void 0===n||n.pipe((0,u.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,u.R)(this.destroy$)).subscribe(n=>{n||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(n){this.isChecked=n,this.cdr.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.nzDisabled=n,this.cdr.markForCheck()}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(d.jY),s.Y36(s.sBO),s.Y36(N.tE),s.Y36(g.Is,8))},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-switch"]],viewQuery:function(n,e){if(1&n&&s.Gf(Y,7),2&n){let n;s.iGM(n=s.CRH())&&(e.switchElement=n.first)}},hostBindings:function(n,e){1&n&&s.NdJ("click",function(n){return e.onHostClick(n)})},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[s._Bn([{provide:E.JU,useExisting:(0,s.Gpc)(()=>n),multi:!0}])],decls:9,vars:15,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode","keydown"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(n,e){if(1&n&&(s.TgZ(0,"button",0,1),s.NdJ("keydown",function(n){return e.onKeyDown(n)}),s.TgZ(2,"span",2),s.YNc(3,Q,1,0,"i",3),s.qZA(),s.TgZ(4,"span",4),s.YNc(5,I,2,1,"ng-container",5),s.YNc(6,J,1,1,"ng-template",null,6,s.W1O),s.qZA(),s._UZ(8,"div",7),s.qZA()),2&n){const n=s.MAs(7);s.ekj("ant-switch-checked",e.isChecked)("ant-switch-loading",e.nzLoading)("ant-switch-disabled",e.nzDisabled)("ant-switch-small","small"===e.nzSize)("ant-switch-rtl","rtl"===e.dir),s.Q6J("disabled",e.nzDisabled)("nzWaveExtraNode",!0),s.xp6(3),s.Q6J("ngIf",e.nzLoading),s.xp6(2),s.Q6J("ngIf",e.isChecked)("ngIfElse",n)}},directives:[D.dQ,i.O5,C.Ls,f.f],encapsulation:2,changeDetection:0}),(0,r.gn)([(0,p.yF)(),(0,r.w6)("design:type",Object)],n.prototype,"nzLoading",void 0),(0,r.gn)([(0,p.yF)(),(0,r.w6)("design:type",Object)],n.prototype,"nzDisabled",void 0),(0,r.gn)([(0,p.yF)(),(0,r.w6)("design:type",Object)],n.prototype,"nzControl",void 0),(0,r.gn)([(0,d.oS)(),(0,r.w6)("design:type",String)],n.prototype,"nzSize",void 0),n})(),_=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[g.vT,i.ez,D.vG,C.PV,f.T]]}),n})();var j=t(6442);function P(n,e){if(1&n&&(s.TgZ(0,"h5",10),s._uU(1),s.qZA()),2&n){const n=s.oxw().$implicit;s.xp6(1),s.hij(" ","Orden ID: "+n.id," ")}}function L(n,e){if(1&n){const n=s.EpF();s.TgZ(0,"nz-switch",11),s.NdJ("ngModelChange",function(){s.CHM(n);const e=s.oxw().$implicit;return s.oxw(2).updateStatus(e)})("click",function(n){return n.stopPropagation()}),s.qZA()}if(2&n){const n=s.oxw().$implicit;s.Q6J("nzDisabled",n.isComplete)("nzLoading",n.isLoading)("ngModel",n.isComplete)}}const $=function(){return{backgroundColor:"#2db7f5"}};function M(n,e){if(1&n&&(s.TgZ(0,"div",1),s.TgZ(1,"div",12),s.TgZ(2,"p",13),s._uU(3),s.qZA(),s.qZA(),s.TgZ(4,"div",14),s._uU(5," Cantidad: "),s._UZ(6,"nz-badge",15),s.qZA(),s.qZA()),2&n){const n=e.$implicit;s.xp6(3),s.hij("ID Producto: ",n.id,""),s.xp6(3),s.Q6J("nzCount",n.quantity)("nzStyle",s.DdM(3,$))}}function U(n,e){if(1&n&&(s.TgZ(0,"div",5),s.TgZ(1,"div",2),s.TgZ(2,"nz-collapse"),s.TgZ(3,"nz-collapse-panel",6),s.YNc(4,P,2,1,"ng-template",null,7,s.W1O),s.YNc(6,L,1,3,"ng-template",null,8,s.W1O),s.TgZ(8,"div",0),s.YNc(9,M,7,4,"div",9),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&n){const n=e.$implicit,t=s.MAs(5),i=s.MAs(7);s.xp6(3),s.Q6J("nzHeader",t)("nzExtra",i),s.xp6(6),s.Q6J("ngForOf",n.products)}}function H(n,e){if(1&n&&(s.ynx(0),s.YNc(1,U,10,3,"div",4),s.BQk()),2&n){const n=s.oxw();s.xp6(1),s.Q6J("ngForOf",n.orders)}}const V=o.Bz.forChild([{path:"",component:(()=>{class n{constructor(n,e){this._cartService=n,this._nzNotificationService=e,this.orders=[],this.getCarts()}ngOnInit(){}getCarts(){this._cartService.getCarts().subscribe(n=>{this.orders=n.map(n=>Object.assign(Object.assign({},n.payload.doc.data()),{id:n.payload.doc.id,products:[],isLoading:!1,isComplete:"Complete"==n.payload.doc.data().status})),this._cartService.getAllProductsCart().subscribe(n=>{n.map(n=>Object.assign(Object.assign({},n.payload.doc.data()),{id:n.payload.doc.id})).forEach(n=>{this.orders.forEach(e=>{n.cart_id==e.id&&e.products.push(n)})})})})}updateStatus(n){for(let e=0;e<this.orders.length;e++)if(this.orders[e].id==n.id){this.orders[e].isLoading=!0;break}this._cartService.updateOrder(Object.assign(Object.assign({},n),{status:"Complete"})).then(()=>{for(let e=0;e<this.orders.length;e++)if(this.orders[e].id==n.id){this.orders[e].isLoading=!1,this.orders[e].isComplete=!0,this.orders[e].status="Complete";break}}).catch(e=>{for(let t=0;t<this.orders.length;t++)if(this.orders[t].id==n.id){this.orders[t].isLoading=!1;break}this._nzNotificationService.error("\xa1Error!","Ocurri\xf3 un error al actualizar el estado")})}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(c.N),s.Y36(a.zb))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-orders"]],decls:6,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[4,"ngIf"],["class","row mt-2",4,"ngFor","ngForOf"],[1,"row","mt-2"],[3,"nzHeader","nzExtra"],["orderTitle",""],["statusManagement",""],["class","row",4,"ngFor","ngForOf"],[1,"mb-0","font-weight-bold","d-inline-block"],["nzCheckedChildren","Complete","nzUnCheckedChildren","Pending",3,"nzDisabled","nzLoading","ngModel","ngModelChange","click"],[1,"col-6"],[1,"d-inline-block"],[1,"col-6","text-center"],["nzStandalone","",3,"nzCount","nzStyle"]],template:function(n,e){1&n&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"h3"),s._uU(4,"Lista de Ordenes"),s.qZA(),s.qZA(),s.qZA(),s.YNc(5,H,2,1,"ng-container",3),s.qZA()),2&n&&(s.xp6(5),s.Q6J("ngIf",!0))},directives:[i.O5,i.sg,A,S,F,E.JJ,E.On,j.x7],styles:[""]}),n})()}]);var R=t(1729);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[i.ez,E.u5,V,Z,j.mS,_,R.j,a.L8]]}),n})()}}]);