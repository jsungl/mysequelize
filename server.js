const express = require("express"); // 모듈 load
const app = express(); // express를 사용하여 app 생성
 
// 라우팅
app.get("/", (req, res) => {
  res.send("Hello World!");
});
 
// 서버 시작
app.listen(4000);