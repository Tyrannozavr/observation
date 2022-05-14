function getStatus(taskID) {
  $.ajax({
            url: '/table', //Путь к файлу, который нужно подгрузить
            type: 'GET',
            beforeSend: function(){
                $('#table').empty(); //Перед выполнением очищает содержимое блока с id=content
            },
            success: function(responce){
                    $('#table').append(responce); //Подгрузка внутрь блока с id=content
                    setTimeout(function() {
                    getStatus(1);
}, 30000);
            },
            error: function(){
                alert('Error!');
            }
        })}
getStatus(1)

