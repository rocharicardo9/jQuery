$(document).ready(function() {
    $('header button').click(function() {
        alert("Expandir formulario")
    })

    $('form').on('submit', function(e) {
        console.log("submit");
       e.preventDefault();
    })
})



