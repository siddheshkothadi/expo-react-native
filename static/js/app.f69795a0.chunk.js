(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{123:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(0),i=n(98),c=n(4),l=n(46),s=n(48),m=n(97),u=n(199);function d(e){var t=e.route,n=e.navigation,r="";return null!=t.params&&(r="Previous score: "+t.params.score),o.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},o.createElement(i.a,{onPress:function(){return n.navigate("Game",{score:0,rand1:Math.floor(10*Math.random()),rand2:Math.floor(10*Math.random())})},title:"Start Game",color:"#841584"}),o.createElement(l.a,null,r))}function f(e){var t=e.route,n=e.navigation,r=t.params,m=r.score,u=r.rand1,d=r.rand2,f=Object(o.useState)(""),p=a()(f,2),g=p[0],v=p[1];return o.createElement(c.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},o.createElement(l.a,{style:{padding:10,fontSize:60}},u,"+",d),o.createElement(s.a,{keyboardType:"numeric",style:{borderColor:"gray",marginBottom:20,textAlign:"center",width:250,padding:10},placeholder:"Enter the addition",onChangeText:function(e){return v(e)},defaultValue:g}),o.createElement(i.a,{onPress:g==u+d?function(){return n.push("Game",{score:m+1,rand1:Math.floor(10*Math.random()),rand2:Math.floor(10*Math.random())})}:function(){return n.navigate("Home",{score:m})},title:"Submit",color:"#841584"}),o.createElement(l.a,{style:{padding:10,fontSize:30}},"Score : ",Number(JSON.stringify(m))))}var p=Object(u.a)();t.a=function(){return o.createElement(m.a,null,o.createElement(p.Navigator,{initialRouteName:"Home"},o.createElement(p.Screen,{name:"Home",component:d,options:{title:"Home"}}),o.createElement(p.Screen,{name:"Game",component:f,options:{title:"Game"}})))}},154:function(e,t,n){n(155),e.exports=n(198)},155:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-react-native/expo-service-worker.js",{scope:"/expo-react-native/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[154,1,2]]]);
//# sourceMappingURL=app.f69795a0.chunk.js.map