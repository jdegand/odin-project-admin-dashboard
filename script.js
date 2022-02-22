(function () {

    document.getElementById('menu').addEventListener('click', togglePanel)
    document.getElementById('close').addEventListener('click', togglePanel)

    function togglePanel(){
        document.getElementById('sidebar').classList.toggle('open');
        document.querySelector('main').classList.toggle('main-margin');
    }

    /*
    document.addEventListener('DOMContentLoaded', ()=> { 
        document.getElementById('menu').click()
    })
    */

    /*
    window.addEventListener('resize', handleResize);

    function handleResize(){
      console.log(document.querySelector('main').clientWidth);
    }
    */

    document.addEventListener('DOMContentLoaded', ()=> {
      let resizer = new ResizeObserver(handleResize);
      resizer.observe(document.querySelector('main'))
    })

    function handleResize(entries){
      let main = entries[0].target;

      if(entries[0].contentRect.width > 1000){
        if(document.getElementById('sidebar').classList.contains('open')){
          return;
        } else {
          document.getElementById('sidebar').classList.toggle('open');
          document.querySelector('main').classList.toggle('main-margin');
        }
      }
    }

})();