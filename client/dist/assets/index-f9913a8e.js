(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var T,f,X,x,B,Z,A,C={},ee=[],_e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function S(t,e){for(var n in e)t[n]=e[n];return t}function te(t){var e=t.parentNode;e&&e.removeChild(t)}function se(t,e,n){var l,r,i,a={};for(i in e)i=="key"?l=e[i]:i=="ref"?r=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?T.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return L(t,a,l,r,null)}function L(t,e,n,l,r){var i={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++X,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(i),i}function U(t){return t.children}function z(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?P(t):null}function ne(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ne(t)}}function G(t){(!t.__d&&(t.__d=!0)&&x.push(t)&&!O.__r++||B!==f.debounceRendering)&&((B=f.debounceRendering)||Z)(O)}function O(){var t,e,n,l,r,i,a,_,u;for(x.sort(A);t=x.shift();)t.__d&&(e=x.length,l=void 0,i=(r=(n=t).__v).__e,_=[],u=[],(a=n.__P)&&((l=S({},r)).__v=r.__v+1,f.vnode&&f.vnode(l),H(a,l,r,n.__n,a.ownerSVGElement!==void 0,32&r.__u?[i]:null,_,i??P(r),!!(32&r.__u),u),l.__.__k[l.__i]=l,ie(_,l,u),l.__e!=i&&ne(l)),x.length>e&&x.sort(A));O.__r=0}function re(t,e,n,l,r,i,a,_,u,s,d){var o,v,c,p,k,m=l&&l.__k||ee,h=e.length;for(n.__d=u,ce(n,e,m),u=n.__d,o=0;o<h;o++)(c=n.__k[o])!=null&&typeof c!="boolean"&&typeof c!="function"&&(v=c.__i===-1?C:m[c.__i]||C,c.__i=o,H(t,c,v,r,i,a,_,u,s,d),p=c.__e,c.ref&&v.ref!=c.ref&&(v.ref&&R(v.ref,null,c),d.push(c.ref,c.__c||p,c)),k==null&&p!=null&&(k=p),65536&c.__u||v.__k===c.__k?u=oe(c,u,t):typeof c.type=="function"&&c.__d!==void 0?u=c.__d:p&&(u=p.nextSibling),c.__d=void 0,c.__u&=-196609);n.__d=u,n.__e=k}function ce(t,e,n){var l,r,i,a,_,u=e.length,s=n.length,d=s,o=0;for(t.__k=[],l=0;l<u;l++)(r=t.__k[l]=(r=e[l])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?L(null,r,null,null,r):I(r)?L(U,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?L(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,_=ue(r,n,a=l+o,d),r.__i=_,i=null,_!==-1&&(d--,(i=n[_])&&(i.__u|=131072)),i==null||i.__v===null?(_==-1&&o--,typeof r.type!="function"&&(r.__u|=65536)):_!==a&&(_===a+1?o++:_>a?d>u-a?o+=_-a:o--:o=_<a&&_==a-1?_-a:0,_!==l+o&&(r.__u|=65536))):(i=n[l])&&i.key==null&&i.__e&&(i.__e==t.__d&&(t.__d=P(i)),F(i,i,!1),n[l]=null,d--);if(d)for(l=0;l<s;l++)(i=n[l])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=P(i)),F(i,i))}function oe(t,e,n){var l,r;if(typeof t.type=="function"){for(l=t.__k,r=0;l&&r<l.length;r++)l[r]&&(l[r].__=t,e=oe(l[r],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function ue(t,e,n,l){var r=t.key,i=t.type,a=n-1,_=n+1,u=e[n];if(u===null||u&&r==u.key&&i===u.type)return n;if(l>(u!=null&&!(131072&u.__u)?1:0))for(;a>=0||_<e.length;){if(a>=0){if((u=e[a])&&!(131072&u.__u)&&r==u.key&&i===u.type)return a;a--}if(_<e.length){if((u=e[_])&&!(131072&u.__u)&&r==u.key&&i===u.type)return _;_++}}return-1}function J(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||_e.test(e)?n:n+"px"}function E(t,e,n,l,r){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||J(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||J(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?l?n.u=l.u:(n.u=Date.now(),t.addEventListener(e,i?Y:V,i)):t.removeEventListener(e,i?Y:V,i);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function V(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(f.event?f.event(t):t)}function Y(t){return this.l[t.type+!0](f.event?f.event(t):t)}function H(t,e,n,l,r,i,a,_,u,s){var d,o,v,c,p,k,m,h,g,w,N,M,q,j,W,b=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),i=[_=e.__e=n.__e]),(d=f.__b)&&d(e);e:if(typeof b=="function")try{if(h=e.props,g=(d=b.contextType)&&l[d.__c],w=d?g?g.props.value:d.__:l,n.__c?m=(o=e.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?e.__c=o=new b(h,w):(e.__c=o=new z(h,w),o.constructor=b,o.render=fe),g&&g.sub(o),o.props=h,o.state||(o.state={}),o.context=w,o.__n=l,v=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=S({},o.__s)),S(o.__s,b.getDerivedStateFromProps(h,o.__s))),c=o.props,p=o.state,o.__v=e,v)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(h,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(h,o.__s,w)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(o.props=h,o.state=o.__s,o.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(D){D&&(D.__=e)}),N=0;N<o._sb.length;N++)o.__h.push(o._sb[N]);o._sb=[],o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(h,o.__s,w),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,p,k)})}if(o.context=w,o.props=h,o.__P=t,o.__e=!1,M=f.__r,q=0,"prototype"in b&&b.prototype.render){for(o.state=o.__s,o.__d=!1,M&&M(e),d=o.render(o.props,o.state,o.context),j=0;j<o._sb.length;j++)o.__h.push(o._sb[j]);o._sb=[]}else do o.__d=!1,M&&M(e),d=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++q<25);o.state=o.__s,o.getChildContext!=null&&(l=S(S({},l),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(k=o.getSnapshotBeforeUpdate(c,p)),re(t,I(W=d!=null&&d.type===U&&d.key==null?d.props.children:d)?W:[W],e,n,l,r,i,a,_,u,s),o.base=e.__e,e.__u&=-161,o.__h.length&&a.push(o),m&&(o.__E=o.__=null)}catch(D){e.__v=null,u||i!=null?(e.__e=_,e.__u|=u?160:32,i[i.indexOf(_)]=null):(e.__e=n.__e,e.__k=n.__k),f.__e(D,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=de(n.__e,e,n,l,r,i,a,u,s);(d=f.diffed)&&d(e)}function ie(t,e,n){e.__d=void 0;for(var l=0;l<n.length;l++)R(n[l],n[++l],n[++l]);f.__c&&f.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(i){i.call(r)})}catch(i){f.__e(i,r.__v)}})}function de(t,e,n,l,r,i,a,_,u){var s,d,o,v,c,p,k,m=n.props,h=e.props,g=e.type;if(g==="svg"&&(r=!0),i!=null){for(s=0;s<i.length;s++)if((c=i[s])&&"setAttribute"in c==!!g&&(g?c.localName===g:c.nodeType===3)){t=c,i[s]=null;break}}if(t==null){if(g===null)return document.createTextNode(h);t=r?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,h.is&&h),i=null,_=!1}if(g===null)m===h||_&&t.data===h||(t.data=h);else{if(i=i&&T.call(t.childNodes),m=n.props||C,!_&&i!=null)for(m={},s=0;s<t.attributes.length;s++)m[(c=t.attributes[s]).name]=c.value;for(s in m)c=m[s],s=="children"||(s=="dangerouslySetInnerHTML"?o=c:s==="key"||s in h||E(t,s,null,c,r));for(s in h)c=h[s],s=="children"?v=c:s=="dangerouslySetInnerHTML"?d=c:s=="value"?p=c:s=="checked"?k=c:s==="key"||_&&typeof c!="function"||m[s]===c||E(t,s,c,m[s],r);if(d)_||o&&(d.__html===o.__html||d.__html===t.innerHTML)||(t.innerHTML=d.__html),e.__k=[];else if(o&&(t.innerHTML=""),re(t,I(v)?v:[v],e,n,l,r&&g!=="foreignObject",i,a,i?i[0]:n.__k&&P(n,0),_,u),i!=null)for(s=i.length;s--;)i[s]!=null&&te(i[s]);_||(s="value",p!==void 0&&(p!==t[s]||g==="progress"&&!p||g==="option"&&p!==m[s])&&E(t,s,p,m[s],!1),s="checked",k!==void 0&&k!==t[s]&&E(t,s,k,m[s],!1))}return t}function R(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){f.__e(l,n)}}function F(t,e,n){var l,r;if(f.unmount&&f.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||R(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(i){f.__e(i,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&F(l[r],e,n||typeof t.type!="function");n||t.__e==null||te(t.__e),t.__=t.__e=t.__d=void 0}function fe(t,e,n){return this.constructor(t,n)}function he(t,e,n){var l,r,i,a;f.__&&f.__(t,e),r=(l=typeof n=="function")?null:n&&n.__k||e.__k,i=[],a=[],H(e,t=(!l&&n||e).__k=se(U,null,[t]),r||C,C,e.ownerSVGElement!==void 0,!l&&n?[n]:r?null:e.firstChild?T.call(e.childNodes):null,i,!l&&n?n:r?r.__e:e.firstChild,l,a),ie(i,t,a)}T=ee.slice,f={__e:function(t,e,n,l){for(var r,i,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,l||{}),a=r.__d),a)return r.__E=r}catch(_){t=_}throw t}},X=0,z.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},n),this.props)),t&&S(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),G(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),G(this))},z.prototype.render=U,x=[],Z=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=function(t,e){return t.__v.__b-e.__v.__b},O.__r=0;function pe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function le(t,e){var n=t[Math.floor(Math.random()*t.length)],l=e[Math.floor(Math.random()*e.length)],r=n+"_"+l;return r==="boring_wozniak"?le(t,e):r}function ae(){this.left=["admiring","adoring","affectionate","agitated","amazing","angry","awesome","beautiful","blissful","bold","boring","brave","busy","charming","clever","cool","compassionate","competent","condescending","confident","cranky","crazy","dazzling","determined","distracted","dreamy","eager","ecstatic","elastic","elated","elegant","eloquent","epic","exciting","fervent","festive","flamboyant","focused","friendly","frosty","funny","gallant","gifted","goofy","gracious","great","happy","hardcore","heuristic","hopeful","hungry","infallible","inspiring","interesting","intelligent","jolly","jovial","keen","kind","laughing","loving","lucid","magical","mystifying","modest","musing","naughty","nervous","nice","nifty","nostalgic","objective","optimistic","peaceful","pedantic","pensive","practical","priceless","quirky","quizzical","recursing","relaxed","reverent","romantic","sad","serene","sharp","silly","sleepy","stoic","strange","stupefied","suspicious","sweet","tender","thirsty","trusting","unruffled","upbeat","vibrant","vigilant","vigorous","wizardly","wonderful","xenodochial","youthful","zealous","zen"],this.right=["albattani","allen","almeida","antonelli","agnesi","archimedes","ardinghelli","aryabhata","austin","babbage","banach","banzai","bardeen","bartik","bassi","beaver","bell","benz","bhabha","bhaskara","black","blackburn","blackwell","bohr","booth","borg","bose","bouman","boyd","brahmagupta","brattain","brown","buck","burnell","cannon","carson","cartwright","carver","cerf","chandrasekhar","chaplygin","chatelet","chatterjee","chebyshev","cohen","chaum","clarke","colden","cori","cray","curran","curie","darwin","davinci","dewdney","dhawan","diffie","dijkstra","dirac","driscoll","dubinsky","easley","edison","einstein","elbakyan","elgamal","elion","ellis","engelbart","euclid","euler","faraday","feistel","fermat","fermi","feynman","franklin","gagarin","galileo","galois","ganguly","gates","gauss","germain","goldberg","goldstine","goldwasser","golick","goodall","gould","greider","grothendieck","haibt","hamilton","haslett","hawking","hellman","heisenberg","hermann","herschel","hertz","heyrovsky","hodgkin","hofstadter","hoover","hopper","hugle","hypatia","ishizaka","jackson","jang","jemison","jennings","jepsen","johnson","joliot","jones","kalam","kapitsa","kare","keldysh","keller","kepler","khayyam","khorana","kilby","kirch","knuth","kowalevski","lalande","lamarr","lamport","leakey","leavitt","lederberg","lehmann","lewin","lichterman","liskov","lovelace","lumiere","mahavira","margulis","matsumoto","maxwell","mayer","mccarthy","mcclintock","mclaren","mclean","mcnulty","mendel","mendeleev","meitner","meninsky","merkle","mestorf","mirzakhani","montalcini","moore","morse","murdock","moser","napier","nash","neumann","newton","nightingale","nobel","noether","northcutt","noyce","panini","pare","pascal","pasteur","payne","perlman","pike","poincare","poitras","proskuriakova","ptolemy","raman","ramanujan","ride","ritchie","rhodes","robinson","roentgen","rosalind","rubin","saha","sammet","sanderson","satoshi","shamir","shannon","shaw","shirley","shockley","shtern","sinoussi","snyder","solomon","spence","stonebraker","sutherland","swanson","swartz","swirles","taussig","tereshkova","tesla","tharp","thompson","torvalds","tu","turing","varahamihira","vaughan","visvesvaraya","volhard","villani","wescoff","wilbur","wiles","williams","williamson","wilson","wing","wozniak","wright","wu","yalow","yonath","zhukovsky"],this.adjectives=this.left,this.surnames=this.right}ae.prototype.getRandomName=function(t){var e=t===!0||t>0?String(Math.floor(Math.random()*9+1)):"";return le(this.left,this.right)+e};var me=new ae;const ge=pe(me);var ye=0;function y(t,e,n,l,r,i){var a,_,u={};for(_ in e)_=="ref"?a=e[_]:u[_]=e[_];var s={type:t,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ye,__i:-1,__u:0,__source:r,__self:i};if(typeof t=="function"&&(a=t.defaultProps))for(_ in a)u[_]===void 0&&(u[_]=a[_]);return f.vnode&&f.vnode(s),s}const K=Math.floor(Math.random()*16777215).toString(16),Q=ge.getRandomName();class ve extends z{constructor(){super(...arguments),this.state={chat:[]},this.socket=null,this.onSubmit=e=>{const n={color:e.target[0].value?e.target[0].value:K,username:e.target[1].value?e.target[1].value:Q,msg:e.target[2].value};this.socket?(this.socket.send(JSON.stringify(n)),e.target[2].value=""):console.log("Missing socket connection"),e.preventDefault()}}componentDidMount(){fetch("chat").then(e=>e.json()).then(e=>{console.log(e),this.setState({chat:e}),this.socket=new WebSocket(location.origin.replace(/^http/,"ws")+"/ws"),this.socket.addEventListener("message",n=>{let l=JSON.parse(n.data);this.setState({chat:[...this.state.chat,l]})})})}componentWillUnmount(){this.socket=null}render(e,{chat:n}){return y("div",{children:[y("h1",{children:"Simple Chat app"}),y("table",{class:"messages",children:n.map(l=>y("tr",{children:[y("th",{children:y("b",{style:{color:"#"+l.color},children:[l.username,":"]})}),y("th",{children:l.msg})]}))}),y("form",{id:"footer",onSubmit:this.onSubmit,children:[y($,{id:"color",label:"Your Color",default:K}),y($,{id:"name",label:"Your Name",default:Q}),y($,{id:"message",label:"Message"}),y("button",{id:"send",type:"submit",children:"Send"})]})]})}}function $(t){return y("div",{class:t.id,style:{display:"flex",flexFlow:"row nowrap",alignItems:"stretch"},children:[y("label",{for:t.id,class:"form-label",style:{marginRight:"10px"},children:[t.label,":"]}),y("input",{id:t.id,type:"text",placeholder:t.default,style:{flex:"1 1 auto"}})]})}he(y(ve,{}),document.getElementById("app"));
