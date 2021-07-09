$(document).ready(function(){
    $('#dojoEveryDay').click(function() {
        $('#hideDojoEveryDay').animate( {
            width: 'toggle'
        })
        $('#hideDojoEveryDay').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('#dojoClass').click(function() {
        $('#hideDojoClass').animate( {
            width: 'toggle'
        })
        $('#hideDojoClass').css({'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'align-items': 'flex-start'})
    })
    $('#dojoOther').click(function() {
        $('#hideDojoOther').animate( {
            width: 'toggle'
        })
        $('#hideDojoOther').css({'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center'})
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