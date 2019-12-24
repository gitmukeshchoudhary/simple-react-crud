(this["webpackJsonpsimple-react-crud"]=this["webpackJsonpsimple-react-crud"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(5),m=t.n(n),c=(t(12),t(6)),o=t(1),i=t(2),s=t(3),u=function(e){var a={id:null,profile:"",email:"",userName:""},t=Object(l.useState)(a),n=Object(o.a)(t,2),m=n[0],c=n[1],u=function(e){var a=e.target,t=a.name,l=a.value;c(Object(s.a)({},m,Object(i.a)({},t,l)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),m.profile&&m.email&&m.userName&&(e.addUser(m),c(a))}},r.a.createElement("div",{className:"my-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"profile"},"Profile:"),r.a.createElement("input",{id:"profile",type:"text",name:"profile",className:"form-control",placeholder:"Enter your profile url",value:m.profile,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{id:"email",type:"email",name:"email",className:"form-control",placeholder:"Enter your email",value:m.email,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userName"},"User name:"),r.a.createElement("input",{id:"userName",type:"text",name:"userName",className:"form-control",placeholder:"Enter your user name",value:m.userName,onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Add user")))},p=function(e){var a={id:null,profile:"",email:"",userName:""},t=Object(l.useState)(a),n=Object(o.a)(t,2),m=n[0],c=n[1],u=function(e){var a=e.target,t=a.name,l=a.value;c(Object(s.a)({},m,Object(i.a)({},t,l)))};return Object(l.useEffect)((function(){c(e.currentUser)}),[e]),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(m.id,m),c(a)}},r.a.createElement("div",{className:"my-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"profile"},"Profile:"),r.a.createElement("input",{id:"profile",type:"text",name:"profile",className:"form-control",placeholder:"Enter your profile url",value:m.profile,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{id:"email",type:"email",name:"email",className:"form-control",placeholder:"Enter your email",value:m.email,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userName"},"User name:"),r.a.createElement("input",{id:"userName",type:"text",name:"userName",className:"form-control",placeholder:"Enter your user name",value:m.userName,onChange:u})),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Update user")))},d=function(e){return r.a.createElement("div",{className:"row mx-0 px-0 view-users"},e.users.length?e.users.map((function(a){return r.a.createElement("div",{className:"col -sm-12 col-dm-6 col-lg-6",key:a.id},r.a.createElement("div",{className:"user-profile my-3 p-3 text-center"},r.a.createElement("img",{src:a.profile,alt:"profile"}),r.a.createElement("p",{className:"my-2"},r.a.createElement("b",null,"Email:")," ",a.email),r.a.createElement("p",{className:"my-2"},r.a.createElement("b",null,"User name: "),a.userName),r.a.createElement("i",{className:"fas fa-edit edit-icon px-2",onClick:function(){e.editRow(a)}}),r.a.createElement("i",{className:"fas fa-trash delete-icon px-2",onClick:function(){e.deleteUser(a.id)}})))})):r.a.createElement("h5",null,"No users"))},E=(t(13),function(){var e=Object(l.useState)([{id:1,profile:"https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",email:"johnwick1@gmail.com",userName:"johnwick1"},{id:2,profile:"https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",email:"johnwick2@gmail.com",userName:"johnwick2"},{id:3,profile:"https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",email:"johnwick3@gmail.com",userName:"johnwick3"}]),a=Object(o.a)(e,2),t=a[0],n=a[1],m=Object(l.useState)({id:null,profile:"",email:"",userName:""}),i=Object(o.a)(m,2),s=i[0],E=i[1],f=Object(l.useState)(!1),N=Object(o.a)(f,2),h=N[0],b=N[1];return r.a.createElement("div",{className:"col-md-10 mx-auto my-5"},r.a.createElement("h1",{className:"text-center"},"React CRUD App"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row my-5"},r.a.createElement("div",{className:"col-sm-12 col-md-5 col-lg-5 my-3"},r.a.createElement("div",{className:"box p-4"},h?r.a.createElement(l.Fragment,null,r.a.createElement("h2",null,"Edit user"),r.a.createElement(p,{editing:h,setEditing:b,currentUser:s,updateUser:function(e,a){b(!1),n(t.map((function(t){return t.id===e?a:t})))}})):r.a.createElement(l.Fragment,null,r.a.createElement("h2",null,"Add user"),r.a.createElement(u,{addUser:function(e){e.id=t.length+1;var a=[].concat(Object(c.a)(t),[e]);n(a)}})))),r.a.createElement("div",{className:"col-sm-12 col-md-7 col-lg-7 my-3"},r.a.createElement("div",{className:"box p-4"},r.a.createElement("h2",null,"View users"),r.a.createElement(d,{users:t,editRow:function(e){b(!0),E({id:e.id,profile:e.profile,email:e.email,userName:e.userName})},deleteUser:function(e){b(!1),n(t.filter((function(a){return a.id!==e})))}})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b569db98.chunk.js.map