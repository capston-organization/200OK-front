# 🎮 퀴즈 게임 생성 웹 프로젝트 (WebPages)

Figma 디자인을 기반으로 제작된 학습 자료 업로드 및 문제 검토 웹 애플리케이션입니다.
React와 Vite를 사용하여 개발되었습니다.
<br>

# 💻 Project Structure (폴더 구조)

2000K-FRONT/
├── mini-Games/                # 🎮 Phaser 3로 제작된 미니 게임 소스 코드
│   ├── assets/                # 게임 전용 이미지, 폰트, 사운드 리소스
│   ├── css/                   # 게임 내부 스타일시트
│   └── games/                 # 개별 게임 로직 폴더
│       ├── game1/             # [게임 1] 과일 담기 게임 (minigame.html)
│       └── game2/             # [게임 2] (추가 예정)
│
└── webPages/                  # 💻 React 웹 애플리케이션 소스 코드
    ├── public/                # 정적 파일 (빌드 시 루트로 복사됨)
    └── src/
        ├── assets/            # 웹사이트 전용 이미지 및 리소스
        ├── components/        # 재사용 가능한 UI 컴포넌트 (버튼, 카드 등)
        ├── pages/             # 주요 페이지 컴포넌트
        │   ├── Home/          # 메인(대시보드) 페이지
        │   ├── Upload/        # [STEP 1] 자료 업로드 및 게임 설정 페이지
        │   ├── ProblemReview/ # [STEP 2] AI 생성 문제 검토 및 수정 페이지
        │   └── Games/         # [STEP 3] Phaser 게임 구동 페이지 (Iframe)
        ├── App.jsx            # 라우팅(Routes) 설정 진입점
        └── main.jsx           # React DOM 렌더링 진입점
        

## 🚀 시작하기 (How to Start)

이 프로젝트를 실행하려면 컴퓨터에 Node.js와 npm (Node Package Manager)이 설치되어 있어야 합니다.
<br>

### 1\. 프로젝트 파일 다운로드 및 이동

팀원들은 GitHub 저장소에서 코드를 다운로드(Clone) 받은 후, 터미널(Git Bash, PowerShell 등)을 열어 프로젝트 폴더(`webPages` 또는 최상위 폴더)로 이동해야 합니다.

```bash
# 예시: GitHub에서 클론
git clone [저장소 주소]

# 클론 후 프로젝트 폴더로 이동
cd webPages
```

<br>

### 2\. 종속성 설치 (필수)

GitHub에는 무거운 라이브러리 파일이 포함된 `node_modules` 폴더가 없습니다. 따라서 아래 명령을 실행하여 프로젝트에 필요한 모든 패키지(React, Vite 등)를 설치해야 합니다.

```bash
npm install
```
<br>

### 3\. 개발 서버 실행

설치가 완료되면, 다음 명령어를 사용하여 로컬 개발 서버를 실행하고 웹사이트를 볼 수 있습니다. 해당 명령어를 실행한 후, 커맨드 창이나 powershell에 나오는 로컬호스트를 통해 웹페이지를 볼 수 있습니다.

```bash
npm run dev
```
