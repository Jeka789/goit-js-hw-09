import"./assets/styles-CjRQdcqg.js";const e={email:"",message:""};window.addEventListener("load",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:m}=JSON.parse(t);e.email=a,e.message=m,document.querySelector('input[name="email"]').value=a,document.querySelector('textarea[name="message"]').value=m}});document.querySelector(".feedback_form").addEventListener("input",t=>{const{name:a,value:m}=t.target;e[a]=m,localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback_form").addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Please fill out all fields");return}console.log("Submitted data:",e),localStorage.removeItem("feedback-form-state"),t.target.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
