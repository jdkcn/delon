webpackJsonp([1],{JF8l:function(n,l,_){"use strict";function a(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs",[],null,null,null,b.b,b.a)),c._9(1,245760,null,0,k.a,[y.a,C.a],{item:[0,"item"]},null)],function(n,l){n(l,1,0,l.component.item)},null)}function t(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs",[],null,null,null,b.b,b.a)),c._9(1,245760,null,0,k.a,[y.a,C.a],{item:[0,"item"]},null)],function(n,l){n(l,1,0,l.component.item)},null)}function e(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs",[],null,null,null,b.b,b.a)),c._9(1,245760,null,0,k.a,[y.a,C.a],{item:[0,"item"]},null)],function(n,l){n(l,1,0,l.component.item)},null)}function o(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs",[],null,null,null,b.b,b.a)),c._9(1,245760,null,0,k.a,[y.a,C.a],{item:[0,"item"]},null)],function(n,l){n(l,1,0,l.component.item)},null)}function u(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs",[],null,null,null,b.b,b.a)),c._9(1,245760,null,0,k.a,[y.a,C.a],{item:[0,"item"]},null)],function(n,l){n(l,1,0,l.component.item)},null)}Object.defineProperty(l,"__esModule",{value:!0});var c=_("LMZF"),s=_("yU3i"),p=function(){this.item={source:"docs/delon.md",content:{"zh-CN":{content:'<article><p><code>@delon/*</code> \u662f\u5f00\u53d1 ng-alain \u5fc5\u4e0d\u53ef\u5c11\u7684\u7c7b\u5e93\uff0cng-alain \u63d0\u4f9b\u7684\u662f\u4e00\u4e2a\u57fa\u7840\u7684\u5e03\u5c40\u6846\u67b6\uff0c\u800c <code>@delon/*</code> \u66f4\u50cf\u662f\u4e00\u4e2a\u79ef\u6728\u4ed3\u5e93\uff0c\u4f60\u53ef\u4ee5\u4ece\u5b83\u627e\u5230\u76f8\u5e94\u7684\u4e1a\u52a1\u7ec4\u4ef6\u3001\u6307\u4ee4\u3001ACL\u3001\u4e3b\u9898\u7b49\u5185\u5bb9\u6765\u6784\u5efa\u4ea7\u54c1\u3002</p><h2 id="\u6a21\u5757"><span>\u6a21\u5757</span></h2><ul><li><p><strong>@delon/theme</strong></p><ul><li><p>ng-alain \u4e3b\u9898\u6837\u5f0f\u6587\u4ef6</p></li></ul></li><li><p><strong>@delon/abc</strong></p><ul><li><p>\u6240\u6709\u7ec4\u4ef6\u90fd\u57fa\u4e8e Antd Design \u98ce\u683c</p></li><li><p>\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u5355\u72ec\u5bfc\u5165</p></li><li><p>\u57fa\u4e8eG2\uff0c\u4e1a\u52a1\u4e2d\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b</p></li></ul></li><li><p><strong>@delon/acl</strong></p><ul><li><p>\u57fa\u4e8e\u89d2\u8272\u6743\u9650\u63a7\u5236</p></li></ul></li></ul></article>'}},toc:[{href:"#\u6a21\u5757",title:"\u6a21\u5757"}],demo:!1},this.codes=[]},i=function(){this.item={source:"docs/getting-started.md",content:{"zh-CN":{content:'<article><h2 id="\u5199\u5728\u524d\u9762"><span>\u5199\u5728\u524d\u9762</span></h2><p>ng-alain \u662f\u4e00\u4e2a\u57fa\u4e8e ng-zorro-antd \u7684\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u524d\u7aef\u811a\u624b\u67b6\uff0c\u76ee\u6807\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u5e0c\u671b\u5728Angular\u4e0a\u9762\u5f00\u53d1\u4f01\u4e1a\u540e\u53f0\u66f4\u7b80\u5355\u3001\u66f4\u5feb\u901f\u3002</p><h2 id="\u5b89\u88c5"><span>\u5b89\u88c5</span></h2><p>\u6709\u4e8c\u79cd\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff1a</p><h3 id="\u76f4\u63a5-clone-git-\u4ed3\u5e93"><span>\u76f4\u63a5 clone git \u4ed3\u5e93</span></h3><pre class="hljs language-bash"><code>$ git clone --depth=1 git@github.com:cipchk/ng-alain.git my-project\n$ cd my-project</code></pre><h3 id="\u4e0b\u8f7d\u538b\u7f29\u5305"><span>\u4e0b\u8f7d\u538b\u7f29\u5305</span></h3><p>\u70b9\u51fb <a target="_blank" href="https://github.com/cipchk/ng-alain/archive/master.zip">https://github.com/cipchk/ng-alain/archive/master.zip</a> \u4e0b\u8f7d\u5230\u672c\u5730\u540e\u89e3\u538b\u3002</p><h2 id="\u76ee\u5f55\u7ed3\u6784"><span>\u76ee\u5f55\u7ed3\u6784</span></h2><p>ng-alain \u662f\u4e00\u4e2a\u6807\u51c6\u7684 Angular cli \u6784\u5efa\u7684\u9879\u76ee\uff0c\u56e0\u6b64\u4f60\u4f1a\u975e\u5e38\u719f\u6089\u7ed3\u6784\u7684\u7ec4\u6210\u3002\u5728\u6b64\u57fa\u7840\u4e0a\u63d0\u4f9b\u4e86\u5f88\u591a\u5178\u578b\u7684\u6a21\u677f\uff0c\u5229\u7528\u8fd9\u4e9b\u6a21\u677f\u4f60\u53ef\u4ee5\u5feb\u901f\u7684\u6784\u5efa\u4ea7\u54c1\u3002</p><pre class="hljs language-null"><code>\u251c\u2500\u2500 libs                                        # \u5916\u90e8\u7c7b\u5e93\uff0c\u8bf4\u660e\u89c1\u540e\u9762\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 core                                # \u6838\u5fc3\u6a21\u5757\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 i18n\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 net\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 default.interceptor.ts      # \u9ed8\u8ba4HTTP\u62e6\u622a\u5668\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 services\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 startup.service.ts          # \u521d\u59cb\u5316\u9879\u76ee\u914d\u7f6e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 core.module.ts                  # \u6838\u5fc3\u6a21\u5757\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 layout                              # \u901a\u7528\u5e03\u5c40\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 routes\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 **                              # \u4e1a\u52a1\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 routes.module.ts                # \u4e1a\u52a1\u8def\u7531\u6a21\u5757\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 routes.ts                       # \u4e1a\u52a1\u8def\u7531\u6ce8\u518c\u53e3\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 shared                              # \u5171\u4eab\u6a21\u5757\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 core.module.ts                  # \u5171\u4eab\u6a21\u5757\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.component.ts                    # \u6839\u7ec4\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 app.module.ts                       # \u6839\u6a21\u5757\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets                                  # \u672c\u5730\u9759\u6001\u8d44\u6e90\n\u2502\xa0\xa0 \u251c\u2500\u2500 environments                            # \u73af\u5883\u53d8\u91cf\u914d\u7f6e\n\u2502\xa0\xa0 \u251c\u2500\u2500 styles                                  # \u6837\u5f0f\u76ee\u5f55\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.less                              # \u6837\u5f0f\u5f15\u5bfc\u5165\u53e3</code></pre><h2 id="\u672c\u5730\u5f00\u53d1"><span>\u672c\u5730\u5f00\u53d1</span></h2><p>\u5b89\u88c5\u4f9d\u8d56\u3002</p><pre class="hljs language-bash"><code>$ npm install</code></pre><p>\u5982\u679c\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73\uff0c\u53ef\u4ee5\u4f7f\u7528 <a target="_blank" href="https://cnpmjs.org/">cnpm</a> \u8fdb\u884c\u52a0\u901f\u3002</p><pre class="hljs language-bash"><code>$ npm start</code></pre><p>\u6216\u4ee5HMR\u6a21\u5f0f\u542f\u52a8\uff1a</p><pre class="hljs language-bash"><code>$ npm run serve:hmr</code></pre><p>\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee <a target="_blank" href="http://localhost:4200\uff0c\u4f60\u770b\u5230\u4e0b\u9762\u7684\u9875\u9762\u5c31\u4ee3\u8868\u6210\u529f\u4e86\u3002">http://localhost:4200\uff0c\u4f60\u770b\u5230\u4e0b\u9762\u7684\u9875\u9762\u5c31\u4ee3\u8868\u6210\u529f\u4e86\u3002</a></p><p><img title="null" src="./assets/screenshot/desktop.png | width=700" alt="null" /></p></article>'}},toc:[{href:"#\u5199\u5728\u524d\u9762",title:"\u5199\u5728\u524d\u9762"},{href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},{href:"#\u76ee\u5f55\u7ed3\u6784",title:"\u76ee\u5f55\u7ed3\u6784"},{href:"#\u672c\u5730\u5f00\u53d1",title:"\u672c\u5730\u5f00\u53d1"}],demo:!1},this.codes=[]},r=function(){this.item={source:"docs/graph.md",content:{"zh-CN":{content:"<article><p>Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u4e1a\u52a1\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u3002</p></article>"}},toc:[],demo:!1},this.codes=[]},d=function(){this.item={source:"docs/i18n.md",content:{"zh-CN":{content:"<article><p>Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u4e1a\u52a1\u5e38\u7528\u7684\u56fe\u8868\u7c7b\u578b\u3002</p></article>"}},toc:[],demo:!1},this.codes=[]},h=function(){this.item={source:"docs/use-components-alone.md",content:{"zh-CN":{content:"<article><p>\u72ec\u7acb\u4f7f\u7528 ABC \u7ec4\u4ef6</p></article>"}},toc:[],demo:!1},this.codes=[]},m=function(){},g=_("5r7V"),f=_("ft03"),b=_("eG7k"),k=_("Oysy"),y=_("xixQ"),C=_("x4CF"),z=c._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),j=c._6("app-docs-delon",p,function(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs-delon",[],null,null,null,a,z)),c._9(1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),v=c._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),O=c._6("app-docs-getting-started",i,function(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs-getting-started",[],null,null,null,t,v)),c._9(1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),A=c._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),P=c._6("app-docs-graph",r,function(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs-graph",[],null,null,null,e,A)),c._9(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),F=c._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),M=c._6("app-docs-i18n",d,function(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs-i18n",[],null,null,null,o,F)),c._9(1,49152,null,0,d,[],null,null)],null,null)},{},{},[]),D=c._8({encapsulation:0,styles:["[_nghost-%COMP%] { display: block }"],data:{}}),x=c._6("app-docs-use-components-alone",h,function(n){return c._34(0,[(n()(),c._10(0,0,null,null,1,"app-docs-use-components-alone",[],null,null,null,u,D)),c._9(1,49152,null,0,h,[],null,null)],null,null)},{},{},[]),E=_("Un6q"),w=_("0nO6"),N=_("9iV4"),R=_("F+4z"),T=_("l6RC"),q=_("RyBE"),B=_("V8+5"),G=_("4jwp"),H=_("OFGE"),X=_("ppgG"),S=_("ajoC"),Z=_("cR19"),K=_("UHIZ"),L=_("CZgk"),U=_("Z5i0"),$=_("FWsv"),V=_("tpcp"),J=_("Lvyr"),Q=_("embk"),W=_("5Ws7"),Y=_("qCwp"),I=_("leGv"),nn=_("DJCW"),ln=_("hFjR"),_n=_("vXku"),an=_("0b8A"),tn=_("1Zos"),en=_("VC80"),on=_("oxLQ"),un=_("1foz"),cn=_("odZA"),sn=_("eSFe"),pn=_("cxBy"),rn=_("D22n"),dn=_("L6UK"),hn=_("EQiH"),mn=_("aTYU"),gn=_("CD85"),fn=_("dwYh"),bn=_("wSnH"),kn=_("wEpP"),yn=_("1/5v"),Cn=_("q6td"),zn=_("0XCE");_.d(l,"DocsModuleNgFactory",function(){return jn});var jn=c._7(m,[],function(n){return c._21([c._22(512,c.k,c._3,[[8,[g.b,g.c,g.a,g.d,g.e,g.f,g._8,f.a,j,O,P,M,x]],[3,c.k],c.z]),c._22(4608,E.n,E.m,[c.w,[2,E.v]]),c._22(4608,w.s,w.s,[]),c._22(4608,w.e,w.e,[]),c._22(4608,N.i,N.n,[E.e,c.D,N.l]),c._22(4608,N.o,N.o,[N.i,N.m]),c._22(5120,N.a,function(n){return[n]},[N.o]),c._22(4608,N.k,N.k,[]),c._22(6144,N.j,null,[N.k]),c._22(4608,N.h,N.h,[N.j]),c._22(6144,N.b,null,[N.h]),c._22(5120,N.f,N.p,[N.b,[2,N.a]]),c._22(4608,N.c,N.c,[N.f]),c._22(5120,R._104,R._105,[[3,R._104],R.b]),c._22(5120,R._14,R._95,[[3,R._14],R.a,R._104]),c._22(6144,T.b,null,[q.b]),c._22(4608,T.c,T.c,[[2,T.b]]),c._22(4608,B.a,B.a,[]),c._22(5120,G.c,G.a,[[3,G.c],c.B,B.a]),c._22(5120,G.f,G.e,[[3,G.f],B.a,c.B]),c._22(4608,H.f,H.f,[G.c,G.f,c.B]),c._22(5120,H.d,H.g,[[3,H.d]]),c._22(4608,H.j,H.j,[G.f]),c._22(5120,H.k,H.l,[[3,H.k]]),c._22(4608,H.c,H.c,[H.f,H.d,c.k,H.j,H.k,c.g,c.s,c.B]),c._22(5120,H.h,H.i,[H.c]),c._22(4608,R._27,R._27,[]),c._22(4608,R._26,R._26,[c.g,c.k,R._14]),c._22(4608,R._114,R._114,[]),c._22(4608,X.b,X.b,[]),c._22(4608,R._96,R._96,[]),c._22(5120,c.d,function(n,l){return[R._110(n,l)]},[E.e,[2,R.e]]),c._22(5120,R._99,R._100,[E.e,[3,R._99]]),c._22(4608,S.a,S.a,[]),c._22(4608,R._31,R._31,[H.c]),c._22(4608,R._23,R._23,[H.c]),c._22(4608,Z.a,Z.a,[]),c._22(512,E.c,E.c,[]),c._22(512,w.q,w.q,[]),c._22(512,w.h,w.h,[]),c._22(512,K.p,K.p,[[2,K.u],[2,K.l]]),c._22(512,w.o,w.o,[]),c._22(512,N.e,N.e,[]),c._22(512,N.d,N.d,[]),c._22(512,R._103,R._103,[]),c._22(512,R._13,R._13,[]),c._22(512,R.y,R.y,[]),c._22(512,R.j,R.j,[]),c._22(512,R.s,R.s,[]),c._22(512,T.a,T.a,[]),c._22(512,L.c,L.c,[]),c._22(512,B.b,B.b,[]),c._22(512,G.b,G.b,[]),c._22(512,H.e,H.e,[]),c._22(512,R._53,R._53,[]),c._22(512,R._45,R._45,[]),c._22(512,R.A,R.A,[]),c._22(512,R._9,R._9,[]),c._22(512,R.G,R.G,[]),c._22(512,R.K,R.K,[]),c._22(512,R._92,R._92,[]),c._22(512,R._83,R._83,[]),c._22(512,R.T,R.T,[]),c._22(512,R._3,R._3,[]),c._22(512,R._10,R._10,[]),c._22(512,R._4,R._4,[]),c._22(512,R._22,R._22,[]),c._22(512,R._25,R._25,[]),c._22(512,R._30,R._30,[]),c._22(512,R._34,R._34,[]),c._22(512,R._36,R._36,[]),c._22(512,R._39,R._39,[]),c._22(512,R._47,R._47,[]),c._22(512,R._61,R._61,[]),c._22(512,R._88,R._88,[]),c._22(512,R._57,R._57,[]),c._22(512,R._67,R._67,[]),c._22(512,R._41,R._41,[]),c._22(512,R._74,R._74,[]),c._22(512,X.c,X.c,[]),c._22(512,R._76,R._76,[]),c._22(512,R._79,R._79,[]),c._22(512,R._64,R._64,[]),c._22(512,R._19,R._19,[]),c._22(512,R.X,R.X,[]),c._22(512,R.v,R.v,[]),c._22(512,R._12,R._12,[]),c._22(131584,R._48,R._48,[E.e,c.s,c.k]),c._22(512,R.E,R.E,[]),c._22(512,R.C,R.C,[]),c._22(512,R.O,R.O,[]),c._22(512,R._86,R._86,[]),c._22(512,R.q,R.q,[]),c._22(512,R.h,R.h,[]),c._22(512,R.m,R.m,[]),c._22(512,R.o,R.o,[]),c._22(512,R._91,R._91,[]),c._22(512,R.f,R.f,[]),c._22(512,U.a,U.a,[]),c._22(512,$.a,$.a,[]),c._22(512,V.a,V.a,[]),c._22(512,J.a,J.a,[]),c._22(512,Q.b,Q.b,[]),c._22(512,W.a,W.a,[]),c._22(512,Y.a,Y.a,[]),c._22(512,I.a,I.a,[]),c._22(512,nn.a,nn.a,[]),c._22(512,ln.a,ln.a,[]),c._22(512,_n.a,_n.a,[]),c._22(512,an.a,an.a,[]),c._22(512,tn.a,tn.a,[]),c._22(512,en.a,en.a,[]),c._22(512,on.a,on.a,[]),c._22(512,un.a,un.a,[]),c._22(512,cn.a,cn.a,[]),c._22(512,sn.a,sn.a,[]),c._22(512,pn.a,pn.a,[]),c._22(512,rn.a,rn.a,[]),c._22(512,dn.a,dn.a,[]),c._22(512,hn.a,hn.a,[]),c._22(512,mn.a,mn.a,[]),c._22(512,gn.a,gn.a,[]),c._22(512,fn.a,fn.a,[]),c._22(512,bn.b,bn.b,[]),c._22(512,kn.a,kn.a,[]),c._22(512,yn.a,yn.a,[]),c._22(512,Cn.h,Cn.h,[]),c._22(512,Q.a,Q.a,[]),c._22(512,bn.a,bn.a,[]),c._22(512,zn.a,zn.a,[]),c._22(512,m,m,[]),c._22(256,N.l,"XSRF-TOKEN",[]),c._22(256,N.m,"X-XSRF-TOKEN",[]),c._22(256,R.b,!1,[]),c._22(256,R.a,R._94,[]),c._22(256,R._108,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),c._22(256,R._109,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),c._22(256,R.e,void 0,[]),c._22(1024,K.j,function(){return[[{path:"",component:s.a,children:[{path:"delon",component:p},{path:"getting-started",component:i},{path:"graph",component:r},{path:"i18n",component:d},{path:"use-components-alone",component:h}]}]]},[])])})}});