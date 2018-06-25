function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var subLength = 0;
    var count = 0;
    var upper = 0;
    var longest = 0;

    for (var i = 0; i < S.length; i++) {
        if (!isNaN(S[i])) {
            count = 0;
            upper = 0;
        }
        if (isNaN(S[i])) {
            if (S[i].toUpperCase() != S[i]) { //take in letters and add to count.
                //  console.log(S[i]);
                count++;
                // console.log(S[i] + " count: " + count);
            }
            if (S[i].toLowerCase() != S[i]) {
                //when get a capital add to upper
                upper++;
                count++;
            }
            if (upper > 0) {
                if (count > longest) {
                    longest = count;
                }
            }
        }
    }

    if (longest < 1) {
        return -1;
    } else {
        return longest;
    }
}

// function solution() {     var dataCount =
// $('.comment-list').attr('data-count');     $.ajax({         url:
// 'https://www.example.com/comments?count=2' + dataCount,         dataType:
// 'json',         beforeSend: function () {
// $(".comment-list").html('Loading...')         },         success: function
// (data) {             $                 .each(data.comments, function (i, c) {
//                     $(".comment-list").append('<div class = "comment-item" >
// <div class="comment-item__username">' + c.username + '</div> < div class =
// "comment-item__message" > ' + c.message + ' < /div></div > ') })         },
// error: function () { $(".comment-list").append('');         }     }); }