require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 (apartment_data.js 등)
app.use(express.static(path.join(__dirname, 'public')));

// 카카오 키를 주입하는 API 엔드포인트
app.get('/api/config', (req, res) => {
  res.json({ kakaoKey: process.env.KAKAO_JS_KEY });
});

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버 실행: http://localhost:${PORT}`);
});
