🎮 퀴즈 게임 생성 웹 프로젝트 (WebPages)

Figma 디자인을 기반으로 제작된 학습 자료 업로드 및 문제 검토 웹 애플리케이션입니다.
React와 Vite를 사용하여 개발되었습니다.

🚀 시작하기 (How to Start)

이 프로젝트를 실행하려면 컴퓨터에 Node.js가 설치되어 있어야 합니다.

1. 프로젝트 설치

터미널에서 프로젝트 폴더로 이동한 후, 필요한 라이브러리들을 설치합니다.
(이 과정이 없으면 실행되지 않습니다!)

npm install


2. 웹사이트 실행

설치가 완료되면 개발 서버를 실행합니다.

npm run dev


터미널에 나오는 주소(예: http://localhost:5173)를 브라우저에 입력하면 화면을 볼 수 있습니다.

📂 프로젝트 구조 (Project Structure)

src/
 ├── pages/              # 화면 단위 컴포넌트
 │    ├── UploadPage.jsx # (1) 학습 자료 입력 및 설정 화면
 │    └── ReviewPage.jsx # (2) 문제 검토 및 수정 화면
 ├── App.jsx             # 메인 앱 (화면 전환 관리)
 ├── App.css             # 공통 스타일
 └── main.jsx            # React 진입점


✨ 주요 기능

학습 자료 업로드 (UploadPage)

텍스트, 파일, URL 입력 탭 전환

게임 난이도, 시간, 테마 설정 UI

'게임 생성' 버튼 클릭 시 검토 페이지로 이동

문제 검토 (ReviewPage)

AI가 생성한 문제(Mock Data) 리스트 확인

OX, 객관식, 단답식 분류

난이도별 통계 대시보드

'자료 업로드로' 버튼 클릭 시 이전 화면으로 이동

🛠 기술 스택

React

Vite

CSS (Module 방식 분리)
