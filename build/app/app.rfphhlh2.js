/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='app']"));
(function(Context, resourcesUrl){
})(x,r);
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,i=!1,s=!1,r=arguments.length;for(;r-- >2;)g.push(arguments[r]);for(;g.length>0;){let t=g.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)g.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&i?l[l.length-1].vtext+=t:null===l?l=[s?{vtext:t}:t]:l.push(s?{vtext:t}:t),i=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&g.push(r);t.class=g.join(" "),g.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],k):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",i={},s=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.i||1===o.i&&!t.u.s)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.p.head,o=t.m.get(e);if(o||t.m.set(e,o={}),!o[s]){let t;{t=r.content.cloneNode(!0),o[s]=!0;const l=e.querySelectorAll("[data-styles]");n.v(e,t,l.length&&l[l.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=()=>{},p=(e,t,n,o,l,i)=>{if("class"!==n||i)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!i&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?v(t,n,l):"ref"!==n&&(v(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",f(t),n):e.setAttribute(t,n))})(t,n,l):(i||e.u.j(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),l?l!==o&&e.u.C(t,n,l,0):e.u.W(t,n,0);else if(o!==l){const e=m(o),n=m(l),i=e.filter(e=>!n.includes(e)),s=m(t.className).filter(e=>!i.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},m=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},b=(e,t,n,o,l)=>{const s=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||i,a=n.vattrs||i;for(l in r)a&&null!=a[l]||null==r[l]||p(e,s,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?s[l]:r[l])||p(e,s,l,r[l],a[l],o,n.l)};let y=!1;const M=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{M(e,t)}))},$=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),i=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(m))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},m=()=>{n++,p(a);const t=i?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(m):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},g=[],k={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},j=(e,t,n)=>{const[o,l,,i,s,r]=e,a={color:{N:"color"}};if(i)for(t=0;t<i.length;t++)a[(n=i[t])[0]]={O:n[1],S:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),i:s,R:r?r.map(C):void 0}},C=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),W=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,N=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>E(e,t,n)):e.queue.tick(()=>E(e,t,n)))},E=async(e,n,l,i,s,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(s=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{E(e,n,l)});if(s=L(e,n,e.J.get(n),l))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,i)=>{try{const s=n.V.host,r=n.V.encapsulation,a=!1;let c,f=l;if(!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===r&&e.u.Y(l,t(o)))}if(i.render||i.hostData||s||c){e._=!0;const t=i.render&&i.render();let n;e._=!1;const s=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,s,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,s),n["s-init"]()}},O=(e,t,n,o,l,i,s,r,c)=>{if(t.type||t.state){const f=e.te.get(n);t.state||(!t.attr||void 0!==f[l]&&""!==f[l]||(r=i&&i.ne)&&a(c=r[t.attr])&&(f[l]=W(t.type,c)),n.hasOwnProperty(l)&&(void 0===f[l]&&(f[l]=W(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===f[l]&&(f[l]=o[l]),t.watchCallbacks&&(f[R+l]=t.watchCallbacks.slice()),T(o,l,function f(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&(t.state||t.mutable)&&S(e,o,l,n,s)})}else if(t.elementRef)A(o,l,n);else if(t.method)A(n,l,o[l].bind(o));else if(t.context){const i=e.le(t.context);void 0!==i&&A(o,l,i.getContext&&i.getContext(n)||i)}},S=(e,t,n,o,l,i,s)=>{(s=e.te.get(t))||e.te.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,i=e.Z.get(t))){{const e=s[R+n];if(e)for(let t=0;t<e.length;t++)try{i[e[t]].call(i,o,r,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&N(e,t,l)}},A=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},T=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},R="wc-",L=(e,t,n,o,l,i)=>{try{l=new(i=e.M(t).V),((e,t,n,o,l,i)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{O(e,s,n,o,t,l,i)})})(e,i,t,l,n,o)}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},D=(e,t,n,o,l,i)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.ie.length&&!e.P.size)for(;i=e.ie.shift();)i()},q=(e,t,n,o)=>{t.forEach(([t,l])=>{const i=l.O;3&i?T(n,t,function n(){return(e.te.get(this)||{})[t]},function n(i){S(e,this,t,W(l.A,i),o)}):32===i&&A(n,t,u)})},B=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.se.has(n)||(e.re=!0,e.P.add(n),e.se.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ae(n);)if(e.ce(n)){e.fe.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.s&&1===t.i||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.me(n)[0])),o={ne:{}},t.g&&Object.keys(t.g).forEach(i=>{(l=t.g[i].N)&&(o.ne[l]=e.pe(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.be&&((e,t)=>{for(;t;){if(!e.ye(t))return 9!==e.he(t);t=e.ye(t)}})(e.u,t)){e.U.set(t,!0),D(e,t),M(e.ee.get(t),!0);{const n=e.Z.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.u.W(t),e.we.delete(t),[e.G,e.Me,e.J].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,l,i,s)=>{if((l=e.Z.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),(s=e.$e.has(t))||(e.$e.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{M(e.ee.get(t)),(i=e.Me.get(t))&&(i.forEach(e=>e(t)),e.Me.delete(t)),!s&&l.componentDidLoad?l.componentDidLoad():s&&l.componentDidUpdate&&l.componentDidUpdate()}catch(n){e.K(n,4,t)}D(e,t)}})(e,this,o)},n.forceUpdate=function(){N(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[f(n)];l&&(t[l]=(null!==o||"boolean"!=typeof t[l])&&o)})(e,this,t,o)}}q(e,o,n,l)}};((e,t,n,i,r,c,u)=>{const p=n.performance,d={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,l={p:n,s:!!n.documentElement.attachShadow,ge:!1,he:e=>e.nodeType,ke:e=>n.createElement(e),je:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),Ce:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),We:e=>e.remove(),Ne:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},me:e=>e.childNodes,ye:e=>e.parentNode,xe:e=>e.nextSibling,Ee:e=>e.previousSibling,Oe:e=>f(e.nodeName),Se:e=>e.textContent,Ae:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Te:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.ae(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,C:(t,n,i,s,r,a,c,f,u,p)=>{let d=t,m=i,v=o.get(t);p=n+s,v&&v[p]&&v[p](),"object"==typeof c&&(d=c),d&&(f=l.ge?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,m,f),v||o.set(t,v={}),v[p]=(()=>{d&&e.rel(d,n,m,f),v[p]=null}))},W:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},Le:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ae:(e,t)=>(t=l.ye(e))&&11===l.he(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),l})(m,n,i),h=v.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},M=(e,t)=>{n.customElements.get(e.t)||(B(g,d[e.t]=e,t.prototype,c,p),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},g={u:v,qe:M,M:e=>d[v.Oe(e)],le:e=>t[e],isClient:!0,ce:e=>!(!w[v.Oe(e)]&&!g.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=$(m,n),ve:(e,t)=>{{const n=e.T;let o=r+n+".entry.js";import(o).then(n=>{try{e.V=n[(e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.ke("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Ne(e.p.head,o)}}}(v,e,e.i,e.V.style,e.V.styleMode),N(g,t,p)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,o))}},_:!1,H:!1,be:!1,X:s,G:new WeakMap,m:new WeakMap,se:new WeakMap,we:new WeakMap,$e:new WeakMap,fe:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,Me:new WeakMap,Be:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,ie:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=i,t.resourcesUrl=t.publicPath=r,m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.P.size?g.ie.push(e):e()))),g.render=((e,t)=>{let n,o,l,i,s,r,c;const f=(l,p,d,m,v,h,w,M,$)=>{if(M=p.vchildren[d],n||(i=!0,"slot"===M.vtag&&(o&&t.Y(m,o+"-s"),M.vchildren?M.Ie=!0:M.Pe=!0)),a(M.vtext))M.o=t.de(M.vtext);else if(M.Pe)M.o=t.de("");else{if(h=M.o=y||"svg"===M.vtag?t.je("http://www.w3.org/2000/svg",M.vtag):t.ke(M.Ie?"slot-fb":M.vtag),e.ce(h)&&e.fe.delete(c),y="svg"===M.vtag||"foreignObject"!==M.vtag&&y,b(e,null,M,y),a(o)&&h["s-si"]!==o&&t.Y(h,h["s-si"]=o),M.vchildren)for(v=0;v<M.vchildren.length;++v)(w=f(l,M,v,h))&&t.Ne(h,w);"svg"===M.vtag&&(y=!1)}return M.o["s-hn"]=r,(M.Ie||M.Pe)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===M.vtag&&l.o&&u(l.o)),M.o},u=(n,o,l,s)=>{e.be=!0;const a=t.me(n);for(l=a.length-1;l>=0;l--)(s=a[l])["s-hn"]!==r&&s["s-ol"]&&(t.We(s),t.v(h(s),s,v(s)),t.We(s["s-ol"]),s["s-ol"]=null,i=!0),o&&u(s,o);e.be=!1},p=(e,n,o,l,i,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.ye(p)||e).shadowRoot&&t.Oe(c)===r&&(c=c.shadowRoot);i<=s;++i)l[i]&&(u=a(l[i].vtext)?t.de(l[i].vtext):f(null,o,i,e))&&(l[i].o=u,t.v(c,u,v(n)))},d=(e,n,o,i)=>{for(;n<=o;++n)a(e[n])&&(i=e[n].o,l=!0,i["s-ol"]?t.We(i["s-ol"]):u(i,!0),t.We(i))},m=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),v=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.ye(e["s-ol"]?e["s-ol"]:e),w=(n,o,l)=>{const i=o.o=n.o,s=n.vchildren,r=o.vchildren;y=o.o&&a(t.ae(o.o))&&void 0!==o.o.ownerSVGElement,y="svg"===o.vtag||"foreignObject"!==o.vtag&&y,a(o.vtext)?(l=i["s-cr"])?t.Ae(t.ye(l),o.vtext):n.vtext!==o.vtext&&t.Ae(i,o.vtext):("slot"!==o.vtag&&b(e,n,o,y),a(s)&&a(r)?((e,n,o,l,i,s,r,c)=>{let b=0,y=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,j=l[0],C=l[k];for(;b<=M&&y<=k;)if(null==$)$=n[++b];else if(null==g)g=n[--M];else if(null==j)j=l[++y];else if(null==C)C=l[--k];else if(m($,j))w($,j),$=n[++b],j=l[++y];else if(m(g,C))w(g,C),g=n[--M],C=l[--k];else if(m($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye($.o)),w($,C),t.v(e,$.o,t.xe(g.o)),$=n[++b],C=l[--k];else if(m(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye(g.o)),w(g,j),t.v(e,g.o,$.o),g=n[--M],j=l[++y];else{for(i=null,s=b;s<=M;++s)if(n[s]&&a(n[s].vkey)&&n[s].vkey===j.vkey){i=s;break}a(i)?((c=n[i]).vtag!==j.vtag?r=f(n&&n[y],o,i,e):(w(c,j),n[i]=void 0,r=c.o),j=l[++y]):(r=f(n&&n[y],o,y,e),j=l[++y]),r&&t.v(h($.o),r,v($.o))}b>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,y,k):y>k&&d(n,b,M)})(i,s,o,r):a(r)?(a(n.vtext)&&t.Ae(i,""),p(i,null,o,r,0,r.length-1)):a(s)&&d(s,0,s.length-1)),y&&"svg"===o.vtag&&(y=!1)},M=(e,n,o,l,i,s,r,a)=>{for(l=0,i=(o=t.me(e)).length;l<i;l++)if(n=o[l],1===t.he(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<i;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.he(o[s]),""!==r){if(1===a&&r===t.pe(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Se(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,i,s,r,a,c,f,u)=>{for(s=0,r=(n=t.me(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(i=o["s-cr"]))for(c=t.me(t.ye(i)),f=o["s-sn"],a=c.length-1;a>=0;a--)(i=c[a])["s-cn"]||i["s-nr"]||i["s-hn"]===o["s-hn"]||((3===(u=t.he(i))||8===u)&&""===f||1===u&&null===t.pe(i,"slot")&&""===f||1===u&&t.pe(i,"slot")===f)&&($.some(e=>e.Fe===i)||(l=!0,i["s-sn"]=f,$.push({He:o,Fe:i})));1===t.he(o)&&g(o)}};return(a,f,u,p,d,m,v,b,y,h,k,j)=>{if(c=a,r=t.Oe(c),s=c["s-cr"],n=p,o=c["s-sc"],i=l=!1,w(f,u),i){for(g(u.o),v=0;v<$.length;v++)(b=$[v]).Fe["s-ol"]||((y=t.de(""))["s-nr"]=b.Fe,t.v(t.ye(b.Fe),b.Fe["s-ol"]=y,b.Fe));for(e.be=!0,v=0;v<$.length;v++){for(b=$[v],k=t.ye(b.He),j=t.xe(b.He),y=b.Fe["s-ol"];y=t.Ee(y);)if((h=y["s-nr"])&&h&&h["s-sn"]===b.Fe["s-sn"]&&k===t.ye(h)&&(h=t.xe(h))&&h&&!h["s-nr"]){j=h;break}(!j&&k!==t.ye(b.Fe)||t.xe(b.Fe)!==j)&&b.Fe!==j&&(t.We(b.Fe),t.v(k,b.Fe,j))}e.be=!1}return l&&M(u.o),$.length=0,u}})(g,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{g.fe.set(h,m.loaded=g.H=!0),v.Le(n,"appload",{detail:{namespace:e}})}),u.map(j).forEach(e=>M(e,class extends HTMLElement{})),g.re||h["s-init"](),((e,t,n,o,l,i)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.fe.has(t))n(t);else{const o=e.Me.get(t)||[];o.push(n),e.Me.set(t,o)}return!!o}),l){for(i=l.length-1;i>=0;i--)t.componentOnReady(l[i][0],l[i][1])&&l.splice(i,1);for(i=0;i<o.length;i++)if(!n[o[i]].componentOnReady)return;for(i=0;i<l.length;i++)l[i][1](null);l.length=0}})(g,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"App","hydrated",[["app-home","lodcnqjh",1],["app-root","g1qhwtaq",1,[["el",64]]],["stencil-route","g1qhwtaq",1,[["component",1,0,1,2],["componentProps",1],["componentUpdated",1],["el",64],["exact",1,0,1,4],["group",1,0,1,2],["history",1],["historyType",1,0,"history-type",2],["location",1],["match",2],["routeRender",1],["routeViewsUpdated",1],["scrollTopOffset",1,0,"scroll-top-offset",8],["url",1,0,1,2]]],["stencil-route-switch","g1qhwtaq",0,[["el",64],["group",1,0,1,2],["location",1],["queue",4,0,0,0,"queue"],["routeViewsUpdated",1],["scrollTopOffset",1,0,"scroll-top-offset",8]]],["stencil-router","g1qhwtaq",0,[["history",16],["historyType",1,0,"history-type",2],["isServer",4,0,0,0,"isServer"],["location",16],["queue",4,0,0,0,"queue"],["root",1,0,1,2],["scrollTopOffset",1,0,"scroll-top-offset",8],["titleSuffix",1,0,"title-suffix",2]]],["tlm-signup","lodcnqjh",1,[["action",1,0,1,2],["doFocus",32],["doSubmit",32],["el",64],["label",1,0,1,2],["text",1,0,1,2]]]]);