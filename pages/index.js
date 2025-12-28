import { useState } from 'react';
import Head from 'next/head';

export default function Cupons() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const [cupons, setCupons] = useState([
    {
      id: 1,
      titulo: "Massagem Tira-Tensão",
      emoji: "💆‍♀️",
      descricao: "30 min focados nas suas costas e ombros. Adeus dor muscular, olá relaxamento.",
      resgatado: false
    },
    {
      id: 2,
      titulo: "Dormir de Conchinha",
      emoji: "🛌",
      descricao: "Minha presença, meu cheiro e meu abraço a noite toda. Para você se sentir segura.",
      resgatado: false
    },
    {
      id: 3,
      titulo: "Nossa Bolha Particular",
      emoji: "🔒",
      descricao: "Um momento 100% desconectado do mundo. Sem problemas, só eu, você e nosso carinho.",
      resgatado: false
    },
    {
      id: 4,
      titulo: "Jantar do Cheff Gustavo",
      emoji: "🍝",
      descricao: "Eu assumo a cozinha. Você senta, toma um vinho (ou suco) e espera ser servida.",
      resgatado: false
    },
    {
      id: 5,
      titulo: "Beijo de Cinema",
      emoji: "💋",
      descricao: "Aquele beijo lento, sem hora para acabar, igual ao do nosso começo.",
      resgatado: false
    },
    {
      id: 6,
      titulo: "Sessão Desabafo",
      emoji: "👂",
      descricao: "Sou todo ouvidos. Pode reclamar, chorar ou contar do dia. Eu tô aqui pra você.",
      resgatado: false
    }
  ]);

  const ativarToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const resgatarCupom = (id) => {
    const novosCupons = cupons.map(cupom => {
      if (cupom.id === id && !cupom.resgatado) {
        ativarToast(`✨ Cupom "${cupom.titulo}" ativado! Mande o print agora. ❤️`);
        return { ...cupom, resgatado: true };
      }
      return cupom;
    });
    setCupons(novosCupons);
  };

  return (
    <div className="container">
      <Head>
        <title>Para meu Amor ❤️</title>
        <meta name="theme-color" content="#fdfcf0" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>

      <div className="aurora-background"></div>

      <main className="content">
        <header className="header">
          <h1 className="title">Cupons de Cuidado</h1>
          <p className="subtitle">
            Amor ❤️, sei que o cansaço bate forte.<br/>
            Esses são meus presentes para te ver sorrir.
          </p>
        </header>

        <div className="grid">
          {cupons.map((cupom) => (
            <div 
              key={cupom.id} 
              className={`card ${cupom.resgatado ? 'resgatado' : ''}`}
              onClick={() => !cupom.resgatado && resgatarCupom(cupom.id)}
            >
              <div className="emoji">{cupom.emoji}</div>
              <h2 className="card-title">{cupom.titulo}</h2>
              <p className="card-desc">{cupom.descricao}</p>
              
              <button className="btn-resgatar">
                {cupom.resgatado ? '🥰 Solicitado' : 'Quero Esse'}
              </button>
            </div>
          ))}
        </div>
      </main>

      <div className={`toast ${showToast ? 'show' : ''}`}>
        <div className="toast-icon">✨</div>
        <div className="toast-msg">{toastMessage}</div>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          font-family: 'Lato', sans-serif;
          background: #fdfcf0;
          color: #4a4a4a;
          overflow-x: hidden;
        }

        .aurora-background {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          background: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,0.05) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,0.05) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,0.05) 0, transparent 50%);
          background: 
            radial-gradient(at 40% 20%, rgba(255, 183, 178, 0.4) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(255, 218, 193, 0.4) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(226, 240, 203, 0.4) 0px, transparent 50%);
          filter: blur(60px);
          will-change: transform;
          animation: aurora-move 20s ease infinite alternate;
        }

        @keyframes aurora-move {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .container {
          min-height: 100vh;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header {
          text-align: center;
          margin: 30px 0 40px 0;
          position: relative;
          z-index: 2;
        }

        .title {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          color: #6d4c41;
          margin-bottom: 10px;
          line-height: 1.1;
        }

        .subtitle {
          font-size: 1rem;
          color: #7d6863;
          line-height: 1.5;
          font-style: italic;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          width: 100%;
          max-width: 500px;
          padding-bottom: 120px;
        }

        .card {
          position: relative;
          border-radius: 20px;
          padding: 25px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.05),
            inset 0 0 20px rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.2s;
          cursor: pointer;
          touch-action: manipulation;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: 0.6s;
          pointer-events: none;
        }

        .card:hover::before {
          left: 100%;
        }

        .card:active {
          transform: scale(0.96);
          background: rgba(255, 255, 255, 0.65);
        }

        .card.resgatado {
          opacity: 0.6;
          filter: grayscale(0.6);
          pointer-events: none;
        }

        .emoji {
          font-size: 3rem;
          margin-bottom: 12px;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #4a4a4a;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.45;
        }

        .btn-resgatar {
          background: linear-gradient(135deg, #e3aadd 0%, #ffafbd 100%);
          border: none;
          padding: 14px 0;
          width: 100%;
          border-radius: 12px;
          color: white;
          font-weight: bold;
          font-family: 'Lato', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(227, 170, 221, 0.4);
          transition: opacity 0.2s;
        }

        .toast {
          position: fixed;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 1000;
          transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 92%;
          max-width: 400px;
          border: 1px solid rgba(227, 170, 221, 0.4);
          backdrop-filter: blur(10px);
        }

        .toast.show {
          bottom: 30px;
        }

        .toast-icon {
          font-size: 1.4rem;
        }

        .toast-msg {
          font-size: 0.95rem;
          font-weight: 600;
          color: #4a4a4a;
        }

        @media (min-width: 768px) {
          .title { font-size: 3rem; }
          .grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); max-width: 1000px; }
          .card:hover { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}