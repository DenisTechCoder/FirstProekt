window.onload=function(){
$('.comment-input').on('keyup', function() {
    var element = $(this);
    var id = element.data('id')
    if (element.val() != ''){
        document.getElementById(id).classList.remove('d-none');
    } else {
        document.getElementById(id).classList.add('d-none');
    }
})

    $('.send-comment').on('click', function (){
        var element = $(this);

        var input_id = element.data('input');
        var div_id = element.data('div');

        var comment = document.getElementById(input_id).value;
        document.getElementById(input_id).value = '';

        var commentDisplay = document.getElementById(div_id);
        var newComment = document.createElement('p');
        newComment.textContent = comment;
        commentDisplay.appendChild(newComment);
    })
}

