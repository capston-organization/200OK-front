import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 💡 1. 라우터 기능 가져오기
import "./ProblemReviewPage.css";

// 문제 카드 컴포넌트를 출력하는 부분입니다.
const QuestionCard = ({ data, onToggle }) => {
  const getBadgeColor = (level) => {
    // 문제의 난이도를 인수로 받아 맞는 배지를 출력하는 함수입니다.
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

const ReviewPage = () => {
  // 💡 2. onBack props 제거
  const navigate = useNavigate(); // 💡 3. 이동 도구 장착

  // 💡 [수정] 데이터 추가 (주관식, 서술형)
  const MOCK_DATA = [
    // 차후 이 부분을 API와 연동을 해야 합니다...
    // --- 기존 데이터 ---
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

    // --- 💡 [추가] 주관식 & 서술형 데이터 ---
    {
      id: 7,
      type: "주관식",
      question: "12 ÷ 3 × 2의 계산 순서를 설명하세요.",
      answer: "왼쪽부터 순서대로 12÷3=4, 그 다음 4×2=8",
      difficulty: "보통",
      tags: ["수학", "나눗셈", "곱셈"],
      isSelected: true,
    },
    {
      id: 8,
      type: "서술형",
      question: "광합성이 무엇인지 설명하시오.",
      answer:
        "식물이 빛 에너지를 이용하여 이산화탄소와 물로부터 포도당과 산소를 만드는 과정",
      difficulty: "어려움",
      tags: ["과학", "생물", "광합성"],
      isSelected: true,
    },
    {
      id: 9,
      type: "서술형",
      question: "조선시대 한글 창제의 의미를 서술하시오.",
      answer:
        "백성들이 쉽게 배우고 사용할 수 있는 문자를 만들어 문화 발전과 민주화에 기여했다",
      difficulty: "어려움",
      tags: ["역사", "조선", "한글"],
      isSelected: true,
    },
    {
      id: 10,
      type: "서술형",
      question: "지구 온난화의 원인과 대책을 설명하시오.",
      answer: "온실가스 증가로 인한 지구 평균 기온 상승이 원인이며...",
      difficulty: "어려움",
      tags: ["과학", "환경", "지구온난화"],
      isSelected: false,
    },
    {
      id: 11,
      type: "서술형",
      question: "민주주의의 기본 원리를 설명하시오.",
      answer: "국민이 주인이 되어 국민의 의사에 따라 정치가 이루어지는 제도",
      difficulty: "어려움",
      tags: ["사회", "정치", "민주주의"],
      isSelected: false,
    },
  ];

  const [questions, setQuestions] = useState(MOCK_DATA);

  const handleToggle = (id) => {
    // 이미 문제들 중 isSelected = true인 문제들을 문제로서 선택하는 함수입니다.
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isSelected: !q.isSelected } : q
      )
    );
  };

  // 현재 선택된 문제들의 개수와 각 난이도별로 선택된 문제의 개수를 구하는 로직입니다.
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
    <div className="container fade-in">
      <header className="header">
        {/* 💡 4. 뒤로 가기 버튼 연결: 이전 페이지(-1) 또는 업로드 페이지(/) */}
        <button className="back-btn" onClick={() => navigate("/")}>
          ← 자료 업로드로
        </button>

        {/* 💡 5. 게임 시작 버튼 연결: 지금은 minigame1에 연결되어있지만, 차후에 수정할 예정입니다.*/}
        <button className="create-btn" onClick={() => navigate("/game/game1")}>
          🎮 게임 시작
        </button>
      </header>

      <div className="title-section">
        <h1>문제 생성 검토</h1>
        <p>AI가 추출한 문제들을 확인하고 게임에 포함할 문제를 선택하세요</p>
      </div>
      <div className="control-bar">
        <div className="ai-recommend">
          <span className="sparkle">✨</span> <strong>AI 추천 자동 선택</strong>
        </div>
        <div className="select-count">{totalSelected}/15개 선택</div>
      </div>
      <div className="stats-board">
        <div className="stat-item">
          <span className="label">총 선택</span>
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

      <main className="grid-container">
        <div className="column">
          <h3>✓ OX ({questions.filter((q) => q.type === "OX").length})</h3>
          {questions
            .filter((q) => q.type === "OX")
            // 문제들 중에서 타입이 ox 타입인 경우에만 이 패널에 출력합니다.(다른 패널도 동일)
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
        <div className="column">
          <h3>
            ☑ 객관식 ({questions.filter((q) => q.type === "객관식").length})
          </h3>
          {questions
            .filter((q) => q.type === "객관식")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
        <div className="column">
          <h3>
            📝 단답식 ({questions.filter((q) => q.type === "단답식").length})
          </h3>
          {questions
            .filter((q) => q.type === "단답식")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
      </main>

      {/* --- 💡 [추가] 하단 2열 그리드 (주관식 / 서술형) --- */}
      <section className="bottom-grid-container">
        <div className="column">
          <h3>
            💬 주관식 ({questions.filter((q) => q.type === "주관식").length})
          </h3>
          {questions
            .filter((q) => q.type === "주관식")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
        <div className="column">
          <h3>
            ≡ 서술형 ({questions.filter((q) => q.type === "서술형").length})
          </h3>
          {questions
            .filter((q) => q.type === "서술형")
            .map((q) => (
              <QuestionCard key={q.id} data={q} onToggle={handleToggle} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
