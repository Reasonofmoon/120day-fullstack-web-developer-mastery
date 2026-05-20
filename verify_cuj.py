from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Intercept fetch for roadmap.json because we are serving from root instead of jekyll docs
    page.route("**/*roadmap.json", lambda route: route.fulfill(status=200, json={
        "daily_missions": [],
        "start_date": "2025-07-24"
    }))

    page.goto("http://localhost:3000/docs/dashboard/")
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
