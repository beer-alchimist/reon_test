function add_btn(){
    var text_li = document.getElementById('add_text').value;
    alert("Задание создано");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const myElement = document.createElement('div');
    myElement.innerHTML = 
    '<div class="row px-3 align-items-center todo-item rounded">'+ 
        '<div class="col-auto m-1 p-0 d-flex align-items-center">'+
            '<h2 class="m-0 p-0">'+
                '<input type="checkbox" name="" id="" />' 
            +'</h2>'
        +'</div>'
        
        +

        '<div class="col px-1 m-1 d-flex align-items-center">'+
            '<input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value=' + text_li + '/>'+ 
            '<input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" />'
        +'</div>' 
        
        +

        '<div class="col-auto m-1 p-0 px-3 d-none">'+
        '</div>'

        +
        '<div class="col-auto m-1 p-0 todo-actions">'+
            '<div class="row d-flex align-items-center justify-content-end">'+
                '<h5 class="m-0 p-0 px-2">'+
                    '<i class="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo">'+'</i>'+
                '</h5>'+
                '<h5 class="m-0 p-0 px-2">'+
                    '<i class="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo">'+'</i>'+
                '</h5>'+
            '</div>'+
        '</div>'+

        '<div class="row todo-created-info">'+
            '<div class="col-auto d-flex align-items-center pr-2">'+
                '<i class="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date">'+'</i>'+
                '<label class="date-label my-2 text-black-50">'+ today +'</label>'+
            '</div>'+
        '</div>'+
    +'</div>';
    document.getElementById('list_to_do').appendChild(myElement);
}
