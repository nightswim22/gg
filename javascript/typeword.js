var app = document.getElementById('typeword');

var typewriter = new Typewriter(typeword, {
    loop: true,
    delay: 75,
});


typewriter.typeString('專業技術 ‧ 創新科技')
    .pauseFor(2500)
    .deleteAll()
    .typeString('國際交流 ‧ 整合發展')
    .pauseFor(2500)
    .deleteAll()
    .typeString('永續管理 ‧ 優良服務')
    .pauseFor(2500)
    .start();