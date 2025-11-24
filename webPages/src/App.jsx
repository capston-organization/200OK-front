import React, { useState } from "react";
import "./App.css";

// 1. 가짜 데이터 (나중에는 서버에서 받아올 내용입니다)
const MOCK_DATA = [
  {
    id: 1,
    type: "OX",
    question: "지구는 태양 주위를 공전한다. (O/X)",
    answer: "O",
    difficulty: "쉬움",
    tags: ["과학", "지구과학"],
    isSelected: true,
  },
  {
    id: 2,
    type: "OX",
    question: "한국의 수도는 서울이다. (O/X)",
    answer: "O",
    difficulty: "쉬움",
    tags: ["지리", "한국"],
    isSelected: true,
  },
  {
    id: 3,
    type: "객관식",
    question: "2 + 3 × 4의 계산 결과는?",
    answer: "14",
    difficulty: "보통",
    tags: ["수학", "사칙연산"],
    isSelected: true,
  },
  {
    id: 4,
    type: "객관식",
    question: "3/4 + 1/2의 값은?",
    answer: "5/4 또는 1과 1/4",
    difficulty: "보통",
    tags: ["수학", "분수"],
    isSelected: true,
  },
  {
    id: 5,
    type: "단답식",
    question: "물의 분자식은 무엇인가?",
    answer: "H2O",
    difficulty: "쉬움",
    tags: ["과학", "화학"],
    isSelected: true,
  },
  {
    id: 6,
    type: "단답식",
    question: "15 ÷ 3의 값은?",
    answer: "5",
    difficulty: "쉬움",
    tags: ["수학", "나눗셈"],
    isSelected: false,
  },
];

// 2. 작은 부품: 문제 카드 컴포넌트
const QuestionCard = ({ data, onToggle }) => {
  // 난이도별 색상 설정
  const getBadgeColor = (level) => {
    if (level === "쉬움") return "badge-easy";
    if (level === "보통") return "badge-normal";
    return "badge-hard";
  };

  return (
    <div className={`card ${!data.isSelected ? "opacity-50" : ""}`}>
      <div className="card-header">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={data.isSelected}
            onChange={() => onToggle(data.id)}
          />
          <span className="question-text">{data.question}</span>
        </div>
        {/* 수정 아이콘 (이모지로 대체) */}
        <button className="edit-btn">✏️</button>
      </div>

      <div className="card-body">
        <span className={`badge ${getBadgeColor(data.difficulty)}`}>
          {data.difficulty}
        </span>
        <div className="answer-box">
          <p className="answer-text">정답: {data.answer}</p>
          <div className="tags">
            {data.tags.map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. 메인 화면 컴포넌트
function App() {
  const [questions, setQuestions] = useState(MOCK_DATA);

  // 체크박스 토글 기능
  const handleToggle = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isSelected: !q.isSelected } : q
      )
    );
  };

  // 통계 계산
  const totalSelected = questions.filter((q) => q.isSelected).length;
  const easyCount = questions.filter(
    (q) => q.isSelected && q.difficulty === "쉬움"
  ).length;
  const normalCount = questions.filter(
    (q) => q.isSelected && q.difficulty === "보통"
  ).length;
  const hardCount = questions.filter(
    (q) => q.isSelected && q.difficulty === "어려움"
  ).length;

  return (
    <div className="container">
      {/* 헤더 */}
      <header className="header">
        <button className="back-btn">← 자료 업로드로</button>
        <button className="create-btn">🎮 게임 생성</button>
      </header>

      <div className="title-section">
        <h1>문제 생성 검토</h1>
        <p>AI가 추출한 문제들을 확인하고 게임에 포함할 문제를 선택하세요</p>
      </div>

      {/* 컨트롤 바 */}
      <div className="control-bar">
        <div className="ai-recommend">
          <span className="sparkle">✨</span>
          <strong>AI 추천 자동 선택</strong>
          <span className="desc">
            게임에 사용할 문제를 AI가 판별해서 선택해줍니다
          </span>
        </div>
        <div className="select-count">{totalSelected}/15개 선택</div>
      </div>

      {/* 통계 보드 */}
      <div className="stats-board">
        <div className="stat-item">
          <span className="label">총 선택 문제</span>
          <span className="value black">{totalSelected}개</span>
        </div>
        <div className="stat-item bg-green">
          <span className="label text-green">쉬움</span>
          <span className="value text-green">{easyCount}개</span>
        </div>
        <div className="stat-item bg-blue">
          <span className="label text-blue">보통</span>
          <span className="value text-blue">{normalCount}개</span>
        </div>
        <div className="stat-item bg-red">
          <span className="label text-red">어려움</span>
          <span className="value text-red">{hardCount}개</span>
        </div>
      </div>

      {/* 문제 목록 (3단 컬럼) */}
      <main className="grid-container">
        {/* OX 열 */}
        <div className="column">
          <h3>
            ✓ OX{" "}
            <span className="count-badge">
              {questions.filter((q) => q.type === "OX").length}개
            </span>
          </h3>
          {questions
            .filter((q) => q.type === "OX")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>

        {/* 객관식 열 */}
        <div className="column">
          <h3>
            ☑ 객관식{" "}
            <span className="count-badge">
              {questions.filter((q) => q.type === "객관식").length}개
            </span>
          </h3>
          {questions
            .filter((q) => q.type === "객관식")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>

        {/* 단답식 열 */}
        <div className="column">
          <h3>
            📝 단답식{" "}
            <span className="count-badge">
              {questions.filter((q) => q.type === "단답식").length}개
            </span>
          </h3>
          {questions
            .filter((q) => q.type === "단답식")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
