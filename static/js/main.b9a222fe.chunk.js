(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),l=(n(14),n(1)),c=n(2),o=n(4),m=n(3),u=(n(15),n(5)),h=n.n(u),d=n(8),p=(n(17),n(18),function(e){return i.a.createElement("svg",null,e.sectionZones.map((function(t){return i.a.createElement("svg",{key:t.color},i.a.createElement("rect",{x:"0",width:t.width,height:e.height,fill:t.color}))})))}),v=function(e){return i.a.createElement("div",null,e.labels.map((function(t,n){return i.a.createElement("div",{key:n},i.a.createElement("p",{style:{marginLeft:"".concat(e.position[3-n],"px"),position:"absolute",top:"0"}},t))})))},f=function(e){var t=e.sectionZones.map((function(e){return e.width+25}));return t=t.concat(25),i.a.createElement("div",{className:"section"},i.a.createElement("input",{style:{width:e.mainWidth+62},type:"range",min:"1",max:"100",readOnly:!0,value:e.values,step:"1",className:"slider",id:"myRange"}),i.a.createElement("svg",{width:e.mainWidth,height:e.height,viewBox:"0 0 ".concat(e.mainWidth," ").concat(e.height),fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement(p,{mainWidth:e.mainWidth,sectionZones:e.sectionZones,height:e.height})),i.a.createElement("label",{className:"labels"},i.a.createElement(v,{labels:e.section,position:t})))},g=function(e){return i.a.createElement("div",null,i.a.createElement("label",null,"ValuePointer:",i.a.createElement("input",{placeholder:"Enter the values",onChange:e.changeHandler,type:"number"})))},b=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={data:null,max:null,min:null,labels:null,zones:null,mainWidth:null,mainHeight:null,isLoaded:!1,items:null},e.changeHandler=function(t){var n=t.target.value;e.setState({data:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ac8d418a-14cf-41a4-908a-4a803dc878ab.mock.pstmn.io/demo/bar",e.next=3,fetch("https://ac8d418a-14cf-41a4-908a-4a803dc878ab.mock.pstmn.io/demo/bar");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({items:n,data:n.currentValue,min:n.minValue,max:n.maxValue,labels:n.staticLabels.labels,mainWidth:n.mainWidth,zones:n.staticZones,mainHeight:n.mainHeight,isLoaded:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"gettheWidth",value:function(e,t,n){return(e-t)*n/(this.state.max-this.state.min)}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",null,i.a.createElement("h3",null,"Loading...")),n=100*(this.state.data-this.state.min)/(this.state.max-this.state.min)+1;if(this.state.isLoaded){var a=this.state.zones.slice(0).reverse().map((function(t,n){return{start:0,color:t.strokeStyle,width:e.gettheWidth(t.max,e.state.min,e.state.mainWidth)}}));t=i.a.createElement(f,{values:n,max:this.state.max,min:this.state.min,section:this.state.labels,mainWidth:this.state.mainWidth,sectionZones:a,height:this.state.mainHeight})}return i.a.createElement("div",{className:"Bar"},t,i.a.createElement(g,{changeHandler:this.changeHandler}))}}]),n}(a.Component),E=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b9a222fe.chunk.js.map