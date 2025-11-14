import { useMemo } from 'react'
import { Phone, Watch, HeartPulse, Dumbbell, Moon, Footprints, Wind, Activity, Brain, Salad, Scale, Clock, Bolt, Target, Leaf, ShieldCheck, Globe2, Users2, ShoppingCart, Wrench, Cable, Cpu, CreditCard } from 'lucide-react'

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

function Badge({ children, color = '#0078FF' }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
      style={{ backgroundColor: `${color}14`, color }}
    >
      {children}
    </span>
  )
}

function FeatureCard({ title, desc, icon: Icon, accent = '#00D18F' }) {
  return (
    <div className="group rounded-2xl border border-gray-200/60 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex rounded-xl p-3" style={{ backgroundColor: `${accent}14`, color: accent }}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  )
}

export default function App() {
  const colors = useMemo(
    () => ({
      primary: '#0078FF',
      secondary: '#00D18F',
      support: '#1C1C1E',
      neutral: '#FFFFFF',
      accent: '#00F0FF',
    }),
    []
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gray-100/80 backdrop-blur bg-white/70">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center font-bold text-white" style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` }}>
              LT
            </div>
            <div>
              <div className="text-lg font-bold" style={{ color: colors.support }}>LifeTrainer</div>
              <div className="text-xs text-gray-500">Health comes first</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ['Home', '#home'],
              ['Funzionalità', '#features'],
              ['Dispositivi', '#devices'],
              ['Pacchetto LTB', '#package'],
              ['Costi', '#costs'],
              ['Agenda 2030', '#agenda'],
              ['Target', '#target'],
              ['Contatti', '#contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-gray-700 hover:text-gray-900 transition">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow" style={{ backgroundColor: colors.primary }}>
            <Phone className="h-4 w-4" /> Contattaci
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section id="home" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(1200px 600px at 10% -10%, ${colors.accent}22, transparent 60%), radial-gradient(1000px 500px at 90% 110%, ${colors.secondary}22, transparent 60%)`,
          }}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge color={colors.secondary}>Applicazione</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: colors.support }}>
              LifeTrainer
            </h1>
            <p className="mt-4 text-xl text-gray-700">
              Health comes first - La salute prima di tutto
            </p>
            <p className="mt-4 text-gray-600">
              Una piattaforma completa per monitorare salute, nutrizione e allenamento. Con il braccialetto LTB e l'app sul telefono, trasformi i dati in benessere quotidiano.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-semibold shadow" style={{ backgroundColor: colors.primary }}>
                <Bolt className="h-5 w-5" /> Scopri le funzionalità
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold" style={{ border: `2px solid ${colors.primary}`, color: colors.primary }}>
                Parla con noi
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge color={colors.primary}>Telefono</Badge>
              <Badge color={colors.secondary}>LTB (Life Trainer Band)</Badge>
              <Badge color={colors.accent}>Benessere</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: `${colors.primary}0D` }}>
                  <div className="flex items-center gap-3">
                    <HeartPulse className="h-6 w-6" style={{ color: colors.primary }} />
                    <div className="font-semibold">Salute</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Monitoraggio battito, ossigeno e respirazione.</p>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: `${colors.secondary}14` }}>
                  <div className="flex items-center gap-3">
                    <Salad className="h-6 w-6" style={{ color: colors.secondary }} />
                    <div className="font-semibold">Nutrizione</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Selezione cibi e suggerimenti per i pasti.</p>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: `${colors.accent}14` }}>
                  <div className="flex items-center gap-3">
                    <Dumbbell className="h-6 w-6" style={{ color: colors.accent }} />
                    <div className="font-semibold">Allenamenti</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Piani su misura per i tuoi obiettivi.</p>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ backgroundColor: `#1C1C1E0D` }}>
                  <div className="flex items-center gap-3">
                    <Watch className="h-6 w-6" style={{ color: colors.support }} />
                    <div className="font-semibold">LTB Band</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">Indossa, registra e migliora ogni giorno.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="bg-gray-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.support }}>Funzionalità</h2>
            <p className="mt-2 text-gray-600">Le funzioni contrassegnate con * sono disponibili su telefono. (+) indica il supporto con Life Trainer Band.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Badge color={colors.primary}>Telefono *</Badge>
            <Badge color={colors.secondary}>LTB +</Badge>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Activity} title="Monitoraggio salute (*)" desc="Panoramica della salute generale con indicatori chiave." accent={colors.primary} />
          <FeatureCard icon={Salad} title="Scelta cibi (*)" desc="Suggerimenti intelligenti per i pasti in base ai tuoi obiettivi." accent={colors.primary} />
          <FeatureCard icon={Clock} title="Attività odierne" desc="Registra le attività e traccia i progressi." accent={colors.secondary} />
          <FeatureCard icon={Moon} title="Sonno (+)" desc="Qualità e durata del sonno per recupero ottimale." accent={colors.secondary} />
          <FeatureCard icon={Footprints} title="Passi (+)" desc="Conta passi e distanza quotidiana." accent={colors.secondary} />
          <FeatureCard icon={Dumbbell} title="Allenamenti (+ *)" desc="Schede e routine personalizzate, sia da telefono che con LTB." accent={colors.accent} />
          <FeatureCard icon={Wind} title="Respirazione (+)" desc="Sessioni di respirazione guidata e monitoraggio." accent={colors.secondary} />
          <FeatureCard icon={HeartPulse} title="Battito cardiaco (+)" desc="Rilevazione continua del battito cardiaco." accent={colors.secondary} />
          <FeatureCard icon={Brain} title="Ossigeno nel sangue (+)" desc="Stima livello SpO₂ durante la giornata." accent={colors.secondary} />
          <FeatureCard icon={Target} title="Piani palestra" desc="Piani in base a bisogni, tempo e periodo di allenamento." accent={colors.accent} />
          <FeatureCard icon={Scale} title="Peso" desc="Tracciamento peso e tendenze nel tempo." accent={colors.primary} />
          <FeatureCard icon={Activity} title="Muscolo da allenare" desc="Focus per gruppo muscolare e obiettivo." accent={colors.accent} />
        </div>
      </Section>

      {/* Devices */}
      <Section id="devices">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6" style={{ color: colors.primary }} />
              <h3 className="text-2xl font-bold" style={{ color: colors.support }}>Telefono</h3>
            </div>
            <p className="mt-3 text-gray-600">L'app LifeTrainer sul telefono offre controllo completo, piani, consigli alimentari e sincronizzazione con il bracciale.</p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Dashboard salute e nutrizione</li>
              <li>Allenamenti guidati e timer</li>
              <li>Sincronizzazione dati con LTB</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <Watch className="h-6 w-6" style={{ color: colors.secondary }} />
              <h3 className="text-2xl font-bold" style={{ color: colors.support }}>LTB (Life Trainer Band)</h3>
            </div>
            <p className="mt-3 text-gray-600">Il bracciale LTB raccoglie dati in tempo reale: battito, SpO₂, passi, sonno e altro. Progettato per comfort e precisione.</p>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Sensori dedicati per salute e attività</li>
              <li>Magneti per ricarica rapida</li>
              <li>Autonomia pensata per tutto il giorno</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Package */}
      <Section id="package" className="bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.support }}>Cosa serve per costruire il pacchetto LTB</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Cpu} title="Sensore" desc="Il cuore del sistema: rileva parametri vitali con affidabilità." accent={colors.secondary} />
          <FeatureCard icon={Watch} title="Bracciale" desc="Supporto comodo e resistente per l'uso quotidiano." accent={colors.primary} />
          <FeatureCard icon={ShieldCheck} title="Copertura del sensore" desc="Protezione e stabilità per misurazioni precise." accent={colors.accent} />
          <FeatureCard icon={Cable} title="Magneti di ricarica & Cavo" desc="Connessione magnetica per ricariche semplici." accent={colors.secondary} />
          <FeatureCard icon={Wrench} title="Base di ricarica" desc="Dock compatto per ripristinare energia in sicurezza." accent={colors.primary} />
          <FeatureCard icon={ShoppingCart} title="Cinturini" desc="Vari stili per comfort e personalità." accent={colors.secondary} />
        </div>
      </Section>

      {/* Costs & Investments */}
      <Section id="costs">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
            <h3 className="text-2xl font-bold" style={{ color: colors.support }}>Investimenti</h3>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Stampante 3D</li>
            </ul>
            <div className="mt-4"><Badge color={colors.secondary}>Focus produttivo</Badge></div>
          </div>
          <div className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
            <h3 className="text-2xl font-bold" style={{ color: colors.support }}>Costi</h3>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Corso formazione per sviluppo software</li>
              <li>Sito Web</li>
              <li>Materiali produzione Band</li>
              <li>Sensore (10/15 €)</li>
              <li>Cinturini (10 €)</li>
              <li>Scocca Sensore (Stampante 3D)</li>
              <li>LifeTrainerBand.com (12 €/anno)</li>
              <li>Server (144 €/anno)</li>
            </ul>
            <div className="mt-4"><Badge color={colors.primary}><CreditCard className="h-4 w-4 mr-1" /> Budget trasparente</Badge></div>
          </div>
        </div>
      </Section>

      {/* Agenda 2030 */}
      <Section id="agenda" className="bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.support }}>Agenda 2030</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <HeartPulse className="h-6 w-6" style={{ color: colors.primary }} />
              <h3 className="text-xl font-semibold">Obiettivo 3</h3>
            </div>
            <p className="mt-2 text-gray-600">Salute e Benessere: prevenzione, monitoraggio e stili di vita sani.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <Users2 className="h-6 w-6" style={{ color: colors.secondary }} />
              <h3 className="text-xl font-semibold">Obiettivo 5 (opz.)</h3>
            </div>
            <p className="mt-2 text-gray-600">Parità di genere: accesso equo a strumenti e piani di salute.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <Leaf className="h-6 w-6" style={{ color: colors.accent }} />
              <h3 className="text-xl font-semibold">Obiettivo 13</h3>
            </div>
            <p className="mt-2 text-gray-600">Lotta al cambiamento climatico: scelte sostenibili e produzione responsabile.</p>
          </div>
        </div>
      </Section>

      {/* Target */}
      <Section id="target">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.support }}>Target</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <Dumbbell className="h-6 w-6" style={{ color: colors.accent }} />
              <h3 className="text-xl font-semibold">Sportivi</h3>
            </div>
            <p className="mt-2 text-gray-600">Atleti e appassionati che vogliono allenarsi con dati affidabili.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <Salad className="h-6 w-6" style={{ color: colors.secondary }} />
              <h3 className="text-xl font-semibold">Chi inizia una dieta</h3>
            </div>
            <p className="mt-2 text-gray-600">Piani alimentari e suggerimenti per obiettivi realistici.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <Users2 className="h-6 w-6" style={{ color: colors.primary }} />
              <h3 className="text-xl font-semibold">Squadre (calcio, base)</h3>
            </div>
            <p className="mt-2 text-gray-600">Supporto per monitorare performance e recupero nelle categorie minori.</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.support }}>Parliamo del tuo progetto</h2>
            <p className="mt-3 text-gray-600">Raccontaci di cosa hai bisogno: sito web, sviluppo software, o il tuo primo lotto di Life Trainer Band.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-gray-700"><Phone className="h-5 w-5" style={{ color: colors.primary }} /> +39 000 000 000</div>
              <div className="flex items-center gap-2 text-gray-700"><Globe2 className="h-5 w-5" style={{ color: colors.secondary }} /> LifeTrainerBand.com</div>
            </div>
          </div>
          <form className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nome</label>
                <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: '#e5e7eb', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, }} placeholder="Mario Rossi" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" placeholder="mario@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-600">Messaggio</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2" placeholder="Parlaci delle tue esigenze" />
              </div>
            </div>
            <button type="button" className="mt-4 w-full rounded-xl px-4 py-3 font-semibold text-white" style={{ backgroundColor: colors.primary }}>
              Invia richiesta
            </button>
            <p className="mt-3 text-xs text-gray-500">Compilando il form acconsenti al trattamento dei dati secondo normativa vigente.</p>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} LifeTrainer — La salute prima di tutto</div>
          <div className="flex items-center gap-3">
            <Badge color={colors.primary}>#0078FF</Badge>
            <Badge color={colors.secondary}>#00D18F</Badge>
            <Badge color={colors.support}>#1C1C1E</Badge>
            <Badge color={colors.accent}>#00F0FF</Badge>
          </div>
        </div>
      </footer>
    </div>
  )
}
