#!/usr/bin/env python3
import sys, json, subprocess
from datetime import datetime
from pathlib import Path

class WebDevDailyAutomator:
    def __init__(self):
        self.project_root = Path(__file__).parent.parent
        self.config = json.loads((self.project_root / 'config/roadmap.json').read_text(encoding='utf-8'))
        self.current_day = (datetime.now() - datetime(2025, 1, 1)).days + 1

    def get_daily_mission(self):
        for m in self.config.get('daily_missions', []):
            if m['day'] == self.current_day: return m
        return None

    def start_daily_mission(self):
        mission = self.get_daily_mission()
        if not mission:
            print(f"Day {self.current_day} 미션이 없습니다.")
            return
        print(f"🚀 Day {self.current_day}: {mission['title']} 시작!")

    def complete_daily_mission(self):
        mission = self.get_daily_mission()
        if not mission: return
        
        self.generate_blog_post(mission)
        self.auto_commit(mission)
        print(f"🎉 Day {self.current_day} 미션 완료!")

    def generate_blog_post(self, mission):
        post_date = datetime.now().strftime("%Y-%m-%d")
        path = self.project_root / 'docs/_posts' / f"{post_date}-day-{self.current_day}.md"
        
        content = f"""---
layout: default
title: "{mission['title']}"
date: {post_date}
categories: {mission['phase']}
---

## 🗺️ 전체 로드맵 복습
{self.config.get('mermaid_diagram', '')}

## 🎯 오늘의 학습 내용
- **주제**: {mission['topic']}
- **학습 목표**:
{chr(10).join(f"  - {obj}" for obj in mission['objectives'])}

### 예시 코드
```javascript
// 여기에 오늘 작성한 주요 코드를 붙여넣으세요.
console.log("Hello, World!");
```
"""
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding='utf-8')
        print(f"📝 블로그 포스트 생성: {path}")

    def auto_commit(self, mission):
        try:
            subprocess.run(["git", "add", "."], cwd=self.project_root, check=True)
            msg = f"✅ Day {self.current_day}: {mission['topic']} 완료"
            subprocess.run(["git", "commit", "-m", msg], cwd=self.project_root, check=True)
            subprocess.run(["git", "push"], cwd=self.project_root, check=True)
            print("🚀 GitHub에 성공적으로 푸시했습니다.")
        except Exception as e:
            print(f"❌ Git 작업 실패: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("사용법: python daily_automator.py [start|complete]")
    else:
        automator = WebDevDailyAutomator()
        if sys.argv[1] == "start":
            automator.start_daily_mission()
        elif sys.argv[1] == "complete":
            automator.complete_daily_mission()
