(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{IvWd:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var l=n("q1tI"),i=n.n(l),o=n("2A+t"),a=n("izhR"),r=n("rePB"),c=i.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.items,n=void 0===t?[]:t,l=e.parentStyle,i=e.childStyle;return c(a.a,{as:"ul",sx:p({listStyleType:"none",margin:0,padding:0},l)},n.map((function(e,t){var n=e.icon,l=e.text,o=e.isAvailable;return c(a.e,{className:o?"open":"closed",as:"li",sx:p({},i),key:t},c(a.h,{sx:d.listIcon,"aria-label":"list icon"},n),l)})))}var d={listIcon:{width:[25,"35px"],height:"auto",color:"secondary",padding:0,fontSize:[2,5],marginLeft:"-1px",flexShrink:0,justifyContent:"flex-start",marginTop:[1,"2px"]}},x=i.a.createElement;function b(e){var t=e.data,n=t.header,l=t.name,i=t.description,o=t.priceWithUnit,r=t.buttonText,c=void 0===r?"Start Free Trial":r,s=t.points;return x(a.c,{className:n?"active":null,sx:m.pricingBox},n&&x(a.l,{sx:m.header},n),x(a.a,null,x(a.e,{sx:m.pricingHeader},x(a.a,null,x(a.g,{className:"package__name",sx:m.heading},l),x(a.l,{as:"p",sx:{opacity:n?1:.7,color:n?"text":"white",fontSize:[1,2],lineHeight:1.3}},i)),n&&x(a.l,{className:"package__price",sx:m.price},x("span",null,"Starting from"),x("div",{className:"price"},o,x("sub",null,"mo")))),x(u,{items:s,childStyle:m.listItem}),x(a.a,{sx:{textAlign:"center",mt:["40px",null,null,null,null,"70px"]}},x(a.b,{variant:n?"primary":"whiteButton","aria-label":c},c))))}var m={pricingBox:{flex:["0 1 100%",null,null,"0 1 50%","0 1 45%","0 1 40%","0 1 38.5%"],background:"#2F5392",borderRadius:10,ml:[0,null,null,5],position:"relative",mt:["40px",null,null,0],p:["50px 15px 50px",null,"62px 25px 50px 25px",null,"62px 70px 50px 40px"],"@media screen and (min-width: 420px) and (max-width: 767px)":{maxWidth:"380px"},"&:first-of-type":{ml:0,mt:0},"&.active":{backgroundColor:"white",".package__name":{color:"heading_secondary"},".package__price > span":{color:"text"},".open":{color:"text"},".closed":{color:"text",opacity:.6}}},header:{height:["28px",null,null,null,"32px"],backgroundColor:"#EF9E48",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"18px",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",position:"absolute",top:[3,null,4],letterSpacing:"-.14px",px:"10px"},heading:{fontWeight:"bold",fontSize:[4,null,null,null,5],lineHeight:"23px",color:"#ffffff",marginBottom:[1,null,"12px"]},pricingHeader:{justifyContent:"space-between",alignItems:"flex-start",mb:["35px",null,null,null,null,"50px"]},price:{fontWeight:"bold",fontSize:[4,null,5,null,"26px"],lineHeight:1,display:"flex",letterSpacing:"-0.5px",color:"#0F2137",marginBottom:0,flexWrap:"wrap",flexDirection:"column",textAlign:"right",mt:["-3px",null,"2px"],"> span":{fontWeight:"body",fontSize:[1,2],lineHeight:1.25,display:"block",marginBottom:"10px",color:"white"},"> .price":{marginBottom:0,color:"secondary","> sub":{position:"relative",bottom:"6px"}}},listItem:{fontStyle:"normal",fontWeight:"normal",fontSize:[1,null,null,null,2],lineHeight:[1.7,null,1.65],marginBottom:[3,"22px"],alignItems:"flex-start",color:"white",pr:[2,null,null,null,0,6],"&.closed":{opacity:.55,button:{color:"#788FB5"}}}},g=n("JCYj"),f=n("IdFE"),h=n("7F+R"),w=n.n(h),y=(i.a.createElement,[{name:"Free Plan",description:"For Small teams or office",buttonText:"Signup Now",points:[{icon:Object(o.c)(f.c,null),text:"Ultimate access to all course, exercises and assessments",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Free access for all kind of exercise corrections with downloads.",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Total assessment corrections with free download access system",isAvailable:!0},{icon:Object(o.c)(f.d,null),text:"Unlimited download of courses on the mobile app contents",isAvailable:!1},{icon:Object(o.c)(f.d,null),text:"Download and print courses and exercises in PDF",isAvailable:!1}]},{header:"Recommended",name:"Premium",description:"For startup enterprise",priceWithUnit:"$29.99/",buttonText:"Signup Now",points:[{icon:Object(o.c)(f.c,null),text:"Ultimate access to all course, exercises and assessments",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Free access for all kind of exercise corrections with downloads.",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Total assessment corrections with free download access system",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Unlimited download of courses on the mobile app contents",isAvailable:!0},{icon:Object(o.c)(f.c,null),text:"Download and print courses and exercises in PDF",isAvailable:!0}]}]);function v(){return Object(o.c)("section",{id:"pricing",sx:O.pricing},Object(o.c)(a.d,null,Object(o.c)(g.a,{title:"Let\u2019s see how it works",slogan:"Whats the function",isWhite:!0}),Object(o.c)(a.e,{sx:{justifyContent:"center",flexWrap:["wrap",null,null,"nowrap"]}},y.map((function(e){return Object(o.c)(b,{data:e,key:e.name})})))))}var O={pricing:{backgroundColor:"primary",backgroundImage:"url(".concat(w.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",py:[8,null,9,null,null,10],position:"relative","&::before":{position:"absolute",content:'""',top:0,right:0,background:"linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",width:"100%",backgroundSize:"350px 350px",height:"100%",opacity:.3,zIndex:0}}}}}]);