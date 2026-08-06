const { useState, useEffect } = React;

/* ---------- Icons (inline SVG, zero dependencies, works offline) ---------- */
const Svg = ({ cls = "w-5 h-5", sw = 1.5, children }) => (
  <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const P = d => <path d={d} />;

const Flame    = p => <Svg {...p}>{P("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z")}</Svg>;
const Cog      = p => <Svg {...p}><circle cx="12" cy="12" r="3"/>{P("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z")}</Svg>;
const Alert    = p => <Svg {...p}>{P("M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z")}{P("M12 9v4")}{P("M12 17h.01")}</Svg>;
const ChevR    = p => <Svg {...p}>{P("m9 18 6-6-6-6")}</Svg>;
const ChevL    = p => <Svg {...p}>{P("m15 18-6-6 6-6")}</Svg>;
const Check    = p => <Svg {...p}>{P("M20 6 9 17l-5-5")}</Svg>;
const Trash    = p => <Svg {...p}>{P("M3 6h18")}{P("M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2")}</Svg>;
const Share    = p => <Svg {...p}>{P("M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8")}{P("m16 6-4-4-4 4")}{P("M12 2v13")}</Svg>;
const HomeI    = p => <Svg {...p}>{P("M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z")}{P("M9 22V12h6v10")}</Svg>;
const Book     = p => <Svg {...p}>{P("M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z")}{P("M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z")}</Svg>;
const PhoneI   = p => <Svg {...p}>{P("M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z")}</Svg>;
const HeartI   = p => <Svg {...p}>{P("M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z")}</Svg>;
const BabyI    = p => <Svg {...p}>{P("M9 12h.01")}{P("M15 12h.01")}{P("M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5")}{P("M17.6 6.5a9 9 0 0 1 2.4 6.1 8 8 0 0 1-16 0 9 9 0 0 1 9.3-9")}</Svg>;
const MoonI    = p => <Svg {...p}>{P("M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z")}</Svg>;
const CoffeeI  = p => <Svg {...p}>{P("M18 8h1a4 4 0 0 1 0 8h-1")}{P("M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z")}{P("M6 2v2")}{P("M10 2v2")}{P("M14 2v2")}</Svg>;
const EyeI     = p => <Svg {...p}>{P("M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z")}<circle cx="12" cy="12" r="3"/></Svg>;
const BrainI   = p => <Svg {...p}>{P("M12 5a3 3 0 1 0-5.99.13 4 4 0 0 0-2.53 5.77 4 4 0 0 0 .56 6.59A4 4 0 0 0 12 18Z")}{P("M12 5a3 3 0 1 1 5.99.13 4 4 0 0 1 2.53 5.77 4 4 0 0 1-.56 6.59A4 4 0 0 1 12 18Z")}</Svg>;
const TrophyI  = p => <Svg {...p}>{P("M6 9H4.5a2.5 2.5 0 0 1 0-5H6")}{P("M18 9h1.5a2.5 2.5 0 0 0 0-5H18")}{P("M4 22h16")}{P("M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22")}{P("M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22")}{P("M18 2H6v7a6 6 0 0 0 12 0V2Z")}</Svg>;
const ArrUR    = p => <Svg {...p}>{P("M7 17 17 7")}{P("M7 7h10v10")}</Svg>;
const ArrR     = p => <Svg {...p}>{P("M5 12h14")}{P("m12 5 7 7-7 7")}</Svg>;

/* ---------- Storage ---------- */
const store = {
  get(k)      { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v)   { try { localStorage.setItem(k, v); } catch (e) {} },
  del(k)      { try { localStorage.removeItem(k); } catch (e) {} }
};

const today   = () => new Date().toISOString().split('T')[0];
const weekOf  = bd => Math.max(1, Math.min(12, Math.floor(Math.floor((new Date() - new Date(bd + 'T12:00:00')) / 864e5) / 7) + 1));
const dayOf   = bd => Math.max(0, Math.floor((new Date() - new Date(bd + 'T12:00:00')) / 864e5));
const buzz    = () => { try { navigator.vibrate && navigator.vibrate(8); } catch (e) {} };

function getTodaysTips(week, dayInWeek) {
  const all = TIPS_BY_WEEK[week] || TIPS_BY_WEEK[1];
  const s = ((dayInWeek - 1) * 3) % all.length;
  return [all[s % all.length], all[(s + 1) % all.length], all[(s + 2) % all.length]];
}

/* ---------- Root ---------- */
function DadAgain() {
  // Load everything synchronously on first render. No blank-screen window.
  const boot = (() => {
    let p = null;
    try { p = JSON.parse(store.get('babyProfile')); } catch (e) {}
    if (!p || !p.birthdate) return { screen: 'onboarding', baby: null, prog: null, notif: null, celebrate: null };

    let g = null;
    try { g = JSON.parse(store.get('userProgress')); } catch (e) {}
    if (!g || typeof g.streakDays !== 'number') {
      g = { streakDays: 1, lastOpenedDate: today(), totalPoints: 5, weeklyChecklists: {}, celebrationsShown: [] };
    } else {
      const diff = Math.floor((new Date(today()) - new Date(g.lastOpenedDate)) / 864e5);
      if (diff === 1) { g.streakDays++; g.totalPoints += 5; }
      else if (diff > 1) { g.streakDays = 1; g.totalPoints += 5; }
      g.lastOpenedDate = today();
    }
    if (!g.weeklyChecklists) g.weeklyChecklists = {};
    if (!g.celebrationsShown) g.celebrationsShown = [];
    store.set('userProgress', JSON.stringify(g));

    let n = null;
    try { n = JSON.parse(store.get('notifPrefs')); } catch (e) {}
    if (!n) n = { dailyEnabled: true, dailyTime: '08:00', weeklyEnabled: true };

    const w = weekOf(p.birthdate);
    const cel = (w > 1 && w <= 12 && g.celebrationsShown.indexOf(w - 1) === -1) ? w - 1 : null;

    return { screen: 'home', baby: p, prog: g, notif: n, celebrate: cel };
  })();

  const [screen, setScreen] = useState(boot.screen);
  const [baby, setBaby] = useState(boot.baby);
  const [prog, setProg] = useState(boot.prog);
  const [notif, setNotif] = useState(boot.notif || { dailyEnabled: true, dailyTime: '08:00', weeklyEnabled: true });
  const [celebrate, setCelebrate] = useState(boot.celebrate);
  const [qh, setQh] = useState(null);
  const [guide, setGuide] = useState(null);
  const [step, setStep] = useState(0);
  const [tmpBaby, setTmpBaby] = useState({ name: '', birthdate: today() });
  const [tmpNotif, setTmpNotif] = useState({ dailyEnabled: true, dailyTime: '08:00', weeklyEnabled: true });

  useEffect(() => {
    const el = document.getElementById('boot');
    if (el) el.remove();
  }, []);

  // Scroll to top whenever the screen changes
  useEffect(() => { try { window.scrollTo(0, 0); } catch (e) {} }, [screen, qh, guide]);

  const finishOnboarding = () => {
    const p = { name: tmpBaby.name.trim(), birthdate: tmpBaby.birthdate };
    const g = { streakDays: 1, lastOpenedDate: today(), totalPoints: 5, weeklyChecklists: {}, celebrationsShown: [] };
    store.set('babyProfile', JSON.stringify(p));
    store.set('userProgress', JSON.stringify(g));
    store.set('notifPrefs', JSON.stringify(tmpNotif));
    setBaby(p); setProg(g); setNotif(tmpNotif); setScreen('home');
  };

  const toggleTask = (week, id) => {
    buzz();
    const g = JSON.parse(JSON.stringify(prog));
    if (!g.weeklyChecklists[week]) g.weeklyChecklists[week] = {};
    const was = g.weeklyChecklists[week][id];
    g.weeklyChecklists[week][id] = !was;
    g.totalPoints = Math.max(0, g.totalPoints + (was ? -10 : 10));
    setProg(g); store.set('userProgress', JSON.stringify(g));
  };

  const dismissCelebration = () => {
    const g = JSON.parse(JSON.stringify(prog));
    if (g.celebrationsShown.indexOf(celebrate) === -1) g.celebrationsShown.push(celebrate);
    setProg(g); store.set('userProgress', JSON.stringify(g));
    setCelebrate(null);
  };

  const saveBaby  = u => { const n = { ...baby, ...u }; setBaby(n); store.set('babyProfile', JSON.stringify(n)); };
  const saveNotif = u => { const n = { ...notif, ...u }; setNotif(n); store.set('notifPrefs', JSON.stringify(n)); };
  const wipe = () => {
    store.del('babyProfile'); store.del('userProgress'); store.del('notifPrefs');
    setBaby(null); setProg(null); setStep(0);
    setTmpBaby({ name: '', birthdate: today() });
    setScreen('onboarding');
  };

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-[#f5f2ed] max-w-md mx-auto relative overflow-x-hidden">
      <div className="fixed inset-0 grain opacity-[.04] pointer-events-none mix-blend-screen z-50" />
      {screen === 'onboarding' && <Onboarding {...{ step, setStep, tmpBaby, setTmpBaby, tmpNotif, setTmpNotif, finishOnboarding, setScreen, setQh }} />}
      {screen === 'home'       && baby && prog && <HomeScreen {...{ baby, prog, toggleTask, setScreen, setQh }} />}
      {screen === 'quickhelp'  && <QuickHelp {...{ qh, setQh, setScreen, orphan: !baby }} />}
      {screen === 'guides'     && <Guides {...{ guide, setGuide }} />}
      {screen === 'milestones' && baby && <Milestones week={weekOf(baby.birthdate)} />}
      {screen === 'settings'   && baby && prog && <SettingsScreen {...{ baby, prog, notif, saveBaby, saveNotif, wipe }} />}
      {celebrate && <Celebration week={celebrate} name={baby && baby.name} onDone={dismissCelebration} />}
      {baby && screen !== 'onboarding' && screen !== 'quickhelp' && <Nav screen={screen} setScreen={setScreen} />}
    </div>
  );
}

/* ---------- Shared bits ---------- */
const Toggle = ({ label, sub, on, onClick }) => (
  <button onClick={() => { buzz(); onClick(); }}
    className="w-full flex items-center justify-between py-5 border-b border-[#1c1a17] text-left">
    <div>
      <div className="text-[16px] font-medium">{label}</div>
      <div className="text-[13px] text-[#8b8579] mt-0.5">{sub}</div>
    </div>
    <div className={"w-11 h-[26px] rounded-full relative transition-colors shrink-0 ml-4 " + (on ? "bg-[#d97757]" : "bg-[#2a2622]")}>
      <div className={"absolute top-[3px] w-5 h-5 bg-[#f5f2ed] rounded-full transition-transform " + (on ? "translate-x-[23px]" : "translate-x-[3px]")} />
    </div>
  </button>
);

const Header = ({ kicker, title, onBack, accent }) => (
  <div className="sticky top-0 bg-[#0d0c0a]/92 backdrop-blur-xl border-b border-[#1c1a17] z-30"
       style={{ paddingTop: 'env(safe-area-inset-top)' }}>
    <div className="px-6 py-4 flex items-center gap-4">
      <button onClick={() => { buzz(); onBack(); }}
        className="w-10 h-10 rounded-full border border-[#3a3530] flex items-center justify-center shrink-0 active:bg-[#1c1a17]">
        <ChevL cls="w-4 h-4 text-[#a8a39a]" />
      </button>
      <div className="min-w-0">
        <div className={"mono text-[10px] tracking-[.25em] uppercase " + (accent || "text-[#5a5650]")}>{kicker}</div>
        <div className="serif text-[18px] font-medium leading-tight truncate">{title}</div>
      </div>
    </div>
  </div>
);

const PageTitle = ({ kicker, line1, line2, sub }) => (
  <div className="px-6 pt-safe pb-2">
    <div className="mono text-[10px] tracking-[.3em] uppercase text-[#8b8579] mb-3">{kicker}</div>
    <h1 className="serif text-[42px] leading-[.95] font-light">{line1}<br /><span className="italic text-[#d97757]">{line2}</span></h1>
    {sub && <p className="text-[14px] text-[#a8a39a] mt-4 leading-relaxed font-light">{sub}</p>}
  </div>
);

/* ---------- Onboarding ---------- */
function Onboarding({ step, setStep, tmpBaby, setTmpBaby, tmpNotif, setTmpNotif, finishOnboarding, setScreen, setQh }) {
  if (step === 0) return (
    <div className="min-h-screen flex flex-col px-6 pt-safe pb-safe relative">
      <div className="absolute top-16 right-0 w-72 h-72 bg-[#d97757]/12 rounded-full blur-3xl pointer-events-none"
           style={{ animation: 'breathe 7s ease-in-out infinite' }} />
      <div className="absolute bottom-32 -left-24 w-72 h-72 bg-[#7ba378]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex-1 flex flex-col anim-up">
        <div className="mono text-[10px] tracking-[.4em] uppercase text-[#8b8579] mb-10">◌&nbsp;&nbsp;It's chaos. We know.</div>

        <h1 className="serif text-[58px] leading-[.93] tracking-[-.02em] font-light">You've done<br />this before.</h1>
        <h1 className="serif text-[58px] leading-[.93] tracking-[-.02em] font-light italic text-[#d97757] mb-8">You forgot.</h1>

        <p className="serif-text text-[19px] leading-[1.5] text-[#d4cec3] max-w-[320px] font-light">
          That's normal. The first one was a blur. This one is foggier.
        </p>
        <p className="serif-text text-[19px] leading-[1.5] text-[#a8a39a] max-w-[320px] font-light mt-1">
          We made you the cheat sheet.
        </p>

        <div className="mt-auto pt-10 border-t border-[#1c1a17]">
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#5a5650] mb-4">What's in here</div>
          {["Tactical info, keyed to your kid's exact age",
            "Quick answers when something looks wrong",
            "Postpartum signs, so you can back her up",
            "No ads. No blogger fluff. No upsell."].map((t, i) => (
            <div key={i} className="flex gap-3.5 items-start mb-3">
              <span className="text-[#d97757] mt-[7px] text-[5px]">●</span>
              <span className="text-[14px] text-[#d4cec3] leading-relaxed flex-1">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative space-y-3 mt-8 anim-up-2">
        <button onClick={() => { buzz(); setStep(1); }}
          className="w-full bg-[#d97757] active:bg-[#b85a3d] text-[#0d0c0a] h-14 rounded-full flex items-center justify-center gap-2 font-medium text-[15px]">
          Set this up <ArrR cls="w-4 h-4" sw={2} />
        </button>
        <button onClick={() => { buzz(); setQh(null); setScreen('quickhelp'); }}
          className="w-full border border-[#3a3530] active:bg-[#1f0f0a] h-14 rounded-full flex items-center justify-center gap-2">
          <Alert cls="w-4 h-4 text-[#dc4444]" sw={2} />
          <span className="text-[14px] font-medium text-[#e8e3d8]">I need help right now</span>
        </button>
        <div className="text-center pt-1">
          <span className="mono text-[10px] tracking-[.3em] uppercase text-[#3a3530]">Takes 30 seconds</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col px-6 pt-safe pb-safe">
      <div className="flex items-center justify-between mb-12">
        <button onClick={() => { buzz(); setStep(step - 1); }}
          className="w-10 h-10 rounded-full border border-[#3a3530] flex items-center justify-center active:bg-[#1c1a17]">
          <ChevL cls="w-4 h-4 text-[#a8a39a]" />
        </button>
        <div className="flex gap-1.5">
          {[1, 2].map(i => <div key={i} className={"h-[2px] w-9 transition-all " + (i <= step ? "bg-[#d97757]" : "bg-[#2a2622]")} />)}
        </div>
        <span className="mono text-[10px] tracking-[.3em] text-[#8b8579] tabular-nums">0{step}/02</span>
      </div>

      {step === 1 && (
        <div className="flex-1 anim-up">
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757] mb-6">The kid</div>
          <h2 className="serif text-[42px] leading-[.95] mb-4 font-light">When were<br />they born?</h2>
          <p className="text-[15px] text-[#a8a39a] mb-12 leading-relaxed font-light max-w-[300px]">
            Everything keys off this. Your kid, your week, your tips.
          </p>
          <label className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579] mb-3 block">Birthdate</label>
          <input type="date" value={tmpBaby.birthdate} max={today()}
            onChange={e => setTmpBaby({ ...tmpBaby, birthdate: e.target.value })}
            className="w-full bg-transparent border-b border-[#3a3530] py-3 text-[20px] text-[#f5f2ed] focus:border-[#d97757] focus:outline-none mb-8" />
          <label className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579] mb-3 block">
            Their name <span className="text-[#5a5650] normal-case tracking-normal">if you want</span>
          </label>
          <input type="text" placeholder="Mason, Sloane, anything" value={tmpBaby.name}
            onChange={e => setTmpBaby({ ...tmpBaby, name: e.target.value })}
            className="w-full bg-transparent border-b border-[#3a3530] py-3 text-[20px] text-[#f5f2ed] placeholder-[#5a5650] focus:border-[#d97757] focus:outline-none" />
        </div>
      )}

      {step === 2 && (
        <div className="flex-1 anim-up">
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757] mb-6">Last thing</div>
          <h2 className="serif text-[42px] leading-[.95] mb-4 font-light">One tip,<br />each morning?</h2>
          <p className="text-[15px] text-[#a8a39a] mb-10 leading-relaxed font-light max-w-[300px]">
            That's the whole plan. Turn it off any time.
          </p>
          <Toggle label="Daily heads-up" sub="One tactical tip for the day" on={tmpNotif.dailyEnabled}
            onClick={() => setTmpNotif({ ...tmpNotif, dailyEnabled: !tmpNotif.dailyEnabled })} />
          {tmpNotif.dailyEnabled && (
            <div className="pl-1 py-4 anim-fade">
              <div className="mono text-[10px] tracking-[.25em] uppercase text-[#5a5650] mb-2">Send at</div>
              <input type="time" value={tmpNotif.dailyTime}
                onChange={e => setTmpNotif({ ...tmpNotif, dailyTime: e.target.value })}
                className="bg-transparent border-b border-[#3a3530] py-1 text-[16px] text-[#d4cec3] mono focus:border-[#d97757] focus:outline-none" />
            </div>
          )}
          <Toggle label="Weekly summary" sub="Sunday recap, what's coming" on={tmpNotif.weeklyEnabled}
            onClick={() => setTmpNotif({ ...tmpNotif, weeklyEnabled: !tmpNotif.weeklyEnabled })} />
        </div>
      )}

      <button onClick={() => { buzz(); step < 2 ? setStep(step + 1) : finishOnboarding(); }}
        className="w-full bg-[#d97757] active:bg-[#b85a3d] text-[#0d0c0a] h-14 rounded-full flex items-center justify-center gap-2 font-medium text-[15px] mt-10">
        {step < 2 ? 'Continue' : 'Take me in'} <ArrR cls="w-4 h-4" sw={2} />
      </button>
    </div>
  );
}

