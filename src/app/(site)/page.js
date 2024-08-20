export default function Home() {
  return (
    <section className="flex items-center h-[80vh] p-2 sm:p-10">
    <div className="flex flex-col justify-center h-full -mt-28">
      <div className="font-bold text-xl sm:text-3xl text-emerald-200">
        Caio Oliveira
      </div>
      <div className="font-bold text-4xl sm:text-6xl sm:leading-tight text-zinc-50">
        Desenvolver Web
        <br />
        Especialista JavaScript
      </div>
      <div className="font-thin text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-zinc-300 mt-5 sm:max-w-[50%]">
        Desenvolvendo soluções que transcendem o comum, proporcionando
        experiências excepcionais que simplificam e aprimoram a conexão humana
        com a tecnologia.
      </div>
    </div>
  </section>

  );
}
