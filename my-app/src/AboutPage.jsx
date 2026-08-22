import React from 'react'
import { useLanguage } from './LanguageContext'

const ContactForm = () => {
  const { t } = useLanguage()
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = React.useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const subject = encodeURIComponent(form.subject || 'SportMarket')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    const mailtoUrl = `mailto:info@sportmarket.ru?subject=${subject}&body=${body}`
    setTimeout(() => {
      window.location.href = mailtoUrl
      setStatus('sent')
    }, 300)
  }

  if (status === 'sent') {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-bold text-green-300">{t('formSentTitle')}</h3>
        <p className="mt-2 text-green-100/50">{t('formSentDesc')}</p>
        <button
          onClick={() => { setStatus(null); setForm({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-6 px-6 py-2.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-sm font-semibold transition-colors text-green-300"
        >
          {t('formSentAgain')}
        </button>
      </div>
    )
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
      <h3 className="text-xl font-bold mb-6 text-green-300">{t('formTitle')}</h3>
      {status === 'error' && (
        <div className="mb-4 bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-xl px-4 py-3">
          {t('formError')}
        </div>
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('formName')}
            className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-green-100/30 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('formEmail')}
            className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-green-100/30 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder={t('formSubject')}
          className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-green-100/30 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
        />
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={t('formMessage')}
          className="w-full bg-white/5 border border-green-500/20 rounded-xl px-4 py-3 text-white placeholder-green-100/30 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 transition-colors py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 text-white"
        >
          {status === 'sending' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              {t('formSending')}
            </>
          ) : t('formSend')}
        </button>
      </form>
      <p className="mt-4 text-xs text-green-100/20 text-center">
        {t('formDisclaimer')}
      </p>
    </div>
  )
}

const AboutPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-green-950 to-black text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-green-500 rounded-full" />
            <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">{t('heroBadge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
            {t('heroTitle')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              {t('heroSubtitle')}
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-green-100/60 max-w-2xl leading-relaxed">
            {t('heroDesc')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#story" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors px-7 py-3.5 rounded-full font-semibold text-sm text-white">
              {t('heroBtnLearn')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-green-500/40 hover:border-green-400 transition-colors px-7 py-3.5 rounded-full font-semibold text-sm text-green-300">
              {t('heroBtnContact')}
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-16 z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: t('stat1Num'), label: t('stat1Label') },
            { number: t('stat2Num'), label: t('stat2Label') },
            { number: t('stat3Num'), label: t('stat3Label') },
            { number: t('stat4Num'), label: t('stat4Label') },
          ].map((stat, i) => (
            <div key={i} className="bg-green-950/50 rounded-2xl shadow-xl shadow-green-900/20 p-6 text-center border border-green-500/20 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-green-400">{stat.number}</div>
              <div className="mt-2 text-sm text-green-100/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section id="story" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('storyBadge')}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {t('storyTitle')}
            </h2>
            <div className="mt-6 space-y-4 text-green-100/60 leading-relaxed">
              <p>{t('storyP1')}</p>
              <p>{t('storyP2')}</p>
              <p>{t('storyP3')}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-900 to-green-950 rounded-3xl overflow-hidden flex items-center justify-center border border-green-500/20">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-green-300 font-semibold text-lg">{t('storyMotto')}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-950 rounded-2xl shadow-xl p-5 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-green-300">ISO 9001</div>
                  <div className="text-xs text-green-100/40">{t('storyCert')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="bg-green-950/30 py-24 border-y border-green-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('missionBadge')}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {t('missionTitle')}
            </h2>
            <p className="mt-6 text-lg text-green-100/50 leading-relaxed">
              {t('missionDesc')}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: t('innovationTitle'),
                desc: t('innovationDesc'),
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: t('careTitle'),
                desc: t('careDesc'),
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: t('sustainTitle'),
                desc: t('sustainDesc'),
              },
            ].map((item, i) => (
              <div key={i} className="bg-black/50 rounded-2xl p-8 shadow-sm border border-green-500/15 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 transition-all">
                <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-green-300">{item.title}</h3>
                <p className="mt-3 text-green-100/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('valuesBadge')}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {t('valuesTitle')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏅', title: t('val1Title'), desc: t('val1Desc') },
            { icon: '⚡', title: t('val2Title'), desc: t('val2Desc') },
            { icon: '🌿', title: t('val3Title'), desc: t('val3Desc') },
            { icon: '🤝', title: t('val4Title'), desc: t('val4Desc') },
            { icon: '🎨', title: t('val5Title'), desc: t('val5Desc') },
            { icon: '💡', title: t('val6Title'), desc: t('val6Desc') },
            { icon: '🌍', title: t('val7Title'), desc: t('val7Desc') },
            { icon: '❤️', title: t('val8Title'), desc: t('val8Desc') },
          ].map((v, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-green-500/10 hover:border-green-500/40 hover:bg-green-500/5 transition-all">
              <div className="text-4xl">{v.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-green-200 group-hover:text-green-400 transition-colors">{v.title}</h3>
              <p className="mt-2 text-sm text-green-100/40 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="bg-gradient-to-b from-green-950/40 to-black py-24 border-y border-green-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">{t('teamBadge')}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {t('teamTitle')}
            </h2>
            <p className="mt-4 text-green-100/40 leading-relaxed">
              {t('teamDesc')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: t('team1Name'), role: t('team1Role'), bio: t('team1Bio') },
              { name: t('team2Name'), role: t('team2Role'), bio: t('team2Bio') },
              { name: t('team3Name'), role: t('team3Role'), bio: t('team3Bio') },
              { name: t('team4Name'), role: t('team4Role'), bio: t('team4Bio') },
            ].map((person, i) => (
              <div key={i} className="group text-center">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="mt-5 text-lg font-bold text-green-200">{person.name}</h3>
                <p className="text-green-400 text-sm font-medium">{person.role}</p>
                <p className="mt-2 text-sm text-green-100/40 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('timelineBadge')}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
            {t('timelineTitle')}
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-500/20 -translate-x-1/2" />
          {[
            { year: '2014', title: t('tl1Title'), desc: t('tl1Desc') },
            { year: '2016', title: t('tl2Title'), desc: t('tl2Desc') },
            { year: '2018', title: t('tl3Title'), desc: t('tl3Desc') },
            { year: '2020', title: t('tl4Title'), desc: t('tl4Desc') },
            { year: '2022', title: t('tl5Title'), desc: t('tl5Desc') },
            { year: '2024', title: t('tl6Title'), desc: t('tl6Desc') },
            { year: '2025', title: t('tl7Title'), desc: t('tl7Desc') },
          ].map((item, i) => (
            <div key={i} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-black shadow-lg shadow-green-500/50 -translate-x-1/2 mt-1 z-10" />
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-green-200">{item.title}</h3>
                <p className="mt-1 text-green-100/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="bg-green-950/20 py-20 border-y border-green-500/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('partnersBadge')}</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-white">
            {t('partnersTitle')}
          </h2>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[t('partner1'), t('partner2'), t('partner3'), t('partner4'), t('partner5'), t('partner6')].map((partner, i) => (
              <div key={i} className="text-green-100/20 hover:text-green-400 transition-colors font-bold text-lg md:text-xl tracking-wide">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">{t('testBadge')}</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
            {t('testTitle')}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: t('test1Text'),
              name: t('test1Name'),
              role: t('test1Role'),
            },
            {
              text: t('test2Text'),
              name: t('test2Name'),
              role: t('test2Role'),
            },
            {
              text: t('test3Text'),
              name: t('test3Name'),
              role: t('test3Role'),
            },
          ].map((tst, i) => (
            <div key={i} className="bg-green-950/30 rounded-2xl p-8 shadow-sm border border-green-500/15 hover:border-green-500/40 hover:shadow-md hover:shadow-green-500/5 transition-all">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                ))}
              </div>
              <p className="text-green-100/60 leading-relaxed italic">"{tst.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center font-bold text-sm">
                  {tst.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-green-200 text-sm">{tst.name}</div>
                  <div className="text-xs text-green-100/40">{tst.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-gradient-to-br from-black via-green-950 to-black text-white py-24 border-y border-green-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">{t('contactBadge')}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                {t('contactTitle')}
              </h2>
              <p className="mt-6 text-green-100/50 leading-relaxed">
                {t('contactDesc')}
              </p>
              <div className="mt-10 space-y-5">
                <a
                  href="tel:+998995553535"
                  className="group flex gap-4 items-center hover:bg-green-500/5 rounded-xl p-3 -m-3 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactPhone')}</div>
                    <div className="font-semibold group-hover:text-green-300 transition-colors">+998 (99) 555-35-35</div>
                    <div className="text-sm text-green-100/30">{t('contactPhoneSub')}</div>
                  </div>
                </a>

                <a
                  href="mailto:info@sportmarket.ru?subject=SportMarket"
                  className="group flex gap-4 items-center hover:bg-green-500/5 rounded-xl p-3 -m-3 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactEmail')}</div>
                    <div className="font-semibold group-hover:text-green-300 transition-colors">info@sportmarket.ru</div>
                    <div className="text-sm text-green-100/30">{t('contactEmailSub')}</div>
                  </div>
                </a>

                <a
                  href="https://yandex.ru/maps/?text=Москва+ул+Спортивная+42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 items-center hover:bg-green-500/5 rounded-xl p-3 -m-3 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactAddress')}</div>
                    <div className="font-semibold group-hover:text-green-300 transition-colors">{t('contactAddressValue')}</div>
                    <div className="text-sm text-green-100/30">{t('contactAddressSub')}</div>
                  </div>
                </a>

                <div className="flex gap-4 items-center p-3 -m-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactHours')}</div>
                    <div className="font-semibold text-green-200">{t('contactHours1')}</div>
                    <div className="text-sm text-green-100/30">{t('contactHours2')}</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/998995553535?text=SportMarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 items-center hover:bg-green-500/5 rounded-xl p-3 -m-3 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-600/20 group-hover:bg-green-600/30 rounded-lg flex items-center justify-center text-green-400 shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactWhatsApp')}</div>
                    <div className="font-semibold group-hover:text-green-300 transition-colors">{t('contactWhatsAppBtn')}</div>
                    <div className="text-sm text-green-100/30">{t('contactWhatsAppSub')}</div>
                  </div>
                </a>

                <a
                  href="https://t.me/sportmarket_ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 items-center hover:bg-green-500/5 rounded-xl p-3 -m-3 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/10 group-hover:bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs text-green-100/30 uppercase tracking-wider">{t('contactTelegram')}</div>
                    <div className="font-semibold group-hover:text-green-300 transition-colors">{t('contactTelegramBtn')}</div>
                    <div className="text-sm text-green-100/30">{t('contactTelegramSub')}</div>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t('ctaTitle')}</h2>
            <p className="mt-4 text-green-100 text-lg max-w-xl mx-auto">
              {t('ctaDesc')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-white text-green-600 hover:bg-green-50 transition-colors px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer">
                {t('ctaBtn1')}
              </a>
              <a href="/#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="border border-white/40 hover:border-white transition-colors px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer">
                {t('ctaBtn2')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
