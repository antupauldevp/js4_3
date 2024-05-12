window.addEventListener(`scroll`, function(){
    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromtop = document.documentElement.scrollTop;
    let subheight = height - clientHeight;
    let result = Math.round(fromtop * 100 / subheight)

    parent.style.width =  `${result}%`;
   

})


let parent = document.querySelector(`#parent`);
