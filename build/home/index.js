// {"framework": "Rax"}
define("home/index",function(e){!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/build/",t(0)}([function(e,t,n){e.exports=n(17)},function(t,n){t.exports=e("nuke")},function(t,n){t.exports=e("rax")},function(t,n){t.exports=e("QAP-SDK")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=f.protocol+"//"+f.hostname+":8080"+l.default[e];return t&&(n=n+"?"+a.default.uri.toQueryString(t)),a.default.fetch(n,{method:"POST",mode:"no-cors",dataType:"json"}).then(function(e){return e.json()})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=r(i),u=n(7),l=r(u),c=n(1),f=c.Util.Location;t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(3),f=r(c),s=n(9),d=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.__moduleSignature=(0,s.uuid)(),n}return a(t,e),u(t,[{key:"__eventsCtrl",value:function(e){var t=this.events;if(!t)throw new Error("未设定事件列表");var n=e?"on":"off",r=function(e){f.default[n](e,{success:function(e){},error:function(e){},notify:function(n){t[e](n)}})};for(var o in t)r(o)}},{key:"bindEvent",value:function(){this.__eventsCtrl(!0)}},{key:"unbindEvent",value:function(){this.__eventsCtrl(!1)}},{key:"emitEvent",value:function(e,t,n){f.default.emit(e,t,n)}}]),t}(l.Component);t.default=d,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(5),f=r(c),s=n(1),d=n(8),p=r(d),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.icons=p.default,n}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.iconStyle;return(0,l.createElement)(s.Text,{style:[e,b.icon]},this.icons[this.props.name])}}]),t}(f.default);m.propTypes={name:l.PropTypes.string};var b={icon:{fontFamily:"iconsforyourapp",textAlign:"center"}};e.exports=m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={userInfo:"/data/home.userinfo.json",bigOrderList:"/data/order.list.big.json",normalOrderList:"/data/order.list.normal.json",orderDetail:"/data/detail.detail.json",homeFeed:"/data/home.feed.json"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);(0,r.Iconfont)({name:"iconsforyourapp",url:"https://at.alicdn.com/t/font_w0iu3docuw4mfgvi.ttf"}),t.default={setting:"",home:"",evaluate:"",msg:"",order:"",home1:"",evaluate1:"",setting1:"",msg1:"",diamond:"",paperplane:"",search:"",note:"",calendar:""},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uuid=function(){var e=Date.now();return function(t){return(t||"UUID")+"-"+(e++).toString(16).toUpperCase()}}},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{name:"waitPay",title:"待付款",icon:"note"},{name:"waitSend",title:"待发货",icon:"order"},{name:"hadSend",title:"已发货",icon:"order"},{name:"refunding",title:"退款中",icon:"order"},{name:"waitRate",title:"待评价",icon:"order"}],e.exports=t.default},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(1),f=n(18),s=r(f),d=n(20),p=r(d),m=n(21),b=r(m),y=n(19),h=r(y),g=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return(0,l.createElement)(c.ScrollView,{style:_.container},(0,l.createElement)(b.default,null),(0,l.createElement)(s.default,null),(0,l.createElement)(p.default,null),(0,l.createElement)(h.default,null))}}]),t}(l.Component),_={container:{backgroundColor:"#eeeeee"}};(0,l.render)((0,l.createElement)(g,null))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=n(2),f=n(5),s=r(f),d=n(6),p=r(d),m=n(11),b=r(m),y=n(27),h=r(y),g=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.menus=b.default.map(function(e){return Object.assign(e,{count:10})}),n}return a(t,e),u(t,[{key:"press",value:function(e){this.emitEvent("app.changeToOrderModule",{nav:"order",tradeStatus:e}),this.emitEvent("app.changeOrderSubModule",e)}},{key:"renderEnterance",value:function(){var e=this;return this.menus.map(function(t){return(0,c.createElement)(l.TouchableHighlight,{style:h.default.item,onPress:e.press.bind(e,t.name)},(0,c.createElement)(l.View,null,(0,c.createElement)(p.default,{iconStyle:h.default.icon,name:t.icon})),(0,c.createElement)(l.Text,{style:h.default.badge},t.count),(0,c.createElement)(l.Text,{style:h.default.f1},t.title))})}},{key:"render",value:function(){return(0,c.createElement)(l.View,{style:h.default.container},this.renderEnterance())}}]),t}(s.default);t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(1),f=n(6),s=r(f),d=n(4),p=r(d),m=n(28),b=r(m),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:[]},n.getData(),n}return a(t,e),u(t,[{key:"getData",value:function(){var e=this;(0,p.default)("homeFeed").then(function(t){e.setState({data:t.datas})})}},{key:"renderFeed",value:function(e){return(0,l.createElement)(c.View,{style:b.default.feedContainer},(0,l.createElement)(c.View,{style:b.default.feedContent},(0,l.createElement)(c.Text,{style:b.default.feedTitle},e.title),(0,l.createElement)(c.View,{style:b.default.feedInfo},(0,l.createElement)(c.View,null,(0,l.createElement)(c.Text,{style:b.default.feedFM},e.fm)),(0,l.createElement)(c.View,{style:b.default.feedData},(0,l.createElement)(c.View,{style:b.default.feedDataItem},(0,l.createElement)(s.default,{style:b.default.feedIcon,name:"msg"}),(0,l.createElement)(c.Text,{style:b.default.feedCount},e.readCount)),(0,l.createElement)(c.View,{style:b.default.feedDataItem},(0,l.createElement)(s.default,{style:b.default.feedIcon,name:"evaluate"}),(0,l.createElement)(c.Text,{style:b.default.feedCount},e.replyCount))))),(0,l.createElement)(c.Image,{style:b.default.feedImage,source:{uri:e.pic_path}}))}},{key:"render",value:function(){var e=this,t=this.state.data.map(function(t){return e.renderFeed(t)});return(0,l.createElement)(c.View,{style:b.default.container},t)}}]),t}(l.Component);t.default=y,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(1),f=n(6),s=r(f),d=n(29),p=r(d),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.menus=[{name:"diamond",title:"商品管理",icon:"diamond",color:"#fcb943"},{name:"search",title:"促销管理",icon:"search",color:"#fc8540"},{name:"paperplane",title:"订单管理",icon:"paperplane",color:"#66d25f"},{name:"note",title:"流量推广",icon:"note",color:"#f989c0"},{name:"calendar",title:"客户管理",icon:"calendar",color:"#4bc8f5"},{name:"setting1",title:"货源采购",icon:"setting1",color:"#EB7E10"},{name:"evaluate",title:"金融服务",icon:"evaluate",color:"#FF3333"},{name:"msg",title:"店铺装修",icon:"msg",color:"#368BD9"}],n}return a(t,e),u(t,[{key:"renderGridCell",value:function(e,t){return(0,l.createElement)(c.View,{style:p.default.module},(0,l.createElement)(c.View,{style:[p.default.item,{backgroundColor:e.color}]},(0,l.createElement)(s.default,{iconStyle:p.default.icon,name:e.icon})),(0,l.createElement)(c.Text,{style:p.default.f1},e.title))}},{key:"render",value:function(){return(0,l.createElement)(c.View,{style:p.default.container},(0,l.createElement)(c.View,{style:p.default.subtitle},(0,l.createElement)(s.default,{iconStyle:p.default.subicon,name:"setting"}),(0,l.createElement)(c.Text,{style:p.default.title},"特色专区")),(0,l.createElement)(c.MultiRow,{dataSource:this.menus,rows:4,renderRow:this.renderGridCell.bind(this)}))}}]),t}(l.Component);t.default=m,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=n(1),f=n(30),s=r(f),d=n(4),p=r(d),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={user:{}},n}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;(0,p.default)("userInfo").then(function(t){e.setState({user:t.userInfo})})}},{key:"render",value:function(){return(0,l.createElement)(c.View,{style:s.default.container},(0,l.createElement)(c.Image,{source:{uri:this.state.user.avatar},style:s.default.img}),(0,l.createElement)(c.Text,{style:s.default.f1},"你好，",this.state.user.userNick))}}]),t}(l.Component);t.default=m,e.exports=t.default},,,,,,function(e,t){e.exports={container:{backgroundColor:"rgb(255,255,255)",flexDirection:"row",height:"200rem"},item:{height:"200rem",width:"150rem",alignItems:"center",justifyContent:"center"},itemStyle:{borderTopWidth:"1rem",borderTopColor:"rgb(204,204,204)",borderTopStyle:"solid"},icon:{fontSize:"48rem"},badge:{position:"absolute",width:40,height:40,borderRadius:20,right:32,top:40,backgroundColor:"red",color:"rgb(255,255,255)",alignItems:"center",justifyContent:"center",textAlign:"center"}}},function(e,t){e.exports={container:{marginTop:10},feedContainer:{padding:"20rem",flexDirection:"row",backgroundColor:"rgb(255,255,255)",borderBottomStyle:"solid",borderBottomWidth:"1rem",borderBottomColor:"rgb(238,238,238)"},feedImage:{width:160,height:160},feedContent:{flex:1,justifyContent:"space-between",paddingRight:20},feedTitle:{fontSize:28,color:"rgb(51,51,51)"},feedInfo:{flexDirection:"row",justifyContent:"space-between"},feedData:{flexDirection:"row"},feedFM:{color:"rgb(153,153,153)",fontSize:20},feedCount:{marginLeft:10,marginRight:10,color:"rgb(153,153,153)",fontSize:20},feedIcon:{color:"rgb(153,153,153)",fontSize:20},feedDataItem:{flexDirection:"row"}}},function(e,t){e.exports={container:{backgroundColor:"rgb(255,255,255)",marginTop:20},itemStyle:{borderTopWidth:"1rem",borderTopColor:"rgb(204,204,204)",borderTopStyle:"solid"},icon:{fontSize:"32rem",color:"rgb(255,255,255)"},subicon:{fontSize:"24rem",color:"rgb(51,51,51)"},module:{width:187,alignItems:"center",marginBottom:40},item:{paddingBottom:"10rem",paddingTop:"10rem",paddingRight:"10rem",paddingLeft:"10rem",borderRadius:20,marginBottom:10},subtitle:{paddingBottom:20,flex:1,paddingTop:20,borderBottomWidth:"1rem",borderBottomColor:"rgb(227,227,227)",paddingLeft:20,flexDirection:"row",borderBottomStyle:"solid",marginBottom:20},title:{fontSize:"24rem",color:"rgb(51,51,51)",marginLeft:10}}},function(e,t){e.exports={container:{paddingBottom:20,paddingTop:20,borderBottomWidth:"1rem",borderBottomColor:"rgb(204,204,204)",height:160,paddingLeft:20,flexDirection:"row",backgroundColor:"rgb(255,255,255)",alignItems:"center",borderBottomStyle:"solid"},img:{width:120,height:120,borderRadius:60,marginRight:20}}}])}),require("home/index");