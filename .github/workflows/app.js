/**
 * ============================================================================
 * TRADE TIME MACHINE — CORE APPLICATION CONTROLLER (INDIAN MARKETS: NSE / BSE)
 * 5-Stage Interactive Animated AI Trading Pipeline Explainer
 *
 * Calibrated for:
 *  - Currency: Indian Rupee (₹ INR)
 *  - Primary Ticker: RELIANCE (Reliance Industries Ltd • NSE)
 *  - Universe: Nifty 500 & Top 24 Liquid Equities
 *  - News: The Economic Times, Moneycontrol, Livemint
 *  - Macro Context: RBI MPC, 09:15 - 15:30 IST Session Hours, SEBI Risk Framework
 * ============================================================================
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  class AudioFx {
    constructor() {
      this.enabled = false;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    toggle() {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playTick() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(640, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {
        // audio context not allowed yet
      }
    }

    playChime() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.16); // G5
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.36);
      } catch (e) {
        // audio context not allowed yet
      }
    }
  }

  const audio = new AudioFx();

  // --- STAGE DEFINITIONS & METADATA (NSE / BSE) ---
  const STAGES = [
    {
      index: 0,
      name: "Scanner",
      badge: "STAGE 01 OF 05",
      heading: "Market Scanner: 2,240 NSE Equities Filtered",
      desc: "Screening the entire universe of NSE & BSE listed equities for high-volume momentum breakouts with compressed volatility.",
      statRate: "1,200/s",
      statStatus: "Filtering"
    },
    {
      index: 1,
      name: "News",
      badge: "STAGE 02 OF 05",
      heading: "Indian Market Wire & NLP Catalyst Extraction",
      desc: "Live corporate disclosures, exchange filings, and financial news parsed by AI models for sentiment polarity and catalyst impact.",
      statRate: "42 ms",
      statStatus: "Bullish (+78%)"
    },
    {
      index: 2,
      name: "Entry",
      badge: "STAGE 03 OF 05",
      heading: "Precision Entry & Volatility Confirmation",
      desc: "Candlestick structure analysis pinpoints the high-probability institutional breakout level on NSE with volume confirmation.",
      statRate: "₹2,845.00",
      statStatus: "Order Armed"
    },
    {
      index: 3,
      name: "Exit",
      badge: "STAGE 04 OF 05",
      heading: "Asymmetric Exit Brackets & Risk/Reward",
      desc: "Automated bracket orders calculate take-profit and stop-loss boundaries, locking in an asymmetric 1:2.50 reward-to-risk ratio.",
      statRate: "1 : 2.50",
      statStatus: "Brackets Active"
    },
    {
      index: 4,
      name: "Time Machine",
      badge: "STAGE 05 OF 05 (HERO)",
      heading: "Time Machine: 10,000 Intraday Replays",
      desc: "Simulating 10,000 alternative stochastic trajectories for the rest of the trading session to forecast true statistical outcomes.",
      statRate: "10,000 Runs",
      statStatus: "29.4% Win Rate"
    }
  ];

  // --- 24 LIQUID INDIAN EQUITIES (NSE) ---
  const SCANNER_TICKERS = [
    { s: "RELIANCE",   c: "+3.4%", pos: true, setup: true },
    { s: "TCS",        c: "+1.2%", pos: true },
    { s: "HDFCBANK",   c: "-0.4%", pos: false },
    { s: "INFY",       c: "+2.1%", pos: true },
    { s: "ICICIBANK",  c: "+1.8%", pos: true },
    { s: "TATAMOTORS", c: "+4.2%", pos: true },
    { s: "BHARTIARTL", c: "+1.1%", pos: true },
    { s: "ITC",        c: "-0.3%", pos: false },
    { s: "SBIN",       c: "+2.4%", pos: true },
    { s: "LT",         c: "+1.6%", pos: true },
    { s: "BAJFINANCE", c: "+2.8%", pos: true },
    { s: "HINDUNILVR", c: "-0.8%", pos: false },
    { s: "MARUTI",     c: "+1.9%", pos: true },
    { s: "SUNPHARMA",  c: "+0.7%", pos: true },
    { s: "TITAN",      c: "+2.2%", pos: true },
    { s: "ADANIENT",   c: "+3.8%", pos: true },
    { s: "WIPRO",      c: "-0.5%", pos: false },
    { s: "NTPC",       c: "+1.3%", pos: true },
    { s: "POWERGRID",  c: "+0.6%", pos: true },
    { s: "ONGC",       c: "-1.2%", pos: false },
    { s: "TATASTEEL",  c: "+2.7%", pos: true },
    { s: "KOTAKBANK",  c: "+0.4%", pos: true },
    { s: "COALINDIA",  c: "-0.9%", pos: false },
    { s: "ASIANPAINT", c: "-1.5%", pos: false }
  ];

  // --- GLOBAL STATE ---
  const state = {
    currentStage: 0,
    isPlaying: true,
    speedMultiplier: 1.0,
    stageDurationMs: 5000,
    stageStartTime: performance.now(),
    lastFrameTime: performance.now(),
    animationFrameId: null,
    
    // Time Machine simulation parameters (INR ₹)
    simParams: {
      entry: 2845.00,
      stop: 2785.00,
      target: 2995.00,
      numPaths: 10000,
      volatility: 0.22
    },
    
    // Simulation outcome caches
    simResults: {
      winCount: 2940,
      lossCount: 2120,
      neitherCount: 4940,
      winPct: 29.4,
      lossPct: 21.2,
      neitherPct: 49.4,
      expectedValue: 14250.00,
      winLossRatio: 1.39,
      profitFactor: 1.82
    },

    // Stage internal animation timers
    stageTimers: []
  };

  // --- DOM CACHE ---
  const DOM = {
    pipelineSteps: document.querySelectorAll('.pipeline-step'),
    stageScenes: document.querySelectorAll('.stage-scene'),
    stageBadge: document.getElementById('stageBadge'),
    stageHeading: document.getElementById('stageHeading'),
    stageDesc: document.getElementById('stageDesc'),
    metaStatRate: document.getElementById('metaStatRate'),
    metaStatStatus: document.getElementById('metaStatStatus'),
    timelineStageLabel: document.getElementById('timelineStageLabel'),
    timelineProgressFill: document.getElementById('timelineProgressFill'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    playPauseText: document.getElementById('playPauseText'),
    playPauseIcon: document.getElementById('playPauseIcon'),
    prevStageBtn: document.getElementById('prevStageBtn'),
    nextStageBtn: document.getElementById('nextStageBtn'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    soundIcon: document.getElementById('soundIcon'),
    speedChips: document.querySelectorAll('.speed-chip'),

    // Stage 1
    scannerChartsGrid: document.getElementById('scannerChartsGrid'),
    scannerRadarLine: document.getElementById('scannerRadarLine'),

    // Stage 2
    pinnedChartCanvas: document.getElementById('pinnedChartCanvas'),
    newsCardsStack: document.getElementById('newsCardsStack'),
    sentimentMeterFill: document.getElementById('sentimentMeterFill'),

    // Stage 3
    entryCanvas: document.getElementById('entryCanvas'),
    entryLineBadge: document.getElementById('entryLineBadge'),

    // Stage 4
    exitCanvas: document.getElementById('exitCanvas'),
    targetTag: document.getElementById('targetTag'),
    exitEntryTag: document.getElementById('exitEntryTag'),
    stopTag: document.getElementById('stopTag'),

    // Stage 5
    replayCounter: document.getElementById('replayCounter'),
    timeMachineCanvas: document.getElementById('timeMachineCanvas'),
    isoTowersSvg: document.getElementById('isoTowersSvg'),
    simPhaseBadge: document.getElementById('simPhaseBadge'),
    pctWin: document.getElementById('pctWin'),
    countWin: document.getElementById('countWin'),
    pctLoss: document.getElementById('pctLoss'),
    countLoss: document.getElementById('countLoss'),
    pctNeither: document.getElementById('pctNeither'),
    countNeither: document.getElementById('countNeither'),
    sliderEntry: document.getElementById('sliderEntry'),
    sliderStop: document.getElementById('sliderStop'),
    sliderTarget: document.getElementById('sliderTarget'),
    valEntry: document.getElementById('valEntry'),
    valStop: document.getElementById('valStop'),
    valTarget: document.getElementById('valTarget'),
    rerunSimBtn: document.getElementById('rerunSimBtn'),
    valEV: document.getElementById('valEV'),
    valWLRatio: document.getElementById('valWLRatio'),
    valProfitFactor: document.getElementById('valProfitFactor'),
    simLineTarget: document.getElementById('simLineTarget'),
    simLineEntry: document.getElementById('simLineEntry'),
    simLineStop: document.getElementById('simLineStop'),
    simLabelTarget: document.getElementById('simLabelTarget'),
    simLabelEntry: document.getElementById('simLabelEntry'),
    simLabelStop: document.getElementById('simLabelStop')
  };

  // ==========================================================================
  // PIPELINE NAVIGATION & TIMELINE CONTROLLER
  // ==========================================================================
  function setStage(index, manualJump = false) {
    if (index < 0) index = 4;
    if (index > 4) index = 0;

    // Clear any pending timeouts from previous stage
    state.stageTimers.forEach(id => clearTimeout(id));
    state.stageTimers = [];

    state.currentStage = index;
    state.stageStartTime = performance.now();
    audio.playTick();

    // Update Pipeline Pill Tabs
    DOM.pipelineSteps.forEach((step, idx) => {
      step.classList.remove('active', 'completed');
      if (idx === index) {
        step.classList.add('active');
        step.setAttribute('aria-current', 'step');
      } else if (idx < index) {
        step.classList.add('completed');
        step.removeAttribute('aria-current');
      } else {
        step.removeAttribute('aria-current');
      }
    });

    // Update Header Metadata
    const info = STAGES[index];
    DOM.stageBadge.textContent = info.badge;
    DOM.stageHeading.textContent = info.heading;
    DOM.stageDesc.textContent = info.desc;
    DOM.metaStatRate.textContent = info.statRate;
    DOM.metaStatStatus.textContent = info.statStatus;
    DOM.timelineStageLabel.textContent = `Stage ${index + 1} of 5: ${info.name}`;

    // Update Viewport Scene
    DOM.stageScenes.forEach((scene, idx) => {
      if (idx === index) {
        scene.classList.add('active');
      } else {
        scene.classList.remove('active');
      }
    });

    // Reset progress bar on manual jump
    if (manualJump) {
      DOM.timelineProgressFill.style.width = '0%';
    }

    // Launch Stage Specific Scenes
    initStageScene(index);
  }

  function initStageScene(stageIndex) {
    switch (stageIndex) {
      case 0:
        runStage1Scanner();
        break;
      case 1:
        runStage2News();
        break;
      case 2:
        runStage3Entry();
        break;
      case 3:
        runStage4Exit();
        break;
      case 4:
        runStage5TimeMachine();
        break;
    }
  }

  // Animation Loop for Auto-Advance & Progress Bar
  function tick(timestamp) {
    if (state.isPlaying) {
      const elapsed = timestamp - state.stageStartTime;
      const currentDuration = state.stageDurationMs / state.speedMultiplier;
      const progress = Math.min(elapsed / currentDuration, 1.0);

      DOM.timelineProgressFill.style.width = `${(progress * 100).toFixed(1)}%`;

      if (progress >= 1.0) {
        // Auto-advance to next stage
        setStage((state.currentStage + 1) % 5);
      }
    }
    state.animationFrameId = requestAnimationFrame(tick);
  }

  function togglePlayPause() {
    state.isPlaying = !state.isPlaying;
    if (state.isPlaying) {
      DOM.playPauseText.textContent = "Pause";
      DOM.playPauseIcon.className = "fa-solid fa-pause";
      // Adjust start time to resume progress cleanly
      const currentWidthPct = parseFloat(DOM.timelineProgressFill.style.width || "0") / 100;
      const currentDuration = state.stageDurationMs / state.speedMultiplier;
      state.stageStartTime = performance.now() - (currentWidthPct * currentDuration);
    } else {
      DOM.playPauseText.textContent = "Play";
      DOM.playPauseIcon.className = "fa-solid fa-play";
    }
  }

  // ==========================================================================
  // STAGE 1: SCANNER SCENE LOGIC (NSE)
  // ==========================================================================
  function runStage1Scanner() {
    // Generate mini chart grid if empty
    if (DOM.scannerChartsGrid.children.length === 0) {
      populateScannerGrid();
    }

    // Reset radar sweep animation
    DOM.scannerRadarLine.classList.remove('scanning');
    void DOM.scannerRadarLine.offsetWidth; // Force reflow
    DOM.scannerRadarLine.classList.add('scanning');

    // Reset card classes
    const cards = DOM.scannerChartsGrid.querySelectorAll('.mini-chart-card');
    cards.forEach((card, idx) => {
      card.classList.remove('highlighted-setup', 'dimmed', 'rendered');
      const timer = setTimeout(() => {
        card.classList.add('rendered');
      }, idx * 25);
      state.stageTimers.push(timer);
    });

    // After radar scans, spotlight the prime setup (RELIANCE at index 0)
    const spotlightTimer = setTimeout(() => {
      cards.forEach((card, idx) => {
        if (idx === 0) {
          card.classList.add('highlighted-setup');
        } else {
          card.classList.add('dimmed');
        }
      });
      audio.playChime();
    }, 1800 / state.speedMultiplier);

    state.stageTimers.push(spotlightTimer);
  }

  function populateScannerGrid() {
    DOM.scannerChartsGrid.innerHTML = '';
    SCANNER_TICKERS.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'mini-chart-card';
      card.dataset.index = index;

      card.innerHTML = `
        <div class="mini-chart-top">
          <span class="mini-ticker">${item.s}</span>
          <span class="mini-pct ${item.pos ? 'pos' : 'neg'}">${item.c}</span>
        </div>
        <div class="mini-canvas-wrap">
          <canvas class="mini-canvas" width="70" height="26"></canvas>
        </div>
      `;

      DOM.scannerChartsGrid.appendChild(card);
      const canvas = card.querySelector('.mini-canvas');
      drawMiniCandlesticks(canvas, item.pos, item.setup);
    });
  }

  function drawMiniCandlesticks(canvas, isBullish, isPrimeSetup) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const candleCount = 7;
    const spacing = w / candleCount;
    let basePrice = isPrimeSetup ? 12 : (isBullish ? 8 : 18);

    for (let i = 0; i < candleCount; i++) {
      let change = (Math.random() - 0.46) * 3.5;
      if (isPrimeSetup && i >= 4) {
        change = 3.5 + Math.random() * 2; // Sharp breakout pattern
      } else if (!isBullish && i >= 4) {
        change = -1.5 - Math.random() * 2;
      }
      
      const open = basePrice;
      const close = Math.max(3, Math.min(h - 3, open + change));
      const high = Math.min(h - 1, Math.max(open, close) + Math.random() * 2.5);
      const low = Math.max(1, Math.min(open, close) - Math.random() * 2.5);
      basePrice = close;

      const isGreen = close >= open;
      const color = isGreen ? '#2F6B3F' : '#B84A39';
      const x = i * spacing + spacing / 2;

      // Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, h - high);
      ctx.lineTo(x, h - low);
      ctx.stroke();

      // Body
      ctx.fillStyle = color;
      const bodyY = h - Math.max(open, close);
      const bodyH = Math.max(2, Math.abs(open - close));
      ctx.fillRect(x - 2.5, bodyY, 5, bodyH);
    }
  }

  // ==========================================================================
  // STAGE 2: NEWS SENTIMENT SCENE LOGIC (RELIANCE • NSE)
  // ==========================================================================
  function runStage2News() {
    // Draw pinned chart on left
    drawPinnedChart(DOM.pinnedChartCanvas);

    // Staggered slide in of news cards
    const cards = DOM.newsCardsStack.querySelectorAll('.news-card');
    cards.forEach((card, idx) => {
      card.classList.remove('slide-in');
      const timer = setTimeout(() => {
        card.classList.add('slide-in');
        audio.playTick();
      }, (idx * 280 + 100) / state.speedMultiplier);
      state.stageTimers.push(timer);
    });

    // Animate sentiment gauge fill
    DOM.sentimentMeterFill.style.width = '0%';
    const gaugeTimer = setTimeout(() => {
      DOM.sentimentMeterFill.style.width = '78%';
    }, 400 / state.speedMultiplier);
    state.stageTimers.push(gaugeTimer);
  }

  function drawPinnedChart(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle grid lines
    ctx.strokeStyle = '#E6E0D2';
    ctx.lineWidth = 1;
    for (let y = 30; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 14 candles ending in breakout at ₹2,845.00
    const candles = [
      { o: 2780, c: 2795, h: 2802, l: 2775 },
      { o: 2795, c: 2788, h: 2800, l: 2780 },
      { o: 2788, c: 2802, h: 2808, l: 2782 },
      { o: 2802, c: 2810, h: 2815, l: 2798 },
      { o: 2810, c: 2804, h: 2818, l: 2799 },
      { o: 2804, c: 2812, h: 2816, l: 2800 },
      { o: 2812, c: 2810, h: 2817, l: 2805 },
      { o: 2810, c: 2818, h: 2822, l: 2806 },
      { o: 2818, c: 2815, h: 2820, l: 2810 },
      { o: 2815, c: 2824, h: 2828, l: 2812 },
      { o: 2824, c: 2821, h: 2827, l: 2818 },
      { o: 2821, c: 2832, h: 2835, l: 2819 },
      { o: 2832, c: 2830, h: 2838, l: 2826 },
      { o: 2830, c: 2845, h: 2850, l: 2828 } // Breakout candle
    ];

    const minP = 2760;
    const maxP = 2860;
    const priceToY = p => h - 25 - ((p - minP) / (maxP - minP)) * (h - 50);

    const step = (w - 30) / candles.length;

    candles.forEach((c, i) => {
      const x = 18 + i * step;
      const isGreen = c.c >= c.o;
      const color = isGreen ? '#2F6B3F' : '#B84A39';

      const yO = priceToY(c.o);
      const yC = priceToY(c.c);
      const yH = priceToY(c.h);
      const yL = priceToY(c.l);

      // Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, yH);
      ctx.lineTo(x, yL);
      ctx.stroke();

      // Body
      ctx.fillStyle = color;
      const top = Math.min(yO, yC);
      const height = Math.max(3, Math.abs(yO - yC));
      ctx.fillRect(x - 5, top, 10, height);
    });

    // Breakout highlight circle on last candle
    const lastX = 18 + 13 * step;
    const lastY = priceToY(2845.0);
    ctx.strokeStyle = '#C4553F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(lastX, lastY, 9, 0, Math.PI * 2);
    ctx.stroke();
  }

  // ==========================================================================
  // STAGE 3: ENTRY STRATEGY SCENE LOGIC (₹2,845.00 TRIGGER)
  // ==========================================================================
  function runStage3Entry() {
    DOM.entryLineBadge.classList.remove('visible');
    
    // Draw candlesticks progressively, then drop horizontal entry line
    drawProgressiveEntryChart(DOM.entryCanvas, () => {
      // Line is drawn, now show callout badge
      DOM.entryLineBadge.classList.add('visible');
      audio.playChime();
    });
  }

  function drawProgressiveEntryChart(canvas, onComplete) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minP = 2770;
    const maxP = 2875;
    const priceToY = p => h - 50 - ((p - minP) / (maxP - minP)) * (h - 90);

    const numCandles = 22;
    const spacing = (w - 80) / numCandles;

    // Generate price curve leading to consolidation and breakout
    const candles = [];
    let curP = 2805;
    for (let i = 0; i < numCandles; i++) {
      let delta = (Math.random() - 0.47) * 9;
      if (i > 15 && i < 21) delta = (Math.random() - 0.49) * 4; // Tight squeeze
      if (i === 21) delta = 24.0; // Breakout candle to ₹2,845.00

      const o = curP;
      const c = curP + delta;
      const high = Math.max(o, c) + Math.random() * 6;
      const low = Math.min(o, c) - Math.random() * 6;
      candles.push({ o, c, h: high, l: low });
      curP = c;
    }

    let renderedIndex = 0;

    function renderNextCandle() {
      if (renderedIndex < numCandles) {
        ctx.clearRect(0, 0, w, h);

        // Draw background grid & price axis (₹)
        drawChartGrid(ctx, w, h, minP, maxP, priceToY, 20);

        // Render candles up to renderedIndex
        for (let i = 0; i <= renderedIndex; i++) {
          const c = candles[i];
          const x = 40 + i * spacing;
          const isGreen = c.c >= c.o;
          const color = isGreen ? '#2F6B3F' : '#B84A39';

          const yO = priceToY(c.o);
          const yC = priceToY(c.c);
          const yH = priceToY(c.h);
          const yL = priceToY(c.l);

          // Wick
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(x, yH);
          ctx.lineTo(x, yL);
          ctx.stroke();

          // Body
          ctx.fillStyle = color;
          const top = Math.min(yO, yC);
          const height = Math.max(3, Math.abs(yO - yC));
          ctx.fillRect(x - 6, top, 12, height);

          // Volume Bar at bottom
          ctx.fillStyle = isGreen ? 'rgba(47, 107, 63, 0.35)' : 'rgba(184, 74, 57, 0.35)';
          const volH = (i === 21 ? 38 : 12 + Math.random() * 15);
          ctx.fillRect(x - 5, h - volH, 10, volH);
        }

        renderedIndex++;
        const timer = setTimeout(renderNextCandle, 45 / state.speedMultiplier);
        state.stageTimers.push(timer);
      } else {
        // Drop the animated Entry Line at ₹2,845.00
        animateEntryLineDrop(ctx, w, h, priceToY(2845.00), onComplete);
      }
    }

    renderNextCandle();
  }

  function drawChartGrid(ctx, w, h, minP, maxP, priceToY, stepP = 20) {
    ctx.strokeStyle = '#E8E2D4';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#878074';
    ctx.font = '10px JetBrains Mono, monospace';

    for (let p = Math.ceil(minP / stepP) * stepP; p <= maxP; p += stepP) {
      const y = priceToY(p);
      ctx.beginPath();
      ctx.moveTo(35, y);
      ctx.lineTo(w - 20, y);
      ctx.stroke();

      ctx.fillText(`₹${p}`, 2, y + 3.5);
    }
  }

  function animateEntryLineDrop(ctx, w, h, targetY, onComplete) {
    let startY = 10;
    const duration = 400 / state.speedMultiplier;
    const startTime = performance.now();

    function dropStep(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1.0);
      const ease = 1 - Math.pow(1 - t, 3);
      const currentY = startY + (targetY - startY) * ease;

      // Draw horizontal dashed line across chart
      ctx.strokeStyle = '#C4553F';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([8, 5]);
      ctx.beginPath();
      ctx.moveTo(35, currentY);
      ctx.lineTo(w - 20, currentY);
      ctx.stroke();
      ctx.setLineDash([]);

      if (t < 1.0) {
        requestAnimationFrame(dropStep);
      } else {
        if (onComplete) onComplete();
      }
    }

    requestAnimationFrame(dropStep);
  }

  // ==========================================================================
  // STAGE 4: EXIT BRACKETS SCENE LOGIC (₹2,995 TARGET vs ₹2,785 STOP)
  // ==========================================================================
  function runStage4Exit() {
    drawExitBracketChart(DOM.exitCanvas);
    audio.playChime();
  }

  function drawExitBracketChart(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minP = 2740;
    const maxP = 3040;
    const priceToY = p => h - 40 - ((p - minP) / (maxP - minP)) * (h - 70);

    const yTarget = priceToY(2995.00);
    const yEntry = priceToY(2845.00);
    const yStop = priceToY(2785.00);

    // 1. Shaded Green Take Profit Zone
    const greenGrad = ctx.createLinearGradient(0, yTarget, 0, yEntry);
    greenGrad.addColorStop(0, 'rgba(47, 107, 63, 0.22)');
    greenGrad.addColorStop(1, 'rgba(47, 107, 63, 0.05)');
    ctx.fillStyle = greenGrad;
    ctx.fillRect(40, yTarget, w - 60, yEntry - yTarget);

    // 2. Shaded Red Stop Loss Zone
    const redGrad = ctx.createLinearGradient(0, yEntry, 0, yStop);
    redGrad.addColorStop(0, 'rgba(184, 74, 57, 0.05)');
    redGrad.addColorStop(1, 'rgba(184, 74, 57, 0.22)');
    ctx.fillStyle = redGrad;
    ctx.fillRect(40, yEntry, w - 60, yStop - yEntry);

    // 3. Grid Lines
    drawChartGrid(ctx, w, h, minP, maxP, priceToY, 50);

    // 4. Horizontal Target, Entry, Stop lines
    // Target Line (Green)
    ctx.strokeStyle = '#2F6B3F';
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 4]);
    ctx.beginPath();
    ctx.moveTo(40, yTarget);
    ctx.lineTo(w - 20, yTarget);
    ctx.stroke();

    // Entry Line (Terracotta)
    ctx.strokeStyle = '#C4553F';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(40, yEntry);
    ctx.lineTo(w - 20, yEntry);
    ctx.stroke();

    // Stop Line (Brick Red)
    ctx.strokeStyle = '#B84A39';
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 4]);
    ctx.beginPath();
    ctx.moveTo(40, yStop);
    ctx.lineTo(w - 20, yStop);
    ctx.stroke();
    ctx.setLineDash([]);

    // 5. Candlesticks leading up to entry point
    const candles = [
      { o: 2780, c: 2795, h: 2802, l: 2775 },
      { o: 2795, c: 2788, h: 2800, l: 2780 },
      { o: 2788, c: 2802, h: 2808, l: 2782 },
      { o: 2802, c: 2810, h: 2815, l: 2798 },
      { o: 2810, c: 2804, h: 2818, l: 2799 },
      { o: 2804, c: 2812, h: 2816, l: 2800 },
      { o: 2812, c: 2822, h: 2825, l: 2806 },
      { o: 2822, c: 2819, h: 2824, l: 2814 },
      { o: 2819, c: 2831, h: 2835, l: 2818 },
      { o: 2831, c: 2845, h: 2848, l: 2827 } // Trigger candle
    ];

    const step = 28;
    candles.forEach((c, i) => {
      const x = 50 + i * step;
      const isGreen = c.c >= c.o;
      const color = isGreen ? '#2F6B3F' : '#B84A39';
      const yO = priceToY(c.o);
      const yC = priceToY(c.c);
      const yH = priceToY(c.h);
      const yL = priceToY(c.l);

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(x, yH);
      ctx.lineTo(x, yL);
      ctx.stroke();

      ctx.fillStyle = color;
      const top = Math.min(yO, yC);
      const height = Math.max(3, Math.abs(yO - yC));
      ctx.fillRect(x - 6, top, 12, height);
    });

    // Position badges in CSS according to relative heights
    const pctTarget = ((yTarget / h) * 100).toFixed(1);
    const pctEntry = ((yEntry / h) * 100).toFixed(1);
    const pctStop = ((yStop / h) * 100).toFixed(1);

    DOM.targetTag.style.top = `${pctTarget}%`;
    DOM.exitEntryTag.style.top = `${pctEntry}%`;
    DOM.stopTag.style.top = `${pctStop}%`;
  }

  // ==========================================================================
  // STAGE 5: TIME MACHINE HERO SCENE (10,000 MONTE CARLO PATHS & 3D TOWERS)
  // ==========================================================================
  function runStage5TimeMachine() {
    // 1. Animate Counter 0 -> 10,000
    animateReplayCounter(10000);

    // 2. Run simulation & animate canvas
    executeMonteCarloSimulation();
  }

  function animateReplayCounter(targetVal) {
    let startVal = 0;
    const duration = 1200 / state.speedMultiplier;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startVal + (targetVal - startVal) * ease);

      DOM.replayCounter.textContent = current.toLocaleString('en-IN');

      if (progress < 1.0) {
        requestAnimationFrame(step);
      } else {
        DOM.replayCounter.textContent = targetVal.toLocaleString('en-IN');
      }
    }

    requestAnimationFrame(step);
  }

  /**
   * Fast Vectorized Monte Carlo Path Generator
   * Generates 10,000 simulated geometric Brownian motion trajectories on NSE.
   * Classifies into: Hit Target first (Win), Hit Stop first (Loss), Neither (3:30 PM IST Close).
   */
  function executeMonteCarloSimulation() {
    const { entry, stop, target, numPaths, volatility } = state.simParams;

    const steps = 48; // Intraday trading periods
    const dt = 1.0 / steps;
    const drift = 0.03 * dt;
    const sigma = volatility * Math.sqrt(dt);

    let winCount = 0;
    let lossCount = 0;
    let neitherCount = 0;

    const pathsToRender = [];
    const sampleRenderCount = 650;
    const sampleRate = Math.floor(numPaths / sampleRenderCount);

    for (let p = 0; p < numPaths; p++) {
      let price = entry;
      let pathArr = null;
      const isSampled = (p % sampleRate === 0) && (pathsToRender.length < sampleRenderCount);

      if (isSampled) {
        pathArr = [price];
      }

      let hitTarget = false;
      let hitStop = false;

      for (let s = 1; s <= steps; s++) {
        // Box-Muller standard normal transform
        const u1 = Math.max(1e-7, Math.random());
        const u2 = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

        // Price step: Geometric Brownian Motion
        price = price * (1 + drift + sigma * z);

        if (isSampled) {
          pathArr.push(price);
        }

        // Boundary collision detection
        if (price >= target && !hitStop) {
          hitTarget = true;
          break;
        } else if (price <= stop && !hitTarget) {
          hitStop = true;
          break;
        }
      }

      let outcomeType = 'neither';
      if (hitTarget) {
        winCount++;
        outcomeType = 'win';
      } else if (hitStop) {
        lossCount++;
        outcomeType = 'loss';
      } else {
        neitherCount++;
      }

      if (isSampled && pathArr) {
        pathsToRender.push({
          points: pathArr,
          type: outcomeType,
          totalSteps: pathArr.length
        });
      }
    }

    // Exact percentages
    const winPct = (winCount / numPaths) * 100;
    const lossPct = (lossCount / numPaths) * 100;
    const neitherPct = (neitherCount / numPaths) * 100;

    // Financial outcome calculations (INR ₹)
    const upside = target - entry;
    const downside = entry - stop;
    const grossWins = winCount * upside * 100;
    const grossLosses = lossCount * downside * 100;
    const expectedValue = (winPct / 100 * upside - lossPct / 100 * downside) * 100;
    const winLossRatio = lossCount > 0 ? (winCount / lossCount).toFixed(2) : "N/A";
    const profitFactor = grossLosses > 0 ? (grossWins / grossLosses).toFixed(2) : "N/A";

    state.simResults = {
      winCount,
      lossCount,
      neitherCount,
      winPct,
      lossPct,
      neitherPct,
      expectedValue,
      winLossRatio,
      profitFactor
    };

    // Update Outcome Metric Cards in Indian Rupee format
    DOM.valEV.textContent = `${expectedValue >= 0 ? '+' : ''}₹${Math.abs(Math.round(expectedValue)).toLocaleString('en-IN')}.00`;
    DOM.valWLRatio.textContent = `${winLossRatio} : 1`;
    DOM.valProfitFactor.textContent = `${profitFactor}`;

    // Render Canvas Animation
    animateMonteCarloCanvas(pathsToRender, steps, entry, stop, target, () => {
      // Simulation paths fanned out!
      DOM.simPhaseBadge.textContent = "Resolved into 3D Towers";
      // Animate 3D Isometric Paper Towers
      renderIsometricTowers(winPct, lossPct, neitherPct);
      animatePercentageCountup(winPct, lossPct, neitherPct, winCount, lossCount, neitherCount);
      audio.playChime();
    });
  }

  /**
   * 60FPS Canvas Animation: Fans out 10,000 paths across time
   */
  function animateMonteCarloCanvas(paths, totalSteps, entry, stop, target, onFinish) {
    const canvas = DOM.timeMachineCanvas;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const minP = stop - 25;
    const maxP = target + 25;
    const priceToY = p => h - 20 - ((p - minP) / (maxP - minP)) * (h - 40);

    // Update visual boundary markers on canvas
    const yTargetPct = ((priceToY(target) / h) * 100).toFixed(1);
    const yEntryPct = ((priceToY(entry) / h) * 100).toFixed(1);
    const yStopPct = ((priceToY(stop) / h) * 100).toFixed(1);

    DOM.simLineTarget.style.top = `${yTargetPct}%`;
    DOM.simLineEntry.style.top = `${yEntryPct}%`;
    DOM.simLineStop.style.top = `${yStopPct}%`;
    DOM.simLabelTarget.textContent = `Target ₹${target.toFixed(2)}`;
    DOM.simLabelEntry.textContent = `Entry ₹${entry.toFixed(2)}`;
    DOM.simLabelStop.textContent = `Stop ₹${stop.toFixed(2)}`;

    DOM.simPhaseBadge.textContent = "10,000 NSE Paths Fanning Out...";

    const duration = 1600 / state.speedMultiplier;
    const startTime = performance.now();
    const startX = 35;
    const endX = w - 20;

    function renderFrame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const ease = Math.sin((progress * Math.PI) / 2); // Smooth ease out

      ctx.clearRect(0, 0, w, h);

      // Draw subtle time grid
      ctx.strokeStyle = 'rgba(222, 215, 200, 0.45)';
      ctx.lineWidth = 1;
      for (let x = startX + 50; x < endX; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 15);
        ctx.lineTo(x, h - 15);
        ctx.stroke();
      }

      // Render each path up to current animated time step
      const currentStepLimit = Math.max(1, Math.floor(totalSteps * ease));

      paths.forEach(p => {
        const points = p.points;
        const renderPointsCount = Math.min(currentStepLimit, points.length);
        if (renderPointsCount < 2) return;

        // Path Color based on simulated outcome
        if (p.type === 'win') {
          ctx.strokeStyle = 'rgba(47, 107, 63, 0.12)';
        } else if (p.type === 'loss') {
          ctx.strokeStyle = 'rgba(184, 74, 57, 0.11)';
        } else {
          ctx.strokeStyle = 'rgba(58, 79, 122, 0.08)';
        }

        ctx.lineWidth = 1.3;
        ctx.beginPath();

        for (let i = 0; i < renderPointsCount; i++) {
          const stepX = startX + (i / totalSteps) * (endX - startX);
          const stepY = priceToY(points[i]);

          if (i === 0) {
            ctx.moveTo(stepX, stepY);
          } else {
            ctx.lineTo(stepX, stepY);
          }
        }
        ctx.stroke();
      });

      if (progress < 1.0) {
        requestAnimationFrame(renderFrame);
      } else {
        if (onFinish) onFinish();
      }
    }

    requestAnimationFrame(renderFrame);
  }

  /**
   * 3D Isometric Stacked Paper Bar Towers
   * Renders 3 isometric columns (Win, Loss, Neither) with authentic
   * isometric projection (top, left, right faces) and paper shading.
   */
  function renderIsometricTowers(winPct, lossPct, neitherPct) {
    const svg = DOM.isoTowersSvg;
    svg.innerHTML = '';

    // Isometric Projection Constants (30 degree angle)
    const towerWidth = 44;
    const towerDepth = 34;
    const maxBarHeight = 135;

    // Heights scaled to percentage
    const hWin = Math.max(18, (winPct / 100) * maxBarHeight * 1.8);
    const hLoss = Math.max(18, (lossPct / 100) * maxBarHeight * 1.8);
    const hNeither = Math.max(18, (neitherPct / 100) * maxBarHeight * 1.8);

    // Three Isometric Tower Positions (X, Y bases on paper ground)
    const towers = [
      {
        name: "Hit Stop",
        type: "loss",
        baseX: 85,
        baseY: 200,
        height: hLoss,
        colors: {
          top: '#D96552',
          left: '#B84A39',
          right: '#9A3A2B',
          shadow: 'rgba(184, 74, 57, 0.2)'
        }
      },
      {
        name: "Hit Target",
        type: "win",
        baseX: 160,
        baseY: 230,
        height: hWin,
        colors: {
          top: '#439158',
          left: '#2F6B3F',
          right: '#22522E',
          shadow: 'rgba(47, 107, 63, 0.25)'
        }
      },
      {
        name: "Neither",
        type: "neither",
        baseX: 235,
        baseY: 200,
        height: hNeither,
        colors: {
          top: '#536E9E',
          left: '#3A4F7A',
          right: '#2C3C5F',
          shadow: 'rgba(58, 79, 122, 0.2)'
        }
      }
    ];

    // Background paper grid platform (isometric diamond grid)
    const gridPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gridPath.setAttribute('d', 'M160 140 L275 195 L160 250 L45 195 Z');
    gridPath.setAttribute('fill', '#ECE6D8');
    gridPath.setAttribute('stroke', '#DDD4BF');
    gridPath.setAttribute('stroke-width', '1.5');
    svg.appendChild(gridPath);

    // Subtle isometric grid lines on platform
    const innerGrid = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    innerGrid.setAttribute('d', 'M102 168 L218 223 M160 140 L160 250 M218 168 L102 223');
    innerGrid.setAttribute('stroke', '#DDD4BF');
    innerGrid.setAttribute('stroke-width', '1');
    innerGrid.setAttribute('stroke-dasharray', '3,3');
    svg.appendChild(innerGrid);

    // Draw each 3D Isometric Tower with paper shading
    towers.forEach(t => {
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.setAttribute('class', `iso-tower-group iso-${t.type}`);

      const bx = t.baseX;
      const by = t.baseY;
      const w = towerWidth;
      const d = towerDepth;
      const h = t.height;

      // Base Ground Shadow
      const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
      shadow.setAttribute('cx', bx);
      shadow.setAttribute('cy', by + 2);
      shadow.setAttribute('rx', w * 0.7);
      shadow.setAttribute('ry', d * 0.35);
      shadow.setAttribute('fill', t.colors.shadow);
      group.appendChild(shadow);

      // Left Vertical Face
      const leftFace = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      leftFace.setAttribute('points', `
        ${bx - w/2},${by - d/4}
        ${bx},${by}
        ${bx},${by - h}
        ${bx - w/2},${by - d/4 - h}
      `);
      leftFace.setAttribute('fill', t.colors.left);
      group.appendChild(leftFace);

      // Right Vertical Face
      const rightFace = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      rightFace.setAttribute('points', `
        ${bx},${by}
        ${bx + w/2},${by - d/4}
        ${bx + w/2},${by - d/4 - h}
        ${bx},${by - h}
      `);
      rightFace.setAttribute('fill', t.colors.right);
      group.appendChild(rightFace);

      // Top Isometric Diamond Cap
      const topFace = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      topFace.setAttribute('points', `
        ${bx},${by - h - d/2}
        ${bx + w/2},${by - h - d/4}
        ${bx},${by - h}
        ${bx - w/2},${by - h - d/4}
      `);
      topFace.setAttribute('fill', t.colors.top);
      topFace.setAttribute('stroke', '#FFFFFF');
      topFace.setAttribute('stroke-width', '1');
      topFace.setAttribute('stroke-opacity', '0.4');
      group.appendChild(topFace);

      // Paper stack contour stripes (authentic stacked paper look)
      for (let s = 14; s < h; s += 16) {
        const lineL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lineL.setAttribute('x1', bx - w/2);
        lineL.setAttribute('y1', by - d/4 - s);
        lineL.setAttribute('x2', bx);
        lineL.setAttribute('y2', by - s);
        lineL.setAttribute('stroke', 'rgba(255, 255, 255, 0.22)');
        lineL.setAttribute('stroke-width', '1');
        group.appendChild(lineL);

        const lineR = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lineR.setAttribute('x1', bx);
        lineR.setAttribute('y1', by - s);
        lineR.setAttribute('x2', bx + w/2);
        lineR.setAttribute('y2', by - d/4 - s);
        lineR.setAttribute('stroke', 'rgba(0, 0, 0, 0.15)');
        lineR.setAttribute('stroke-width', '1');
        group.appendChild(lineR);
      }

      svg.appendChild(group);
    });
  }

  function animatePercentageCountup(winPct, lossPct, neitherPct, winCount, lossCount, neitherCount) {
    const duration = 1000 / state.speedMultiplier;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const ease = 1 - Math.pow(1 - progress, 3);

      DOM.pctWin.textContent = `${(winPct * ease).toFixed(1)}%`;
      DOM.pctLoss.textContent = `${(lossPct * ease).toFixed(1)}%`;
      DOM.pctNeither.textContent = `${(neitherPct * ease).toFixed(1)}%`;

      DOM.countWin.textContent = `${Math.floor(winCount * ease).toLocaleString('en-IN')} paths`;
      DOM.countLoss.textContent = `${Math.floor(lossCount * ease).toLocaleString('en-IN')} paths`;
      DOM.countNeither.textContent = `${Math.floor(neitherCount * ease).toLocaleString('en-IN')} paths`;

      if (progress < 1.0) {
        requestAnimationFrame(step);
      } else {
        DOM.pctWin.textContent = `${winPct.toFixed(1)}%`;
        DOM.pctLoss.textContent = `${lossPct.toFixed(1)}%`;
        DOM.pctNeither.textContent = `${neitherPct.toFixed(1)}%`;
      }
    }

    requestAnimationFrame(step);
  }

  // ==========================================================================
  // EVENT LISTENERS & USER CONTROLS
  // ==========================================================================
  function setupEventListeners() {
    // Pipeline Pill Tabs Click
    DOM.pipelineSteps.forEach(step => {
      step.addEventListener('click', () => {
        const stageIndex = parseInt(step.dataset.stage, 10);
        setStage(stageIndex, true);
      });
      step.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const stageIndex = parseInt(step.dataset.stage, 10);
          setStage(stageIndex, true);
        }
      });
    });

    // Play / Pause Button
    DOM.playPauseBtn.addEventListener('click', togglePlayPause);

    // Prev / Next Buttons
    DOM.prevStageBtn.addEventListener('click', () => {
      setStage(state.currentStage - 1, true);
    });

    DOM.nextStageBtn.addEventListener('click', () => {
      setStage(state.currentStage + 1, true);
    });

    // Keyboard Shortcuts (Space: Play/Pause, Arrows: Navigation)
    window.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT') return; // Ignore when dragging sliders
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        setStage(state.currentStage - 1, true);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        setStage(state.currentStage + 1, true);
      }
    });

    // Sound Toggle
    DOM.soundToggleBtn.addEventListener('click', () => {
      const isOn = audio.toggle();
      DOM.soundToggleBtn.classList.toggle('active', isOn);
      DOM.soundIcon.className = isOn ? "fa-solid fa-volume-high" : "fa-solid fa-volume-xmark";
      DOM.soundToggleBtn.querySelector('.btn-text').textContent = isOn ? "Sound: On" : "Sound: Off";
      if (isOn) audio.playChime();
    });

    // Speed Chips (1x, 1.5x, 2x)
    DOM.speedChips.forEach(chip => {
      chip.addEventListener('click', () => {
        DOM.speedChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.speedMultiplier = parseFloat(chip.dataset.speed);
      });
    });

    // Stage 5 Interactive Sliders (₹ INR)
    DOM.sliderEntry.addEventListener('input', e => {
      const val = parseFloat(e.target.value);
      state.simParams.entry = val;
      DOM.valEntry.textContent = `₹${val.toFixed(2)}`;
    });

    DOM.sliderStop.addEventListener('input', e => {
      const val = parseFloat(e.target.value);
      state.simParams.stop = val;
      DOM.valStop.textContent = `₹${val.toFixed(2)}`;
    });

    DOM.sliderTarget.addEventListener('input', e => {
      const val = parseFloat(e.target.value);
      state.simParams.target = val;
      DOM.valTarget.textContent = `₹${val.toFixed(2)}`;
    });

    // "Re-run 10,000 replays" Button
    DOM.rerunSimBtn.addEventListener('click', () => {
      audio.playTick();
      animateReplayCounter(10000);
      executeMonteCarloSimulation();
    });
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  function init() {
    setupEventListeners();
    setStage(0);
    state.animationFrameId = requestAnimationFrame(tick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
