$(() => {
    $.map(keyboard.key, (key) => {
        const size = key.size.toString().split('.').join('')
        const keyCode = key.keyCode
        var name = key.key
        const location = key.location

        margin = ver = ''
        if (keyCode == 107 || (keyCode == 13 && key.location == 3)) ver = '-ver'
        if (key.right !== 0) margin = ` mr-${key.right.toString().split('.').join('')}u`
        if (keyCode == 91) name = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" viewBox="0 0 88 88"><path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z"/></svg>`
        if (keyCode == 93) name = `<span class="context"><span></span><span></span> <span></span></span>`
        if (keyCode == 38) name = `<svg style="width:60%;height:60%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 298.04"><path fill-rule="nonzero" d="M70.94 285.81c-16.17 16.24-42.46 16.32-58.71.15-16.24-16.16-16.32-42.46-.15-58.7L226.57 12.23c16.16-16.24 42.46-16.32 58.7-.15l214.65 215.18c16.17 16.24 16.09 42.54-.15 58.7-16.25 16.17-42.54 16.09-58.71-.15L256 100.29 70.94 285.81z"></path></svg>`
        if (keyCode == 37) name = `<svg style="width:35%;height:35%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"></path></svg>`
        if (keyCode == 40) name = `<svg style="width:60%;height:60%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 298.04"><path fill-rule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"></path></svg>`
        if (keyCode == 39) name = `<svg style="width:35%;height:35%" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"></path></svg>`

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

    $(document).on('mousedown', (event) => {
        event.preventDefault()
        const key = event.button
        $('.key-m-'+key+'-0').removeClass('active')
        $('.key-m-'+key+'-0').addClass('press')
    })

    $(document).on('mouseup', (event) => {
        event.preventDefault()
        const key = event.button
        $('.key-m-'+key+'-0').removeClass('press')
        $('.key-m-'+key+'-0').addClass('active')
    })

    $(document).bind("contextmenu", () => {return false})
})
