import React, { useState } from "react";
import "./App.css";

// ★ 중요: 분리한 페이지들을 불러옵니다.
import UploadPage from "./UploadPage";
import ReviewPage from "./ReviewPage";

function App() {
  const [currentPage, setCurrentPage] = useState("upload");

  return (
    <>
      {currentPage === "upload" ? (
        <UploadPage onNext={() => setCurrentPage("review")} />
      ) : (
        <ReviewPage onBack={() => setCurrentPage("upload")} />
      )}
    </>
  );
}

export default App;
