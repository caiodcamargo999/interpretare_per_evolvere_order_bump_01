import React, { useState } from 'react';
import './landing.css';

interface ModuleSection {
  part: string;
  title: string;
  pages: string;
  description: string;
  icon: string;
  badgeColor: string;
  highlights: string[];
}

const kitSections: ModuleSection[] = [
  {
    part: 'PARTE 1',
    title: 'Guida al Kit & Impugnatura Corretta',
    pages: 'Pagine 5 – 9',
    icon: '✍️',
    badgeColor: '#887396',
    description:
      'Spiegazione illustrata della presa a tripode a 45°, postura con schiena dritta e inclinazione del foglio per destrorsi e mancini. Include consigli per dosare la pressione ed evitare affaticamento muscolare.',
    highlights: ['Presa a tripode corretta', 'Postura e inclinazione del foglio', 'Come evitare l\'affaticamento']
  },
  {
    part: 'PARTE 2',
    title: 'Riscaldamento & Tratti di Base',
    pages: 'Pagine 10 – 12',
    icon: '〰️',
    badgeColor: '#be868c',
    description:
      'Schede preparatorie con linee verticali, orizzontali, diagonali e onde progressive per sciogliere il polso, coordinare il movimento occhio-mano e acquisire ritmo prima della scrittura.',
    highlights: ['Linee rette e curve fluide', 'Scioglimento del polso', 'Controllo del movimento']
  },
  {
    part: 'PARTE 3',
    title: 'Alfabeto Completo (A – Z)',
    pages: 'Pagine 13 – 22',
    icon: '🔤',
    badgeColor: '#887396',
    description:
      'Tutte le 26 lettere con righe a tre altezze: limite superiore per le aste, linea tratteggiata per il corpo e linea di base. Ricalco guidato in grigio seguito da scrittura autonoma.',
    highlights: ['26 Lettere complete A-Z', 'Righe graduate a 3 livelli', 'Ricalco + scrittura libera']
  },
  {
    part: 'PARTE 4',
    title: 'Cifre e Numeri da 0 a 9',
    pages: 'Pagine 23 – 27',
    icon: '🔢',
    badgeColor: '#be868c',
    description:
      'Esercizi mirati per tracciare cifre nitide e inequivocabili (distinguendo 1 da 7, 0 da 6), prevenendo errori e fraintendimenti nei calcoli e nelle verifiche di matematica.',
    highlights: ['Cifre chiare da 0 a 9', 'Proporzioni costanti', 'Zero errori in matematica']
  },
  {
    part: 'PARTE 5',
    title: 'Parole d\'Uso Comune & Frasi Brevi',
    pages: 'Pagine 28 – 38',
    icon: '📝',
    badgeColor: '#887396',
    description:
      'Dalla singola lettera alla parola e frase completa: parole familiari (mamma, papà, scuola, casa) ed esercizi di collegamento per rendere il gesto automatico, fluido e spedito.',
    highlights: ['Parole familiari quotidiane', 'Spaziatura tra parole', 'Frasi complete graduate']
  },
  {
    part: 'PARTE 6',
    title: 'Diario dei Progressi & Attestato Finale',
    pages: 'Pagine 39 – 40',
    icon: '🏆',
    badgeColor: '#00963a',
    description:
      'Tabella settimanale di monitoraggio con autovalutazione a stelline per stimolare la costanza, più l\'Attestato Ufficiale di Completamento da firmare e appendere in cameretta.',
    highlights: ['Diario settimanale a stelle', 'Autovalutazione motivante', 'Attestato Ufficiale da incorniciare']
  }
];

