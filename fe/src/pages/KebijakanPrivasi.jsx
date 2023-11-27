import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarComponent from "../components/Navbar";

export const KebijakanPrivasi = () => {
  return (
    <>
      <NavbarComponent />
      <Header titleH="Kebijakan Privasi" />
      <div className="container-kebijakan text-justify">
        <div>
          <p>
            Selamat datang di <span className="bold">DishFit.com!</span> Kami
            menghargai privasi Anda dan berkomitmen untuk melindungi informasi
            pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, dan melindungi informasi yang Anda
            berikan ketika menggunakan situs kami. Dengan menggunakan situs ini,
            Anda menyetujui praktik yang dijelaskan dalam kebijakan privasi ini.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3 fs-4">Informasi yang Kami Kumpulkan</p>
          <p className="bold mt-4 mb-1">Informasi Pribadi:</p>
          <p>
            Kami dapat mengumpulkan informasi pribadi seperti nama, alamat
            email, dan informasi kontak lainnya yang Anda berikan secara
            sukarela melalui formulir pendaftaran atau interaksi lainnya di
            situs.
          </p>
          <p className="bold mt-4 mb-1">Informasi Non-Pribadi:</p>
          <p>
            Kami juga dapat mengumpulkan informasi non-pribadi, termasuk data
            demografis, preferensi makanan, dan informasi lain yang tidak dapat
            digunakan untuk mengidentifikasi Anda secara pribadi.
          </p>
          <p className="bold mt-4 mb-1">Cookie dan Teknologi Pelacakan:</p>
          <p>
            Kami menggunakan cookie dan teknologi pelacakan serupa untuk
            mengumpulkan informasi tentang penggunaan Anda di situs. Informasi
            ini membantu kami memahami preferensi Anda dan meningkatkan
            pengalaman pengguna.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3 fs-4">Penggunaan Informasi</p>
          <p className="bold mt-4 mb-1">Pemberitahuan:</p>
          <p>
            Informasi yang kami kumpulkan dapat digunakan untuk memberikan
            pemberitahuan tentang pembaruan situs, resep makanan terbaru, atau
            informasi kesehatan yang mungkin menarik bagi Anda.
          </p>
          <p className="bold mt-4 mb-1">Personalisasi Konten:</p>
          <p>
            Informasi yang kami kumpulkan dapat digunakan untuk mempersonalisasi
            konten dan pengalaman pengguna di situs, sesuai dengan preferensi
            dan kebutuhan masing-masing pengguna.
          </p>
          <p className="bold mt-4 mb-1">Analisis dan Peningkatan:</p>
          <p>
            Kami dapat menggunakan informasi untuk melakukan analisis statistik
            guna meningkatkan konten, layanan, dan pengalaman pengguna secara
            keseluruhan.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3 fs-4">Berbagi Informasi</p>
          <p className="bold mt-4 mb-1">Pihak Ketiga:</p>
          <p>
            Kami tidak akan menjual, menyewakan, atau memberikan informasi
            pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali seperti
            yang diizinkan atau diwajibkan oleh hukum.
          </p>
          <p className="bold mt-4 mb-1">Pihak Terkait:</p>
          <p>
            Informasi dapat dibagikan dengan pihak terkait seperti penyedia
            layanan pihak ketiga yang membantu kami dalam operasional situs dan
            layanan terkait.
          </p>
          <p className="bold mt-4 mb-1">Keamanan Informasi</p>
          <p>
            Kami mengambil langkah-langkah keamanan fisik, elektronik, dan
            prosedural yang sesuai untuk melindungi informasi pribadi Anda dari
            akses yang tidak sah atau penggunaan yang tidak sah.
          </p>
          <p className="bold mt-4 mb-1">Perubahan pada Kebijakan Privasi</p>
          <p>
            Kami berhak untuk memperbarui kebijakan privasi ini kapan saja.
            Setiap perubahan akan diberlakukan segera setelah diposting di
            situs. Kami mendorong Anda untuk memeriksa kebijakan privasi ini
            secara berkala.
          </p>
          <p>
            Dengan menggunakan situs kami, Anda setuju dengan kebijakan privasi
            ini. Jika Anda tidak setuju dengan kebijakan ini, harap tidak
            menggunakan situs kami.
          </p>
          <p>
            Terima kasih atas kepercayaan Anda kepada{" "}
            <span className="bold">DishFit.com!.</span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
