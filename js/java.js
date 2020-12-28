$(document).ready(function() {
    $("#lamp-light").click(function() {
        if ($(this).attr('data-light') == 'off') {
            $("#lamp").attr('src', 'on.gif');
            $(this).attr('data-light', 'on');


        } else {
            $("#lamp").attr('src', 'off.gif');
            $(this).attr('data-light', 'off');


        }



    })





})


// $(document).ready(function() {
//     $("#lamp-light").click(function() {
//         if ($(this).attr('data-light') == "off") {
//             $("#lamp").attr('src', 'on.gif');
//             $(this).attr('data-light', 'on');



//         } else {
//             $("#lamp").attr('src', 'off.gif');
//             $(this).attr('data-light', 'off');


//         }



//     });



// });









/////////////////////////////////////////////////////////



$(document).ready(function() {
        $(".menu ul li").hover(function() {

                $(this).find('ul').slideDown("normal");




            }

            ,
            function() {

                $(this).find('ul').slideUp("fast");

            }


        );
        $(window).scroll(function() {
            if ($(this).scrollTop() > 220) {
                $('.menu').addClass('sticy');

            } else {

                $('.menu').removeClass('sticy');

            }


        });
    })
    //////////////////////////////////////////////

$(document).ready(function() {
    $("h1").click(function() {
        $(this).hide(1000);

    })
    $("p").click(function() {
        $("h1").show(1000);
    })


});
$(document).ready(function() {
    $(".search").click(function() {
        if ($(this).attr('data-open') == 'open') {
            $(".search-box").slideDown('normal');
            $(".tik").attr('src', 'delete.png');
            $(this).attr('data-open', 'close');


        } else {
            $(".search-box").slideUp('normal');
            $(".tik").attr('src', 'image/zerw.png')
            $(this).attr('data-open', 'open');


        }


    });




});


// $(document).ready(function() {
//     $(".search").click(function() {
//         if ($(this).attr('data-open') == "open") {
//             $(".search-box").slideDown("normal");
//             $(".tik").attr('src', 'delete.png')
//             $(this).attr('data-open', 'close');


//         } else {

//             $(".search-box").slideUp("normal");
//             $(".tik").attr('src', 'image/zerw.png')
//             $(this).attr('data-open', 'open');

//         }



//     });



// });

///////////////////////////////////////////////////////////////////////

// $("#p01").text("mamad is programming");

// $(":button").click(function() {

//     $(this).val("Oh My God").css({ "background": "green", "color": "white" })

// });

// $("#in1").focus(function() {
//     $(this).css("background", "green");


// }).blur(function() {
//     $(this).css("background", "#eee");


// });
// $("#in1").click(function() {

//     $(this).next("span").css("display", "inline").fadeOut(3000);


// })

///////////////////////////////////////////////////////////















$(document).ready(function() {
    var name = 'enter your email';
    $("input[type='email']").attr('value', name).focus(function() {
        if ($(this).val() == name) {

            $(this).attr('value', '');

        }



    }).blur(function() {
        if ($(this).val() == '') {

            $(this).attr('value', name)
        }


    })



})







////////////////////////////////////////////////////////
$(document).ready(function() {
    var sentense = [
        "بزرگترین عیب برای دنیا همین بس که بی‌وفاست.",
        "آرزو دارم روزی این حقیقت به واقعیت مبدل شود که همه‌ی انسان‌ها برابرند",
        "هkهنر است روی پای خود بمیری تا روی زانو‌هایت زندگی کنی",
        " بر روی زمین چیزی بزرگتر از انسان نیست و در انسان چیزی بزرگتر از فکر او",
        "عمر آنقدر کوتاه است که نمی‌ارزد آدم حقیر و کوچک بماند",
        "چیزی ساده تر از بزرگی نیست آری ساده بودن همانا بزرگ بودن است",
        "هنر، کلید فهم زندگی است",
        "در جستجوی نور باش، نور را می‌یابی.",
        "آدمی ساخته‌ی افکار خویش است فردا همان خواهد شد که امروز می‌اندیشیده است.",
        "نباید از خسته بودن خود شرمنده باشی بلکه فقط باید سعی کنی خسته آور نباشی."




    ];
    var text = $('.text p');
    var i = 0;
    text.html(sentense[i]);
    $('.badi').click(function() {
        if (!$(this).hasClass('istable')) {

            if (i >= 0) {
                i++;
                text.slideUp(300, function() {
                    text.slideDown(300);
                    text.html(sentense[i]);
                    $('.gabli').removeClass('istable');

                })



            }
            if (i == 9) {
                $(this).addClass('istable');

            }

        }
        $('.gabli').click(function() {
            if (!$(this).hasClass('istable')) {
                if (i <= 9) {
                    i--;
                    text.slideUp(300, function() {
                        text.slideDown(300);
                        text.html(sentense[i]);
                        $('badi').removeClass('istable');




                    })


                }
                if (i == 0) {
                    $(this).addClass('istable');

                }


            }



        })



    });

    $(".btn").click(function() {
        $('.text').fadeOut(1000).fadeIn(1000);



    })

});