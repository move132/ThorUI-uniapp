(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"1baa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2f62"),o={computed:(0,a.mapState)(["isLogin","mobile"]),data:function(){return{}},onShow:function(){},methods:{logout:function(){t.showModal({title:"提示",content:"确定退出登录？",confirmColor:"#5677FC",success:function(n){n.confirm&&(t.clearStorage(),t.reLaunch({url:"../login/login"}))}})},edit:function(){this.tui.toast("功能开发中~")},tapEvent:function(n){var e=n.currentTarget.dataset.index,a="";if(1==e)a="../about/about";else if(2==e){var o=n.currentTarget.dataset.key;a="../maps/maps?key="+o}else a="../log/log";t.navigateTo({url:a})},github:function(n){if(1==n){var e=this;t.setClipboardData({data:"https://github.com/dingyong0214/ThorUI-uniapp",success:function(n){t.getClipboardData({success:function(t){e.tui.toast("链接已复制",2e3,!0)}})}})}},previewReward:function(){t.previewImage({urls:["https://thorui.cn/img/reward.jpg"]})}}};n.default=o}).call(this,e("6e42")["default"])},"51de":function(t,n,e){"use strict";e.r(n);var a=e("1baa"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},"5d6d":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"79a5":function(t,n,e){},"7ef3":function(t,n,e){"use strict";var a=e("79a5"),o=e.n(a);o.a},df2f:function(t,n,e){"use strict";e.r(n);var a=e("5d6d"),o=e("51de");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("7ef3");var i=e("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports}},[["0188","common/runtime","common/vendor"]]]);