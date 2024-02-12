import{_ as r,H as f,C as d,I as u,c as h,a as o,t as c,o as m,V as _,$ as n,A as p}from"./main.4b11e5ee.js";import"../json.3d98973d.js";const b={props:{id:Number,title:String,content:String,html:String,date:String},methods:{localDate:function(){return f(this.date).format("MMMM Do, h:mm:ss A")},deleteNotification:function(){confirm("Are you sure you want to delete this notification?")&&d.api.delete_notification({notificationId:this.id}).then(e=>{e.success&&(this.$destroy(),this.$el.parentNode.removeChild(this.$el))})}},mounted(){this.$el.querySelectorAll("pre code").forEach(e=>{u.highlightBlock(e)})}},y={class:"card bg-light mb-4"},g=["data-notif-id"],$=o("span",{"aria-hidden":"true"},"\xD7",-1),v=[$],C={class:"card-body"},N={class:"card-title"},S={class:"blockquote mb-0"},k=["innerHTML"],D={class:"text-muted"},A=["data-time"];function M(e,t,a,i,s,l){return m(),h("div",y,[o("button",{type:"button","data-notif-id":this.id,class:"delete-notification close position-absolute p-3",style:{right:"0"},"data-dismiss":"alert","aria-label":"Close",onClick:t[0]||(t[0]=T=>l.deleteNotification())},v,8,g),o("div",C,[o("h3",N,c(a.title),1),o("blockquote",S,[o("p",{innerHTML:this.html},null,8,k),o("small",D,[o("span",{"data-time":this.date},c(this.localDate()),9,A)])])])])}const x=r(b,[["render",M]]),B=_.extend(x);function E(e){e.preventDefault();const t=n(this),a=t.serializeJSON();t.find("button[type=submit]").attr("disabled",!0),d.api.post_notification_list({},a).then(i=>{t.find(":input[name=title]").val(""),t.find(":input[name=content]").val(""),setTimeout(function(){t.find("button[type=submit]").attr("disabled",!1)},1e3),i.success||p({title:"Error",body:"Could not send notification. Please try again.",button:"OK"});let s=document.createElement("div");n("#notifications-list").prepend(s),new B({propsData:{id:i.data.id,title:i.data.title,content:i.data.content,html:i.data.html,date:i.data.date}}).$mount(s)})}function H(e){e.preventDefault();const t=n(this),a=t.data("notif-id");confirm("Are you sure you want to delete this notification?")&&d.api.delete_notification({notificationId:a}).then(i=>{i.success&&t.parent().remove()})}n(()=>{n("#notifications_form").submit(E),n(".delete-notification").click(H)});
