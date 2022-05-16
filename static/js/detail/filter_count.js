function filter_chart(param) {
    $.get('/detail_count', {'detail_count': param});
    setTimeout( function() {
    ajax_chart();
    }, 30)}

function filter_ai(par) {
    $('#sensor').empty();
    $('#sensor').append(par);
    $.get('/detail_filter', {'ai': par});
    setTimeout( function(){
        ajax_chart();
    }, 30)}
