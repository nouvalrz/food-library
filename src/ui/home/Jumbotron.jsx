import Image from "next/image";

const Jumbotron = () => {
  return (
    <section className="rounded-xl relative w-full h-[400px] overflow-clip">
      <Image
        src="/images/main-jumbotron.webp"
        fill
        className="object-cover"
        alt="jumbotron"
      />
      <div className="absolute inset-0 flex items-center  px-6 md:px-12 lg:px-18">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold whitespace-pre-line bg-white p-4 shadow rounded-xl">
          Cari{"\n"}
          <span className="text-amber-500">Kuliner</span> Disini
        </h1>
      </div>
    </section>
  );
};

export default Jumbotron;
