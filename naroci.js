$(document).ready(function(){
    $('#characterLeft').text('140 charactersleft');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
if (len >= max) {
            $('#characterLeft').text('Youhavereachedthe limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' charactersleft');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});
function addComment(){
    var userComment = document.getElementById("userComment").value;
	document.getElementById("ui-state-default").innerHTML = userComment;
}
