let express = require('express');               //express 모듈을 가저 온다.            
let app = express();                            // express를 App 이름으로 정의하고 사용한다.

app.get('/', function(req, res){               // 기본 라우터에서 Hollo world 를 변환한다.
    res.send('Hello World');
});

app.get('/about', function(req, res){
    res.send('about World');
});

app.listen(3000, function(){                    // 3000포트에서 입력을 대기 한다.
    console.log('Example app listening on port 3000');
});
