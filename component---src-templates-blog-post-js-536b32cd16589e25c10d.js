(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a(10);var r=a(0),i=a.n(r),n=a(104),s=a(224),o=a(216),l=a(217),d=a(46);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(s.a,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))},r}(i.a.Component);t.default=c;var u="3654438753"},223:function(e,t,a){"use strict";a(225)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},224:function(e,t,a){"use strict";a(223);var r=a(226),i=a(0),n=a.n(i),s=a(227),o=a.n(s),l=a(46);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)))}},225:function(e,t,a){var r=a(1),i=a(9),n=a(39),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},226:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEUElEQVQ4yz2S/08bZRzHz0yjOP1hRo26RUEIY0CvFEq/XHv9Rlva8q1gKQWcZnyxoYUhEL6PDRQ2NpFNCQ6jDFkySCbBOTZk0PbuetfrtXe9ttDCzIaa+It/hk8LWfLOJ88Pz+t5vz+fzwN58LCXCPv8YZxkcZLD/JyPCDPsHhd9mq77DBvzEQEfHsAIGggcPBi17fVv7eBQmmQxkiOoiD/AgyeC4djS8kpDQ7NSoXI0NC0uLofCUSoQJvxBP8mAihGAJ594CMibJvE0CQQMx8anMjJOQhD06ssnTrwEnXw9o7qqZusJRgc5kgoBpXna4yMhL8liFEcEABwJccn7axunTr2V//47donAIYXb1OIGcf67r0C1tbZoLAlIEAH44yA/RkHHmVOBuXjir+HRcfnHH232toZGndyoMzLmwgfbp6xaqaBg2+MPhXgAH5vjAdDzccNA8cThQP/oTHP9fz99e3hjOHml6+lkX2J6aN3lKBMVPHi8w3FxAL8wT8MUC2IDOLr3/PrM3Hxri2esn77S9/c3I+zl7nuuz5da6s0F2Qs352K7By9gYA55CA4kPxoYy+/fHrm80OG+1+1e6Wja+6pnw928cMF+t6NpqEz+69dXud0DmmYDNAuSAz4FYyQPnEk6SnNJz7Ubj4YHYjMT0Yne+HDPjrM5MODEL3Xeshp9d5bZ+EEwyB2NPQ2TEYyMgIFRdJSJ/UmsP94aGv73u2miu23N3TZXX7F2wU4OdkzVlGO/b7KxZJCJAPOjtUNeisepKEHzJBOjw3tBJr4+efVBb+u4RbdYU/m9Se9CS6Zturmx0UTyGRPigYCznwrhqZ4BHIiSwSjFxANMnI0/uzu/MFZv+qW9cbPls2V71WxjuR7ORuTq+2uPuMguaBjABBXG/EzKGaOjfjpGhVJw4uCficlZtaDQVW2cdFSMWHU6YS6c+cGbr72hN9ZE+ESQSZHgU/iIEPhhPBYAcJxk4mF+//rNnzPPyiuUGrNMIsj8MOu9t4uyzlyzG4Q5OTm5omrrp16cCbF7Hiy04wOxSd6T5ncThwvLv+WVWE5nCVstFnp2anXQteRuXOlsXHU7JLC4EEZOn8lzuvo3/sDAajCShbYJLsAekOHk2kNfpe2Ls0X6olIjnC+a73I+vzPLzwxRE51ddbWwSJWXV5KdA2dlF0lkhtb2nh8XVyGc3r11e8Vx/iKCVheL9YVCFSwqg4t1sFDe12h/eOnil7Y6gVBx7pw4N7dYIEBkMoNEoodhZbFYC41M/iBDrVKZSa2rQ9VWGVJRCKNCsVGjq5OI1bJSraQULREphEKlVKKXy4ypipQjSrNUboQUhmatoV6trdGUfaLS1skVVYAXSwwqdbUaNaFKkxY1KOR6cYlOJjUoEJNUapDKDAhqkSEmSGM+jygrwVUErVCowBM2jc4GIuh1NaVilURu1qDlSqQMMMAWUZjliBkcFEqLVF7+P/algvKxXhDeAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/static/04a6a6f9890365f49a270073241453b3/352e5/profile-pic.png","srcSet":"/static/04a6a6f9890365f49a270073241453b3/352e5/profile-pic.png 1x,\\n/static/04a6a6f9890365f49a270073241453b3/aae31/profile-pic.png 1.5x,\\n/static/04a6a6f9890365f49a270073241453b3/47c2b/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":"Sergio","social":{"twitter":"sgarciac4"}}}}}')},227:function(e,t,a){"use strict";a(14),a(12),a(5),a(81),a(147),a(223);var r=a(22);t.__esModule=!0,t.default=void 0;var i,n=r(a(82)),s=r(a(80)),o=r(a(148)),l=r(a(149)),d=r(a(0)),c=r(a(48)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(V,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,C=e.loading,A=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:I?1:0,transition:k?"opacity "+b+"ms":"none"},o),j="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&R,{},o,{},f),P={title:t,alt:this.state.isVisible?"":a,style:x,className:p,itemProp:E};if(g){var M=g,N=M[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&R)}),N.base64&&d.default.createElement(L,{src:N.base64,spreadProps:P,imageVariants:M,generateSources:w}),N.tracedSVG&&d.default.createElement(L,{src:N.tracedSVG,spreadProps:P,imageVariants:M,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(V,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:C,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:C},N,{imageVariants:M}))}}))}if(m){var B=m,U=B[0],H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete H.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},j&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},k&&R)}),U.base64&&d.default.createElement(L,{src:U.base64,spreadProps:P,imageVariants:B,generateSources:w}),U.tracedSVG&&d.default.createElement(L,{src:U.tracedSVG,spreadProps:P,imageVariants:B,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,S(B),d.default.createElement(V,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:C,draggable:A})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:C},U,{imageVariants:B}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});I.propTypes={resolutions:k,sizes:z,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=I;t.default=j}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-536b32cd16589e25c10d.js.map