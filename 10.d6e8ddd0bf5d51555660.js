(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mDVw:function(e,t,n){"use strict";n.r(t),n.d(t,"PlaceOrderModule",(function(){return U}));var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),c=n("PCNd"),s=n("SxV6"),a=n("lJxs"),p=n("vkgz"),l=n("Bnul"),b=n("fXoL"),u=n("16YV");let d=(()=>{class e{constructor(e,t){this.totalAmountService=e,this.router=t}canActivate(){return this.totalAmountService.total$.pipe(Object(s.a)(),Object(a.a)(Boolean),Object(p.a)(e=>{e||this.router.navigate([l.a.Catalogue])}))}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(u.a),b.Ub(o.a))},e.\u0275prov=b.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n("itXk"),g=n("pLZG"),f=n("2Vo4"),m=n("LA0w"),v=n("ajia");let y=(()=>{class e{constructor(e,t){this.currencyService=e,this.apiService=t,this.deliveryCosts=new f.a(null),this.loadDeliveryCosts()}get getDeliveryCost$(){return Object(h.a)([this.deliveryCosts.asObservable().pipe(Object(g.a)(e=>Boolean(e))),this.currencyService.selectedCurrency$]).pipe(Object(a.a)(([e,t])=>{const n=null==e?void 0:e.find(e=>e.currencyId===t.id);if(!n)throw new Error("No currency available!");return n.amount}))}loadDeliveryCosts(){this.apiService.getDeliveryCosts().subscribe(e=>{this.deliveryCosts.next(e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(m.a),b.Ub(v.a))},e.\u0275prov=b.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=n("bODO"),C=n("0/qd"),P=n("nhrN");function w(e,t){if(1&e&&(b.Qb(0,"section"),b.Lb(1,"app-cart-item-view",2),b.Qb(2,"span"),b.pc(3),b.Pb(),b.Pb()),2&e){const e=t.$implicit;b.Ab(1),b.gc("item",e.item),b.Ab(2),b.rc("",e.quantity," pcs")}}function j(e,t){if(1&e&&(b.Ob(0),b.nc(1,w,4,2,"section",1),b.Nb()),2&e){const e=t.ngIf;b.Ab(1),b.gc("ngForOf",e)}}let _=(()=>{class e{constructor(e){this.shoppingCart=e,this.items$=this.shoppingCart.cartItems$.pipe(Object(s.a)())}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(C.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-items-list"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(e,t){1&e&&(b.nc(0,j,2,1,"ng-container",0),b.ac(1,"async")),2&e&&b.gc("ngIf",b.bc(1,1,t.items$))},directives:[r.l,r.k,P.a],pipes:[r.b],styles:["section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),e})();var x=n("l7GE"),M=n("ZUHj");class S{constructor(e,t){this.observables=e,this.project=t}call(e,t){return t.subscribe(new I(e,this.observables,this.project))}}class I extends x.a{constructor(e,t,n){super(e),this.observables=t,this.project=n,this.toRespond=[];const r=t.length;this.values=new Array(r);for(let i=0;i<r;i++)this.toRespond.push(i);for(let i=0;i<r;i++){let e=t[i];this.add(Object(M.a)(this,e,e,i))}}notifyNext(e,t,n,r,i){this.values[n]=t;const o=this.toRespond;if(o.length>0){const e=o.indexOf(n);-1!==e&&o.splice(e,1)}}notifyComplete(){}_next(e){if(0===this.toRespond.length){const t=[e,...this.values];this.project?this._tryProject(t):this.destination.next(t)}}_tryProject(e){let t;try{t=this.project.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}var A=n("eIep");let L=(()=>{class e{constructor(e,t,n){this.apiService=e,this.shoppingCartService=t,this.currencyService=n}placeOrder(e,t){return this.shoppingCartService.cartItems$.pipe(function(...e){return t=>{let n;return"function"==typeof e[e.length-1]&&(n=e.pop()),t.lift(new S(e,n))}}(this.currencyService.selectedCurrency$),Object(s.a)(),Object(a.a)(([n,r])=>this.generateOrderDto({name:e,phone:t,items:n,currency:r})),Object(A.a)(e=>this.apiService.placeOrder(e)),Object(p.a)(()=>this.shoppingCartService.emptyCart()))}getOrderHistory(){return this.apiService.getOrdersHistory()}generateOrderDto({name:e,phone:t,currency:n,items:r}){return{currencyId:n.id,name:e,phone:t,orderedItems:r.map(e=>({itemId:e.item.id,quantity:e.quantity}))}}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(v.a),b.Ub(C.a),b.Ub(m.a))},e.\u0275prov=b.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=n("6XdY");let $=(()=>{class e{constructor(e,t){this.fb=e,this.orderService=t,this.orderButtonLabel="Place Your Order"}ngOnInit(){this.orderForm=this.fb.group({name:[null,i.i.required],phone:[null,i.i.required]})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}placeOrder(){this.orderForm.disable();const{name:e,phone:t}=this.orderForm.value;this.sub=this.orderService.placeOrder(e,t).subscribe(e=>{this.orderButtonLabel="Order Placed"},e=>{console.log(e),this.orderForm.enable()})}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(i.b),b.Kb(L))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-place-order-form"]],decls:11,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"input-group"],["for","name"],["formControlName","name","id","number","type","text"],["for","phone"],["formControlName","phone","id","phone","type","number"],["type","submit",3,"buttonLabel","disabled"]],template:function(e,t){1&e&&(b.Qb(0,"form",0),b.Xb("ngSubmit",(function(){return t.placeOrder()})),b.Qb(1,"fieldset"),b.Qb(2,"div",1),b.Qb(3,"label",2),b.pc(4," Name: "),b.Pb(),b.Lb(5,"input",3),b.Pb(),b.Qb(6,"div",1),b.Qb(7,"label",4),b.pc(8," Phone: "),b.Pb(),b.Lb(9,"input",5),b.Pb(),b.Pb(),b.Lb(10,"app-call-to-action-button",6),b.Pb()),2&e&&(b.gc("formGroup",t.orderForm),b.Ab(10),b.gc("buttonLabel",t.orderButtonLabel)("disabled",t.orderForm.invalid||t.orderForm.disabled))},directives:[i.j,i.f,i.d,i.a,i.e,i.c,i.g,k.a],styles:["fieldset[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.2);border-radius:10px;box-sizing:border-box;padding:5px;font-size:1rem}fieldset[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:none}fieldset[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{display:flex;width:100%;flex-grow:0;align-items:center}fieldset[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{min-width:120px;display:block}fieldset[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1}fieldset[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] + .input-group[_ngcontent-%COMP%]{margin-top:1rem}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}app-call-to-action-button[_ngcontent-%COMP%]{margin-top:2rem;display:block}"]}),e})();var D=n("G+NY");function Q(e,t){if(1&e&&(b.Qb(0,"app-card-section",4),b.Lb(1,"app-item-price",5),b.Pb()),2&e){const e=b.Zb();b.Ab(1),b.gc("price",e.deliveryCost)}}function F(e,t){if(1&e&&(b.Qb(0,"app-card-section",6),b.Lb(1,"app-item-price",5),b.Pb()),2&e){const e=t.ngIf;b.Ab(1),b.gc("price",e)}}const N=[{path:"",component:(()=>{class e{constructor(e,t){this.totalAmoutService=e,this.deliveryCostsService=t,this.total$=Object(h.a)([this.deliveryCostsService.getDeliveryCost$,this.totalAmoutService.total$.pipe(Object(g.a)(e=>Boolean(e)))]).pipe(Object(p.a)(([e])=>this.deliveryCost=e),Object(a.a)(([e,t])=>t+e))}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(u.a),b.Kb(y))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-place-order"]],decls:7,vars:4,consts:[["heading","Your Order"],["heading","Delivery Costs",4,"ngIf"],["heading","Total",4,"ngIf"],["heading","Fill in the form to complete your order"],["heading","Delivery Costs"],[3,"price"],["heading","Total"]],template:function(e,t){1&e&&(b.Qb(0,"app-card-section",0),b.Lb(1,"app-items-list"),b.Pb(),b.nc(2,Q,2,1,"app-card-section",1),b.nc(3,F,2,1,"app-card-section",2),b.ac(4,"async"),b.Qb(5,"app-card-section",3),b.Lb(6,"app-place-order-form"),b.Pb()),2&e&&(b.Ab(2),b.gc("ngIf",t.deliveryCost),b.Ab(1),b.gc("ngIf",b.bc(4,2,t.total$)))},directives:[O.a,_,r.l,$,D.a],pipes:[r.b],styles:["app-card-section[_ngcontent-%COMP%] + app-card-section[_ngcontent-%COMP%]{margin-top:3rem}"]}),e})(),canActivate:[d]}];let G=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[o.e.forChild(N)],o.e]}),e})(),U=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[r.c,o.e,i.h,G,c.a]]}),e})()}}]);