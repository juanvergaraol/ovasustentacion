(function(t){function a(a){for(var e,n,c=a[0],o=a[1],l=a[2],u=0,v=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);d&&d(a);while(v.length)v.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(e=!1)}e&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},r={app:0},i=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0bfe":function(t,a,s){t.exports=s.p+"img/5.955a13c5.png"},"0c7a":function(t,a,s){t.exports=s.p+"img/play-button.95e80f52.svg"},"101b":function(t,a,s){t.exports=s.p+"img/3.58296aff.jpg"},1118:function(t,a,s){"use strict";var e=s("48d3"),r=s.n(e);r.a},"123d":function(t,a,s){t.exports=s.p+"img/J.G.5f803c8b.jpg"},"153f":function(t,a,s){},1585:function(t,a,s){t.exports=s.p+"img/12.3109fb2a.png"},"1e6d":function(t,a,s){t.exports=s.p+"img/JV.0c207ad3.jpeg"},"279d":function(t,a,s){t.exports=s.p+"img/9.320ef4d0.jpeg"},"31db":function(t,a,s){},3311:function(t,a,s){t.exports=s.p+"img/recurso.e021c4cb.jpg"},"3ade":function(t,a,s){},4837:function(t,a,s){},"48d3":function(t,a,s){},"55a3":function(t,a,s){t.exports=s.p+"img/11.ab297e1c.png"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("router-view")],1)},i=[],n={name:"App",data:function(){return{}}},c=n,o=(s("cfa8"),s("2877")),l=s("6544"),d=s.n(l),u=s("7496"),v=Object(o["a"])(c,r,i,!1,null,null,null),m=v.exports;d()(v,{VApp:u["a"]});var p=s("f309");e["a"].use(p["a"]);var f=new p["a"]({}),g=s("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"inicio",attrs:{fluid:""}},[e("v-row",{staticClass:"my-5",attrs:{align:"center"}},[e("v-col",{staticClass:"my-5",attrs:{align:"center"}},[e("div",[e("v-img",{staticClass:"mt-15",attrs:{width:"250px",height:"250px",src:s("0c7a")}}),e("router-link",{staticClass:"noneline",attrs:{to:{name:"contenido"}}},[e("v-btn",{staticClass:"my-5",attrs:{width:"250px",dark:"","x-large":"",rounded:""}},[t._v("INICIAR")])],1),e("h1",{staticClass:"h1"},[t._v("Code.org")])],1)])],1)],1)},x=[],b={data:function(){return{}}},h=b,A=s("8336"),w=s("62ad"),y=s("a523"),k=s("adda"),_=s("0fd9"),B=Object(o["a"])(h,C,x,!1,null,null,null),j=B.exports;d()(B,{VBtn:A["a"],VCol:w["a"],VContainer:y["a"],VImg:k["a"],VRow:_["a"]});var D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{absolute:"",app:"",dark:"",color:"#fcb69f",src:s("9908"),height:"100px"}},[e("router-link",{staticClass:"noneline",attrs:{to:{name:"inicio"}}},[e("v-app-bar-nav-icon",[e("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-home")])],1)],1),e("v-spacer"),e("router-link",{staticClass:"noneline",attrs:{to:{name:"contenido"}}},[e("v-btn",{staticClass:"mx-3",attrs:{color:"#0D1A4F",depressed:"","x-large":"",rounded:""}},[e("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-motion-play-outline")]),t._v(" Contenido ")],1)],1),e("router-link",{staticClass:"noneline",attrs:{to:{name:"act1"}}},[e("v-btn",{staticClass:"mx-3",attrs:{color:"#3377FF",depressed:"","x-large":"",rounded:""}},[e("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-head-flash-outline")]),t._v(" Actividades H5p ")],1)],1),e("router-link",{staticClass:"noneline",attrs:{to:{name:"code1"}}},[e("v-btn",{staticClass:"mx-3",attrs:{color:"#126346",depressed:"","x-large":"",rounded:""}},[e("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-head-flash-outline")]),t._v(" Actividades en code ")],1)],1),e("router-link",{staticClass:"noneline",attrs:{to:{name:"evaluacion"}}},[e("v-btn",{staticClass:"mx-3",attrs:{color:"#136A6A",depressed:"","x-large":"",rounded:""}},[e("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-account-group-outline")]),t._v(" Evaluación ")],1)],1),e("router-link",{staticClass:"noneline",attrs:{to:{name:"creditos"}}},[e("v-btn",{attrs:{elevation:"5",depressed:"",large:"",fab:"",dark:""}},[e("v-icon",{attrs:{"x-large":""}},[t._v("mdi-account-group")])],1)],1)],1),e("v-main",[e("router-view")],1)],1)},E=[],Q={name:"App",data:function(){return{}}},V=Q,I=s("40dc"),O=s("5bc1"),F=s("132d"),R=s("f6c4"),U=s("2fa4"),H=Object(o["a"])(V,D,E,!1,null,null,null),M=H.exports;d()(H,{VApp:u["a"],VAppBar:I["a"],VAppBarNavIcon:O["a"],VBtn:A["a"],VIcon:F["a"],VMain:R["a"],VSpacer:U["a"]});var P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"conte",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("v-container",{staticClass:"p-4 bg-dark",attrs:{fluid:"","top:":"","50%;left:":"","45%":""}},[e("v-row")],1),e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",color:"#ECE5E4"}},[e("v-card-title",{staticClass:"d-flex justify-center mb-6"},[e("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e("b",[t._v(" ¿Que es code.org?")])])]),e("v-card-subtitle",[e("h4",{staticClass:"subheading"},[t._v(" Es una organización sin fines de lucro, dedicada a expandir el acceso a Ciencias de la Computación; haciéndola disponible en más escuelas y a aumentar la participación de las mujeres y minorías subrepresentadas. Nuestra visión es que cada estudiante en cada escuela tenga la oportunidad de aprender informática, de la misma manera que biología, química o álgebra. Code.org es apoyado por donantes generosos como Amazon, Facebook, Google, la Fundación de Infosys, Microsoft y muchos más. ")])])],1),e("div",{staticClass:"card-body;"},[e("div",{staticClass:"card-footer"},[e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("center",[e("b",{staticClass:"card",staticStyle:{"background-color":"blue"},attrs:{align:"center"}},[e("h2",[t._v("Primeros pasos Code.org")])]),e("p"),e("iframe",{attrs:{width:"853",height:"480",src:"https://www.youtube.com/embed/KrWC6Ws04Yo",title:"Primeros pasos CODE.ORG. Versión para alumnos",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""}})])],1)])]),e("b",{staticClass:"card",attrs:{align:"center"}},[e("h2",[t._v("Ejemplo Practico de Code.org")])])],1),e("v-carousel",[e("v-carousel-item",[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 1. Funciones en Minecraft ")]),e("img",{attrs:{src:s("af7b"),alt:"Descripción de la imagen"}})])]),e("v-carousel-item",{attrs:{cover:""}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 2. Bucles 'desde' con la Abeja ")]),e("img",{attrs:{src:s("55a3"),alt:"Descripción de la imagen"}})])]),e("v-carousel-item",{attrs:{cover:""}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 3. Bucles 'desde'con Artista ")]),e("img",{attrs:{src:s("1585"),alt:"Descripción de la imagen"}})])]),e("v-carousel-item",[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 4. Bucles con el Rey y BB-8 ")]),e("img",{attrs:{src:s("ca7e"),alt:"Descripción de la imagen"}})])]),e("v-carousel-item",{attrs:{cover:""}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 5. Bucles anidados en Laberinto ")]),e("img",{attrs:{src:s("6206"),alt:"Descripción de la imagen"}})])]),e("v-carousel-item",{attrs:{cover:""}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 6. Mirando hacia el Futuro con Minecraft ")]),e("img",{attrs:{src:s("279d"),alt:"Descripción de la imagen"}})])])],1)],1)],1)},z=[],N={data:function(){}},S=N,G=(s("c468"),s("b0af")),J=s("99d9"),L=s("5e66"),q=s("3e35"),T=Object(o["a"])(S,P,z,!1,null,"58d214cb",null),W=T.exports;d()(T,{VCard:G["a"],VCardSubtitle:J["a"],VCardTitle:J["b"],VCarousel:L["a"],VCarouselItem:q["a"],VCol:w["a"],VContainer:y["a"],VRow:_["a"]});var X=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"conte",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center","no-gutters":""}},[s("router-link",{staticClass:"noneline",attrs:{to:{name:"act1"}}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#889CED",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-check-circle-outline")]),t._v(" Actividad #1 ")],1)],1),s("router-link",{staticClass:"noneline",attrs:{to:{name:"act2"}}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#8FEAF3",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-check-circle-outline")]),t._v(" Actividad #2 ")],1)],1),s("router-link",{staticClass:"noneline",attrs:{to:{name:"act3"}}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#88F0DD",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi-check-circle-outline")]),t._v(" Actividad #3 ")],1)],1)],1),s("v-main",{staticStyle:{padding:"0px 0px 0px"}},[s("router-view")],1)],1)},K=[],Z={data:function(){return{title:["ACTIVIDAD 1: SELECCIÓN MULTIPLE","ACTIVIDAD 2: RELACIONA","ACTIVIDAD 3: Sopa de letras"],index:0}},methods:{next:function(){this.index=1},back:function(){this.index=0}}},Y=Z,$=(s("b3b8"),Object(o["a"])(Y,X,K,!1,null,null,null)),tt=$.exports;d()($,{VBtn:A["a"],VContainer:y["a"],VIcon:F["a"],VMain:R["a"],VRow:_["a"]});var at=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"background1",attrs:{fluid:""}},[s("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[s("v-main",{staticClass:"main-content postion-relative max-height-vh-100 h-100 border-radius-lg"},[s("iframe",{attrs:{"aspect-ratio":16/9,width:"800",height:"400","rounded-xl":"20",frameborder:"0",src:"https://app.Lumi.education/run/6TJ9nf"}})])],1)])},st=[],et={},rt=Object(o["a"])(et,at,st,!1,null,null,null),it=rt.exports;d()(rt,{VContainer:y["a"],VMain:R["a"]});var nt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"background1",attrs:{fluid:""}},[s("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[s("v-main",{staticClass:"main-content postion-relative max-height-vh-100 h-100 border-radius-lg"},[s("iframe",{attrs:{"aspect-ratio":16/9,width:"800",height:"600","rounded-xl":"20",frameborder:"0",src:"https://app.Lumi.education/run/GHsOvi"}})])],1)])},ct=[],ot={},lt=Object(o["a"])(ot,nt,ct,!1,null,null,null),dt=lt.exports;d()(lt,{VContainer:y["a"],VMain:R["a"]});var ut=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("div",{staticClass:"d-flex flex-column justify-space-between align-center"},[s("v-main",{staticClass:"main-content postion-relative max-height-vh-100 h-100 border-radius-lg"},[s("iframe",{attrs:{"aspect-ratio":16/9,width:"800",height:"600","rounded-xl":"20",frameborder:"0",src:"https://app.Lumi.education/run/NyfF8x"}})])],1)])},vt=[],mt={},pt=Object(o["a"])(mt,ut,vt,!1,null,null,null),ft=pt.exports;d()(pt,{VContainer:y["a"],VMain:R["a"]});var gt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"conte",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center","no-gutters":""}},[s("router-link",{staticClass:"noneline",attrs:{to:"/code1"}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#AEC6F7",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi mdi-check-outline")]),t._v(" lección #1 ")],1)],1),s("router-link",{staticClass:"noneline",attrs:{to:{name:"code2"}}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#7097E6",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi mdi-check-all")]),t._v(" lección #2 ")],1)],1),s("router-link",{staticClass:"noneline",attrs:{to:{name:"code3"}}},[s("v-btn",{staticClass:"mx-3",attrs:{color:"#0F8FE7",depressed:"","x-large":"",rounded:""}},[s("v-icon",{staticClass:"mr-3",attrs:{"x-large":"",left:""}},[t._v("mdi mdi-check-decagram-outline")]),t._v(" lección #3 ")],1)],1)],1),s("v-main",{staticStyle:{padding:"0px 0px 0px"}},[s("code1"),s("router-view")],1)],1)},Ct=[],xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-carousel",[e("v-carousel-item",[e("a",{attrs:{href:"https://studio.code.org/s/express-2023/lessons/1/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 1. Programación con Angry Birds ")]),e("img",{attrs:{src:s("ad90"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2023/lessons/2/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 2. Depuración en el laberinto ")]),e("img",{attrs:{src:s("101b"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2023/lessons/4/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 3. Crear arte con código ")]),e("img",{attrs:{src:s("af7b"),alt:"Descripción de la imagen"}})])])])],1)],1)},bt=[],ht=(s("f22a"),{}),At=Object(o["a"])(ht,xt,bt,!1,null,null,null),wt=At.exports;d()(At,{VCarousel:L["a"],VCarouselItem:q["a"]});var yt={data:function(){return{title:["ACTIVIDAD 1: SELECCIÓN MULTIPLE","ACTIVIDAD 2: RELACIONA","ACTIVIDAD 3: Sopa de letras"],index:0,components:{code1:wt}}},methods:{next:function(){this.index=1},back:function(){this.index=0}}},kt=yt,_t=(s("1118"),Object(o["a"])(kt,gt,Ct,!1,null,null,null)),Bt=_t.exports;d()(_t,{VBtn:A["a"],VContainer:y["a"],VIcon:F["a"],VMain:R["a"],VRow:_["a"]});var jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-carousel",[e("v-carousel-item",[e("a",{attrs:{href:"https://studio.code.org/s/express-2023/lessons/10/levels/2",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 4. Bucles con el Rey y BB-8 ")]),e("img",{attrs:{src:s("ca7e"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2021/lessons/12/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 5. Bucles anidados en Laberinto ")]),e("img",{attrs:{src:s("6206"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2021/lessons/14/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 6. Mirando hacia el Futuro con Minecraft ")]),e("img",{attrs:{src:s("279d"),alt:"Descripción de la imagen"}})])])])],1)],1)},Dt=[],Et=(s("7f60"),{}),Qt=Object(o["a"])(Et,jt,Dt,!1,null,null,null),Vt=Qt.exports;d()(Qt,{VCarousel:L["a"],VCarouselItem:q["a"]});var It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-carousel",[e("v-carousel-item",[e("a",{attrs:{href:"https://studio.code.org/s/express-2021/lessons/20/levels/2",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 7. Funciones en Minecraft ")]),e("img",{attrs:{src:s("b1f2"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2021/lessons/26/levels/1",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 8. Bucles 'desde' con la Abeja ")]),e("img",{attrs:{src:s("55a3"),alt:"Descripción de la imagen"}})])])]),e("v-carousel-item",{attrs:{cover:""}},[e("a",{attrs:{href:"https://studio.code.org/s/express-2021/lessons/27/levels/2",target:"_blank"}},[e("div",{staticClass:"carousel-content"},[e("div",{staticClass:"text-overlay"},[t._v(" 9. Bucles 'desde'con Artista ")]),e("img",{attrs:{src:s("1585"),alt:"Descripción de la imagen"}})])])])],1)],1)},Ot=[],Ft=(s("c490"),{}),Rt=Object(o["a"])(Ft,It,Ot,!1,null,null,null),Ut=Rt.exports;d()(Rt,{VCarousel:L["a"],VCarouselItem:q["a"]});var Ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"conte",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{align:"center"}},[e("v-row",{staticClass:"title_p mb-5"},[e("v-col",{attrs:{align:"center"}},[e("h1",[t._v("Evaluación")]),e("p",[t._v("En este cuestionario, vas a responder solo 5 preguntas: presiona el circulo para responder. Y después vamos a CODE.ORG")])])],1),e("v-row",{staticClass:"div_background px-5"},[e("v-col",{attrs:{align:"center"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.view,expression:"view == 0"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{attrs:{"no-gutters":""}},[e("div",{staticClass:"title_h"},[e("h2",[t._v("1. Observa la secuencia de códigos, ¿La estructura permite que el Angry Bird aplaste al Cerdo?")])])]),e("div",{staticClass:"parrafo_p"},[e("v-img",{attrs:{src:s("a1d1"),height:"50%","max-width":"50%"}}),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(0)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("Verdadero ")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(1)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("Falso ")])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.view,expression:"view == 1"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{attrs:{"no-gutters":""}},[e("div",{staticClass:"title_h"},[e("h2",[t._v("2. En la siguiente secuencia falta un bloque de código para que el Angry Bird aplaste al Cerdo, ¿Cuál Será?")])])]),e("div",{staticClass:"parrafo_p"},[e("v-img",{attrs:{src:s("ffa1"),height:"auto","max-width":"100%",arigin:"center"}}),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(1)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("A. Girar a la derecha ")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(2)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("B. Girar a la Izquierda ")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(3)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("C. Avanzar ")])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.view,expression:"view == 2"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{attrs:{"no-gutters":""}},[e("div",{staticClass:"title_h"},[e("h2",[t._v("3. En el bloque de “Bucle” ¿cuántas veces debe repetirse la Acción Avanzar para que la secuencia de códigos funcione?")])])]),e("div",{staticClass:"parrafo_p"},[e("v-img",{attrs:{src:s("b09e"),height:"auto","max-width":"100%",arigin:"center"}}),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(2)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("A. 1")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(0)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("B. 2")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(1)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("B. 3")])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:3==t.view,expression:"view == 3"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{attrs:{"no-gutters":""}},[e("div",{staticClass:"title_h"},[e("h2",[t._v("4. Este código tiene un error, Indica cual es.")])])]),e("div",{staticClass:"parrafo_p"},[e("v-img",{attrs:{src:s("c319"),height:"auto","max-width":"100%",arigin:"center"}}),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(1)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("A. 1")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(2)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("B. 2")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(3)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("C. 3")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(0)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("C. 4")])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:4==t.view,expression:"view == 4"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{attrs:{"no-gutters":""}},[e("div",{staticClass:"title_h"},[e("h2",[t._v("5. Mantén la calma y ayuda al Angry Bird a encontrar al cerdo malo, Identifica la secuencia correcta para atrapar a ese cerdo.")])])]),e("div",{staticClass:"parrafo_p"},[e("v-img",{attrs:{src:s("0bfe"),height:"auto","max-width":"100%",arigin:"center"}}),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(1)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("A")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(2)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("B ")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(3)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("C")])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-btn",{staticClass:"ml-10 my-2",attrs:{color:"blue",dark:"",outlined:"",icon:"","x-small":""},on:{click:function(a){return t.registrar(4)}}}),e("p",{staticClass:"mx-2 my-2"},[t._v("D.")])],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:5==t.view,expression:"view == 5"}],staticClass:"my-5 mx-16 transition"},[e("v-row",{staticClass:"div_puntaje"},[e("v-col",[e("h1",[t._v("PUNTAJE")]),e("div",{staticClass:"box_div"},[e("p",[t._v(t._s(t.puntaje+"/5"))])]),e("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"teal",rounded:""},on:{click:function(a){return t.reset()}}},[e("v-icon",[t._v("mdi-undo-variant")]),e("h3",[t._v("Volver a intentar")])],1)],1)],1)],1)])],1),e("v-spacer"),e("v-col",[e("v-row",{staticClass:"div_background2 px-5",attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12",align:"center"}},[e("div",{staticClass:"card text-center"},[e("img",{staticClass:"card-img-top",attrs:{src:"",alt:""}}),e("div",{staticClass:"card-header"},[e("b",[e("h2",[t._v("¡INFORMACIÓN IMPORTANTE!")])])]),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("¿Cuál es la importancia de code.org?")]),e("div",{staticClass:"card mb-3",staticStyle:{"max-width":"100%"}},[e("div",{staticClass:"row row-cols-1 row-cols-md-3 g-4"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:s("ae27"),width:"200px",height:"200px"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Programar")]),e("p",{staticClass:"card-text"},[t._v("Hacen que todos los estudiantes comprendan la importancia de programar. ")])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:s("c30c"),width:"200px",height:"200px"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Informática")]),e("p",{staticClass:"card-text"},[t._v("Hacen que los estudiantes aprendan la informática a través del uso de bloques de código")])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:s("9fa6"),width:"200px",height:"200px"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Estrategias")]),e("p",{staticClass:"card-text"},[t._v("Conocen la forma de pensar de los estudiantes y aplicar una estrategia. ")])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:s("3311"),width:"200px",height:"200px"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Recursos")]),e("p",{staticClass:"card-text"},[t._v("Hacen que los estudiantes comprendan los recursos disponibles a su alrededor")])])])])])])]),e("div",{staticClass:"text-center"}),e("div",{staticClass:"card-footer text-muted"},[t._v(" ¡Buena suerte! ")])])])],1)],1)],1)],1),e("v-snackbar",{attrs:{timeout:t.timeout,rounded:"pill"},model:{value:t.snackbar1,callback:function(a){t.snackbar1=a},expression:"snackbar1"}},[e("h2",[e("v-icon",{attrs:{"x-large":"",color:"#00BCD4"}},[t._v(" mdi-emoticon-outline ")]),t._v(" ¡BIEN! ")],1)]),e("v-snackbar",{attrs:{timeout:t.timeout,rounded:"pill"},model:{value:t.snackbar2,callback:function(a){t.snackbar2=a},expression:"snackbar2"}},[e("h2",[e("v-icon",{attrs:{"x-large":"",color:"#FF5722"}},[t._v(" mdi-emoticon-sad-outline ")]),t._v(" ¡MAL! ")],1)])],1)},Mt=[],Pt={data:function(){return{contador:0,snackbar1:!1,snackbar2:!1,timeout:1e3,puntaje:0,view:0,correctas:[1,3,1,1,3]}},methods:{registrar:function(t){this.correctas[this.contador]==t?(this.contador++,this.view++,this.snackbar1=!0,this.puntaje++):(this.snackbar2=!0,this.contador++,this.view++)},reset:function(){this.view=0,this.contador=0,this.puntaje=0}}},zt=Pt,Nt=(s("5860"),s("2db4")),St=Object(o["a"])(zt,Ht,Mt,!1,null,null,null),Gt=St.exports;d()(St,{VBtn:A["a"],VCol:w["a"],VContainer:y["a"],VIcon:F["a"],VImg:k["a"],VRow:_["a"],VSnackbar:Nt["a"],VSpacer:U["a"]});var Jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"conte"},[e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"card-container"},[e("figure",{staticClass:"custom-figure"},[e("v-img",{staticClass:"custom-img",attrs:{src:s("1e6d"),alt:"Juan José Vergara"}})],1),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("Juan José Vergara Olivero")]),e("p",[e("b",[t._v("Rol:")]),t._v(" Programador")]),e("div",{staticClass:"card-actions justify-end"},[e("b",[t._v("Estudiante")])])])])],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"card-container"},[e("figure",{staticClass:"custom-figure"},[e("v-img",{staticClass:"custom-img",attrs:{src:s("e916"),alt:""}})],1),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("Eduardo José Robles Carmona")]),e("p",[e("b",[t._v("Rol:")]),t._v(" Investigador")]),e("p"),e("div",{staticClass:"card-actions justify-end"},[e("b",[t._v("Estudiante")])])])])],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"card-container"},[e("figure",{staticClass:"custom-figure"},[e("v-img",{staticClass:"custom-img",attrs:{src:s("8538"),alt:""}})],1),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("Aly Benhur Culchac De la Vega")]),e("p",[e("b",[t._v("Rol:")]),t._v(" Asesor")]),e("p"),e("div",{staticClass:"card-actions justify-end"},[e("b",[t._v("Docente")])])])])],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"card-container"},[e("figure",{staticClass:"custom-figure"},[e("v-img",{staticClass:"custom-img",attrs:{src:s("710d"),alt:""}})],1),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("Dalia Patricia Madera Doval")]),e("p",[e("b",[t._v("Rol:")]),t._v(" Asesor")]),e("p"),e("div",{staticClass:"card-actions justify-end"},[e("b",[t._v("Docente")])])])])],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"card-container"},[e("figure",{staticClass:"custom-figure"},[e("v-img",{staticClass:"custom-img",attrs:{src:s("123d"),alt:""}})],1),e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title"},[t._v("Juan Carlos Giraldo Cardozo")]),e("p",[e("b",[t._v("Rol:")]),t._v(" Director")]),e("p"),e("div",{staticClass:"card-actions justify-end"},[e("b",[t._v("Docente")])])])])],1)],1)],1)],1)},Lt=[],qt={data:function(){return{show:!1}}},Tt=qt,Wt=(s("fa26"),Object(o["a"])(Tt,Jt,Lt,!1,null,"09abbd92",null)),Xt=Wt.exports;d()(Wt,{VCard:G["a"],VCol:w["a"],VContainer:y["a"],VImg:k["a"],VRow:_["a"]}),e["a"].use(g["a"]);var Kt=[{path:"/",name:"inicio",component:j},{path:"/menu",name:"menu",component:M,children:[{path:"/contenido",name:"contenido",component:W},{path:"/actividades/",name:"actividades",component:tt,children:[{path:"/act1",name:"act1",component:it},{path:"/act2",name:"act2",component:dt},{path:"/act3",name:"act3",component:ft}]},{path:"/evaluacion",name:"evaluacion",component:Gt},{path:"/creditos",name:"creditos",component:Xt},{path:"/code",name:"code",component:Bt,children:[{path:"/code1",name:"code1",component:wt},{path:"/code2",name:"code2",component:Vt},{path:"/code3",name:"code3",component:Ut}]}]}],Zt=new g["a"]({mode:"history",base:"/",routes:Kt}),Yt=Zt;e["a"].config.productionTip=!1,new e["a"]({router:Yt,vuetify:f,render:function(t){return t(m)}}).$mount("#app")},5860:function(t,a,s){"use strict";var e=s("a896"),r=s.n(e);r.a},"5d11":function(t,a,s){},6206:function(t,a,s){t.exports=s.p+"img/8.e995f6f5.jpg"},"710d":function(t,a,s){t.exports=s.p+"img/dalia.c23acb9d.jpeg"},"7f60":function(t,a,s){"use strict";var e=s("153f"),r=s.n(e);r.a},8538:function(t,a){t.exports="data:image/jpeg;base64,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"},9908:function(t,a,s){t.exports=s.p+"img/ini.9d173222.jpg"},"9fa6":function(t,a,s){t.exports=s.p+"img/estrategia.285da557.jpg"},a1d1:function(t,a,s){t.exports=s.p+"img/1.27081e0d.png"},a896:function(t,a,s){},ad90:function(t,a,s){t.exports=s.p+"img/6.a21c0335.jpg"},ae27:function(t,a,s){t.exports=s.p+"img/ss.1ffbd966.png"},af7b:function(t,a,s){t.exports=s.p+"img/1.387b6ae1.jpg"},b09e:function(t,a,s){t.exports=s.p+"img/3.0fab428c.png"},b1f2:function(t,a,s){t.exports=s.p+"img/10.3087ba62.jpeg"},b3b8:function(t,a,s){"use strict";var e=s("4837"),r=s.n(e);r.a},c30c:function(t,a,s){t.exports=s.p+"img/informatica.d414039d.jpg"},c319:function(t,a,s){t.exports=s.p+"img/4.e96b89fe.png"},c468:function(t,a,s){"use strict";var e=s("31db"),r=s.n(e);r.a},c490:function(t,a,s){"use strict";var e=s("3ade"),r=s.n(e);r.a},ca7e:function(t,a,s){t.exports=s.p+"img/7.9c7631ba.jpg"},cfa8:function(t,a,s){"use strict";var e=s("fbf8"),r=s.n(e);r.a},e916:function(t,a,s){t.exports=s.p+"img/edua.5e567397.jpeg"},f22a:function(t,a,s){"use strict";var e=s("f364"),r=s.n(e);r.a},f364:function(t,a,s){},fa26:function(t,a,s){"use strict";var e=s("5d11"),r=s.n(e);r.a},fbf8:function(t,a,s){},ffa1:function(t,a,s){t.exports=s.p+"img/2.9419a937.png"}});
//# sourceMappingURL=app.8c1ca51c.js.map