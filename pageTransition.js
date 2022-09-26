window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for(let i = 0; i < anchors.length; i++){
        let clickHandler = function(event){
            event.preventDefault();
            let target = event.target.href;
            transition_el.classList.add('is-active');
    
            setTimeout(() => {
                window.location.href = target;
            }, 500);
            
        }
        
        anchors.addEventListene('click', clickHandler);
    }

}