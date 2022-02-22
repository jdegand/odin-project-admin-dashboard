document.getElementById('menu').addEventListener('click', togglePanel)

function togglePanel(){
    document.getElementById('sidebar').classList.toggle('open');

    document.getElementById('close').addEventListener('click', togglePanel)
}


document.addEventListener('DOMContentLoaded', ()=> {
    
    document.getElementById('menu').click()
})