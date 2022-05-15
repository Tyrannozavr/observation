function filter_chart(param) {
    $.get('/detail_count', {'detail_count': param});
    setTimeout( function() {
    ajax_chart();
    }, 30)}
