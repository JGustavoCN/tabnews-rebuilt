import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TabIFS - O fim da bagunça no WhatsApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="content">
        <header className="header">
          <h1 className="title">TabIFS</h1>
          <p className="subtitle">
            Centralizando o conhecimento do IFS de forma orgânica.
          </p>
        </header>

        <section className="comparison-grid">
          {/* Lado Esquerdo: O Caos */}
          <div className="card caos">
            <div className="status-badge">Como é hoje ❌</div>
            <div className="whatsapp-mockup">
              <div className="msg">"Alguém tem o link da aula?"</div>
              <div className="msg emoji">"👍🤣🙏"</div>
              <div className="msg alert">"Aviso: Reunião cancelada!"</div>
              <div className="msg">"Figurinha de bom dia"</div>
              <div className="msg">"Onde tá o PDF do professor?"</div>
            </div>
            <h2>O Caos do WhatsApp</h2>
            <p>
              Informações valiosas perdidas entre memes, brigas e centenas de
              notificações barulhentas.
            </p>
          </div>

          {/* Lado Direito: A Ordem */}
          <div className="card ordem">
            <div className="status-badge success">Como vai ser ✅</div>
            <div className="tabifs-mockup">
              <div className="tab-item">📄 Tutorial: Como acessar o SIGAA</div>
              <div className="tab-item">🔗 Links úteis para Engenharia</div>
              <div className="tab-item">💼 Vaga de Estágio - TI</div>
            </div>
            <h2>A Ordem do TabIFS</h2>
            <p>
              Conteúdo concreto, indexado e fácil de encontrar. Sem ruído, foco
              total na leitura e aprendizado.
            </p>
          </div>
        </section>

        <footer className="footer">
          <p className="construction-tag">
            🚧 Em construção constante para os alunos do IFS 🚧
          </p>
        </footer>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          background: #fafafa;
          color: #333;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .title {
          font-size: 3rem;
          font-weight: 800;
          color: #000;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1000px;
        }

        .card {
          background: white;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
        }

        .status-badge {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.8rem;
          align-self: flex-start;
        }
        .status-badge.success {
          background: #dcfce7;
          color: #16a34a;
        }

        /* Mockups Visuais */
        .whatsapp-mockup,
        .tabifs-mockup {
          background: #f0f2f5;
          height: 150px;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          overflow: hidden;
          filter: blur(0.5px);
        }
        .tabifs-mockup {
          background: #fff;
          border: 1px solid #eee;
          filter: none;
        }

        .msg {
          background: white;
          padding: 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          width: 80%;
        }
        .msg.alert {
          background: #dcfce7;
          align-self: flex-end;
        }

        .tab-item {
          border-bottom: 1px solid #f0f0f0;
          padding: 0.5rem 0;
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563eb;
        }

        .footer {
          margin-top: 4rem;
          text-align: center;
        }
        .construction-tag {
          font-weight: bold;
          color: #888;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
