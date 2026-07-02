# 서울 아파트 지도 프로젝트

## 아파트 데이터 추가 시 좌표 검증 규칙

아파트를 `public/apartment_data.js`에 추가할 때, **반드시 카카오 REST API로 좌표를 검증**한 후 추가해야 합니다.

### 좌표 확인 절차

1. 카카오 REST API 키워드 검색으로 정확한 좌표를 조회합니다:
   ```bash
   curl -s "https://dapi.kakao.com/v2/local/search/keyword.json?query=아파트이름+구+동" \
     -H "Authorization: KakaoAK {REST_API_KEY}"
   ```

2. 응답에서 `documents[0].y` (위도), `documents[0].x` (경도)를 사용합니다.

3. 임의로 좌표를 추정하거나 다른 지도 서비스의 좌표를 그대로 사용하지 않습니다.

4. REST API 키는 `.env` 파일의 `KAKAO_REST_KEY`를 사용합니다.

### 데이터 형식

```javascript
// [이름, 구·동, 실거래가, 거래월일, 전용㎡, 세대수, 역, 도보분, 신사분, 신논현분, lat, lng, 금액(억), 준공년도]
['단지명','구 동','12억','06-01',84.99,1000,'역이름',5,30,25,37.XXXXXXX,126.XXXXXXX,12.0,2005],
```

### 카카오맵 API 키 관리
- JavaScript 키: `.env`의 `KAKAO_JS_KEY` (프론트엔드용, 서버에서 주입)
- REST API 키: `.env`의 `KAKAO_REST_KEY` (좌표 검색용)
- 키는 절대 소스코드에 하드코딩하지 않습니다
