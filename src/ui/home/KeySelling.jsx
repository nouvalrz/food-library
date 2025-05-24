import { ChefHat } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { Smile } from "lucide-react";
import { ChartLine } from "lucide-react";
import React from "react";

const KeySelling = () => {
  return (
    <div className="rounded-xl shadow p-6 md:p-12 my-12 flex flex-col gap-8 md:flex-row md:justify-evenly ">
      <div className="flex gap-4 items-start">
        <ChartLine className="text-amber-500" />
        <div>
          <h3 className="text-xl font-semibold text-amber-500">1 Million +</h3>
          <p>Pengguna KokiRumahan terdaftar</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <ChefHat className="text-amber-500" />
        <div>
          <h3 className="text-xl font-semibold text-amber-500">5,000+</h3>
          <p>Koki professional membantumu</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <Smile className="text-amber-500" />
        <div>
          <h3 className="text-xl font-semibold text-amber-500">98%</h3>
          <p>Rata-rata kepuasan pengguna</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <ReceiptText className="text-amber-500" />
        <div>
          <h3 className="text-xl font-semibold text-amber-500">20,000+</h3>
          <p>Kumpulan resep</p>
        </div>
      </div>
    </div>
  );
};

export default KeySelling;
