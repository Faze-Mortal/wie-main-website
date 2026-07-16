import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # iPhone 12 Pro dimensions: 390x844, iPhone SE: 375x667. Let's use 375x812
        context = await browser.new_context(
            viewport={"width": 375, "height": 812},
            has_touch=True,
            is_mobile=True,
            device_scale_factor=2
        )
        page = await context.new_page()
        base_url = "http://localhost:5173"
        out_dir = r"C:\Users\Aum Lenka\.gemini\antigravity-ide\brain\8358585c-ef69-482f-93e9-ce5cdb77060e\\"

        # 1. Homepage
        print("Visiting Homepage...")
        await page.goto(base_url)
        await page.wait_for_timeout(2000)
        await page.screenshot(path=out_dir + "1_home_hero.png", full_page=False)

        await page.evaluate("window.scrollBy(0, 800)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "1_home_about.png")

        await page.evaluate("window.scrollBy(0, 1000)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "1_home_events.png")
        
        await page.evaluate("window.scrollBy(0, 1000)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "1_home_blogs.png")

        await page.evaluate("window.scrollBy(0, 1000)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "1_home_gallery.png")

        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "5_home_footer.png")

        # 2. About page hero
        print("Visiting About page...")
        await page.goto(base_url + "/about")
        await page.wait_for_timeout(2000)
        await page.screenshot(path=out_dir + "2_about_hero.png")

        # 3. Team page
        print("Visiting Team page...")
        await page.goto(base_url + "/team")
        await page.wait_for_timeout(2000)
        await page.evaluate("window.scrollBy(0, 800)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path=out_dir + "3_team_cards.png")

        # 4. Gallery page
        print("Visiting Gallery page...")
        await page.goto(base_url + "/gallery")
        await page.wait_for_timeout(2000)
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(1000)
        try:
            await page.click("img", timeout=3000)
            await page.wait_for_timeout(1000)
            await page.screenshot(path=out_dir + "4_gallery_lightbox.png")
        except:
            await page.screenshot(path=out_dir + "4_gallery_no_lightbox.png")

        # 6. Touch interactions
        print("Checking touch interactions...")
        await page.goto(base_url + "/events")
        await page.wait_for_timeout(2000)
        await page.evaluate("window.scrollBy(0, 600)")
        await page.wait_for_timeout(1000)
        try:
            await page.tap(".group") 
            await page.wait_for_timeout(1000)
            await page.screenshot(path=out_dir + "6_events_tilt_tap.png")
        except:
            await page.screenshot(path=out_dir + "6_events_tilt.png")

        await browser.close()
        print("Done!")

asyncio.run(run())
