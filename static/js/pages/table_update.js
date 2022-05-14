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
    })
}

function confirm(id) {
    $.get('confirm/', {'id': id});
    setTimeout( function(){
        update_table();
    }, 30)

}

function autoupdate_table(){
    update_table();
    setTimeout( function(){
        autoupdate_table();
    }, 30000)
}

autoupdate_table()



// function getStatus(taskID) {
//   $.ajax({
//             url: '/table', //Путь к файлу, который нужно подгрузить
//             type: 'GET',
//             beforeSend: function(){
//                 $('#table').empty(); //Перед выполнением очищает содержимое блока с id=content
//             },
//             success: function(responce){
//                     $('#table').append(responce); //Подгрузка внутрь блока с id=content
//                     setTimeout(function() {
//                     getStatus(1);
// }, 30000);
//             },
//             error: function(){
//                 alert('Error!');
//             }
//         })}
// getStatus(1)
