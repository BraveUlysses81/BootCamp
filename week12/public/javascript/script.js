$(document).ready(function(){

    $.ajax({
        "url" : "http://localhost:3000/todos/",
        "method" : "GET"
    })
        .fail(function(obj, err) {
            console.log( "Something wrong. Err is " + err );
            return false;
        })
        .done(function(obj){
            // console.log(obj);
            // removes all pre-existing to do s, e.g. sample to do s
            // $('ul').empty();

            // loop over each list item
            obj.forEach(function(o){
                // console.log(o);

                var className = o.completed ? " class="+"'completed'" : "";
                // We need to hide the id of the todos in the li element, so we may
                // retrieve it later and call the api with the /:id call
                $('ul').append(
                    "<li" + className + " " + "data-id='"+ o.id+ "'>" +
                    "<span>" +
                    "<i class='fa fa-times'></i>" +
                    "</span> " +
                    o.description +
                    "</li>"
                );
            })
        });

            $('input').keypress(function(event){
                if(event.which === 13){
                    var description = $(this).val();
                    $('ul').append(
                        "<li> " +
                        "<span>" +
                        "<i class='fa fa-times'></i>" +
                        "</span> " +
                        description +
                        "</li>"
                    );
                    $('input').val("");
                    $.ajax({
                        "url" : "http://localhost:3000/todos",
                        "method" : "POST",
                        "contentType" : "application/json",
                        "data" : JSON.stringify({
                            "description": description
                            })
                    });
                }
            });


            $('ul').on('click', 'span', function(event){
                event.stopPropagation();
                var id = $(this).parent().attr('data-id');
                var url = "http://localhost:3000/todos/" + id;
                $.ajax({
                    "url": url,
                    "method": "DELETE",
                    "contentType": "application/json",
                    "data": JSON.stringify({
                        "id": id
                    })
                })
                $(this).parent().remove();
            });

            $('ul').on('click', 'li', function(event){
                var id = $(this).attr('data-id');
                var url = "http://localhost:3000/todos/" + id;
                var completed = $(this).attr('class');
                completed = (completed == 'completed') ? true : false;
                console.log(completed);
                $.ajax({
                    "url" : url,
                    "method": "PUT",
                    "contentType" : "application/json",
                    "data" : JSON.stringify({
                        "completed" : !completed
                    })
                })
                $(this).toggleClass("completed");
    });

});

