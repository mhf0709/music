webpackJsonp([7],{585:function(t,n,a){a(625);var i=a(10)(a(606),a(657),"data-v-315a2a4c",null);t.exports=i.exports},598:function(t,n,a){"use strict";function i(){var t=s()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function e(t){var n=s()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.c)}n.b=i,n.a=e;var o=a(90),s=a.n(o),A=a(205),l=a(68)},606:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=a(58),e=a.n(i),o=a(69),s=a.n(o),A=a(206),l=a.n(A),r=a(598),p=a(68),c=a(89),d=a(51);n.default={mixins:[c.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:e()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;a.i(r.b)().then(function(n){n.code===p.a&&(t.topList=n.data.topList)})}},a.i(d.b)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:s.a,Loading:l.a}}},613:function(t,n,a){n=t.exports=a(579)(!0),n.push([t.i,".rank[data-v-315a2a4c]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-315a2a4c]{height:100%;overflow:hidden}.rank .toplist .item[data-v-315a2a4c]{display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-315a2a4c]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-315a2a4c]{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-315a2a4c]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#f8f8ff;color:rgba(0,0,0,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-315a2a4c]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-315a2a4c]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["E:/BaiduNetdiskDownload/项目源码/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,eAAgB,AACpB,YAAa,AACb,YAAc,CACf,AACD,gDACE,WAAY,AACR,OAAQ,AACZ,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,mBAAoB,AACpB,qBAAuB,AACvB,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"rank.vue",sourcesContent:["\n.rank[data-v-315a2a4c] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-315a2a4c] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-315a2a4c] {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-315a2a4c]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-315a2a4c] {\n  -ms-flex: 0 0 100px;\n      flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-315a2a4c] {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #f8f8ff;\n  color: rgba(0,0,0,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-315a2a4c] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-315a2a4c] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},625:function(t,n,a){var i=a(613);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(580)("580a6909",i,!0)},657:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{ref:"rank",staticClass:"rank"},[a("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[a("ul",t._l(t.topList,function(n){return a("li",{staticClass:"item",on:{click:function(a){return t.selectItem(n)}}},[a("div",{staticClass:"icon"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),a("ul",{staticClass:"songlist"},t._l(n.songList,function(n,i){return a("li",{staticClass:"song"},[a("span",[t._v(t._s(i+1))]),t._v(" "),a("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}),0)])}),0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[a("loading")],1)]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.bc4e8a17cbea6e1a6253.js.map