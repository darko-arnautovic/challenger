"use strict";(self.webpackChunkchallenge=self.webpackChunkchallenge||[]).push([[909],{7909:(C,a,s)=>{s.r(a),s.d(a,{TopicsModule:()=>Z});var p=s(6895),u=s(2295),m=s(2101),l=s(9653),o=s(4650),r=s(8317),h=s(3940),e=s(9671);function f(n,i){if(1&n&&(o.ynx(0),o.TgZ(1,"app-photo-list-item",3)(2,"p",4),o._uU(3),o.qZA()(),o.BQk()),2&n){const t=i.$implicit;o.xp6(1),o.Q6J("photo_url",null==t.cover_photo||null==t.cover_photo.urls?null:t.cover_photo.urls.small)("photo_description",null==t.cover_photo?null:t.cover_photo.description)("routerLink","/topics/topic/"+t.id),o.xp6(2),o.Oqu(t.title)}}let g=(()=>{class n{constructor(t,c){this.store=t,this.router=c,this.results$=this.store.pipe((0,l.Ys)(m.Zl.T5))}ngOnInit(){this.store.dispatch(u.YQ.loadTopics({}))}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.yh),o.Y36(r.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-topics"]],decls:4,vars:3,consts:[[1,"layout-container"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"gallery"],[4,"ngFor","ngForOf"],["fxFlex","","fxFlex.gt-sm","28","fxFlex.gt-lg","20",3,"photo_url","photo_description","routerLink"],[1,"title"]],template:function(t,c){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,f,4,4,"ng-container",2),o.ALo(3,"async"),o.qZA()()),2&t&&(o.xp6(2),o.Q6J("ngForOf",o.lcZ(3,1,c.results$)))},dependencies:[p.sg,h.o,r.rH,e.xw,e.yH,p.Ov],encapsulation:2}),n})();var d=s(7392);function x(n,i){if(1&n&&(o.ynx(0),o.TgZ(1,"app-photo-list-item",3)(2,"div",4)(3,"h3"),o._uU(4),o.qZA()(),o.TgZ(5,"div",4)(6,"p")(7,"mat-icon",5),o._uU(8,"favorite"),o.qZA(),o._uU(9),o.qZA()()(),o.BQk()),2&n){const t=i.$implicit;o.xp6(1),o.Q6J("photo_url",t.urls.small)("photo_description",t.alt_description),o.xp6(3),o.AsE("",t.user.first_name," ",t.user.last_name,""),o.xp6(5),o.hij("",t.likes," likes")}}let v=(()=>{class n{constructor(t){this.store=t,this.topicPhotos$=this.store.select(m._u.T7)}ngOnInit(){this.store.dispatch(u.V5.loadTopicPhotos())}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.yh))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-topic"]],decls:4,vars:3,consts:[[1,"layout-container"],["fxLayout.sm","column","fxLayout.gt-sm","row wrap",1,"gallery"],[4,"ngFor","ngForOf"],["fxFlex","","fxFlex.gt-sm","28","fxFlex.gt-lg","20",3,"photo_url","photo_description"],["fxLayout","row","fxLayoutAlign","end","fxLayoutGap","12px"],["inline",""]],template:function(t,c){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,x,10,5,"ng-container",2),o.ALo(3,"async"),o.qZA()()),2&t&&(o.xp6(2),o.Q6J("ngForOf",o.lcZ(3,1,c.topicPhotos$)))},dependencies:[p.sg,h.o,d.Hw,e.xw,e.SQ,e.Wh,e.yH,p.Ov],encapsulation:2}),n})();var T=s(5626),y=s(7296);const F=[{path:"",component:g,data:{breadcrumb:"topics"}},{path:"topic/:topicId",component:v,data:{breadcrumb:"topic"}}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[p.ez,T.K,r.Bz.forChild(F),d.Ps,e.ae,y.Rq]}),n})()}}]);