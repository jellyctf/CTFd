import{$ as t,L as m,V as p,C as r,A as s,B as l}from"./main.4b11e5ee.js";import"../json.3d98973d.js";import{C as u}from"../htmlmixed.ea29cb46.js";import{C as f}from"../CommentBox.6d4b2a60.js";function g(){window.editor.save();var e=t("#page-edit").serializeJSON(),o="/api/v1/pages",n="POST";let d=window.location.pathname.split("/").pop();d!=="new"&&(o+="/"+d,n="PATCH"),e.link_target===""&&(e.link_target=null),r.fetch(o,{method:n,credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(i){return i.json()}).then(function(i){if(i.success===!1){let a="";for(const c in i.errors)a+=i.errors[c].join(`
`),a+=`
`;s({title:"Error",body:a,button:"OK"});return}n==="PATCH"&&i.success?l({title:"Saved",body:"Your changes have been saved"}):window.location=r.config.urlRoot+"/admin/pages/"+i.data.id})}function w(){window.editor.save(),t("#page-edit").attr("action",r.config.urlRoot+"/admin/pages/preview"),t("#page-edit").attr("target","_blank"),t("#page-edit").submit()}t(()=>{if(window.editor=u.fromTextArea(document.getElementById("admin-pages-editor"),{lineNumbers:!0,lineWrapping:!0,mode:"htmlmixed",htmlMode:!0}),t("#media-button").click(function(e){m(window.editor)}),t("#save-page").click(function(e){e.preventDefault(),g()}),t(".preview-page").click(function(){w()}),window.PAGE_ID){const e=p.extend(f);let o=document.createElement("div");document.querySelector("#comment-box").appendChild(o),new e({propsData:{type:"page",id:window.PAGE_ID}}).$mount(o)}});
