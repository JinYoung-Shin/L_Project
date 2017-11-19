$(document).ready(function(){
    $('.btn-comment').on("click", function ()  {
        // 여기에 id를 줘서 db에 저장

        $('.list-group').prepend('<a href="#" onclick="window.open(\'/error\', \'Test\', \'width=600px, height=700px, resizable=no, left=500 , top=100\'); return false" class="list-group-item list-group-item-action flex-column align-items-start">\n' +
            '                    <div class="d-flex w-100 justify-content-between">\n' +
            '                        <h5 class="mb-1">코멘트 카드</h5>\n' +
            '                    <small> 날짜 / 작성자 </small>\n' +
            '                    </div>\n' +
            '                    <p class="mb-1"> 내용 </p>\n' +
            '                </a>')
    });

    // window.open('팝업 주소', '팝업창 이름', '팝업창 설정');
    $('#list').on("click", function() {
        window.open("", "코멘트 작성", "옵션")
        //window.open("cardID", "코멘트 작성", "옵션")
    });
})