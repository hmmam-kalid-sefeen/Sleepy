import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Menu, Moon, Plus, Sparkles, X } from 'lucide-react';

const linktree = 'https://linktr.ee/thesleepynursery';
const instagram = 'https://www.instagram.com/thesleepynursery/';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell min-h-[100dvh] bg-[#f4f0e7]">
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-9 lg:px-16">
        <a href="#home" aria-label="The Sleepy Nursery home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#203738] text-[#f4f0e7]"><Moon size={19} strokeWidth={1.7} /></span>
          <span className="leading-tight">
            <span className="display block text-[1.27rem] text-[#263b3c]">the sleepy nursery</span>
            <span className="eyebrow mt-1 block text-[.52rem] text-[#71817b]">little nights, gentler days</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-[.83rem] font-medium text-[#405655] md:flex">
          <a className="nav-link" href="#our-way">Our way</a>
          <a className="nav-link" href="#nightstand">The nightstand</a>
          <a className="nav-link" href="#notes">Little notes</a>
          <a className="rounded-full bg-[#203738] px-5 py-3 text-[#f6f1e7] transition hover:bg-[#476e6c]" href={linktree} target="_blank" rel="noreferrer">Find your way <ArrowUpRight className="ml-2 inline" size={15} /></a>
        </nav>
        <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} className="grid h-11 w-11 place-items-center rounded-full border border-[#d8d1c3] text-[#263b3c] md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>
      {menuOpen && <nav aria-label="Mobile navigation" className="absolute left-4 right-4 top-[78px] z-30 rounded-2xl border border-[#ded6c7] bg-[#fbf8f0] p-5 shadow-xl md:hidden">
        <div className="flex flex-col gap-1 text-[#263b3c]">
          {[['Our way', '#our-way'], ['The nightstand', '#nightstand'], ['Little notes', '#notes']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-3 py-3 hover:bg-[#efe8d9]">{label}</a>)}
          <a href={linktree} target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-2 rounded-full bg-[#203738] px-4 py-3 text-center text-[#f4f0e7]">Explore the links <ArrowUpRight className="ml-1 inline" size={15} /></a>
        </div>
      </nav>}

      <section id="home" className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-8 sm:px-9 sm:pb-24 lg:grid-cols-[.91fr_1.09fr] lg:gap-12 lg:px-16 lg:pb-28 lg:pt-10">
        <div className="relative z-10 max-w-[610px]">
          <div className="rise eyebrow mb-7 flex items-center gap-3 text-[#59716d]"><span className="h-px w-8 bg-[#d9987c]" />A softer landing for bedtime</div>
          <h1 className="display rise-delay text-[clamp(3.8rem,8vw,7.3rem)] leading-[.94] text-[#263b3c]">For little<br />ones who <span className="relative whitespace-nowrap text-[#bd785f]">won’t</span><br />switch off.</h1>
          <p className="rise-delay-2 mt-7 max-w-[430px] text-[1.05rem] leading-[1.8] text-[#5d706d] sm:text-lg">And the grown-ups doing their best at 2 a.m. A gentle place for practical sleep notes and the little things that make nighttime feel more like yours.</p>
          <div className="rise-delay-2 mt-8 flex flex-wrap items-center gap-4">
            <a href="#our-way" className="group inline-flex items-center gap-3 rounded-full bg-[#203738] px-6 py-4 text-sm font-semibold text-[#f5f0e7] transition hover:bg-[#476e6c]">Come on in <ArrowDown size={16} className="transition group-hover:translate-y-1" /></a>
            <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#476e6c] hover:text-[#bd785f]"><Instagram size={16} /> Follow along</a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs text-[#74827b]"><span className="flex -space-x-2"><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f4f0e7] bg-[#d9b39c]"><Moon size={13} /></span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f4f0e7] bg-[#c7d2c1]"><Sparkles size={12} /></span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f4f0e7] bg-[#e8d6aa]"><Plus size={13} /></span></span><span>A little less alone in the long nights.</span></div>
        </div>
        <div className="hero-image relative mx-auto w-full max-w-[670px] lg:ml-auto">
          <div className="absolute -right-4 -top-5 z-10 hidden h-24 w-24 rounded-full border border-[#d3a18a] lg:block" />
          <div className="absolute -left-7 top-[15%] z-10 hidden h-3 w-3 rounded-full bg-[#d8b979] lg:block" />
          <figure className="relative overflow-hidden rounded-[48%_48%_19px_19px] bg-[#d7d2c5] shadow-[0_30px_70px_rgba(32,55,56,.14)]">
            <img src="/nursery-dusk.jpg" alt="A softly lit, peaceful nursery at dusk" className="aspect-[.95] w-full object-cover sm:aspect-[1.12] lg:aspect-[.94]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#203738]/45 via-transparent to-transparent" />
            <figcaption className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-[#fff9ed] sm:bottom-9 sm:left-9 sm:right-9">
              <span><span className="eyebrow block text-[.56rem] text-[#e9c7a4]">A small reminder</span><span className="display mt-2 block text-2xl sm:text-3xl">You’re doing enough.</span></span>
              <span className="mb-1 grid h-11 w-11 place-items-center rounded-full border border-white/50"><Moon size={18} /></span>
            </figcaption>
          </figure>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#ddd4c4] bg-[#fbf8f0] px-4 py-3 shadow-lg sm:-left-8 sm:px-5"><p className="display text-lg text-[#263b3c]">Breathe in. Let the day go.</p><p className="eyebrow mt-1 text-[.54rem] text-[#78837a]">One night at a time</p></div>
        </div>
      </section>

      <section className="border-y border-[#d9d1c2] bg-[#ece6d9]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-center sm:px-9 lg:justify-between lg:px-16">
          <p className="display text-xl text-[#405655] sm:text-2xl">No perfect sleepers. No perfect parents.</p>
          <span className="hidden h-8 w-px bg-[#c9c1b2] lg:block" />
          <p className="text-sm text-[#667773]">Just gentle ideas for finding your own rhythm.</p>
          <a href={instagram} target="_blank" rel="noreferrer" className="eyebrow inline-flex items-center gap-2 text-[#476e6c] hover:text-[#bd785f]">@thesleepynursery <ArrowUpRight size={13} /></a>
        </div>
      </section>

      <section id="our-way" className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-9 sm:py-32 lg:grid-cols-[.82fr_1.18fr] lg:gap-24 lg:px-16">
        <div>
          <p className="eyebrow mb-5 text-[#bd785f]">A note from the night shift</p>
          <h2 className="display max-w-[540px] text-5xl leading-[1.02] text-[#263b3c] sm:text-6xl">Sleep is a season,<br /><em className="text-[#bd785f]">not a score.</em></h2>
          <a href={instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#476e6c]">Meet us on Instagram <ArrowRight size={16} /></a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <article className="border-t border-[#cfc7b8] pt-5"><span className="eyebrow text-[#9c765c]">01 / Keep it human</span><h3 className="display mt-4 text-2xl text-[#263b3c]">Your baby isn’t a puzzle to solve.</h3><p className="mt-3 text-sm leading-7 text-[#647571]">Every family has its own nights. Take what feels useful, leave what doesn’t, and remember that learning takes time.</p></article>
          <article className="border-t border-[#cfc7b8] pt-5"><span className="eyebrow text-[#9c765c]">02 / Keep it simple</span><h3 className="display mt-4 text-2xl text-[#263b3c]">Small rituals can feel grounding.</h3><p className="mt-3 text-sm leading-7 text-[#647571]">A familiar lullaby, a dimmer room, a quieter transition. Gentle cues can help mark that the day is winding down.</p></article>
          <article className="border-t border-[#cfc7b8] pt-5 sm:col-span-2"><span className="eyebrow text-[#9c765c]">03 / Keep it safe</span><h3 className="display mt-4 text-2xl text-[#263b3c]">When in doubt, ask your care team.</h3><p className="mt-3 max-w-[540px] text-sm leading-7 text-[#647571]">These notes are general, non-medical ideas—not a substitute for guidance from your pediatrician or another qualified healthcare professional. Safe-sleep recommendations can vary by age and circumstance.</p></article>
        </div>
      </section>

      <section id="nightstand" className="relative overflow-hidden bg-[#203738] text-[#f4f0e7]">
        <div className="grain pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-9 sm:py-28 lg:px-16">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><p className="eyebrow mb-5 text-[#d9987c]">The little nightstand</p><h2 className="display max-w-[650px] text-5xl leading-[1.03] sm:text-6xl">A few things for<br /><em className="text-[#e2bd8e]">the after-dark hours.</em></h2></div>
            <p className="max-w-[330px] pb-1 text-sm leading-7 text-[#c1cebf]">A starting point, not a shopping list. Browse the categories and find details through our links.</p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            <a href={linktree} target="_blank" rel="noreferrer" className="category-card group flex min-h-[280px] flex-col justify-between rounded-[22px] bg-[#304b4a] p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#e3c58e] text-[#263b3c]"><span className="relative block h-7 w-5 rounded-t-full bg-[#d9987c] before:absolute before:-left-2 before:top-5 before:h-2 before:w-9 before:rounded-full before:bg-[#d9987c]"><span className="absolute left-2 top-1 h-3 w-1 rounded-full bg-[#f7e4b2]" /></span></span><ArrowUpRight className="category-arrow text-[#d9987c]" /></div>
              <div><p className="eyebrow text-[#d9987c]">01 — Settle in</p><h3 className="display mt-2 text-3xl">Soft light</h3><p className="mt-2 max-w-[280px] text-sm leading-6 text-[#c3d0c7]">A gentler glow for those in-between hours.</p></div>
            </a>
            <a href={linktree} target="_blank" rel="noreferrer" className="category-card group flex min-h-[280px] flex-col justify-between rounded-[22px] bg-[#394f4d] p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#d6c4b0] text-[#263b3c]"><span className="relative flex gap-1"><i className="h-5 w-1 rounded-full bg-[#476e6c]" /><i className="h-8 w-1 rounded-full bg-[#476e6c]" /><i className="h-4 w-1 rounded-full bg-[#476e6c]" /><i className="h-6 w-1 rounded-full bg-[#476e6c]" /></span></span><ArrowUpRight className="category-arrow text-[#d9987c]" /></div>
              <div><p className="eyebrow text-[#d9987c]">02 — Find a hush</p><h3 className="display mt-2 text-3xl">Steady sounds</h3><p className="mt-2 max-w-[280px] text-sm leading-6 text-[#c3d0c7]">Explore white noise and other calming sound options.</p></div>
            </a>
            <a href={linktree} target="_blank" rel="noreferrer" className="category-card group flex min-h-[280px] flex-col justify-between rounded-[22px] bg-[#4b5e59] p-6 sm:p-8">
              <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#e5c99d] text-[#263b3c]"><Moon size={25} strokeWidth={1.5} /></span><ArrowUpRight className="category-arrow text-[#e3c58e]" /></div>
              <div><p className="eyebrow text-[#e3c58e]">03 — Make room</p><h3 className="display mt-2 text-3xl">Sleepy helpers</h3><p className="mt-2 max-w-[280px] text-sm leading-6 text-[#d2d7ca]">A few sleep-aid categories to explore at your own pace.</p></div>
            </a>
          </div>
          <p className="mt-6 text-xs leading-6 text-[#bdc9bf]">Products and recommendations are shared through our Linktree. Always follow product instructions and age guidance.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-24 sm:px-9 sm:py-32 lg:grid-cols-[1fr_.9fr] lg:gap-24 lg:px-16">
        <div className="relative min-h-[370px] overflow-hidden rounded-[48%_48%_22px_22px] bg-[#d9d1bf] sm:min-h-[460px]">
          <img src="/nursery-dusk.jpg" alt="Warm lamplight in a quiet nursery" className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-85" />
          <div className="absolute inset-0 bg-[#203738]/20" />
          <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-[#f4f0e7]/85 px-4 py-2 text-[.63rem] font-semibold uppercase tracking-[.17em] text-[#405655]">A gentler kind of bedtime</div>
        </div>
        <div id="notes">
          <p className="eyebrow mb-5 text-[#bd785f]">A tiny bedtime note</p>
          <h2 className="display text-5xl leading-[1.05] text-[#263b3c] sm:text-6xl">The day can<br />be done <em className="text-[#bd785f]">now.</em></h2>
          <p className="mt-6 max-w-[470px] text-base leading-8 text-[#5d706d]">You don’t have to make tonight perfect. If all you did was show up, cuddle close, and try again, that counts as care. Let tomorrow be tomorrow.</p>
          <div className="mt-8 flex items-center gap-4 border-t border-[#d6cebf] pt-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8ddca] text-[#476e6c]"><Moon size={18} /></span><span className="text-sm text-[#657773]">A little room to exhale, for everyone.</span></div>
        </div>
      </section>

      <section className="mx-5 mb-20 overflow-hidden rounded-[28px] bg-[#e7d6c4] sm:mx-9 lg:mx-auto lg:max-w-[1312px]">
        <div className="grid items-center gap-8 px-7 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:px-20">
          <div><p className="eyebrow mb-4 text-[#8b604d]">Come say hello</p><h2 className="display max-w-[700px] text-4xl leading-tight text-[#263b3c] sm:text-5xl">Good nights start with feeling understood.</h2><p className="mt-4 max-w-[550px] text-sm leading-7 text-[#5d706d]">Find gentle reminders, practical sleep notes, and links to nighttime essentials on our Instagram and Linktree.</p></div>
          <div className="flex flex-wrap gap-3">
            <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#203738] px-5 py-3.5 text-sm font-semibold text-[#f4f0e7] transition hover:bg-[#476e6c]"><Instagram size={16} /> Instagram <ArrowUpRight size={14} /></a>
            <a href={linktree} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#8c9688] px-5 py-3.5 text-sm font-semibold text-[#263b3c] transition hover:bg-[#f4f0e7]">Explore links <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9d1c2] px-5 py-8 sm:px-9 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="display text-xl text-[#263b3c]">the sleepy nursery</a>
          <p className="max-w-xl text-[.7rem] leading-5 text-[#72807a]">General information only; not medical advice. For questions about your child’s sleep or safety, speak with a qualified healthcare professional.</p>
          <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[#476e6c]"><Instagram size={14} /> @thesleepynursery</a>
        </div>
        <p className="mx-auto mt-6 max-w-[1312px] text-center text-[.62rem] text-[#89928a] sm:text-left">© The Sleepy Nursery</p>
      </footer>
    </main>
  );
}

export default App;
