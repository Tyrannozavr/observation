function update_table(id) {
    $.ajax({
        url: '/table/',
        // data: {'id': id},
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
    });
}

function confirm(id, ai) {
    $.get('confirm/', {'id': id});
    setTimeout( function(){
        update_table();
    }, 30);
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

autoupdate_table()

function filter_table(id) {
    $.get('filter/', {'ai': id});
    setTimeout( function(){
        update_table();
    }, 60)
}
