const chatBox = document.getElementById("free-ai");
const chatMsg = document.getElementById("free-ai-msg");
const chatInput = document.getElementById("free-ai-input");

function openChat(){
  chatBox.classList.remove("hidden");
  addBot("Hello 👋 How can ComptCare help you?");
}

function closeChat(){
  chatBox.classList.add("hidden");
}

function minimizeChat(){
  chatBox.classList.add("hidden");
}

function addUser(msg){
  chatMsg.innerHTML += `<div class="free-user">${msg}</div>`;
  chatMsg.scrollTop = chatMsg.scrollHeight;
}

function addBot(msg){
  setTimeout(()=>{
    chatMsg.innerHTML += `<div class="free-bot">${msg}</div>`;
    chatMsg.scrollTop = chatMsg.scrollHeight;
  },500);
}

chatInput.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    const msg = chatInput.value.toLowerCase();
    addUser(chatInput.value);
    chatInput.value="";

    if(msg.includes("service")){
      addBot("We provide Web Development, IT Support & Digital Solutions.");
    }else if(msg.includes("contact")){
      addBot("You can contact us via the Contact page or email support@comptcare.com");
    }else if(msg.includes("price")){
      addBot("Pricing depends on service. Please contact us for details.");
    }else{
      addBot("Thanks for your message 😊 We will reply soon.");
    }
  }
});
