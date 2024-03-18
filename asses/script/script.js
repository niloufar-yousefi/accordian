let _boxClick = document.querySelectorAll('main>section>div>div:nth-of-type(1)')
let _acc = document.querySelectorAll('main>section>div>div:nth-of-type(2)')

// change the height of p to 0
_acc.forEach(element => {
    element.setAttribute('data-h', element.clientHeight)
    element.setAttribute('data-status','off')
    element.style.height = '0px'
});

// rotate the icon
_boxClick.forEach((element,i) => {
    element.setAttribute('data-st','off')
    element.addEventListener('click',function(){                            
        _boxClick.forEach((value,id) => {
            let _child = value.children 
            //resteing
            if(i != id){
                _child[0].style.transform = 'rotate(0deg)'  
            // the target icon                  
            }else{                
                rotateIcon(value,_child[0])           
            }
        })
// the target icon   
function rotateIcon(value,_child) {
    if(value.getAttribute('data-st') == 'off'){
        _child.style.transform = 'rotate(45deg)'
        value.setAttribute('data-st','on')                   
    }else{
        _child.style.transform = 'rotate(0deg)'
        value.setAttribute('data-st','off')
    } 
}    
       
        _acc.forEach((val,index) => {            
            //reset
            if (index != i){
                val.style.height = '0px'
                val.setAttribute('data-status','off')
            }
            //target element            
            else{                
                _accP(val)   
            }
        })
    })
})


function _accP(val){
    if(val.getAttribute('data-status') == 'off'){
        val.style.height = val.getAttribute('data-h')+'px'
        val.setAttribute('data-status','on')                  
         let _p = val.children
        _p[0].style.opacity = 1 
        _p[1].style.opacity = 1                
      }else{
        val.style.height = '0px'
        val.setAttribute('data-status','off')                
        let _p = val.children
        _p[0].style.opacity = '0.3' 
        _p[1].style.opacity = '0.3'
                                        
        } 
}