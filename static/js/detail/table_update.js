function update_table() {
    $.ajax({
        url: '/detail_table/',
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

function confirm(id) {
    $.get('/confirm/', {'id': id});
    setTimeout( function(){
        update_table();
    }, 30)

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

