$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

}


)
/**
* Abre popup centralizado.
* url - local da página pra exibição no popup
* w - width largura do popup
* h - height  altura do poup
*/
function abrirPopup(url,w,h) {
    var newW = w + 200;
    var newH = h + 200;
    var left = (screen.width-newW)/2;
    var top = (screen.height-newH)/2;
    var newwindow = window.open(url, 'name', 'width='+newW+',height='+newH+',left='+left+',top='+top);
    newwindow.resizeTo(newW, newH);
    
     
    //posiciona o popup no centro da tela
    newwindow.moveTo(left, top);
    newwindow.focus();
    return false;
    }