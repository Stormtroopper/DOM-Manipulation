let open=document.getElementById('open-button');
let modalcontainer=document.getElementById('modal-container');
let closed_button=document.getElementById('closed-button');
// Event Listeners
open.addEventListener('click',function(){
    modalcontainer.style.display='block';
});
closed_button.addEventListener('click',function(){
    modalcontainer.style.display='none';
});
window.addEventListener('click',function(e){
    if(e.target === modalcontainer){
        modalcontainer.style.display='none';
    }
})