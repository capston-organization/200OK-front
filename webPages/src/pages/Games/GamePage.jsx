import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  // gameId에는 "game1", "game2" 같은 값이 들어옵니다.

  // 💡 [핵심 로직]
  // 1. "game1" -> 숫자 "1"만 추출
  const gameNumber = gameId.replace("game", "");

  // 2. 파일 이름 자동 완성: "minigame" + "1" + ".html"
  const fileName = `minigame${gameNumber}.html`;

  // 3. 최종 경로: /mini-Games/games/game1/minigame1.html
  const gamePath = `/mini-Games/games/${gameId}/${fileName}`;

  return (
    // 💡 100vw, 100vh로 화면 꽉 채우기 + overflow hidden
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <button
        onClick={() => navigate("/review")} // 일단은 나가기를 누르면 ProblemReviewPage으로 이동합니다.
        style={{
          // 나가기 버튼을 띄웁니다.
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          padding: "10px 20px",
          fontSize: "20px",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← 나가기
      </button>

      <iframe // 화면에 미니게임을 띄웁니다.
        src={gamePath}
        title={`Mini Game ${gameNumber}`}
        // 💡 테두리 없애고(border:0), 꽉 채우기(100%)
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
};

// 이제 미니게임들을 navigate("/game/game1") 등으로 이동이 가능해집니다.

export default GamePage;
