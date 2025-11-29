import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadPage.css";

const UploadPage = () => {
  const [inputType, setInputType] = useState("text");
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate("/problemReview");
  };

  return (
    <div className="container fade-in">
      <header className="header">
        {/* 왼쪽: 뒤로가기 */}
        <button className="back-btn" onClick={() => navigate("/")}>
          ← 대시보드로
        </button>

        {/* 💡 [수정] 오른쪽: 게임 생성 버튼을 여기로 옮김 */}
        <button className="header-generate-btn" onClick={handleGenerate}>
          ✨ 게임 생성하기
        </button>
      </header>

      <div className="title-section">
        <h1>학습 자료 업로드</h1>
        <p>문제 자료를 입력하시면 AI가 분석하여 게임을 생성합니다</p>
      </div>

      <div className="upload-layout">
        {/* 왼쪽 패널 */}
        <section className="left-panel">
          <div className="panel-header">
            <h3>📄 학습 자료 입력</h3>
            <span className="sub-desc">
              다양한 방법으로 문제 자료를 입력할 수 있습니다
            </span>
          </div>

          <div className="tab-group">
            <button
              className={`tab-btn ${inputType === "text" ? "active" : ""}`}
              onClick={() => setInputType("text")}
            >
              📝 텍스트 입력
            </button>
            <button
              className={`tab-btn ${inputType === "file" ? "active" : ""}`}
              onClick={() => setInputType("file")}
            >
              ⬆ 파일 업로드
            </button>
            <button
              className={`tab-btn ${inputType === "url" ? "active" : ""}`}
              onClick={() => setInputType("url")}
            >
              🌐 URL 입력
            </button>
          </div>

          <div className="input-area">
            {inputType === "text" && (
              <div className="text-input-wrapper">
                <textarea
                  className="main-textarea"
                  placeholder="예시: 1. 한국의 수도는? 답: 서울"
                ></textarea>
              </div>
            )}
            {inputType === "file" && (
              <div className="file-upload-wrapper">
                <div className="upload-box">
                  <span className="icon">📂</span>
                  <p>여기로 파일을 드래그하거나</p>
                  <label className="upload-btn-label">
                    파일 선택
                    <input type="file" style={{ display: "none" }} />
                  </label>
                </div>
              </div>
            )}
            {inputType === "url" && (
              <div className="url-input-wrapper">
                <input
                  type="text"
                  className="url-input"
                  placeholder="https://example.com"
                />
              </div>
            )}
          </div>
        </section>

        {/* 오른쪽 패널 */}
        <section className="right-panel">
          <div className="panel-header">
            <h3>⚙ 간단한 게임 설정</h3>
          </div>

          <div className="settings-form">
            <div className="form-group">
              <label>게임 플레이 시간</label>
              <select className="custom-select">
                <option>짧음: 10분</option>
                <option>중간: 20분</option>
                <option>오래: 30분</option>
              </select>
            </div>
            <div className="form-group">
              <label>게임 어려움 수준</label>
              <select className="custom-select">
                <option>쉬움</option>
                <option>보통</option>
                <option>어려움</option>
              </select>
            </div>
            <div className="form-group">
              <label>예상 참여 인원수</label>
              <select className="custom-select">
                <option>소수: 6명 이하</option>
                <option>일반: 20명 이하</option>
                <option>조직: 40명 이하</option>
              </select>
            </div>
            <div className="form-group">
              <label>게임 테마 설정</label>
              <select className="custom-select">
                <option>🌲 숲</option>
                <option>⚙ 톱니</option>
                <option>🌊 바다</option>
                <option>🏰 저택</option>
                <option>🌋 용암</option>
                <option>🚀 우주</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UploadPage;
