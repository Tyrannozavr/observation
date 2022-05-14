function filter(param) {
    $.get('set_table/', {'count': param});
    setTimeout( function() {
    ajax_chart();
    }, 30)}
