// $('#getstarted').bind('click', showSignin);
// function showSignin() {
//   $('#signIn').show(function() {
//       $('#signStart').animate({
//         width: "toggle"
//     })
//   })
// };

// $('#forgotPass').bind('click', forgotPass);
// function forgotPass() {
//     $('#forgotBlock').show(function() {
//         $('#signIn').animate({
//             width: "toggle"
//         })
//     })
// };

// $('#backLogin').bind('click', backLogin);
// function backLogin() {
//     $('#signIn').show(function() {
//         $('#signBlock').hide();
//         $('#forgotBlock').animate({
//             width: "toggle"
//         })
//     })
// };

// $('#signUp').bind('click', signUp);
// function signUp() {
//     $('#signBlock').show(function() {
//         $('#signIn').animate({
//             width: "toggle"
//         })
//     })
// };

// $('#signInBtn').bind('click', signInBtn);
// function signInBtn() {
//     $('#signIn').show(function() {
//         $('#signBlock').animate({
//             width: "toggle"
//         })
//     })
// };




$("#getstarted").click(function() {
    $('#signStart').animate({
        width: "toggle"
    });
    $('#signIn').show();
});

$('#forgotPass').click(function() {
    $('#forgotBlock').animate({
        width: "toggle"
    });
    $('#signIn').hide();
});

$('#backLogin').click(function() {
    $('#signIn').animate({
        width: "toggle"
    });
    $('#forgotBlock').hide();
});

$('#signUp').click(function() {
    $('#signBlock').animate({
        width: "toggle"
    });
    $('#signIn').hide();
});

$('#signInBtn').click(function() {
    $('#signIn').animate({
        width: "toggle"
    });
    $('#signBlock').hide();
});

