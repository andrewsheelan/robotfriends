(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),i=n(2),h=n(3),u=n(5),l=n(4),b=(n(14),n(8)),j=n(0),d=function(e){var t=e.id,n=e.name,r=e.email;return Object(j.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=300x300"),alt:"robots"}),Object(j.jsx)("h2",{children:n}),Object(j.jsx)("p",{children:r})]})},f=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(d,Object(b.a)({},e),e.id)}))})},O=function(e){var t=e.onSearchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue shaddow-5",type:"search",placeholder:"Search Robots",onChange:function(e){return t(e.target.value)}})})},p={container:{overflowY:"scroll",height:"800px"}},v=function(e){var t=e.children;return Object(j.jsx)("div",{style:p.container,children:t})},g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("h4",{children:"Not so good!"}):this.props.children}}]),n}(r.Component),m=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({term:t})},e.state={robots:[],term:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.term.toLowerCase())}));return Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsxs)("div",{className:"shadow-5-l",children:[Object(j.jsx)("h1",{className:"f1",children:"Hello RObOtS!"}),Object(j.jsx)(O,{onSearchChange:this.onSearchChange})]}),Object(j.jsx)(v,{children:Object(j.jsx)(g,{children:Object(j.jsx)(f,{robots:t})})})]})}}]),n}(r.Component));s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),a()}},[[17,1,2]]]);
//# sourceMappingURL=main.2da7460d.chunk.js.map