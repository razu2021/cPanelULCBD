<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>





  <div class="container mt-5 mb-5" >
    <div class="row bg-info p-2 rounded">
        <div class="col-lg-6 text-start"> Create Infromation </div>
        <div class="col-lg-6 text-end">
            <button class="btn btn-primary p-1 text-white"><a class="text-white" href="{{route('ajax_data.add')}}">Create Item</a></button>
        </div>
    </div>
  </div>

<div class="container">


    <div class="alert alert-success" role="alert" id="success_messages" style="display: none">
            A simple success alert—check it out!
    </div>

  <form id="formSubmit">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" name="name" id="name" class="form-control" />
        <div class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" name="email" id="email" class="form-control" />
        <div class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" name="phone" id="phone" class="form-control" />
        <div class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="phone" class="form-label">Description</label>
        <textarea name="des" id="des" cols="30" rows="10" class="form-control"></textarea>
        <div class="form-text">We'll never share your email with anyone else.</div>
    </div>

   
    <button type="submit" class="btn btn-primary">Submit</button>
</form>


</div>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


<script>

$('#formSubmit').on('submit',function(e){

    e.preventDefault();

    var form = $(this);
    
    var formdata =  new FormData(form[0]);


    // ajax call here 

    $.ajax({
        headers:{
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        url: "{{route('ajax_data.submit')}}",
        type: 'POST',
        data: formdata,
        processData: false,
        contentType: false,

        success:function(response){
            console.log('Success:', response);
            $("#success_messages").text(response.message);
            $('#success_messages').fadeIn();

            setTimeout(() => {
                $('#success_messages').fadeOut();
            },300);


            $('#formSubmit')[0].reset();
        },


        error:function(xhr){
             console.log('Error:', xhr);
        },



    })

})




</script>





</body>
</html>