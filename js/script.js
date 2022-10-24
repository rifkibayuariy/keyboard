$(() => {
    $.map(keyboard.key, (key) => {
        const size = key.size.toString().split('.').join('')
        const keyCode = key.keyCode
        const name = key.key
        const location = key.location

        ver = ''
        if (keyCode == 107 || (keyCode == 13 && key.location == 3)) {
            ver = '-ver'
        }

        margin = ''
        if (key.right !== 0) {
            margin = ` mr-${key.right.toString().split('.').join('')}u`
        }

        $('.keys').append(`<div class="keycaps key-${keyCode}-${location} s-${size}u${ver}${margin}"><p>${name}</p></div>`)
    })

    $(document).on('keydown', (event) => {
        event.preventDefault()
        const key = event.keyCode
        const location = event.originalEvent.location
        $('.key-'+key+'-'+location).removeClass('active')
        $('.key-'+key+'-'+location).addClass('press')
    })
    
    $(document).on('keyup press', (event) => {
        event.preventDefault()
        const key = event.keyCode
        const location = event.originalEvent.location
        $('.key-'+key+'-'+location).removeClass('press')
        $('.key-'+key+'-'+location).addClass('active')
    })

    $(document).bind("contextmenu", () => {
        return false
    })
})



// $(document).ready(function(){
//     $(document).on('keydown',function(event){
//         event.preventDefault();

//         var key=event.keyCode;
//         $('.k'+key).removeClass('active');
//         $('.k'+key).addClass('press');
//     });

//     $(document).on('keyup press',function(event){
//         event.preventDefault();
//         var key=event.keyCode;
//         $('.k'+key).removeClass('press');
//         $('.k'+key).addClass('active');
//         keyshow(list(key));
//         console.log(key);
//     });
        
//     $(document).on('mousedown',function(event){
//         event.preventDefault();

//         var key=event.button;
//         $('.k'+key).removeClass('active');
//         $('.k'+key).addClass('press');
//     });

//     $(document).on('mouseup',function(event){
//         event.preventDefault();

//         var key=event.button;
//         $('.k'+key).removeClass('press');
//         $('.k'+key).addClass('active');
//         keyshow(list(key));
//     });
            
//     $(document).bind("contextmenu",function(e){
//         return false;
//     });
// });
