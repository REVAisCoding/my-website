// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Renata – Música & Ilustração
      </h1>
      <p className="mb-8 text-center max-w-xl">
        Bem-vindo(a) ao meu cantinho criativo. Aqui você encontra minhas músicas,
        estudos de cores, desenhos e futuros projetos interativos. ✨
      </p>

      <div className="flex gap-4">
        <a href="#musicas" className="underline">Ver músicas</a>
        <a href="#desenhos" className="underline">Ver desenhos</a>
      </div>
    </main>
  );
}