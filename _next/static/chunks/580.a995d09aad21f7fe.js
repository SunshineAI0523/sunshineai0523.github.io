"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{80580:function(t,e,r){r.d(e,{a:function(){return w},b:function(){return tr},c:function(){return m},d:function(){return th},e:function(){return tt},f:function(){return tc},g:function(){return tw},h:function(){return ty},i:function(){return M},j:function(){return ts},l:function(){return b},p:function(){return ta},s:function(){return te},u:function(){return k}});var a=r(8661),i=r(38077),n=r(74734);let l=(t,e,r,a)=>{e.forEach(e=>{u[e](t,r,a)})},s=(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionStart").attr("class","marker extension "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},d=(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionStart").attr("class","marker composition "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},o=(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},h=(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"_"+e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},c=(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),t.append("defs").append("marker").attr("id",r+"_"+e+"-lollipopEnd").attr("class","marker lollipop "+e).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},p=(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},y=(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},g=(t,e,r)=>{t.append("marker").attr("id",r+"_"+e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"_"+e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},f=(t,e,r)=>{t.append("defs").append("marker").attr("id",r+"_"+e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},u={extension:s,composition:d,aggregation:o,dependency:h,lollipop:c,point:p,circle:y,cross:g,barb:f},w=l,x=(t,e,r,n)=>{let l=t||"";if("object"==typeof l&&(l=l[0]),(0,a.m)((0,a.c)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+l);let t={isNode:n,label:(0,a.J)(l).replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),labelStyle:e.replace("fill:","color:")};return function(t){var e;let r=(0,i.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=r.append("xhtml:div"),n=t.label,l=t.isNode?"nodeLabel":"edgeLabel";return a.html('<span class="'+l+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+n+"</span>"),(e=t.labelStyle)&&a.attr("style",e),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}(t)}{let t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));for(let e of"string"==typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[]){let a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},m=x,b=async(t,e,r,l)=>{let s,d;let o=e.useHtmlLabels||(0,a.m)((0,a.c)().flowchart.htmlLabels),h=t.insert("g").attr("class",r||"node default").attr("id",e.domId||e.id),c=h.insert("g").attr("class","label").attr("style",e.labelStyle);s=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];let p=c.node(),y=(d="markdown"===e.labelType?(0,n.c)(c,(0,a.d)((0,a.J)(s),(0,a.c)()),{useHtmlLabels:o,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):p.appendChild(m((0,a.d)((0,a.J)(s),(0,a.c)()),e.labelStyle,!1,l))).getBBox(),g=e.padding/2;if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=d.children[0],e=(0,i.Ys)(d),r=t.getElementsByTagName("img");if(r){let t=""===s.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map(e=>new Promise(r=>{function i(){if(e.style.display="flex",e.style.flexDirection="column",t){let t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize;e.style.width=5*parseInt(t,10)+"px"}else e.style.width="100%";r(e)}setTimeout(()=>{e.complete&&i()}),e.addEventListener("error",i),e.addEventListener("load",i)})))}y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}return o?c.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"):c.attr("transform","translate(0, "+-y.height/2+")"),e.centerLabel&&c.attr("transform","translate("+-y.width/2+", "+-y.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:h,bbox:y,halfPadding:g,label:c}},k=(t,e)=>{let r=e.node().getBBox();t.width=r.width,t.height=r.height};function L(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function S(t,e,r,a){var i=t.x,n=t.y,l=i-a.x,s=n-a.y,d=Math.sqrt(e*e*s*s+r*r*l*l),o=Math.abs(e*r*l/d);a.x<i&&(o=-o);var h=Math.abs(e*r*s/d);return a.y<n&&(h=-h),{x:i+o,y:n+h}}let v=(t,e)=>{var r,a,i=t.x,n=t.y,l=e.x-i,s=e.y-n,d=t.width/2,o=t.height/2;return Math.abs(s)*d>Math.abs(l)*o?(s<0&&(o=-o),r=0===s?0:o*l/s,a=o):(l<0&&(d=-d),r=d,a=0===l?0:d*s/l),{x:i+r,y:n+a}},M=v,_={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return S(t,e,e,r)},ellipse:S,polygon:function(t,e,r){var a=t.x,i=t.y,n=[],l=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach(function(t){l=Math.min(l,t.x),s=Math.min(s,t.y)}):(l=Math.min(l,e.x),s=Math.min(s,e.y));for(var d=a-t.width/2-l,o=i-t.height/2-s,h=0;h<e.length;h++){var c=e[h],p=e[h<e.length-1?h+1:0],y=function(t,e,r,a){var i,n,l,s,d,o,h,c,p,y,g,f,u;if(i=e.y-t.y,l=t.x-e.x,d=e.x*t.y-t.x*e.y,p=i*r.x+l*r.y+d,y=i*a.x+l*a.y+d,(0===p||0===y||!(p*y>0))&&(n=a.y-r.y,s=r.x-a.x,o=a.x*r.y-r.x*a.y,h=n*t.x+s*t.y+o,c=n*e.x+s*e.y+o,!(0!==h&&0!==c&&h*c>0)&&0!=(g=i*s-n*l)))return f=Math.abs(g/2),{x:(u=l*o-s*d)<0?(u-f)/g:(u+f)/g,y:(u=n*d-i*o)<0?(u-f)/g:(u+f)/g}}(t,r,{x:d+c.x,y:o+c.y},{x:d+p.x,y:o+p.y});y&&n.push(y)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,i=t.y-r.y,n=Math.sqrt(a*a+i*i),l=e.x-r.x,s=e.y-r.y,d=Math.sqrt(l*l+s*s);return n<d?-1:n===d?0:1}),n[0]):t},rect:M},T=async(t,e)=>{let r=e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels;r||(e.centerLabel=!0);let{shapeSvg:i,bbox:n,halfPadding:l}=await b(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);let s=i.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-l).attr("y",-n.height/2-l).attr("width",n.width+e.padding).attr("height",n.height+e.padding),k(e,s),e.intersect=function(t){return _.rect(e,t)},i},E=t=>t?" "+t:"",B=(t,e)=>`${e||"node default"}${E(t.classes)} ${E(t.class)}`,C=async(t,e)=>{let{shapeSvg:r,bbox:i}=await b(t,e,B(e,void 0),!0),n=i.width+e.padding,l=i.height+e.padding,s=n+l,d=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}];a.l.info("Question main (Circle)");let o=L(r,s,s,d);return o.attr("style",e.style),k(e,o),e.intersect=function(t){return a.l.warn("Intersect called"),_.polygon(e,d,t)},r},Y=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(t){return t.x+","+t.y}).join(" "));return a.attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return _.circle(e,14,t)},r},P=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.height+e.padding,n=i/4,l=a.width+2*n+e.padding,s=[{x:n,y:0},{x:l-n,y:0},{x:l,y:-i/2},{x:l-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],d=L(r,l,i,s);return d.attr("style",e.style),k(e,d),e.intersect=function(t){return _.polygon(e,s,t)},r},R=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}],s=L(r,i,n,l);return s.attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return _.polygon(e,l,t)},r},I=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},O=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},$=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},N=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},j=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},D=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=i/2,l=n/(2.5+i/50),s=a.height+l+e.padding,d=r.attr("label-offset-y",l).insert("path",":first-child").attr("style",e.style).attr("d","M 0,"+l+" a "+n+","+l+" 0,0,0 "+i+" 0 a "+n+","+l+" 0,0,0 "+-i+" 0 l 0,"+s+" a "+n+","+l+" 0,0,0 "+i+" 0 l 0,"+-s).attr("transform","translate("+-i/2+","+-(s/2+l)+")");return k(e,d),e.intersect=function(t){let r=_.rect(e,t),a=r.x-e.x;if(0!=n&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-l)){let i=l*l*(1-a*a/(n*n));0!=i&&(i=Math.sqrt(i)),i=l-i,t.y-e.y>0&&(i=-i),r.y+=i}return r},r},H=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await b(t,e,"node "+e.classes+" "+e.class,!0),l=r.insert("rect",":first-child"),s=i.width+e.padding,d=i.height+e.padding;if(l.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-i.width/2-n).attr("y",-i.height/2-n).attr("width",s).attr("height",d),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(X(l,e.props.borders,s,d),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return k(e,l),e.intersect=function(t){return _.rect(e,t)},r},W=async(t,e)=>{let{shapeSvg:r}=await b(t,e,"label",!0);a.l.trace("Classes = ",e.class);let i=r.insert("rect",":first-child");if(i.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){let t=new Set(Object.keys(e.props));e.props.borders&&(X(i,e.props.borders,0,0),t.delete("borders")),t.forEach(t=>{a.l.warn(`Unknown node property ${t}`)})}return k(e,i),e.intersect=function(t){return _.rect(e,t)},r};function X(t,e,r,i){let n=[],l=t=>{n.push(t,0)},s=t=>{n.push(0,t)};e.includes("t")?(a.l.debug("add top border"),l(r)):s(r),e.includes("r")?(a.l.debug("add right border"),l(i)):s(i),e.includes("b")?(a.l.debug("add bottom border"),l(r)):s(r),e.includes("l")?(a.l.debug("add left border"),l(i)):s(i),t.attr("stroke-dasharray",n.join(" "))}let U=(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";let n=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=n.insert("rect",":first-child"),s=n.insert("line"),d=n.insert("g").attr("class","label"),o=e.labelText.flat?e.labelText.flat():e.labelText,h="";h="object"==typeof o?o[0]:o,a.l.info("Label text abc79",h,o,"object"==typeof o);let c=d.node().appendChild(m(h,e.labelStyle,!0,!0)),p={width:0,height:0};if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=c.children[0],e=(0,i.Ys)(c);p=t.getBoundingClientRect(),e.attr("width",p.width),e.attr("height",p.height)}a.l.info("Text 2",o);let y=o.slice(1,o.length),g=c.getBBox(),f=d.node().appendChild(m(y.join?y.join("<br/>"):y,e.labelStyle,!0,!0));if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=f.children[0],e=(0,i.Ys)(f);p=t.getBoundingClientRect(),e.attr("width",p.width),e.attr("height",p.height)}let u=e.padding/2;return(0,i.Ys)(f).attr("transform","translate( "+(p.width>g.width?0:(g.width-p.width)/2)+", "+(g.height+u+5)+")"),(0,i.Ys)(c).attr("transform","translate( "+(p.width<g.width?0:-(g.width-p.width)/2)+", 0)"),p=d.node().getBBox(),d.attr("transform","translate("+-p.width/2+", "+(-p.height/2-u+3)+")"),l.attr("class","outer title-state").attr("x",-p.width/2-u).attr("y",-p.height/2-u).attr("width",p.width+e.padding).attr("height",p.height+e.padding),s.attr("class","divider").attr("x1",-p.width/2-u).attr("x2",p.width/2+u).attr("y1",-p.height/2-u+g.height+u).attr("y2",-p.height/2-u+g.height+u),k(e,l),e.intersect=function(t){return _.rect(e,t)},n},A=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.height+e.padding,n=a.width+i/4+e.padding,l=r.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return k(e,l),e.intersect=function(t){return _.rect(e,t)},r},Z=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await b(t,e,B(e,void 0),!0),l=r.insert("circle",":first-child");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("Circle main"),k(e,l),e.intersect=function(t){return a.l.info("Circle intersect",e,i.width/2+n,t),_.circle(e,i.width/2+n,t)},r},q=async(t,e)=>{let{shapeSvg:r,bbox:i,halfPadding:n}=await b(t,e,B(e,void 0),!0),l=r.insert("g",":first-child"),s=l.insert("circle"),d=l.insert("circle");return l.attr("class",e.class),s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n+5).attr("width",i.width+e.padding+10).attr("height",i.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",i.width/2+n).attr("width",i.width+e.padding).attr("height",i.height+e.padding),a.l.info("DoubleCircle main"),k(e,s),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,i.width/2+n+5,t),_.circle(e,i.width/2+n+5,t)},r},z=async(t,e)=>{let{shapeSvg:r,bbox:a}=await b(t,e,B(e,void 0),!0),i=a.width+e.padding,n=a.height+e.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],s=L(r,i,n,l);return s.attr("style",e.style),k(e,s),e.intersect=function(t){return _.polygon(e,l,t)},r},J=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),k(e,a),e.intersect=function(t){return _.circle(e,7,t)},r},V=(t,e,r)=>{let a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),i=70,n=10;"LR"===r&&(i=10,n=70);let l=a.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return k(e,l),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return _.rect(e,t)},a},Q=(t,e)=>{let r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),i=r.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),k(e,i),e.intersect=function(t){return _.circle(e,7,t)},r},F=(t,e)=>{let r;let n=e.padding/2;r=e.classes?"node "+e.classes:"node default";let l=t.insert("g").attr("class",r).attr("id",e.domId||e.id),s=l.insert("rect",":first-child"),d=l.insert("line"),o=l.insert("line"),h=0,c=4,p=l.insert("g").attr("class","label"),y=0,g=e.classData.annotations&&e.classData.annotations[0],f=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",u=p.node().appendChild(m(f,e.labelStyle,!0,!0)),w=u.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=u.children[0],e=(0,i.Ys)(u);w=t.getBoundingClientRect(),e.attr("width",w.width),e.attr("height",w.height)}e.classData.annotations[0]&&(c+=w.height+4,h+=w.width);let x=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?x+="&lt;"+e.classData.type+"&gt;":x+="<"+e.classData.type+">");let b=p.node().appendChild(m(x,e.labelStyle,!0,!0));(0,i.Ys)(b).attr("class","classTitle");let L=b.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=b.children[0],e=(0,i.Ys)(b);L=t.getBoundingClientRect(),e.attr("width",L.width),e.attr("height",L.height)}c+=L.height+4,L.width>h&&(h=L.width);let S=[];e.classData.members.forEach(t=>{let r=t.getDisplayDetails(),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let l=p.node().appendChild(m(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),s=l.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=l.children[0],e=(0,i.Ys)(l);s=t.getBoundingClientRect(),e.attr("width",s.width),e.attr("height",s.height)}s.width>h&&(h=s.width),c+=s.height+4,S.push(l)}),c+=8;let v=[];if(e.classData.methods.forEach(t=>{let r=t.getDisplayDetails(),n=r.displayText;(0,a.c)().flowchart.htmlLabels&&(n=n.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let l=p.node().appendChild(m(n,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0)),s=l.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let t=l.children[0],e=(0,i.Ys)(l);s=t.getBoundingClientRect(),e.attr("width",s.width),e.attr("height",s.height)}s.width>h&&(h=s.width),c+=s.height+4,v.push(l)}),c+=8,g){let t=(h-w.width)/2;(0,i.Ys)(u).attr("transform","translate( "+(-1*h/2+t)+", "+-1*c/2+")"),y=w.height+4}let M=(h-L.width)/2;return(0,i.Ys)(b).attr("transform","translate( "+(-1*h/2+M)+", "+(-1*c/2+y)+")"),y+=L.height+4,d.attr("class","divider").attr("x1",-h/2-n).attr("x2",h/2+n).attr("y1",-c/2-n+8+y).attr("y2",-c/2-n+8+y),y+=8,S.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-h/2+", "+(-1*c/2+y+4)+")");let e=null==t?void 0:t.getBBox();y+=((null==e?void 0:e.height)??0)+4}),y+=8,o.attr("class","divider").attr("x1",-h/2-n).attr("x2",h/2+n).attr("y1",-c/2-n+8+y).attr("y2",-c/2-n+8+y),y+=8,v.forEach(t=>{(0,i.Ys)(t).attr("transform","translate( "+-h/2+", "+(-1*c/2+y)+")");let e=null==t?void 0:t.getBBox();y+=((null==e?void 0:e.height)??0)+4}),s.attr("class","outer title-state").attr("x",-h/2-n).attr("y",-(c/2)-n).attr("width",h+e.padding).attr("height",c+e.padding),k(e,s),e.intersect=function(t){return _.rect(e,t)},l},G={rhombus:C,question:C,rect:H,labelRect:W,rectWithTitle:U,choice:Y,circle:Z,doublecircle:q,stadium:A,hexagon:P,rect_left_inv_arrow:R,lean_right:I,lean_left:O,trapezoid:$,inv_trapezoid:N,rect_right_inv_arrow:j,cylinder:D,start:J,end:Q,note:T,subroutine:z,fork:V,join:V,class_box:F},K={},tt=async(t,e,r)=>{let i,n;if(e.link){let l;"sandbox"===(0,a.c)().securityLevel?l="_top":e.linkTarget&&(l=e.linkTarget||"_blank"),i=t.insert("svg:a").attr("xlink:href",e.link).attr("target",l),n=await G[e.shape](i,e,r)}else i=n=await G[e.shape](t,e,r);return e.tooltip&&n.attr("title",e.tooltip),e.class&&n.attr("class","node default "+e.class),K[e.id]=i,e.haveCallback&&K[e.id].attr("class",K[e.id].attr("class")+" clickable"),i},te=(t,e)=>{K[e.id]=t},tr=()=>{K={}},ta=t=>{let e=K[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");let r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r},ti={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function tn(t,e){t=tl(t),e=tl(e);let[r,a]=[t.x,t.y],[i,n]=[e.x,e.y],l=i-r,s=n-a;return{angle:Math.atan(s/l),deltaX:l,deltaY:s}}let tl=t=>Array.isArray(t)?{x:t[0],y:t[1]}:t,ts=t=>({x:function(e,r,a){let i=0;if(0===r&&Object.hasOwn(ti,t.arrowTypeStart)){let{angle:e,deltaX:r}=tn(a[0],a[1]);i=ti[t.arrowTypeStart]*Math.cos(e)*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(ti,t.arrowTypeEnd)){let{angle:e,deltaX:r}=tn(a[a.length-1],a[a.length-2]);i=ti[t.arrowTypeEnd]*Math.cos(e)*(r>=0?1:-1)}return tl(e).x+i},y:function(e,r,a){let i=0;if(0===r&&Object.hasOwn(ti,t.arrowTypeStart)){let{angle:e,deltaY:r}=tn(a[0],a[1]);i=ti[t.arrowTypeStart]*Math.abs(Math.sin(e))*(r>=0?1:-1)}else if(r===a.length-1&&Object.hasOwn(ti,t.arrowTypeEnd)){let{angle:e,deltaY:r}=tn(a[a.length-1],a[a.length-2]);i=ti[t.arrowTypeEnd]*Math.abs(Math.sin(e))*(r>=0?1:-1)}return tl(e).y+i}}),td={},to={},th=()=>{td={},to={}},tc=(t,e)=>{let r;let l=(0,a.m)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,n.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:l,addSvgBackground:!0}):m(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);let d=t.insert("g").attr("class","edgeLabel"),o=d.insert("g").attr("class","label");o.node().appendChild(s);let h=s.getBBox();if(l){let t=s.children[0],e=(0,i.Ys)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(o.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),td[e.id]=d,e.width=h.width,e.height=h.height,e.startLabelLeft){let a=m(e.startLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),to[e.id]||(to[e.id]={}),to[e.id].startLeft=i,tp(r,e.startLabelLeft)}if(e.startLabelRight){let a=m(e.startLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=i.node().appendChild(a),n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),to[e.id]||(to[e.id]={}),to[e.id].startRight=i,tp(r,e.startLabelRight)}if(e.endLabelLeft){let a=m(e.endLabelLeft,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),to[e.id]||(to[e.id]={}),to[e.id].endLeft=i,tp(r,e.endLabelLeft)}if(e.endLabelRight){let a=m(e.endLabelRight,e.labelStyle),i=t.insert("g").attr("class","edgeTerminals"),n=i.insert("g").attr("class","inner");r=n.node().appendChild(a);let l=a.getBBox();n.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),i.node().appendChild(a),to[e.id]||(to[e.id]={}),to[e.id].endRight=i,tp(r,e.endLabelRight)}return s};function tp(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}let ty=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,td[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){let i=td[t.id],n=t.x,l=t.y;if(r){let i=a.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",n,",",l,") to (",i.x,",",i.y,") abc78"),e.updatedPath&&(n=i.x,l=i.y)}i.attr("transform","translate("+n+", "+l+")")}if(t.startLabelLeft){let e=to[t.id].startLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.startLabelRight){let e=to[t.id].startRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelLeft){let e=to[t.id].endLeft,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}if(t.endLabelRight){let e=to[t.id].endRight,i=t.x,n=t.y;if(r){let e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);i=e.x,n=e.y}e.attr("transform","translate("+i+", "+n+")")}},tg=(t,e)=>{let r=t.x,a=t.y,i=Math.abs(e.x-r),n=Math.abs(e.y-a),l=t.width/2,s=t.height/2;return i>=l||n>=s},tf=(t,e,r)=>{a.l.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(e)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);let i=t.x,n=t.y,l=Math.abs(i-r.x),s=t.width/2,d=r.x<e.x?s-l:s+l,o=t.height/2,h=Math.abs(e.y-r.y),c=Math.abs(e.x-r.x);if(Math.abs(n-e.y)*s>Math.abs(i-e.x)*o){let t=r.y<e.y?e.y-o-n:n-o-e.y;d=c*t/h;let i={x:r.x<e.x?r.x+d:r.x-c+d,y:r.y<e.y?r.y+h-t:r.y-h+t};return 0===d&&(i.x=e.x,i.y=e.y),0===c&&(i.x=e.x),0===h&&(i.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${h}, q ${t}, R ${c}, r ${d}`,i),i}{let t=h*(d=r.x<e.x?e.x-s-i:i-s-e.x)/c,n=r.x<e.x?r.x+c-d:r.x-c+d,l=r.y<e.y?r.y+t:r.y-t;return a.l.warn(`sides calc abc89, Q ${h}, q ${t}, R ${c}, r ${d}`,{_x:n,_y:l}),0===d&&(n=e.x,l=e.y),0===c&&(n=e.x),0===h&&(l=e.y),{x:n,y:l}}},tu=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],i=t[0],n=!1;return t.forEach(t=>{if(a.l.info("abc88 checking point",t,e),tg(e,t)||n)a.l.warn("abc88 outside",t,i),i=t,n||r.push(t);else{let l=tf(e,i,t);a.l.warn("abc88 inside",t,i,l),a.l.warn("abc88 intersection",l);let s=!1;r.forEach(t=>{s=s||t.x===l.x&&t.y===l.y}),r.some(t=>t.x===l.x&&t.y===l.y)?a.l.warn("abc88 no intersect",l,r):r.push(l),n=!0}}),a.l.warn("abc88 returning points",r),r},tw=function(t,e,r,n,l,s,d){let o,h=r.points,c=!1,p=s.node(e.v);var y=s.node(e.w);a.l.info("abc88 InsertEdge: ",r),y.intersect&&p.intersect&&((h=h.slice(1,r.points.length-1)).unshift(p.intersect(h[0])),a.l.info("Last point",h[h.length-1],y,y.intersect(h[h.length-1])),h.push(y.intersect(h[h.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",n[r.toCluster]),h=tu(r.points,n[r.toCluster].node),c=!0),r.fromCluster&&(a.l.info("from cluster abc88",n[r.fromCluster]),h=tu(h.reverse(),n[r.fromCluster].node).reverse(),c=!0);let g=h.filter(t=>!Number.isNaN(t.y)),f=i.$0Z;r.curve&&("graph"===l||"flowchart"===l)&&(f=r.curve);let{x:u,y:w}=ts(r),x=(0,i.jvg)().x(u).y(w).curve(f);switch(r.thickness){case"normal":o="edge-thickness-normal";break;case"thick":case"invisible":o="edge-thickness-thick";break;default:o=""}switch(r.pattern){case"solid":o+=" edge-pattern-solid";break;case"dotted":o+=" edge-pattern-dotted";break;case"dashed":o+=" edge-pattern-dashed"}let m=t.append("path").attr("d",x(g)).attr("id",r.id).attr("class"," "+o+(r.classes?" "+r.classes:"")).attr("style",r.style),b="";switch(((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(b=(b=(b=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-crossStart)");break;case"arrow_point":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-pointStart)");break;case"arrow_barb":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-barbStart)");break;case"arrow_circle":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-circleStart)");break;case"aggregation":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-aggregationStart)");break;case"extension":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-extensionStart)");break;case"composition":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-compositionStart)");break;case"dependency":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-dependencyStart)");break;case"lollipop":m.attr("marker-start","url("+b+"#"+d+"_"+l+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-crossEnd)");break;case"arrow_point":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-pointEnd)");break;case"arrow_barb":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-barbEnd)");break;case"arrow_circle":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-circleEnd)");break;case"aggregation":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-aggregationEnd)");break;case"extension":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-extensionEnd)");break;case"composition":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-compositionEnd)");break;case"dependency":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-dependencyEnd)");break;case"lollipop":m.attr("marker-end","url("+b+"#"+d+"_"+l+"-lollipopEnd)")}let k={};return c&&(k.updatedPath=h),k.originalPath=r.points,k}}}]);