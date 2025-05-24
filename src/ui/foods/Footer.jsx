import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-5 md:p-10 lg:p-15 bg-gray-900 text-white rounded-xl flex flex-col md:flex-row justify-between gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center font-[Quicksand] ">
          <img src="./koki-rumahan-logo.svg" alt="logo" className="w-12 h-12" />
          <p className="font-bold text-2xl">KokiRumahan</p>
        </div>
        <p className="max-w-[500px]">
          Temukan berbagai resep masakan rumahan, dari yang tradisional hingga
          kekinian, hanya di KokiRumahan.
        </p>

        <p className="text-gray-400 mt-auto">
          © 2024 KokiRumahan. Hak cipta dilindungi undang-undang.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 md:gap-18 order-first md:order-last">
        <div>
          <h4 className="text-lg font-medium">Perusahaan</h4>
          <div className="flex flex-col gap-2 mt-4">
            <p>Tentang Kami</p>
            <p>Kisah Kita</p>
            <p>Bekerja Sama</p>
            <p>Testimoni Pengguna</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium">Bantuan</h4>
          <div className="flex flex-col gap-2 mt-4">
            <p>FAQ</p>
            <p>Langganan</p>
            <p>Ketentuan Pengguna</p>
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
