function update_table() {
    $.ajax({
        url: 'table/',
        type: 'GET',
        beforeSend: function(){
            $('#table').empty();
        },
        success: function(response){
            $('#table').append(response);
        },
        error: function(){
            console.log('error')
        }
    })
}

function confirm(id, ai) {
    $.get('/confirm/', {'id': id});
    setTimeout( function(){
        update_table();
    }, 30);
    // let errors = $.get('/count_error', {'ai': ai});
    // alert(errors);
    // $('#id').empty();
    // $('#id').append(errors);
    $.ajax({
        url: '/count_error',
        data: {'ai': ai},
        type: 'GET',
        beforeSend: function() {
            $('#'+ai).empty();
        },
        success: function(res) {
            // alert(ai === 112);
            $('#'+ai).append(res.errors);
        },
    })
}

function autoupdate_table(){
    update_table();
    setTimeout( function(){
        autoupdate_table();
    }, 60000)
}
// update_table();
autoupdate_table();

function filter_table(id) {
    $.get('/filter/', {'ai': id});
    setTimeout( function(){
        update_table();
    }, 60)
}

