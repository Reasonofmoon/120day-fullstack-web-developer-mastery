#!/bin/bash
# 🚀 웹 개발 완전정복 자동화 환경 설정 스크립트

echo "🎯 웹 개발 완전정복 환경 설정 시작..."

# Node.js 버전 확인
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되지 않았습니다."
    echo "https://nodejs.org에서 Node.js를 설치해주세요."
    exit 1
fi

# Git 설정 확인
if ! command -v git &> /dev/null; then
    echo "❌ Git가 설치되지 않았습니다."
    exit 1
fi

# NPM 의존성 설치
echo "📦 NPM 패키지 설치 중..."
npm install

# Python 가상환경 설정
echo "🐍 Python 환경 설정 중..."
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Git 저장소 설정
echo "📝 Git 저장소 초기화 중..."
git init
git branch -M main

# 첫 번째 커밋
git add .
git commit -m "🎉 Initial setup: 웹 개발 완전정복 프로젝트"

# GitHub 저장소와 연결 (사용자가 수동으로 실행)
echo "🌐 GitHub 저장소 생성 및 연결:"
echo "gh repo create 120day-fullstack-web-developer-mastery --public --description '120일 완전정복 풀스택 웹 개발자 양성 프로그램'"
echo "git remote add origin https://github.com/Reasonofmoon/120day-fullstack-web-developer-mastery.git"
echo "git push -u origin main"

echo "✅ 환경 설정 완료!"
echo "🚀 첫 번째 미션 시작: python scripts/daily_automator.py start"
