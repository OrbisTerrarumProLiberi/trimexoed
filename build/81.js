webpackJsonp([81],{2073:function(n,l,a){"use strict";function e(n){return t._42(0,[t._37(402653184,1,{wikiComponent:0}),(n()(),t._16(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._15(2,16384,null,0,V.a,[M.a,t.p,t.K,[2,E.a]],null,null),(n()(),t._40(-1,null,["\n    "])),(n()(),t._16(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,W.b,W.a)),t._15(5,49152,null,0,j.a,[A.a,[2,E.a],[2,B.a],M.a,t.p,t.K],null,null),t._15(6,212992,null,0,F.a,[j.a,J.a,N.a,O.a],null,null),(n()(),t._40(-1,3,["\n        "])),(n()(),t._16(8,0,null,3,3,"ion-title",[],null,null,null,q.b,q.a)),t._15(9,49152,null,0,z.a,[M.a,t.p,t.K,[2,G.a],[2,j.a]],null,null),(n()(),t._16(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),t._15(11,540672,null,0,H.a,[t.p,Q.a,S.a,U.a,N.a,J.a,X.a,Y.a,Z.a,$.a,nn.a,ln.a,[2,B.a],[2,an.a],[2,en.a],tn.a,O.a,un.a,on.a,dn.a,t.W],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),t._40(-1,3,["\n\n        "])),(n()(),t._16(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._15(14,16384,null,1,_n.a,[M.a,t.p,t.K,[2,G.a],[2,j.a]],null,null),t._37(603979776,2,{_buttons:1}),(n()(),t._40(-1,null,["\n            "])),(n()(),t._40(-1,null,["\n        "])),(n()(),t._40(-1,3,["\n    "])),(n()(),t._40(-1,null,["\n"])),(n()(),t._40(-1,null,["\n"])),(n()(),t._16(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,rn.b,rn.a)),t._15(22,4374528,null,0,an.a,[M.a,J.a,sn.a,t.p,t.K,A.a,cn.a,t.D,[2,E.a],[2,B.a]],null,null),(n()(),t._40(-1,1,["\n    "])),(n()(),t._16(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,l,a){var e=!0;if("ionRefresh"===l){e=!1!==n.component.wikiComponent.doRefresh(a)&&e}return e},null,null)),t._15(25,212992,null,0,pn.a,[J.a,an.a,t.D,gn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),t._40(-1,null,["\n        "])),(n()(),t._16(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,In.b,In.a)),t._15(28,114688,null,0,bn.a,[pn.a,M.a],{pullingText:[0,"pullingText"]},null),t._32(131072,fn.a,[N.a,t.i]),(n()(),t._40(-1,null,["\n    "])),(n()(),t._40(-1,1,["\n\n    "])),(n()(),t._16(32,0,null,1,1,"addon-mod-wiki-index",[],null,[[null,"dataRetrieved"]],function(n,l,a){var e=!0;if("dataRetrieved"===l){e=!1!==n.component.updateData(a)&&e}return e},L.c,L.b)),t._15(33,245760,[[1,4]],0,d.a,[t.u,hn.a,[2,an.a],mn.a,wn.a,B.a,X.a,vn.a,kn.a,xn.a,Rn.a,Tn.a],{module:[0,"module"],courseId:[1,"courseId"],action:[2,"action"],pageId:[3,"pageId"],pageTitle:[4,"pageTitle"],wikiId:[5,"wikiId"],subwikiId:[6,"subwikiId"],userId:[7,"userId"],groupId:[8,"groupId"]},{dataRetrieved:"dataRetrieved"}),(n()(),t._40(-1,1,["\n"])),(n()(),t._40(-1,null,["\n"]))],function(n,l){var a=l.component;n(l,6,0);n(l,11,0,a.title,"module",a.module.id,a.courseId);n(l,25,0,a.wikiComponent.loaded);n(l,28,0,t._19(1,"",t._41(l,28,0,t._29(l,29).transform("core.pulltorefresh")),""));n(l,33,0,a.module,a.courseId,a.action,a.pageId,a.pageTitle,a.wikiId,a.subwikiId,a.userId,a.groupId)},function(n,l){n(l,4,0,t._29(l,5)._hidden,t._29(l,5)._sbPadding);n(l,21,0,t._29(l,22).statusbarPadding,t._29(l,22)._hasRefresher);n(l,24,0,"inactive"!==t._29(l,25).state,t._29(l,25)._top);n(l,27,0,t._29(l,28).r.state)})}Object.defineProperty(l,"__esModule",{value:!0});var t=a(1),u=(a(0),a(6),a(4)),i=a(33),o=a(772),d=a(522),_=function(){function n(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.action=n.get("action")||"page",this.pageId=n.get("pageId"),this.pageTitle=n.get("pageTitle"),this.wikiId=n.get("wikiId"),this.subwikiId=n.get("subwikiId"),this.userId=n.get("userId"),this.groupId=n.get("groupId"),this.title=this.pageTitle||this.module.name}return n.prototype.updateData=function(n){this.title="string"==typeof n?n:this.pageTitle||n.title||this.title},n.prototype.ionViewDidEnter=function(){this.wikiComponent.ionViewDidEnter()},n.prototype.ionViewDidLeave=function(){this.wikiComponent.ionViewDidLeave()},n}(),r=function(){return function(){}}(),s=a(1524),c=a(1525),p=a(1526),g=a(1527),I=a(1528),b=a(1529),f=a(1530),h=a(1531),m=a(1532),w=a(1533),v=a(1534),k=a(1535),x=a(1536),R=a(1539),T=a(1540),D=a(1537),y=a(1538),C=a(1541),K=a(1542),L=a(1605),P=a(1622),V=a(375),M=a(9),E=a(40),W=a(725),j=a(214),A=a(36),B=a(22),F=a(478),J=a(17),N=a(18),O=a(11),q=a(726),z=a(316),G=a(251),H=a(49),Q=a(2),S=a(5),U=a(12),X=a(3),Y=a(23),Z=a(7),$=a(19),nn=a(10),ln=a(16),an=a(30),en=a(28),tn=a(44),un=a(43),on=a(32),dn=a(37),_n=a(376),rn=a(186),sn=a(35),cn=a(110),pn=a(162),gn=a(45),In=a(215),bn=a(176),fn=a(26),hn=a(237),mn=a(291),wn=a(292),vn=a(73),kn=a(47),xn=a(72),Rn=a(166),Tn=a(165),Dn=a(71),yn=t._14({encapsulation:2,styles:[],data:{}}),Cn=t._12("page-addon-mod-wiki-index",_,function(n){return t._42(0,[(n()(),t._16(0,0,null,null,1,"page-addon-mod-wiki-index",[],null,null,null,e,yn)),t._15(1,49152,null,0,_,[Dn.a],null,null)],null,null)},{},{},[]),Kn=a(8),Ln=a(24),Pn=a(371),Vn=a(372),Mn=a(374),En=a(373),Wn=a(477),jn=a(724),An=a(109),Bn=a(29),Fn=a(275),Jn=a(76),Nn=a(277),On=a(274);a.d(l,"AddonModWikiIndexPageModuleNgFactory",function(){return qn});var qn=t._13(r,[],function(n){return t._25([t._26(512,t.n,t._6,[[8,[s.a,c.a,p.a,g.a,I.a,b.a,f.a,h.a,m.a,w.a,v.a,k.a,x.a,R.a,T.a,D.a,y.a,C.a,K.a,L.a,P.a,Cn]],[3,t.n],t.B]),t._26(4608,Kn.m,Kn.l,[t.x,[2,Kn.w]]),t._26(4608,Ln.x,Ln.x,[]),t._26(4608,Ln.d,Ln.d,[]),t._26(4608,Pn.b,Pn.a,[]),t._26(4608,Vn.a,Vn.b,[]),t._26(4608,Mn.b,Mn.a,[]),t._26(4608,En.b,En.a,[]),t._26(4608,N.a,N.a,[Wn.a,Pn.b,Vn.a,Mn.b,En.b,N.b,N.c]),t._26(512,i.a,i.a,[]),t._26(512,Kn.b,Kn.b,[]),t._26(512,Ln.v,Ln.v,[]),t._26(512,Ln.i,Ln.i,[]),t._26(512,Ln.s,Ln.s,[]),t._26(512,jn.a,jn.a,[]),t._26(512,u.a,u.a,[]),t._26(512,An.a,An.a,[]),t._26(512,Bn.a,Bn.a,[]),t._26(512,Fn.a,Fn.a,[]),t._26(512,Jn.a,Jn.a,[]),t._26(512,Nn.a,Nn.a,[]),t._26(512,o.a,o.a,[]),t._26(512,jn.b,jn.b,[]),t._26(512,r,r,[]),t._26(256,N.c,void 0,[]),t._26(256,N.b,void 0,[]),t._26(256,On.a,_,[])])})}});