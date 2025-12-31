import Image from "next/image";

export default function HomePage() {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2">
      {/* Texto à esquerda */}
      <div className="space-y-4">
        <p className="text-sm text-cyan-300 uppercase tracking-[0.25em]">
          Many arts in one place
        </p>

        <p className="text-sm text-slate-200 md:text-base">
          Hi, I&apos;m Reva, a singer, songwriter and illustrator. Here you will find
          recordings of shows, color studies and, in the future, interactive experiences that mix music, comics and games.
        </p>
      </div>

      {/* Foto à direita */}
      <div className="flex justify-center md:justify-end">
        <div className="relative aspect-[3/4] w-56 overflow-hidden">
          <Image
            src="/img/reva_home.png"
            alt="Renata tocando ukulele em um show"
            fill
            className="object-cover object-center transform -rotate-90"
            priority
          />
        </div>
      </div>
    </section>
  );
}