export default function App() {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  const pdfUrl = '/Kit_Calligrafia_Perfetta-orderbump.pdf';
  const pdfDownloadName = 'Kit_Calligrafia_Perfetta-orderbump.pdf';

  const triggerDownload = () => {
    setIsDownloaded(true);
    setDownloadCount(prev => prev + 1);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7f8fa',
        color: '#363636',
        fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: 'flex',
        flexDirection: 'column',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {/* Top Brand Notification Banner */}
      <div
        style={{
          background: '#887396',
          color: '#ffffff',
          textAlign: 'center',
          padding: '10px 16px',
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '0.3px'
        }}
      >
        ✨ Accesso a Vita Garantito · Salva questa pagina tra i preferiti del tuo browser
      </div>

      {/* Main Header */}
      <header
        style={{
          background: '#ffffff',
          borderBottom: '1.5px solid #e6e8ea',
          padding: '48px 20px 40px 20px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(136, 115, 150, 0.12)',
              border: '1.5px solid #887396',
              color: '#887396',
              fontWeight: 700,
              fontSize: '12px',
              padding: '6px 18px',
              borderRadius: '20px',
              letterSpacing: '0.8px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            <span>🔒</span>
            <span>Area Riservata Clienti · Download Immediato</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              lineHeight: '1.25',
              marginBottom: '14px',
              color: '#363636',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Il Tuo Kit Calligrafia Perfetta
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#6b6b6b',
              maxWidth: '680px',
              margin: '0 auto 28px auto',
              lineHeight: '1.6'
            }}
          >
            Congratulazioni per il tuo acquisto! Il tuo file PDF del{' '}
            <strong style={{ color: '#887396' }}>Kit Calligrafia Perfetta — Scrittura Chiara e Sicura</strong> è pronto
            per essere scaricato e stampato.
          </p>

          {/* Quick 1-Click Download Button */}
          <button
            onClick={triggerDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: isDownloaded ? '#00963a' : '#00a1e6',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '17px',
              padding: '16px 36px',
              borderRadius: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: isDownloaded
                ? '0 8px 24px rgba(0, 150, 58, 0.35)'
                : '0 8px 24px rgba(0, 161, 230, 0.35)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
              textTransform: 'uppercase',
              fontFamily: 'Poppins, sans-serif'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = isDownloaded
                ? '0 12px 28px rgba(0, 150, 58, 0.45)'
                : '0 12px 28px rgba(0, 161, 230, 0.45)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDownloaded
                ? '0 8px 24px rgba(0, 150, 58, 0.35)'
                : '0 8px 24px rgba(0, 161, 230, 0.35)';
            }}
          >
            <svg
              style={{ width: '22px', height: '22px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>
              {isDownloaded
                ? `Scaricato con successo! ✅ (Riscarica PDF)`
                : 'Scarica il Tuo Kit in 1 Clic (PDF)'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '44px 20px', width: '100%', flex: 1 }}>
        {/* Main Product Card */}
        <section style={{ marginBottom: '44px' }}>
          <div
            style={{
              background: '#ffffff',
              border: '2.5px solid #887396',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 36px)',
              boxShadow: '0 8px 30px rgba(136, 115, 150, 0.12)',
              position: 'relative'
            }}
          >
            {/* Tag Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <span
                style={{
                  background: '#887396',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                ORDER BUMP ESCLUSIVO · 40 PAGINE
              </span>
              <span
                style={{
                  background: 'rgba(0, 199, 56, 0.12)',
                  color: '#00963a',
                  border: '1px solid #00c738',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Completo & Aggiornato 2026
              </span>
              <span
                style={{
                  background: 'rgba(190, 134, 140, 0.14)',
                  color: '#be868c',
                  border: '1px solid #be868c',
                  fontWeight: 700,
                  fontSize: '12px',
                  padding: '5px 14px',
                  borderRadius: '8px',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Edizione Italiana A4
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 32px)',
                fontWeight: 700,
                color: '#363636',
                marginBottom: '6px',
                lineHeight: '1.3',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Kit Calligrafia Perfetta — Scrittura Chiara e Sicura
            </h2>

            <p
              style={{
                color: '#887396',
                fontSize: '17px',
                fontWeight: 600,
                marginBottom: '16px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Percorso Pratico e Graduale di Scrittura Guidata (Stampatello, Numeri, Parole e Frasi)
            </p>

            {/* Visual Hero Banner */}
            <div style={{ marginBottom: '24px', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e6e8ea' }}>
              <img
                src="/images/calligrafia_orderbump_hero.png"
                alt="Kit Calligrafia Perfetta - Scrittura Chiara e Sicura"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.65', marginBottom: '22px' }}>
              Un percorso pratico sviluppato specificamente per aiutare tuo figlio a scrivere in modo più leggibile,
              ordinato e fluido. Lavora dalle radici della grafia — impugnatura corretta, postura e controllo della
              matita — fino al ricalco e alla scrittura autonoma di lettere, cifre, parole e frasi d'uso comune,
              con soli <strong>10 minuti di esercizio mirato al giorno</strong>.
            </p>

            {/* Checklist features */}
            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px',
                marginBottom: '26px'
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#363636',
                  marginBottom: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px'
                }}
              >
                Cosa include questo percorso didattico:
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Guida Metodologica Illustrata:</strong> Presa a tripode a 45°, corretta postura e inclinazione del foglio per eliminare l'affaticamento delle dita.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Riscaldamento del Polso:</strong> Tratti preparatori, onde e linee progressive per riscaldare la muscolatura fine e rendere il tratto sciolto e sicuro.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Alfabeto Completo (A – Z):</strong> Righe speciali a 3 altezze (asta superiore, corpo lettera e base) con ricalco in grigio e scrittura autonoma.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Cifre e Numeri (0 – 9):</strong> Grafia precisa delle cifre per evitare confusioni e voti penalizzati nei compiti e problemi di matematica.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Parole d'Uso Comune & Frasi:</strong> Passaggio dalla singola lettera alla combinazione fluida di vocaboli quotidiani per automatizzare la scrittura.
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#363636' }}>
                  <svg
                    style={{ width: '20px', height: '20px', color: '#00c738', flexShrink: 0, marginTop: '2px' }}
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    <strong>Diario dei Progressi + Attestato Ufficiale:</strong> Tabella con autovalutazione a stelle e diploma finale di merito pronto da incorniciare.
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                paddingTop: '12px',
                borderTop: '1px solid #e6e8ea'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  📄 40 Pagine (PDF A4)
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  💾 233 KB
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6b6b6b',
                    background: '#f4f0f5',
                    padding: '6px 14px',
                    borderRadius: '8px'
                  }}
                >
                  ⏱️ 10 Minuti al Giorno
                </span>
              </div>

              <a
                href={pdfUrl}
                download={pdfDownloadName}
                onClick={triggerDownload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: isDownloaded ? '#00963a' : '#00a1e6',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '16px',
                  padding: '14px 28px',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  boxShadow: isDownloaded
                    ? '0 6px 18px rgba(0, 150, 58, 0.3)'
                    : '0 6px 18px rgba(0, 161, 230, 0.35)',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                <svg
                  style={{ width: '18px', height: '18px' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>{isDownloaded ? 'Scaricato ✅ (Riscarica)' : 'Scarica Manuale (PDF)'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section: Structure of the Kit (6 Parts Grid) */}
        <section style={{ marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(136, 115, 150, 0.14)',
                border: '1.5px solid #887396',
                color: '#887396',
                fontWeight: 700,
                fontSize: '12px',
                padding: '5px 16px',
                borderRadius: '20px',
                letterSpacing: '0.8px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              La Struttura del Percorso Didattico
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 32px)',
                fontWeight: 700,
                color: '#363636',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              6 Sezioni Guidate per una Grafia Perfetta
            </h2>
            <p style={{ color: '#6b6b6b', fontSize: '16px', marginTop: '6px' }}>
              Dalla correzione della postura fino all'attestato finale: ogni parte allena un aspetto fondamentale.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px'
            }}
          >
            {kitSections.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  border: `2px solid ${item.badgeColor}`,
                  borderRadius: '18px',
                  padding: '26px 22px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px'
                    }}
                  >
                    <span
                      style={{
                        background: item.badgeColor,
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '11px',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.4px',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {item.part}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#888888' }}>
                      {item.pages}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#363636',
                        lineHeight: '1.3',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.55', marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    background: '#f7f8fa',
                    border: '1px solid #e6e8ea',
                    borderRadius: '10px',
                    padding: '12px 14px'
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.highlights.map((hl, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#444444' }}>
                        <span style={{ color: '#00c738', fontWeight: 700 }}>✓</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions & Printing Guide Section */}
        <section
          style={{
            background: '#ffffff',
            border: '1.5px solid #e6e8ea',
            borderRadius: '20px',
            padding: '36px 28px',
            marginBottom: '44px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#363636',
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '8px'
              }}
            >
              💡 Consigli per l'Uso e la Stampa del Tuo Kit
            </h3>
            <p style={{ color: '#6b6b6b', fontSize: '15px' }}>
              Tre semplici passaggi pratici per ottenere i massimi risultati senza forzature o stress.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>⏱️</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                1. Solo 10 Minuti al Giorno
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                La chiave è la costanza, non la durata. Una singola sessione da 10 minuti sviluppa la memoria muscolare della mano senza stancare il bambino.
              </p>
            </div>

            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>✏️</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                2. Presa Morbida a Tripode
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                Se le dita si arrossano o si affaticano, verifica che la presa non sia troppo stretta. La matita deve scorrere con leggerezza a 45 gradi.
              </p>
            </div>

            <div
              style={{
                background: '#f7f8fa',
                border: '1.5px solid #e6e8ea',
                borderRadius: '14px',
                padding: '22px'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🖨️</div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#363636',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '8px'
                }}
              >
                3. Stampa Flessibile in Formato A4
              </h4>
              <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.55' }}>
                Stampa l'intero quaderno o solo 1-2 schede alla volta. Il formato verticale A4 garantisce ampi margini di scrittura e ricalco comodo.
              </p>
            </div>
          </div>
        </section>

        {/* Support & Guarantee Purple Card */}
        <section
          style={{
            background: '#887396',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '36px 28px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(136, 115, 150, 0.25)'
          }}
        >
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🛡️</div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '10px'
            }}
          >
            Hai Bisogno di Assistenza o Vuoi Riscaricare il File?
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '640px',
              margin: '0 auto 20px auto',
              lineHeight: '1.6'
            }}
          >
            Il tuo acquisto include l'accesso a vita garantito al Kit. Puoi salvare questa pagina nei segnalibri del tuo
            browser per riscaricare il PDF ogni volta che vorrai. Per qualsiasi dubbio o necessità tecnica, il nostro
            team di supporto è sempre a tua disposizione.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.18)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              padding: '10px 24px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            ✉️ Supporto via Email: risposte rapide entro 24 ore lavorative
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: '#ffffff',
          borderTop: '1.5px solid #e6e8ea',
          padding: '32px 20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#888888',
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ marginBottom: '8px' }}>
            © {new Date().getFullYear()} Kit Calligrafia Perfetta — Tutti i diritti riservati.
          </p>
          <p style={{ fontSize: '13px', color: '#aaaaaa' }}>
            Percorso pratico di scrittura guidata per una grafia chiara, leggibile, fluida e sicura.
          </p>
        </div>
      </footer>
    </div>
  );
}
