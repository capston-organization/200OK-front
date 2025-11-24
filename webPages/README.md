🎮 퀴즈 게임 생성 웹 프로젝트 (WebPages)

Figma 디자인을 기반으로 제작된 학습 자료 업로드 및 문제 검토 웹 애플리케이션입니다.
React와 Vite를 사용하여 개발되었습니다.

🚀 시작하기 (How to Start)

이 프로젝트를 실행하려면 컴퓨터에 Node.js와 **npm (Node Package Manager)**이 설치되어 있어야 합니다.

1. 프로젝트 파일 다운로드 및 이동

팀원들은 GitHub 저장소에서 코드를 다운로드(Clone) 받은 후, 터미널(Git Bash, PowerShell 등)을 열어 프로젝트 폴더(webPages 또는 최상위 폴더)로 이동해야 합니다.

# 예시: GitHub에서 클론
git clone [저장소 주소]

# 클론 후 프로젝트 폴더로 이동
cd webPages 


2. 종속성 설치 (필수)

GitHub에는 무거운 라이브러리 파일이 포함된 node_modules 폴더가 없습니다. 따라서 아래 명령을 실행하여 프로젝트에 필요한 모든 패키지(React, Vite 등)를 설치해야 합니다.

npm install


3. 개발 서버 실행

설치가 완료되면, 다음 명령어를 사용하여 로컬 개발 서버를 실행하고 웹사이트를 볼 수 있습니다.

npm run dev


터미널에 나오는 로컬 주소 (예: http://localhost:5173/ 또는 http://127.0.0.1:5173/)를 웹 브라우저에 입력하면 화면이 나타납니다.

📂 프로젝트 구조 (Project Structure Overview)

핵심 기능 분리를 위해 src 폴더 내에 pages 폴더를 사용하여 화면 단위로 코드를 분리했습니다.

src/
 ├── pages/              # ⭐️ 메인 화면 컴포넌트 모음
 │    ├── UploadPage.jsx # (1) 학습 자료 입력 및 설정 화면
 │    ├── ReviewPage.jsx # (2) 문제 검토 및 수정 화면
 │    ├── UploadPage.css
 │    └── ReviewPage.css
 ├── App.jsx             # 메인 앱 (화면 전환 로직 관리)
 ├── App.css             # 전체 앱의 공통 스타일 (폰트, 배경, 레이아웃)
 └── main.jsx            # React 애플리케이션의 진입점


✨ 주요 기능 설명

학습 자료 업로드 (UploadPage)

입력 탭: 텍스트, 파일 업로드, URL 입력 방식 전환 기능 제공

게임 설정: 플레이 시간, 어려움 수준, 참여 인원수, 테마 설정 옵션 제공

화면 전환: '게임 생성' 버튼 클릭 시 ReviewPage로 이동합니다.

문제 생성 검토 (ReviewPage)

문제 목록: AI가 생성한 문제 목록(Mock Data)을 타입별(OX, 객관식, 단답식)로 분리하여 표시합니다.

선택 기능: 각 문제별 선택/해제 기능을 제공하여 게임에 포함할 문제만 고를 수 있습니다.

통계 대시보드: 선택된 문제의 총 개수 및 난이도별(쉬움, 보통, 어려움) 통계를 실시간으로 보여줍니다.

화면 전환: '자료 업로드로' 버튼 클릭 시 UploadPage로 되돌아갑니다.

🛠 기술 스택

프레임워크: React

빌드 도구: Vite

언어: JavaScript (JSX)

스타일링: CSS (파일별 분리)
