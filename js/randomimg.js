var randomNum;

var locatePost = $('.locate-thumbnail-symbol').next();
for(var i = 0; i < 10; i++) {
    randomNum = Math.floor(Math.random() * 10 + 1);

    locatePost.children('.post_thumbnail-random').attr('id', 'random_thumbnail-'+randomNum);
    locatePost.children('.post_thumbnail-random').attr('data-original', '/img/random/material-' + randomNum + '.png');
$('.post_thumbnail-random').addClass('lazy');

    locatePost = locatePost.next();
}