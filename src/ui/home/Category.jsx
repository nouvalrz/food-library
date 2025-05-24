import { Soup } from "lucide-react";
import Pill from "./Pill";
import { Popcorn } from "lucide-react";
import { Salad } from "lucide-react";
import { Drumstick } from "lucide-react";
import { HeartPlus } from "lucide-react";
import { AlarmSmoke } from "lucide-react";

const Category = () => {
  return (
    <section className="flex flex-col items-center my-18">
      <h2 className="text-2xl font-semibold">Semua Resep Ada Disini</h2>
      <div className="flex gap-4 flex-wrap w-full max-w-[700px] justify-center mt-10">
        <Pill>
          <Soup className="text-amber-500" />
          Semua Makanan
        </Pill>

        <Pill>
          <Popcorn className="text-amber-500" />
          Cemilan
        </Pill>

        <Pill>
          <Salad className="text-amber-500" />
          Sayuran dan Buah
        </Pill>

        <Pill>
          <Drumstick className="text-amber-500" />
          Daging
        </Pill>

        <Pill>
          <HeartPlus className="text-amber-500" />
          Makanan Sehat
        </Pill>

        <Pill>
          <AlarmSmoke className="text-amber-500" />
          Mie
        </Pill>
      </div>
    </section>
  );
};

export default Category;
