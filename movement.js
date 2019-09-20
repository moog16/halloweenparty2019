$(document).ready(function(){
    animateDiv('#ghost-1');
    animateDiv('#ghost-2');
    animateDiv('#ghost-3');
    animateDiv('#ghost-4');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    const h = $(window).height() - 50;
    const w = $(window).width() - 50;
    
    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(selector){
    var newq = makeNewPosition();
    $(selector).animate({ top: newq[0], left: newq[1] }, 2000,   () => {
      animateDiv(selector);        
    });
    
};