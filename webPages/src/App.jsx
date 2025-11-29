// src/App.jsx
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // 라우터 부품 가져오기

// 경로가 바뀐 점 주의! (pages 폴더 안에 있음)
import UploadPage from "./pages/Upload/UploadPage";
import ProblemReviewPage from "./pages/ProblemReview/ProblemReviewPage.jsx";
import GamePage from "./pages/Games/GamePage.jsx";

function App() {
  return (
    <Routes>
      {/* path는 "주소창 주소", element는 "보여줄 페이지" */}

      {/* 기본 주소(/)로 들어오면 UploadPage를 보여줌 (메인화면) */}
      <Route path="/" element={<UploadPage />} />

      {/* /review 로 들어오면 ReviewPage를 보여줌 */}
      <Route path="/problemReview" element={<ProblemReviewPage />} />

      {/* 이제 /game/game1, /game/game2 등 뒤에 오는 단어를 gameId로 인식합니다. */}
      <Route path="/game/:gameId" element={<GamePage />} />
      {/* 나중에 페이지가 늘어나면 여기에 계속 추가하면 됨 */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
}

export default App;
