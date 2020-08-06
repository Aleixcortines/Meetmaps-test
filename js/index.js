$(document).ready(()=> {
  $("#btnMessage").click(()=> {
    //clean the error message
    $(".container-messages-error").remove();

    let text_value = $("#textMessage").val();
    //an advice, in case the user doesn't send a message
    if (text_value == "") {
      $(".form").append(
        `<div class='container-messages-error'> 
                <div>Escribe una nota porfavor :)</div>
            </div> `
      );
    } else {
      $(".form").append(
        `<div class='container-messages' > 
                   <div class='text'>${text_value} </div>     
            </div>`
      );
      //set always the scrollbar on the bottom 
      $('.form').scrollTop( $('.form').prop('scrollHeight') );    
    }
  });
});
