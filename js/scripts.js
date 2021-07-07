$(document).ready(function(){
    $('.dojo').click(function() {
        $('#hideDojo').animate( {
            width: 'toggle'
        })
        $('#hideDojo').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('.sirch').click(function() {
        $('#hideSirch').animate( {
            width: 'toggle'
        })
        $('#hideSirch').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('.cfa').click(function() {
        $('#hideCFA').animate( {
            width: 'toggle'
        })
        $('#hideCFA').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('.personal').click(function() {
        $('#hidePersonal').animate( {
            width: 'toggle'
        })
        $('#hidePersonal').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('.beedev').click(function() {
        $('#hideBeeDev').animate( {
            width: 'toggle'
        })
        $('#hideBeeDev').css({'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'flex-start'})
    })
})