/* ---------- Home ---------- */
function HomeScreen({ baby, prog, toggleTask, setScreen, setQh }) {
  const week = weekOf(baby.birthdate);
  const day = dayOf(baby.birthdate);
  const tips = getTodaysTips(week, ((day - 1) % 7) + 1);
  const tasks = WEEKLY_CHECKLISTS[week] || [];
  const done = prog.weeklyChecklists[week] || {};
  const n = Object.keys(done).filter(k => done[k]).length;
  const pct = tasks.length ? Math.round(n / tasks.length * 100) : 0;
  const h = new Date().getHours();
  const greet = h < 5 ? "Still up." : h < 12 ? "Morning." : h < 17 ? "Afternoon." : h < 21 ? "Evening." : "Late again.";

  return (
    <div className="pb-36 anim-fade">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d97757]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="px-6 pt-safe pb-6 flex items-center justify-between relative anim-up">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#d97757] to-[#a85d3f] flex items-center justify-center">
            <Flame cls="w-3.5 h-3.5 text-[#0d0c0a]" sw={2.5} />
          </div>
          <span className="mono text-[13px] font-medium tabular-nums">{prog.streakDays}</span>
        </div>
        <div className="serif text-[18px] font-medium">Dad <span className="italic text-[#d97757]">again</span></div>
        <button onClick={() => { buzz(); setScreen('settings'); }} className="w-9 h-9 flex items-center justify-center text-[#a8a39a]">
          <Cog cls="w-[18px] h-[18px]" />
        </button>
      </div>

      <div className="px-6 mb-7 relative anim-up-1">
        <div className="flex items-center gap-3 mb-5">
          <span className="mono text-[10px] tracking-[.3em] uppercase text-[#5a5650]">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </span>
          <div className="h-px flex-1 bg-[#1c1a17]" />
          <span className="serif-text text-[12px] italic text-[#8b8579]">{greet}</span>
        </div>
        <div className="flex items-baseline gap-2.5 flex-wrap">
          {day === 0 ? (
            <span className="serif text-[42px] leading-none font-light">
              {baby.name ? baby.name + ' arrived' : 'Born'} <span className="italic text-[#d97757]">today</span>
            </span>
          ) : (
            <React.Fragment>
              {baby.name && <span className="serif text-[42px] leading-none font-light">{baby.name}</span>}
              <span className="serif text-[22px] italic font-light text-[#a8a39a]">{baby.name ? 'is' : ''}</span>
              <span className="serif text-[42px] leading-none font-light tabular-nums">{day}</span>
              <span className="serif text-[22px] italic font-light text-[#a8a39a]">{day === 1 ? 'day old' : 'days old'}</span>
            </React.Fragment>
          )}
        </div>
        <div className="flex items-center gap-3 mt-5">
          <div className="flex-1 h-px bg-[#2a2622]" />
          <span className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579]">Week {week} of 12</span>
          <div className="flex-1 h-px bg-[#2a2622]" />
        </div>
      </div>

      <div className="mx-6 mb-4 anim-up-2">
        <div className="relative overflow-hidden rounded-2xl border border-[#2a2622]"
             style={{ background: 'linear-gradient(180deg,rgba(217,119,87,.05),rgba(13,12,10,.4))' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d97757]/10 rounded-full blur-2xl" />
          <div className="relative p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#d97757] rounded-full" style={{ animation: 'pulseSoft 2s ease-in-out infinite' }} />
                <span className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757]">Today</span>
              </div>
              <span className="mono text-[10px] text-[#5a5650]">{tips.length} things</span>
            </div>
            {tips.map((t, i) => (
              <div key={i} className="flex gap-4 mb-5 last:mb-0">
                <span className="serif text-[22px] italic font-light text-[#d97757]/70 leading-none mt-1">0{i + 1}</span>
                <p className="serif-text text-[16px] leading-[1.5] text-[#e8e3d8] flex-1 font-light">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 mb-4 anim-up-3">
        <button onClick={() => { buzz(); setQh(null); setScreen('quickhelp'); }}
          className="w-full relative overflow-hidden rounded-2xl active:scale-[.99] transition-transform"
          style={{ background: 'linear-gradient(135deg,#1f0f0a,#2a1410)' }}>
          <div className="absolute inset-0 border border-[#5a2418]/50 rounded-2xl" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#dc4444]/12 rounded-full blur-3xl" />
          <div className="relative p-6 flex items-center justify-between">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <Alert cls="w-4 h-4 text-[#dc4444]" sw={2} />
                <span className="mono text-[10px] tracking-[.3em] uppercase text-[#dc4444]">Something off?</span>
              </div>
              <div className="serif text-[27px] leading-none font-light mb-1.5">Quick Help</div>
              <div className="text-[13px] text-[#a8a39a]">Crying. Weird poop. 3am panic.</div>
            </div>
            <div className="w-11 h-11 rounded-full bg-[#dc4444] flex items-center justify-center shrink-0">
              <ChevR cls="w-4 h-4 text-[#0d0c0a]" sw={2.5} />
            </div>
          </div>
        </button>
      </div>

      <div className="mx-6 mb-4 anim-up-4">
        <div className="rounded-2xl border border-[#2a2622] bg-[#14130f] p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="mono text-[10px] tracking-[.3em] uppercase text-[#8b8579] mb-1">This week</div>
              <div className="serif text-[27px] leading-none font-light">Week <span className="italic text-[#d97757]">{week}</span></div>
            </div>
            <div className="text-right">
              <div className="mono text-[27px] leading-none font-light tabular-nums">{pct}<span className="text-[14px] text-[#5a5650]">%</span></div>
              <div className="mono text-[10px] text-[#5a5650] mt-1">{n} / {tasks.length}</div>
            </div>
          </div>
          <div className="h-[2px] bg-[#2a2622] mb-5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#d97757] to-[#e89572] transition-all duration-700" style={{ width: pct + '%' }} />
          </div>
          {tasks.map((t, i) => (
            <button key={i} onClick={() => toggleTask(week, i)}
              className="w-full flex items-start gap-4 py-3.5 text-left border-b border-[#1c1a17] last:border-0">
              <div className={"mt-px w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all " + (done[i] ? "bg-[#d97757] border-[#d97757]" : "border-[#3a3530]")}>
                {done[i] && <Check cls="w-3 h-3 text-[#0d0c0a]" sw={3} />}
              </div>
              <span className={"text-[15px] leading-snug flex-1 " + (done[i] ? "text-[#5a5650] line-through decoration-[#3a3530]" : "text-[#d4cec3]")}>{t}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-6 grid grid-cols-2 gap-3 anim-up-4">
        {[['guides', Book, 'Guides', 'Reference manuals'], ['milestones', TrophyI, 'Milestones', 'Track development']].map(([id, I, title, sub]) => (
          <button key={id} onClick={() => { buzz(); setScreen(id); }}
            className="relative overflow-hidden rounded-2xl border border-[#2a2622] bg-[#14130f] p-5 text-left active:bg-[#1c1a17]">
            <I cls="w-5 h-5 text-[#a8a39a] mb-8" />
            <div className="serif text-[19px] leading-none font-light mb-1">{title}</div>
            <div className="text-[12px] text-[#8b8579]">{sub}</div>
            <ArrUR cls="w-3.5 h-3.5 absolute top-4 right-4 text-[#5a5650]" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav({ screen, setScreen }) {
  const items = [['home', HomeI, 'Today'], ['guides', Book, 'Guides'], ['milestones', TrophyI, 'Growth'], ['settings', Cog, 'Settings']];
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/95 to-transparent pointer-events-none" />
      <div className="relative px-6 pt-5" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}>
        <div className="bg-[#14130f]/85 backdrop-blur-xl border border-[#2a2622] rounded-full p-2.5 flex justify-between">
          {items.map(([id, I, label]) => {
            const on = screen === id;
            return (
              <button key={id} onClick={() => { buzz(); setScreen(id); }}
                className={"flex flex-col items-center gap-1 px-4 py-1.5 rounded-full transition-colors " + (on ? "bg-[#d97757] text-[#0d0c0a]" : "text-[#8b8579]")}>
                <I cls="w-[18px] h-[18px]" sw={on ? 2.4 : 1.5} />
                <span className={"text-[10px] " + (on ? "font-semibold" : "font-medium")}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Quick Help ---------- */
function QuickHelp({ qh, setQh, setScreen, orphan }) {
  if (qh !== null) {
    const c = QUICK_HELP[qh];
    return (
      <div className="pb-16 anim-fade min-h-screen">
        <Header kicker="Quick Help" title={c.title} accent="text-[#dc4444]" onBack={() => setQh(null)} />
        <div className="px-6 py-8">
          <div className="text-[72px] leading-none mb-8">{c.emoji}</div>
          {c.sections.map((s, i) => (
            <div key={i} className="mb-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757] shrink-0">0{i + 1}</span>
                <h3 className={"serif text-[21px] leading-tight font-light flex-1 " + (s.danger ? "text-[#dc4444]" : "")}>{s.heading}</h3>
              </div>
              <div className={s.danger ? "space-y-2" : "space-y-2 pl-8"}>
                {s.items.map((it, j) => (
                  <div key={j} className={"p-4 rounded-xl " + (s.danger ? "bg-[#1f0f0a] border border-[#5a2418]/50" : "border border-[#2a2622]/60 bg-[#14130f]/50")}>
                    {typeof it === 'string'
                      ? <p className="text-[14px] text-[#d4cec3] leading-relaxed">{it}</p>
                      : <div>
                          <div className="serif-text text-[15px] font-medium mb-1">{it.label}</div>
                          <div className="text-[13px] text-[#8b8579] leading-relaxed">{it.detail}</div>
                        </div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16 anim-fade min-h-screen">
      <Header kicker="Emergency" title="Quick Help" accent="text-[#dc4444]"
              onBack={() => setScreen(orphan ? 'onboarding' : 'home')} />
      <div className="px-6 py-8">
        <p className="serif-text text-[18px] text-[#a8a39a] mb-8 leading-relaxed font-light">
          Tap what's happening.<br />Get the answer, fast.
        </p>
        {QUICK_HELP.map((c, i) => (
          <button key={i} onClick={() => { buzz(); setQh(i); }}
            className="w-full border-b border-[#1c1a17] py-5 flex items-center gap-5 text-left active:bg-[#14130f]">
            <span className="text-[38px] leading-none shrink-0">{c.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="serif text-[19px] font-light leading-tight mb-0.5">{c.title}</div>
              <div className="text-[12px] text-[#8b8579]">{c.sub}</div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#3a3530] flex items-center justify-center shrink-0">
              <ChevR cls="w-3.5 h-3.5 text-[#a8a39a]" />
            </div>
          </button>
        ))}

        <div className="mt-9 relative overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(135deg,#1f0f0a,#2a1410)' }}>
          <div className="absolute inset-0 border border-[#5a2418]/60 rounded-2xl" />
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#dc4444]/12 rounded-full blur-3xl" />
          <div className="relative p-6">
            <div className="flex items-center gap-2 mb-4">
              <PhoneI cls="w-4 h-4 text-[#dc4444]" sw={2} />
              <span className="mono text-[10px] tracking-[.3em] uppercase text-[#dc4444]">Call 911 if</span>
            </div>
            {["Baby is blue (lips, face)", "Not breathing, or struggling to",
              "Won't wake up or is unresponsive", "Seizure", "Severe bleeding",
              "Major fall or injury", "Mom talks about harming herself or the baby"].map((t, i) => (
              <div key={i} className="flex gap-3 text-[14px] text-[#e8e3d8] leading-relaxed mb-2.5 last:mb-0">
                <span className="text-[#dc4444] mt-[7px] text-[5px]">●</span><span>{t}</span>
              </div>
            ))}
            <a href="tel:911" className="mt-5 w-full h-12 rounded-full bg-[#dc4444] text-[#0d0c0a] flex items-center justify-center gap-2 font-semibold text-[15px] active:bg-[#b83636]">
              <PhoneI cls="w-4 h-4" sw={2.5} /> Call 911
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Guides ---------- */
function Guides({ guide, setGuide }) {
  if (guide !== null) {
    const g = GUIDES[guide];
    return (
      <div className="pb-36 anim-fade">
        <Header kicker="Reference" title={g.title} onBack={() => setGuide(null)} />
        <div className="px-6 py-8">
          <div className="w-12 h-12 rounded-full border border-[#3a3530] flex items-center justify-center mb-8 text-[#d97757]">
            <g.icon cls="w-5 h-5" />
          </div>
          {g.sections.map((s, i) => (
            <div key={i} className="mb-9">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757] shrink-0">0{i + 1}</span>
                <h3 className="serif text-[21px] leading-tight font-light flex-1">{s.heading}</h3>
              </div>
              <div className="pl-8">
                {s.list.map((it, j) => (
                  <div key={j} className="flex gap-3 items-start text-[14px] text-[#d4cec3] mb-2.5">
                    <span className="mono text-[#5a5650] mt-1 text-[10px] shrink-0">{String(j + 1).padStart(2, '0')}</span>
                    <span className="leading-relaxed flex-1">{it}</span>
                  </div>
                ))}
                {s.danger && (
                  <div className="mt-4 rounded-xl bg-[#1f0f0a] border border-[#5a2418]/50 p-4">
                    <div className="mono text-[10px] tracking-[.3em] uppercase text-[#dc4444] mb-3">Call the doctor</div>
                    {s.danger.map((d, j) => (
                      <div key={j} className="text-[13px] text-[#e8e3d8] flex gap-2 mb-2 last:mb-0">
                        <span className="text-[#dc4444] mt-[7px] text-[5px]">●</span><span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pb-36 anim-fade">
      <PageTitle kicker="Library" line1="Reference" line2="manuals"
                 sub="Skim it now so you know where it is at 3am." />
      <div className="px-6 mt-9">
        {GUIDES.map((g, i) => (
          <button key={i} onClick={() => { buzz(); setGuide(i); }}
            className="w-full flex items-center gap-5 py-5 border-b border-[#1c1a17] text-left active:bg-[#14130f]">
            <span className="mono text-[12px] text-[#5a5650] tabular-nums shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <div className="flex-1 min-w-0">
              <div className="serif text-[19px] font-light leading-tight mb-0.5">{g.title}</div>
              <div className="text-[12px] text-[#8b8579]">{g.sub}</div>
            </div>
            <ArrUR cls="w-4 h-4 text-[#5a5650] shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Milestones ---------- */
function Milestones({ week }) {
  return (
    <div className="pb-36 anim-fade">
      <PageTitle kicker="Development" line1="The first" line2="12 weeks"
                 sub="Ranges are wide and normal. Don't compare to other kids." />
      <div className="px-6 mt-9 space-y-2">
        {MILESTONES.map((m, i) => {
          const past = week > m.week, now = week === m.week, future = week < m.week;
          return (
            <div key={i} className={"rounded-2xl border p-5 " +
              (now ? "border-[#d97757]/40 bg-gradient-to-br from-[#d97757]/10 to-transparent"
                   : past ? "border-[#2a2622]/50 bg-[#14130f]/40" : "border-[#2a2622]/60 bg-[#14130f]")}>
              <div className="flex items-center gap-3 mb-3">
                <span className={"mono text-[10px] tracking-[.2em] px-2.5 py-1 rounded-full tabular-nums " +
                  (now ? "bg-[#d97757] text-[#0d0c0a]" : past ? "bg-[#2a2622] text-[#a8a39a]" : "border border-[#3a3530] text-[#5a5650]")}>
                  WK {m.week}
                </span>
                {past && <Check cls="w-3.5 h-3.5 text-[#7ba378]" sw={2.5} />}
                {now && <span className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757]">Now</span>}
              </div>
              <div className={"serif text-[21px] font-light mb-2 leading-tight " + (future ? "text-[#8b8579]" : "")}>{m.title}</div>
              {m.items.map((it, j) => (
                <div key={j} className={"text-[13px] flex gap-2.5 leading-relaxed mb-1.5 " + (future ? "text-[#5a5650]" : "text-[#a8a39a]")}>
                  <span className="text-[5px] mt-[7px]">●</span><span>{it}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Settings ---------- */
function SettingsScreen({ baby, prog, notif, saveBaby, saveNotif, wipe }) {
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState(baby.name);
  const [bd, setBd] = useState(baby.birthdate);

  return (
    <div className="pb-36 anim-fade">
      <div className="px-6 pt-safe pb-2">
        <div className="mono text-[10px] tracking-[.3em] uppercase text-[#8b8579] mb-3">Preferences</div>
        <h1 className="serif text-[42px] leading-[.95] font-light">Settings</h1>
      </div>

      <div className="px-6 mt-9 space-y-9">
        <div>
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#5a5650] mb-5">The kid</div>
          <label className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579] mb-2 block">Name</label>
          <input type="text" value={name} placeholder="Optional"
            onChange={e => setName(e.target.value)} onBlur={() => saveBaby({ name: name.trim() })}
            className="w-full bg-transparent border-b border-[#3a3530] py-2 text-[18px] placeholder-[#5a5650] focus:border-[#d97757] focus:outline-none mb-6" />
          <label className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579] mb-2 block">Birthdate</label>
          <input type="date" value={bd} max={today()}
            onChange={e => { setBd(e.target.value); saveBaby({ birthdate: e.target.value }); }}
            className="w-full bg-transparent border-b border-[#3a3530] py-2 text-[18px] focus:border-[#d97757] focus:outline-none" />
        </div>

        <div>
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#5a5650] mb-1">Notifications</div>
          <Toggle label="Daily heads-up" sub="One tactical tip for the day" on={notif.dailyEnabled}
            onClick={() => saveNotif({ dailyEnabled: !notif.dailyEnabled })} />
          {notif.dailyEnabled && (
            <div className="pl-1 py-3 anim-fade">
              <input type="time" value={notif.dailyTime} onChange={e => saveNotif({ dailyTime: e.target.value })}
                className="bg-transparent border-b border-[#3a3530] py-1 text-[15px] text-[#d4cec3] mono focus:border-[#d97757] focus:outline-none" />
            </div>
          )}
          <Toggle label="Weekly summary" sub="Sunday recap, what's coming" on={notif.weeklyEnabled}
            onClick={() => saveNotif({ weeklyEnabled: !notif.weeklyEnabled })} />
          <p className="text-[12px] text-[#5a5650] leading-relaxed mt-4">
            Heads up: a home-screen web app can't reliably fire scheduled notifications on iPhone yet.
            These settings are saved and will work if you move this to a native build.
          </p>
        </div>

        <div>
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#5a5650] mb-5">Stats</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#2a2622] bg-[#14130f] p-5">
              <div className="flex items-center gap-1.5 mb-3">
                <Flame cls="w-3.5 h-3.5 text-[#d97757]" sw={2} />
                <span className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579]">Streak</span>
              </div>
              <div className="serif text-[40px] leading-none font-light tabular-nums">{prog.streakDays}</div>
              <div className="text-[12px] text-[#8b8579] mt-1.5">days</div>
            </div>
            <div className="rounded-2xl border border-[#2a2622] bg-[#14130f] p-5">
              <div className="mono text-[10px] tracking-[.25em] uppercase text-[#8b8579] mb-3">Points</div>
              <div className="serif text-[40px] leading-none font-light tabular-nums">{prog.totalPoints}</div>
              <div className="text-[12px] text-[#8b8579] mt-1.5">earned</div>
            </div>
          </div>
        </div>

        <button onClick={() => { buzz(); setConfirm(true); }}
          className="w-full flex items-center gap-3 py-4 border-t border-[#1c1a17] text-[#dc4444]">
          <Trash cls="w-4 h-4" /><span className="text-[14px] font-medium">Reset all data</span>
        </button>

        <div className="text-center">
          <span className="mono text-[10px] tracking-[.3em] uppercase text-[#3a3530]">v1.0 · for dads who forgot</span>
        </div>
      </div>

      {confirm && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-end backdrop-blur-sm anim-fade">
          <div className="w-full max-w-md mx-auto bg-[#14130f] border-t border-[#2a2622] rounded-t-3xl p-6 anim-up"
               style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1.5rem)' }}>
            <div className="mono text-[10px] tracking-[.3em] uppercase text-[#dc4444] mb-3">Confirm</div>
            <h3 className="serif text-[27px] font-light leading-tight mb-3">Reset everything?</h3>
            <p className="text-[14px] text-[#a8a39a] mb-7 leading-relaxed font-light">
              Your streak, your checked-off weeks, and the birthdate all go. Can't be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(false)} className="flex-1 border border-[#3a3530] rounded-full py-3.5 text-[14px] font-medium">Cancel</button>
              <button onClick={wipe} className="flex-1 bg-[#dc4444] text-[#0d0c0a] rounded-full py-3.5 text-[14px] font-medium">Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Celebration ---------- */
function Celebration({ week, name, onDone }) {
  const bits = [];
  for (let i = 0; i < 36; i++) bits.push(i);
  return (
    <div className="fixed inset-0 bg-[#0d0c0a]/95 z-50 flex items-center justify-center p-6 backdrop-blur-sm anim-fade">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bits.map(i => (
          <div key={i} className="absolute w-1.5 h-1.5" style={{
            left: (i * 2.8 % 100) + '%', top: '-20px',
            background: ['#d97757', '#e89572', '#f5f2ed', '#a8a39a', '#7ba378'][i % 5],
            animation: 'confetti ' + (2.5 + (i % 5) * .4) + 's linear ' + ((i % 7) * .12) + 's infinite'
          }} />
        ))}
      </div>
      <div className="relative w-full max-w-sm bg-gradient-to-br from-[#14130f] to-[#0d0c0a] border border-[#d97757]/30 rounded-3xl p-6 anim-up">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#d97757]/15 rounded-full blur-3xl" />
        <div className="relative">
          <div className="mono text-[10px] tracking-[.3em] uppercase text-[#d97757] mb-4">Milestone</div>
          <h2 className="serif text-[40px] leading-[.95] font-light mb-3">You survived<br /><span className="italic text-[#d97757]">week {week}.</span></h2>
          <p className="text-[14px] text-[#a8a39a] mb-6 leading-relaxed font-light">
            {name ? name + ' is' : 'The kid is'} growing. You're learning. That's the whole job right now.
          </p>
          <div className="rounded-2xl border border-[#2a2622] bg-[#0d0c0a]/40 p-5 mb-6">
            <div className="mono text-[10px] tracking-[.3em] uppercase text-[#8b8579] mb-3">Coming up</div>
            {(WEEK_PREVIEWS[week + 1] || ['New developments', 'New challenges', 'You got this']).map((p, i) => (
              <div key={i} className="flex gap-3 text-[14px] text-[#d4cec3] items-start mb-2.5 last:mb-0">
                <span className="mono text-[10px] text-[#d97757] mt-1 shrink-0">0{i + 1}</span>
                <span className="leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { buzz(); onDone(); }}
            className="w-full bg-[#d97757] active:bg-[#b85a3d] text-[#0d0c0a] rounded-full py-3.5 text-[14px] font-medium">
            Keep going
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= DATA ================= */

const TIPS_BY_WEEK = {
  1: ["First poops are black and tar-like. That's meconium. Normal.", "Aim for 8 to 12 feedings today. Track the wet diapers.", "Skin to skin regulates her breathing and temp. Shirt off, baby on your chest.", "Mom is bleeding heavily and running on nothing. Bring water and food before she asks.", "Rectal fever of 100.4 or higher is an ER trip, not a wait-and-see.", "Cord stays on. Sponge baths only. Fold the diaper below it.", "Baby will drop 7 to 10 percent of birth weight this week. Expected."],
  2: ["Baby should be back to birth weight by the end of this week.", "Catch hunger cues before the crying: rooting, hands to mouth, lip smacking.", "Cluster feeding is normal. It is not a sign the milk is running out.", "Baby blues run through about day 14. Moodiness and crying. Not PPD yet.", "Cord stump may drop this week. Don't pull it. A little blood is fine.", "Cradle cap, baby acne, peeling skin. All normal. Don't pick at any of it.", "First real smile usually shows up somewhere in weeks 4 to 6."],
  3: ["Growth spurt is likely this week. Hungrier does not mean low supply.", "Evening fussiness peaks weeks 3 through 6. The 5 S's are your tool.", "Tummy time, 1 to 3 minutes, a few times a day. Hates the floor? Use your chest.", "Crying 3+ hours a day for 3+ weeks means read the colic guide.", "Take the baby out for a walk. Give her an hour alone in the house.", "Burp every 2 to 3 ounces, or when you switch sides.", "Spit-up looks like way more than it is. One to two tablespoons is nothing."],
  4: ["One month in. Baby may lift their head for a second during tummy time.", "Real smiles may start. Smile back every time. That's the attachment work.", "One-month pediatrician visit is this week. Go with her.", "Talk and narrate constantly. They're starting to tune in to your voice.", "Sleep may stretch a little. Some 3 to 4 hour blocks at night.", "Crying tends to peak right around now. It gets better after this.", "She is still healing. Do not let up on the support."],
  5: ["Smiles are getting reliable. Respond to every single one.", "Cooing and vowel sounds may start. Talk back like it's a conversation.", "This is the peak fussy stretch. Weeks 5 and 6 are usually the worst of it.", "Build the day/night split: bright and loud by day, dim and boring at night.", "Tummy time up to 5 to 10 minutes total a day.", "If it looks like colic, work the soothing list in order instead of randomly.", "Baby blues should have lifted by now. If they haven't, pay attention."],
  6: ["Another growth spurt is likely. Feeding jumps temporarily.", "Tear ducts open up. You'll see real tears for the first time.", "Six-week pediatrician visit. First vaccines.", "She may have her six-week checkup too. PPD screening usually happens there.", "More responsive to voices now. Answer the babbling.", "Fussiness should start easing after this week.", "Push-ups during tummy time may start showing up."],
  7: ["Awake windows are longer now, 60 to 90 minutes.", "Watch for tired cues near the end of each awake window.", "Drowsy-but-awake put-downs start to matter around now.", "Simple play works: high contrast cards, a rattle, your face.", "More varied sounds. Have actual conversations with them.", "They know who you are now. That recognition is real.", "Sleep may get more predictable. Don't expect a miracle."],
  8: ["Two months. Head control is noticeably better.", "Hands are opening up instead of staying fisted.", "First real laugh may show up. Get it on video.", "Two-month vaccines this week. Expect a rough evening after.", "Bedtime routine starts paying off: bath, feed, book, down.", "Mirrors and cause-and-effect toys land now.", "Tummy time target is 20 to 30 minutes total across the day."],
  9: ["Starting to tell familiar faces from strangers.", "Turning the head toward sounds.", "Possible growth spurt. Hunger spikes for a few days.", "Sleep may consolidate. Five to six hour stretches are possible.", "Read to them daily. It's the rhythm and your voice that matter, not the words.", "Vary tummy time: your chest, the floor, a Boppy, with a toy.", "Keep the put-down routine identical every time."],
  10: ["Movements are getting purposeful instead of random.", "May start grabbing at things on purpose.", "Faces are still the best toy in the house. That's you.", "Babbling is expanding. Answer it like dialogue.", "May start briefly self-soothing by sucking on hands.", "Put safe toys just within reach to encourage reaching.", "The bedtime routine is doing real work now. Don't break it."],
  11: ["Some babies do 6 to 8 hour stretches now. Some don't. Both are normal.", "Rolling attempts may start, back to side first.", "Head control is solid.", "Smiles come easily now.", "Sleep setup: dark room, white noise, swaddle only if not rolling.", "Never leave them on a couch or bed unattended. Rolling arrives without warning.", "Active play: bicycle legs, supported sitting."],
  12: ["Three months. The fourth trimester is over.", "Real out-loud laughing may start.", "Better at settling themselves.", "Sleep is more patterned now.", "Three-month pediatrician visit.", "Drop the swaddle if you see any rolling.", "You got through the hardest stretch. Say that out loud to her."]
};

const WEEKLY_CHECKLISTS = {
  1: ["Track every feeding and diaper today", "Take a full diaper shift so she sleeps", "Stock the nursing station: water, snacks, charger", "Handle one visitor situation without her asking", "Do one skin-to-skin session, 15 minutes plus", "Tell her one specific thing she's doing well"],
  2: ["Do tummy time, 3 to 5 minutes", "Take the baby out so she gets the house to herself", "Check the cord stump", "Catch two hunger cues before any crying", "Own dinner for all seven days", "Ask her what she needs, then actually do it"],
  3: ["Run the 5 S's during a fussy stretch", "Tummy time, 5 minutes, twice a day", "Take a full feed shift", "Start naming the different cries", "Give her one full hour off duty", "Read a book out loud to the baby"],
  4: ["Go to the one-month pediatrician visit", "Tummy time, 10 minutes total daily", "Make eye contact and smile back", "Narrate your day out loud for 10 minutes", "Set up a food and snack rotation for her", "Ask her directly how she's actually doing"],
  5: ["Tummy time, 15 minutes total daily", "Lock in the day/night routine", "Work the soothing list in order if it looks like colic", "Respond to every smile", "Get her out of the house for 30 minutes", "Write down or photograph one milestone"],
  6: ["Go to the six-week visit and vaccines", "Be at her six-week checkup", "Watch for vaccine reactions that evening", "Tummy time, 20 minutes total", "Add variety: textures, sounds, new rooms", "Name three specific things you appreciate about her"],
  7: ["Learn the tired cues", "Try one drowsy-but-awake put-down", "Read to the baby", "Simple play: contrast cards, talking", "Take a full night or morning shift", "Check in on her, and listen to the answer"],
  8: ["Go to the two-month visit and vaccines", "Tummy time, 20 to 30 minutes total daily", "Change up the tummy time setup", "Lock in the bedtime routine", "Use a mirror with the baby", "Plan something that is just for her"],
  9: ["Read to the baby daily", "Practice drowsy-but-awake every time", "One reading session, 5 minutes plus", "Note any growth spurt pattern", "Take the baby on a solo outing", "Run one full evening on your own"],
  10: ["Put safe toys within reach to prompt grabbing", "Answer the babbling like conversation", "Hold the bedtime routine steady", "Vary tummy time positions", "Do a household job she didn't ask about", "Tell her you see what she's carrying"],
  11: ["Optimize the sleep environment", "Never leave the baby on an elevated surface", "Active play: bicycle legs, supported sitting", "Start the swaddle transition if rolling shows up", "Put something on the calendar to look forward to", "Say out loud what she's been through"],
  12: ["Go to the three-month visit", "Drop the swaddle if rolling", "Keep the routine consistent", "Write down where you started and where you are", "Mark the end of the fourth trimester with her", "Say what surprised you and what you're proud of"]
};

const WEEK_PREVIEWS = {
  2: ["Baby regains birth weight", "Cord stump may drop", "Cluster feeding intensifies"],
  3: ["First growth spurt", "Evening fussiness peaks", "Tummy time starts"],
  4: ["Possible first real smile", "One-month pediatrician visit", "Some longer night stretches"],
  5: ["Peak fussiness stretch", "Cooing and vowel sounds", "Day/night rhythm forms"],
  6: ["Another growth spurt", "First vaccines", "Real tears show up"],
  7: ["Longer awake windows", "Drowsy-but-awake matters", "They clearly recognize you"],
  8: ["First laugh may land", "Two-month vaccines", "Hands opening up"],
  9: ["Tells familiar from strangers", "Sleep may consolidate", "Growth spurt possible"],
  10: ["Purposeful grabbing", "Babbling expands", "Brief self-soothing"],
  11: ["Rolling attempts start", "Possible 6 to 8 hour stretches", "Stop leaving them elevated"],
  12: ["Out of the fourth trimester", "Real laughing", "Three-month checkup"],
  13: ["Past the newborn phase", "You made it through the worst of it", "More content coming"]
};

const QUICK_HELP = [
  { emoji: '😭', title: "Won't stop crying", sub: "Work this in order", sections: [
    { heading: "Basics first", items: ["Hungry? When was the last feed?", "Wet or dirty diaper?", "Too hot or cold? Feel the chest, not the hands."] },
    { heading: "Run all five S's together", items: [
      { label: "Swaddle", detail: "Tight, arms down" },
      { label: "Side or stomach", detail: "Hold in that position. Not for sleep." },
      { label: "Shush", detail: "Loud, right near the ear. Vacuum-level loud." },
      { label: "Swing", detail: "Small, fast, jiggly. Support the head." },
      { label: "Suck", detail: "Pacifier or a clean finger" }] },
    { heading: "If that isn't working", items: ["Bicycle the legs for gas", "Warm bath", "Skin to skin", "Car ride or stroller walk", "White noise turned up loud"] },
    { heading: "Check for actual pain", items: ["Hair wrapped around a finger, toe, or penis", "Take a rectal temp", "Tugging at an ear"] },
    { heading: "Nothing works after 30 minutes", items: ["Put the baby down somewhere safe, like the crib", "Walk away for five minutes. This is the right call, not a failure.", "Tag your partner in if she's available", "Inconsolable 3+ hours: call the pediatrician"] },
    { heading: "Call the doctor now if", danger: true, items: ["Rectal fever 100.4 or higher and under 3 months", "Any trouble breathing", "A weak or high-pitched cry that doesn't sound like them", "Won't wake up", "Bulging soft spot"] }
  ]},
  { emoji: '💩', title: "Weird poop. Normal?", sub: "Color and frequency", sections: [
    { heading: "Normal", items: [
      { label: "Days 1 to 2: black, tarry", detail: "Meconium. Sticky. Expected." },
      { label: "Days 3 to 4: green-brown", detail: "Transitional. Fine." },
      { label: "Breastfed: yellow, mustard", detail: "Seedy and runny. Fine." },
      { label: "Formula: tan to yellow", detail: "Thicker, pasty. Fine." },
      { label: "Green", detail: "Usually nothing. Foremilk or fast digestion." }] },
    { heading: "Call the doctor", danger: true, items: [
      { label: "White, gray, or chalky pale", detail: "Call now. Possible liver issue." },
      { label: "Red or bloody", detail: "Call the same day." },
      { label: "Black after the meconium phase", detail: "Call now. Can be digested blood." }] },
    { heading: "Frequency", items: ["Breastfed weeks 1 to 4: three or more a day", "Breastfed after week 4: anywhere from every feed to once in 7 to 10 days. Both normal.", "Formula: usually daily or every other day"] },
    { heading: "Also call if", danger: true, items: ["No poop for 3+ days and the baby seems uncomfortable", "Sudden change plus fever, vomiting, or refusing to eat"] }
  ]},
  { emoji: '😴', title: "Won't sleep", sub: "Run the checklist", sections: [
    { heading: "Check the room", items: ["Is it dark? Actually dark, not dim.", "White noise on?", "68 to 72 degrees?", "Swaddled, if under 8 weeks and not rolling?"] },
    { heading: "Awake windows by age", items: ["0 to 4 weeks: 45 to 60 minutes max", "4 to 8 weeks: 60 to 90 minutes", "8 to 12 weeks: 90 to 120 minutes"] },
    { heading: "Tired cues. Put down before these escalate.", items: ["Yawning", "Red eyebrows", "Looking away from you", "Jerky movements", "Fussing"] },
    { heading: "Getting them down", items: ["The five S's", "Rocking or bouncing", "Feeding to sleep is fine at this age. Ignore anyone who says otherwise."] },
    { heading: "Won't stay down", items: ["Startle reflex. Swaddle tighter.", "Wait until fully limp before transferring, 10 to 20 minutes", "Burp better and bicycle the legs before bed"] },
    { heading: "Normal. Don't try to fix.", items: ["Waking every 2 to 3 hours", "Only sleeping on someone", "Thirty to 45 minute naps until 3 or 4 months"] },
    { heading: "Worth a call if", danger: true, items: ["Very hard to wake for feeds", "Sleeping great but not gaining weight"] }
  ]},
  { emoji: '🍼', title: "Not eating", sub: "Breast or bottle", sections: [
    { heading: "Signs they're getting enough", items: ["Six or more wet diapers a day after day 5", "Gaining weight", "You can hear swallowing", "Content after a feed"] },
    { heading: "Trouble signs", items: ["Under six wet diapers a day", "Still losing weight after day 5", "No swallowing sounds", "Hungry constantly, never satisfied", "Painful for her every single feed"] },
    { heading: "Breastfeeding fixes", items: ["Change the position", "Breast compression during the feed", "Switch sides more than once", "Skin to skin first", "Feed on cues, not on crying", "Call a lactation consultant. This is literally their job and it is not a failure."] },
    { heading: "Bottle: won't take it", items: ["Different nipple shape or flow", "Have someone other than mom offer it", "Offer when slightly hungry, not starving", "Warm the nipple", "Change the hold"] },
    { heading: "Bottle: starts then stops", items: ["Probably needs a burp", "Flow too fast: gulping, choking, pulling off", "Flow too slow: frustrated, chewing", "Check the nipple isn't clogged"] },
    { heading: "Call the doctor", danger: true, items: ["Refusing all feeds for 4+ hours", "No wet diaper in 6+ hours", "Projectile vomiting", "Fever plus not eating", "Dehydration: dry mouth, no tears, sunken soft spot"] }
  ]},
  { emoji: '👀', title: "Something looks wrong", sub: "Cord, circ, skin, breathing", sections: [
    { heading: "Cord: normal", items: ["Yellow, green, brown, or black", "Drying and shriveling", "Mild smell while it dries", "A little blood when it drops off"] },
    { heading: "Cord: call the doctor", danger: true, items: ["Redness spreading onto the belly skin", "Pus, yellow or green discharge", "Strong foul smell", "Bleeding that won't stop", "Still attached at 8 weeks"] },
    { heading: "Circumcision: normal", items: ["Yellow-white film on the head. Do not wipe it off.", "Some swelling the first few days", "Redness that improves a little each day"] },
    { heading: "Circumcision: call the doctor", danger: true, items: ["Bleeding that won't stop with gentle pressure", "Redness or swelling increasing after day 3", "Pus", "Foul smell", "Hasn't peed within 12 hours of the procedure", "Plastibell still on after 12 days"] },
    { heading: "Skin: normal", items: ["Baby acne on the face, weeks 2 to 4", "Milia, tiny white bumps", "Peeling skin", "Cradle cap", "Blotchy red with white centers, called erythema toxicum"] },
    { heading: "Skin: call the doctor", danger: true, items: ["Any rash plus fever", "A rash that does not fade when you press it", "Blisters or pus-filled bumps", "Redness spreading, warm to the touch", "Yellowing spreading down the body"] },
    { heading: "Breathing: normal", items: ["Pauses up to 10 seconds then catching up. Called periodic breathing.", "Sneezing, hiccups, and congestion"] },
    { heading: "Breathing: call 911", danger: true, items: ["Over 60 breaths a minute consistently", "Grunting on every breath", "Nostrils flaring", "Ribs pulling in with each breath", "Any pause longer than 20 seconds", "Blue lips or face. Call 911 now."] }
  ]},
  { emoji: '💔', title: "She seems off", sub: "Baby blues or PPD", sections: [
    { heading: "Baby blues, days 3 to 14. Normal.", items: ["Crying spells, mood swings, feeling swamped", "Lifts on its own by about two weeks", "Your job is to be there and take the baby, not to fix her mood"] },
    { heading: "PPD signs, lasting past two weeks", items: ["Sadness or hopelessness that doesn't lift", "No interest in the baby", "Constant fear something is wrong with the baby", "Can't sleep even when the baby sleeps", "Not eating, or eating constantly", "Pulling away from everyone", "Talking about being a failure", "Feeling disconnected from the baby"] },
    { heading: "What to say", items: ["I've noticed you seem really down lately. I'm worried about you. Can we talk about getting some help?"] },
    { heading: "What not to say", items: ["You should be happy", "Other moms handle this fine", "Just try to sleep more"] },
    { heading: "Act immediately if", danger: true, items: ["She mentions harming herself or the baby", "She seems out of touch with reality", "Hallucinations or delusions", "She talks about not wanting to be here"] },
    { heading: "What to do", items: ["Don't leave her alone with the baby", "Call her OB, or your pediatrician, they will help route it", "Or go to the ER", "In the US you can call or text 988 any time", "PPD is a medical condition, not a character flaw. It responds to treatment."] }
  ]}
];

const GUIDES = [
  { title: "Diaper Changing", sub: "Setup, steps, what goes wrong", icon: BabyI, sections: [
    { heading: "Setup", list: ["Get everything out before you start: diaper, wipes, cream", "One hand stays on the baby the whole time if they're up on anything", "Have a cloth ready to cover a boy. They will get you."] },
    { heading: "The steps", list: ["Slide the clean diaper under, tabs at the back, before you open the dirty one", "Open the dirty one and use the front of it to wipe the bulk off", "Fold it under so the mess is contained", "Wipe front to back. Get into every crease.", "Lift by the ankles to clean underneath", "Boys: point it down before you close the tabs, or it goes up the front", "Circumcised: petroleum jelly at every change until healed", "Uncircumcised: never retract the foreskin", "Snug but not tight. Two fingers in the waistband.", "Fold the waistband down if the cord stump is still attached"] },
    { heading: "Common problems", list: ["Blowouts up the back: diaper too loose or too small. Size up.", "Rash: more air time, zinc oxide cream, change more often", "Overnight leaks: size up or switch to overnight diapers"] }
  ]},
  { title: "Feeding", sub: "Breast, bottle, amounts", icon: CoffeeI, sections: [
    { heading: "Hunger cues, before crying", list: ["Rooting, turning the head with the mouth open", "Hands to mouth", "Lip smacking", "Squirming and getting restless"] },
    { heading: "Signs they're getting enough", list: ["Six or more wet diapers a day after day 5", "Gaining weight at visits", "Audible swallowing during the feed", "Settled after eating"] },
    { heading: "Formula amounts by age", list: ["Week 1: 1 to 2 oz per feed, 12 to 24 oz a day", "Weeks 2 to 4: 2 to 4 oz, 18 to 32 oz a day", "Months 1 to 2: 4 to 5 oz, 24 to 32 oz a day", "Months 2 to 3: 5 to 6 oz, 28 to 36 oz a day"] },
    { heading: "Formula prep", list: ["Wash hands, use clean bottles", "Follow the ratio on the package exactly. Do not eyeball it.", "Test on your wrist. It should feel like nothing.", "Never microwave. It makes hot spots that will burn their mouth.", "Toss anything left in the bottle after an hour"] },
    { heading: "Paced bottle feeding", list: ["Hold them semi-upright, not flat on their back", "Keep the bottle close to horizontal", "Let them draw the milk instead of pouring it in", "Pause every few minutes and tip the bottle down", "Aim for 15 to 20 minutes. Prevents overfeeding and spit-up."] },
    { heading: "Burping", list: ["Over the shoulder, upright, pat and rub the back", "Sitting on your lap, support the chin, lean them forward, pat", "Face down across your thighs, head slightly elevated, pat"] }
  ]},
  { title: "Sleep", sub: "Wake windows, safe sleep", icon: MoonI, sections: [
    { heading: "Sleep needs by week", list: ["Weeks 1 to 2: 16 to 17 hours total, 2 to 3 hour stretches", "Weeks 3 to 4: 15 to 17 hours, 3 to 4 hour stretches", "Weeks 5 to 6: 15 to 16 hours, 4 to 5 hour stretches", "Weeks 7 to 8: 14 to 16 hours, 5 to 6 hour stretches", "Weeks 9 to 12: 14 to 15 hours, 6 to 8 possible"] },
    { heading: "Awake windows", list: ["0 to 4 weeks: 45 to 60 minutes max", "4 to 8 weeks: 60 to 90 minutes", "8 to 12 weeks: 90 to 120 minutes"] },
    { heading: "Tired cues", list: ["Yawning, red eyebrows, looking away", "Jerky movements, fussing", "Put them down before these escalate, not after"] },
    { heading: "Safe sleep, the ABCs", list: ["ALONE: nothing else in the crib. No blankets, pillows, toys, or bumpers.", "BACK: always on the back, every sleep, including naps", "CRIB: firm flat surface with a fitted sheet", "Room at 68 to 72 degrees", "Room share, do not bed share, for the first six months"] }
  ]},
  { title: "Cry Decoder", sub: "Six cries and the five S's", icon: HeartI, sections: [
    { heading: "Hunger", list: ["Sound: rhythmic, repetitive, builds low to high", "Signs: rooting, hands to mouth", "Fix: feed"] },
    { heading: "Tired", list: ["Sound: whiny, builds slowly", "Signs: yawning, eye rubbing, looking away", "Fix: dark room, swaddle, white noise, soothe down"] },
    { heading: "Gas or discomfort", list: ["Sound: sudden, sharp, high", "Signs: legs pulled up, back arching, hard belly", "Fix: bicycle legs, clockwise belly massage, burp"] },
    { heading: "Overstimulated", list: ["Sound: sudden and intense", "Signs: looking away, jerky movement, mid-activity", "Fix: dark quiet room, cut the input"] },
    { heading: "Bored", list: ["Sound: fussy, stop-start, not intense", "Signs: stops the second you pick them up", "Fix: change rooms, engage, tummy time"] },
    { heading: "Pain", list: ["Sound: sudden high-pitched scream, nothing helps", "Signs: inconsolable, unlike their normal cry", "Fix: check for a hair tourniquet, take a temp, call the doctor if it keeps up"] },
    { heading: "The five S's, all at once", list: ["SWADDLE, snug with arms down", "SIDE or STOMACH, held in that position, never for sleep", "SHUSH, loud and close to the ear", "SWING, small fast rhythmic motion", "SUCK, pacifier or clean finger"] }
  ]},
  { title: "Backing Her Up", sub: "Recovery, baby blues, PPD", icon: HeartI, sections: [
    { heading: "Physical recovery, about six weeks", list: ["Vaginal birth: soreness, possible stitches, bleeding for 4 to 6 weeks", "C-section: this is major abdominal surgery, the recovery is longer", "Uterus contracting, which hurts most while nursing", "Engorgement, night sweats, hair falling out", "Exhaustion on a level that is hard to describe"] },
    { heading: "What actually helps", list: ["Take everything except the feeding", "Own the household, the meals, and the visitors", "Bring food and water without being asked", "Help her get to the shower and bathroom early on", "Zero expectations about sex. Do not raise it."] },
    { heading: "Baby blues, days 3 to 14", list: ["Affects most new mothers", "Crying, mood swings, feeling swamped", "It's a hormone crash and it lifts by about two weeks", "Don't try to fix it. Be there and take the baby."] },
    { heading: "PPD, watch closely", list: ["Runs longer than two weeks", "Sadness or hopelessness that doesn't lift", "No interest in the baby, or fear of being alone with the baby", "Can't sleep even when she has the chance", "Withdrawing from family and friends", "Talking about being a failure", "Feeling disconnected from the baby"],
      danger: ["Any mention of harming herself or the baby", "Hallucinations or delusions", "Seems out of touch with reality", "In the US, call or text 988 any time"] },
    { heading: "Postpartum anxiety", list: ["Racing thoughts, can't settle", "Constant fear about the baby's safety", "Checking on the baby over and over", "Physical symptoms: racing heart, nausea", "Same play: name it out loud, support it, get her professional help"] }
  ]},
  { title: "Senses", sub: "Vision, hearing, social", icon: EyeI, sections: [
    { heading: "Vision", list: ["Birth: 8 to 12 inches, blurry, high contrast only", "2 weeks: starting to lock onto faces", "1 month: tracks a moving object briefly", "2 months: recognizes you from across a room", "3 months: tracking well, knows familiar people", "4 months: full color and depth perception"] },
    { heading: "What actually helps", list: ["High contrast black and white cards the first month", "Face to face at 8 to 12 inches", "Slow moving objects to follow", "Color starts landing at 2 to 3 months"] },
    { heading: "Hearing", list: ["Birth: hears well, prefers human voices over anything else", "1 month: knows your voice and hers", "2 months: turns toward sound", "3 months: reacts to your tone, not just the noise"] },
    { heading: "Social", list: ["Birth: prefers faces, especially eyes", "2 to 3 weeks: brief eye contact", "4 to 6 weeks: first real social smile", "2 months: smiles easily, coos", "3 months: laughs and squeals"] }
  ]},
  { title: "What Actually Matters", sub: "Development, minus the marketing", icon: BrainI, sections: [
    { heading: "High impact. Do these.", list: ["Talk constantly. Narrate everything. This builds language.", "Read to them. It's the rhythm and your voice.", "Tummy time. Everything physical is built on it.", "Respond to their cues. That's how secure attachment forms.", "Your face. You are the best toy in the house."] },
    { heading: "Some value", list: ["High contrast cards the first two months", "Singing, any singing, badly is fine", "Safe textures to touch", "Mirrors from about two months"] },
    { heading: "Skip it. This is marketing.", list: ["Baby Einstein and similar videos", "Expensive electronic toys", "Flash cards", "Educational apps for infants", "Most of the gear in the registry"] },
    { heading: "Tummy time progression", list: ["Weeks 1 to 2: two or three sessions, 1 to 3 minutes each", "Weeks 3 to 4: three or four sessions, 3 to 5 minutes each", "Month 2: 20 minutes plus across the day", "Month 3: 30 to 60 minutes across the day"] },
    { heading: "If they hate it", list: ["Do it when they're content, not hungry or tired", "Get on the floor at eye level with them", "Roll a towel under the chest for support", "Prop them on a Boppy", "On your chest counts", "Short and frequent beats long and miserable"] }
  ]},
  { title: "Food Rules", sub: "Hard no's, intro timeline", icon: Book, sections: [
    { heading: "Never, in the first year", list: ["Honey, until age one. Botulism risk.", "Cow's milk as the main drink, until age one", "Whole grapes, nuts, popcorn, hot dog rounds", "Hard raw vegetables", "Added salt or sugar", "Unpasteurized dairy or juice", "Raw or undercooked egg, meat, or fish", "High mercury fish: shark, swordfish, king mackerel, tilefish"] },
    { heading: "Talk to the pediatrician first", list: ["Peanut products, especially with eczema or family allergies", "Eggs", "Tree nuts", "Fish and shellfish", "Soy", "Wheat"] },
    { heading: "On allergens", list: ["Current guidance flipped: early introduction at 4 to 6 months may reduce allergy risk", "This is the opposite of what you were told last time. Confirm the current advice with your pediatrician."] },
    { heading: "Introduction timeline", list: ["0 to 4 months: breast milk or formula only", "4 to 6 months: solids may start if they show readiness", "6 months: single ingredient purees, iron fortified cereal", "6 to 8 months: thicker purees, soft finger foods", "8 to 10 months: soft table foods, more variety", "10 to 12 months: most table foods, soft and in small pieces"] },
    { heading: "Readiness signs, around six months", list: ["Sits with support and holds the head steady", "Watches your food", "Lost the tongue thrust reflex", "Opens the mouth when food comes near"] }
  ]},
  { title: "Colic", sub: "What it is, what helps", icon: Alert, sections: [
    { heading: "The rule of threes", list: ["Crying 3 or more hours a day", "3 or more days a week", "For 3 or more weeks", "In an otherwise healthy baby"] },
    { heading: "What it looks like", list: ["Peaks in the late afternoon and evening", "Inconsolable no matter what you do", "Clenched fists, arched back, legs pulled up", "Face flushed red", "Hard, distended belly", "Starts around 2 to 3 weeks, peaks at 6, gone by 3 to 4 months"] },
    { heading: "What colic is not", list: ["A verdict on your parenting", "Something you caused", "Always gas", "Dangerous, once other causes are ruled out"] },
    { heading: "What helps", list: ["The five S's, all together", "White noise at vacuum volume", "Motion: car, stroller, swing, bouncing", "Warm bath", "Bicycle legs and belly massage if it's gas", "Cut the stimulation: dark room, minimal handling", "Probiotics with L. reuteri. Ask the pediatrician first.", "If breastfeeding, she can try cutting dairy for two weeks"] },
    { heading: "Getting through it", list: ["Take shifts. One on, one completely off.", "It is fine to put the baby down safe and walk out for five minutes", "This ends. It reliably ends.", "You are not failing at this.", "This is a legitimate reason to call in help. Use it."] }
  ]}
];

const MILESTONES = [
  { week: 1, title: "Survival Mode", items: ["Drops 7 to 10 percent of birth weight", "Sleeps 16 to 17 hours in short bursts", "Focuses at 8 to 12 inches"] },
  { week: 2, title: "Regaining Ground", items: ["Back to birth weight by the end of the week", "More alert stretches", "Starting to focus on faces"] },
  { week: 3, title: "First Growth Spurt", items: ["Cluster feeding intensifies", "Slightly longer alert periods", "Briefly tracks a moving object"] },
  { week: 4, title: "One Month", items: ["May lift the head during tummy time", "Eye contact emerging", "First real smile is possible"] },
  { week: 5, title: "Social Awakening", items: ["Smiles are more common", "Cooing and vowel sounds", "Head control improving"] },
  { week: 6, title: "Tear Ducts Open", items: ["Real tears with crying", "Another growth spurt likely", "First vaccines"] },
  { week: 7, title: "Longer Awake", items: ["Awake windows 60 to 90 minutes", "More varied sounds", "Clearly recognizes you"] },
  { week: 8, title: "Two Months", items: ["Better head control", "Hands opening up", "First laugh may land"] },
  { week: 9, title: "Recognition", items: ["Tells familiar people from strangers", "Turns toward sound", "Sleep may consolidate"] },
  { week: 10, title: "Purposeful Movement", items: ["Reaches and grabs on purpose", "Babbling expands", "Brief self-soothing"] },
  { week: 11, title: "Rolling Attempts", items: ["Back to side rolls may start", "Possible 6 to 8 hour stretches", "Active leg kicking"] },
  { week: 12, title: "Fourth Trimester Done", items: ["Real out-loud laughing", "Better at settling themselves", "Three-month checkup", "You got through the hardest part"] }
];

/* ---------- Mount ---------- */
ReactDOM.createRoot(document.getElementById('root')).render(<DadAgain />);
