$("#getstarted").click(function() {
    $('#signStart').hide();
    $('#signIn').fadeIn();
});

$('#forgotPass').click(function() {
    $('#forgotBlock').fadeIn();
    $('#signIn').hide();
});

$('#backLogin').click(function() {
    $('#signIn').fadeIn();
    $('#forgotBlock').hide();
});

$('#signUp').click(function() {
    $('#signBlock').fadeIn();
    $('#signIn').hide();
});

$('#signInBtn').click(function() {
    $('#signIn').fadeIn();
    $('#signBlock').hide();
});



