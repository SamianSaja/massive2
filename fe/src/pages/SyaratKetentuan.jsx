import Footer from "../components/Footer";
import Header from "../components/Header";
import NavbarComponent from "../components/Navbar";

export const SyaratKetentuan = () => {
  return (
    <>
      <NavbarComponent />
      <Header titleH="Syarat & Ketentuan" />
      <div className="container-syarat text-justify">
        <div>
          <p>
            Syarat dan Ketentuan ini merupakan perjanjian antara pengguna dan
            DishFit ("Kami"). Syarat dan Ketentuan ini mengatur Anda saat
            mengakses dan menggunakan seluruh layanan dan fitur yang kami
            sediakan (untuk selanjutnya secara bersama-sama akan disebut sebagai
            "Platform").
          </p>
          <p>
            Harap membaca Syarat dan Ketentuan ini secara seksama sebelum Anda
            mulai menggunakan Platform Kami, karena peraturan ini berlaku pada
            penggunaan Anda terhadap Platform Kami.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3">Akun</p>
          <p>
            Sebelum menggunakan Platform, Anda dapat mendaftarkan diri Anda
            dengan memberikan informasi yang Kami butuhkan. Saat melakukan
            pendaftaran, Kami akan meminta Anda untuk memberikan akses akun
            google, nama lengkap, gambar profil, jenis kelamin dan alamat surat
            elektronik Anda. Kami juga dapat menghentikan penggunaan Platform
            jika dikemudian hari data-data yang Anda berikan kepada Kami
            terbukti tidak benar.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3">Akses terhadap Layanan Kami</p>
          <p>
            Kami tidak menjamin bahwa Platform Kami, maupun konten di dalamnya,
            akan selalu tersedia atau tanpa gangguan. Kami dapat menangguhkan,
            menarik, memberhentikan, maupun mengganti bagian mana pun dari
            Platform Kami tanpa pemberitahuan sebelumnya. Kami tidak bertanggung
            jawab atas alasan apa pun yang membuat Platform Kami tidak tersedia
            pada waktu atau periode tertentu.
          </p>
        </div>
        <div>
          <p className="bold mt-4 mb-3">Tanggung Jawab Anda</p>
          <p>
          Anda bertanggung jawab secara penuh atas setiap kerugian dan/atau klaim yang timbul dari penggunaan Platform melalui akun Anda, baik oleh Anda atau pihak lain yang menggunakan akun Anda, dengan cara yang bertentangan dengan Ketentuan Penggunaan ini, peraturan perundang-undangan yang berlaku, pelanggaran hak kekayaan intelektual dan/atau aktivitas lain yang merugikan publik dan/atau pihak lain manapun atau yang dapat atau dianggap dapat merusak reputasi kami.
          </p>
          <p>Kami tidak menjamin bahwa Platform akan aman atau terbebas dari bug atau virus. Anda bertanggung jawab untuk mengatur teknologi informasi, program komputer, serta platform yang Anda gunakan untuk mengakses Platform kami. Anda harus menggunakan perangkat lunak anti-virus Anda sendiri.</p>
        </div>
        <div>
          <p className="bold mt-4 mb-3">Batasan Tanggung Jawab Kami</p>
          <p>
          Platform yang Kami sediakan adalah sebagaimana adanya dan Kami tidak menyatakan atau menjamin bahwa keandalan, ketepatan waktu, kualitas, kesesuaian, ketersediaan, akurasi, kelengkapan atau keamanan dari Platform dapat memenuhi kebutuhan dan akan sesuai dengan harapan Anda.
          </p>
          <p>Kami hanya menyediakan Platform untuk penggunaan domestik dan pribadi. Anda setuju untuk tidak menggunakan Platform Kami untuk tujuan komersial atau bisnis apa pun, dan Kami tidak bertanggung jawab kepada Anda atas kerugian, kehilangan usaha, gangguan usaha, maupun hilangnya kesempatan bisnis.</p>
          <p>Kami tidak bertanggung jawab atas kerugian atau kerusakan yang disebabkan oleh virus, serangan Penolakan Layanan secara Terdistribusi (DDoS), maupun materi teknologi berbahaya lainnya yang dapat menginfeksi peralatan komputer, program komputer, data, atau materi kepemilikan lainnya karena penggunaan maupun pengunduhan konten apa pun dari Platform Kami maupun situs web lain yang terkait dengannya oleh Anda.</p>
          <p>Dengan menggunakan dan mengakses Platform kami, Anda setuju bahwa setiap jawaban, informasi dan konten yang ditampilkan pada Platform telah sesuai dengan pengetahuan dan maksud terbaik kami, dan Anda setuju untuk memverifikasi secara independen keaslian dan kebenaran jawaban, informasi, materi dan konten yang diterbitkan tersebut. Setiap tindakan yang Anda ambil atas dasar informasi yang terdapat di Platform adalah tanggung jawab dan risiko Anda sendiri dan kami tidak bertanggung jawab atas konsekuensi tindakan yang Anda lakukan.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};
