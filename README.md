# Trade Time Machine ⏳📈 (Indian Markets: NSE / BSE)

> **An interactive, animated explainer website visualizing a 5-stage AI trading-analysis pipeline and probabilistic Monte Carlo price-path replay engine calibrated for the Indian Stock Market (NSE & BSE).**

![Example Run Badge](https://img.shields.io/badge/Status-Indian_Market_Edition-C4553F?style=flat-square)
![Exchange](https://img.shields.io/badge/Exchange-NSE_%7C_BSE_India-2F6B3F?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML5_%7C_CSS3_%7C_Vanilla_JS-3A4F7A?style=flat-square)
![Simulation](https://img.shields.io/badge/Monte_Carlo-10%2C000_Paths-C4553F?style=flat-square)

---

## 🚀 Quick Start / How to Run

Zero installation, zero build steps, and zero external runtime dependencies required!

### Method 1: Direct Double-Click
Simply double-click [`index.html`](index.html) in your file explorer, and it will open directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: Local HTTP Server (Optional)
If you prefer running via a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

---

## 🇮🇳 Indian Market Customization Highlights

- **Currency**: Calibrated exclusively in Indian Rupee (**`₹ INR`**).
- **Core Ticker**: **`RELIANCE`** (Reliance Industries Ltd &bull; NSE).
- **Universe**: Nifty 500 & 24 of India's most liquid blue-chip equities (`RELIANCE`, `TCS`, `HDFCBANK`, `INFY`, `ICICIBANK`, `TATAMOTORS`, `BHARTIARTL`, `ITC`, `SBIN`, `LT`, `BAJFINANCE`, etc.).
- **Trading Hours**: Regular NSE/BSE Trading Session (**09:15 – 15:30 IST**).
- **News Catalysts**: Sourced from leading Indian financial media (*The Economic Times*, *Moneycontrol Pro*, *Livemint*), including Reserve Bank of India (RBI) MPC interest rate context and domestic corporate developments.
- **SEBI Regulatory Context**: Formatted with statutory risk and educational simulation disclaimers.

---

## 🎨 Visual Aesthetic & Design Palette

- **Paper Aesthetic**: Warm cream background (`#EEEBDD`) with soft paper cards (`#FBF9F4`), warm hairline borders (`#DDD7C8`), and multi-layer warm ambient shadows.
- **Color Palette**:
  - **Near-Black Text**: `#1C1B1A` & `#5E5951`
  - **Active State Accent**: Terracotta Red (`#C4553F`)
  - **Wins & Targets**: Forest Green (`#2F6B3F`)
  - **Neutral / 3:30 PM Close**: Navy Blue (`#3A4F7A`)
  - **Losses & Stops**: Brick Red (`#B84A39`)
- **Flat Isometric Illustration**:
  - Handcrafted SVG isometric trader desk with monitor displaying radar scan, succulent desk plant, and stacked paper-chart sheets.
  - Authentic 3D stacked isometric paper-chart towers with individual geometric faces (top, left, right) and layered paper elevation lines.
- **Typography**: Clean modern type pairing `DM Sans` / `Inter` with `JetBrains Mono` with full Indian Rupee (`₹`) support.
- **Persistent Outlined Badge**: An `"EXAMPLE RUN"` badge fixed in the top-right corner with a live pulsing indicator dot.

---

## 🔄 The 5-Stage Indian Market Pipeline

1. **Scanner (`01 Scanner`)**
   - Renders a multi-chart matrix of 24 candidate NSE equity charts fading in with staggered timing.
   - An animated terracotta laser radar beam sweeps across the grid.
   - Filters down to 1 prime high-conviction momentum breakout candidate (**`RELIANCE`**) with a pulsing terracotta outline while remaining cards subtly dim.

2. **News Sentiment (`02 News`)**
   - The selected chart docks on the left pane.
   - Live catalyst headline cards slide in from the right with spring easing:
     - **Positive (+0.88)**: *The Economic Times* &bull; Jio & Retail drive Reliance Q2 EBITDA up 16.5% YoY; 5G monetization accelerates.
     - **Neutral (0.00)**: *Moneycontrol Pro* &bull; RBI MPC holds repo rate steady at 6.50%; projects FY GDP growth at 7.2%.
     - **Risk Notice (-0.24)**: *Livemint Financial* &bull; Brent crude edges near \$85/bbl; downstream margins in focus.
   - Real-time NLP sentiment analysis gauge dynamically fills to **+78% Bullish**.

3. **Entry Strategy (`03 Entry`)**
   - Candlestick chart draws itself progressively bar-by-bar with NSE volume histogram.
   - Horizontal terracotta **Entry Line** drops in dynamically at **`₹2,845.00`** with spring bounce physics and an interactive trigger badge.

4. **Exit Brackets (`04 Exit`)**
   - Expands the chart view to reveal automated bracket orders:
     - Shaded Forest Green **Take Profit Zone** at **`₹2,995.00`** (`+5.27%` / `+₹150.00`).
     - Shaded Brick Red **Stop Loss Zone** at **`₹2,785.00`** (`-2.11%` / `-₹60.00`).
   - Computes and highlights the asymmetric **Risk/Reward Ratio (1 : 2.50)** and trade risk exposure (`₹6,000.00` on 100 shares).

5. **Time Machine (`05 Time Machine` — The Hero Stage)**
   - Bold animated counter increments from `0` to **`10,000`** (*"replays of the rest of the trading session"*).
   - High-performance HTML5 Canvas simulation fans out 10,000 translucent stochastic price paths from the entry point across simulated intraday intervals.
   - Paths resolve into three 3D stacked isometric paper bar towers:
     - **Green Tower**: `"Hit Target"` with animated percentage countup to **29.4%**.
     - **Red Tower**: `"Hit Stop"` (**21.2%**).
     - **Navy Tower**: `"Neither (3:30 PM IST Close)"` (**49.4%**).
   - Shows Expected Value (EV: **`+₹14,250.00`** per 100 shares), Win/Loss Ratio (`1.39 : 1`), and simulated profit factor (`1.82`).
   - **Interactive Control Panel**: Drag sliders for Entry Price (₹2,750 – ₹2,950), Stop Loss (₹2,680 – ₹2,840), and Take Profit (₹2,850 – ₹3,150), then click **"Re-run 10,000 replays"** to instantly recompute and re-animate the fanning paths and 3D towers!

---

## 🕹 Controls & Keyboard Shortcuts

| Control | Action | Keyboard Shortcut |
| :--- | :--- | :--- |
| **Play / Pause** | Toggles timeline auto-advancement | <kbd>Space</kbd> |
| **Prev Stage** | Navigates to the previous pipeline stage | <kbd>&larr;</kbd> (Left Arrow) |
| **Next Stage** | Navigates to the next pipeline stage | <kbd>&rarr;</kbd> (Right Arrow) |
| **Direct Tab** | Click any pill tab `[Scanner]` ... `[Time Machine]` | Mouse click |
| **Simulation Speed** | Switch playback rate between `1x`, `1.5x`, and `2x` | Header buttons |
| **Audio Feedback** | Toggle Web Audio synthesized clicks & chimes | Header button |
| **Re-run Replays** | Rerun Monte Carlo simulation with custom sliders | Button in Stage 5 |

---

## ⚖ Disclaimer

*Educational simulation using synthetic and example data. Not financial advice. Not SEBI registered investment advice. Securities trading involves market risk. No guaranteed profits.*
