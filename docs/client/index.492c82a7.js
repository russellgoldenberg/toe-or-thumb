import{S as s,i as a,s as e,e as t,t as l,a as c,c as r,b as i,d as n,f as u,g as o,h,j as f,k as m,l as v,m as g,n as p,o as b,p as d,q as T,r as $,u as y,v as w,w as x,x as E,y as q,z as I}from"./client.ee1c3831.js";function k(s){let a,e,y,w,x,E,q,I,k,G,U,j,B,M,N,O,z,D;return{c(){a=t("h1"),e=l("Toe or Thumb?"),y=c(),w=t("figure"),x=t("img"),q=c(),I=t("img"),U=c(),j=t("div"),B=t("button"),M=l("Toe"),N=c(),O=t("button"),z=l("Thumb"),this.h()},l(s){a=r(s,"H1",{class:!0});var t=i(a);e=n(t,"Toe or Thumb?"),t.forEach(u),y=o(s),w=r(s,"FIGURE",{style:!0,class:!0});var l=i(w);x=r(l,"IMG",{class:!0,alt:!0,src:!0}),q=o(l),I=r(l,"IMG",{alt:!0,src:!0,class:!0}),l.forEach(u),U=o(s),j=r(s,"DIV",{class:!0});var c=i(j);B=r(c,"BUTTON",{class:!0});var h=i(B);M=n(h,"Toe"),h.forEach(u),N=o(c),O=r(c,"BUTTON",{class:!0});var f=i(O);z=n(f,"Thumb"),f.forEach(u),c.forEach(u),this.h()},h(){h(a,"class","svelte-yu1ilu"),h(x,"class","visible svelte-yu1ilu"),h(x,"alt","image of toe or thumb?"),x.src!==(E="assets/0-question.png")&&h(x,"src","assets/0-question.png"),h(I,"alt","image revealed"),I.src!==(k="assets/0-answer.png")&&h(I,"src","assets/0-answer.png"),h(I,"class","svelte-yu1ilu"),f(I,"visible","answer"===s[0]),m(w,"height",s[2]+"px"),h(w,"class","svelte-yu1ilu"),v(()=>s[4].call(w)),h(B,"class","svelte-yu1ilu"),h(O,"class","svelte-yu1ilu"),h(j,"class","choice svelte-yu1ilu")},m(t,l){g(t,a,l),p(a,e),g(t,y,l),g(t,w,l),p(w,x),p(w,q),p(w,I),G=b(w,s[4].bind(w)),g(t,U,l),g(t,j,l),p(j,B),p(B,M),p(j,N),p(j,O),p(O,z),D=[d(B,"click",s[3]),d(O,"click",s[3])]},p(s,[a]){1&a&&f(I,"visible","answer"===s[0]),4&a&&m(w,"height",s[2]+"px")},i:T,o:T,d(s){s&&u(a),s&&u(y),s&&u(w),G.cancel(),s&&u(U),s&&u(j),$(D)}}}function G(s,a,e){let t,l="question",c=0;return s.$$.update=()=>{2&s.$$.dirty&&e(2,t=c)},[l,c,t,function(){e(0,l="answer")},function(){c=this.offsetWidth,e(1,c)}]}class U extends s{constructor(s){super(),a(this,s,G,k,e,{})}}function j(s){let a;const e=new U({});return{c(){y(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,t){x(e,s,t),a=!0},p:T,i(s){a||(E(e.$$.fragment,s),a=!0)},o(s){q(e.$$.fragment,s),a=!1},d(s){I(e,s)}}}export default class extends s{constructor(s){super(),a(this,s,null,j,e,{})}}
