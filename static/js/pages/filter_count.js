function filter_chart(param) {
    $.get('count_chart/', {'count': param});
    setTimeout( function() {
    ajax_chart();
    }, 30)}
