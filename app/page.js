
"use client";

import { useEffect, useState } from 'react';

export default function Home() {
    const [activeTab, setActiveTab] = useState('pertama');
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const albumsData = [
        { id: 1, tab: 'pertama', cover: "mpls.jpeg", title: "Masa MPLS", desc: "Masa MPLS, dimana semua murid saling berkenalan satu sama lain bersama teman barunya.", photos: ["mpls.jpeg", "mp3.jpg", "mp4.jpg", "mp5.jpg", "mp6.jpg"] },
        { id: 2, tab: 'pertama', cover: "padsu.jpeg", title: "Lomba Paduan Suara", desc: "Melaksanakan lomba terakhir pada saat MPLS, Yaitu lomba Paduan Suara.", photos: ["padsu.jpeg", "padsu2.jpg",] },
        { id: 3, tab: 'pertama', cover: "jawa.jpeg", title: "Hari Sumpah Pemuda", desc: "Memperingati Hari Sumpah Pemuda.", photos: ["jawa.jpeg", "jawa2.jpg", "jawa3.jpg", "jawa4.jpg", "jawa5.jpg", "jawa6.jpg"] },
        { id: 4, tab: 'pertama', cover: "rujak.jpg", title: "Rujakan Bareng SatuKelas", desc: "Makan Rujak Bareng Satukelas Bersama Wali kelas", photos: ["rujak.jpg", "rujak2.jpg"] },
        { id: 5, tab: 'pertama', cover: "senam.jpeg", title: "Lomba Senam Kreasi", desc: "Melaksanakan Lomba Senam Antar Kelas.", photos: ["senam.jpeg", "senam2.jpg", "senam3.jpg"] },
        { id: 6, tab: 'pertama', cover: "batik.jpeg", title: "Hari Batik Nasional", desc: "Memperingati Hari Batik Nasional.", photos: ["batik.jpeg", "batik2.jpg", "batik3.jpg"] },
        { id: 7, tab: 'pertama', cover: "ultah.jpeg", title: "Hari Guru", desc: "Merayakam Hari Guru", photos: ["ultah.jpeg", "ultah2.jpg", "ultah3.jpg"] },
        { id: 8, tab: 'pertama', cover: "lomba.jpeg", title: "Disnatalis Kelas 10", desc: "Ikut Merayakan Hari Disnatalis SMKN 8 Jember 2024.", photos: ["lomba.jpeg", "lomba2.jpg", "lomba3.jpg", "lomba4.jpg", "lomba5.jpg"] },
        { id: 9, tab: 'kedua', cover: "humma1.jpg", title: "Ujian Hummatect Kelas 10", desc: "Melaksanakan Ujian Jurusan Bersama PT Hummatect.", photos: ["humma1.jpg", "humma2.jpg", "humma3.jpg"] },
        { id: 10, tab: 'kedua', cover: "gerjal1.jpg", title: "Lomba Gerjal", desc: "Mengikuti Lomba Gerak Jalan.", photos: ["gerjal1.jpg", "gerjal2.jpg", "gerjal3.jpg", "gerjal4.jpg", "gerjal5.jpg", "gerjal6.jpg",] },
        { id: 11, tab: 'kedua', cover: "ngaji.jpeg", title: "Isra' Mi'raj", desc: "Mengikuti Hari Isra' Mi'raj Nabi Muhammad SAW", photos: ["ngaji.jpeg", "ngaji2.jpg", "ngaji3.jpg", "ngaji4.jpg"] },
        { id: 12, tab: 'kedua', cover: "voly1.jpg", title: "Lomba Voly", desc: "Mengikuti Ajang Lomba Voly Antar Kelas", photos: ["voly1.jpg", "voly2.jpg", "voly3.jpg", "voly4.jpg", "voly5.jpg"] },
        { id: 13, tab: 'kedua', cover: "mbg1.jpg", title: "Makan Bergizi", desc: "Menikmati Makan Bergizi Dari Bapak Prabowo.", photos: ["mbg1.jpg", "mbg2.jpg", "mbg3.jpg", "mbg4.jpg"] },
        { id: 14, tab: 'kedua', cover: "fotbar.jpg", title: "Hari Santri", desc: "Memperingati Hari Santri.", photos: ["fotbar.jpeg", "fotbar2.jpg", "fotbar3.jpg"] },
        { id: 15, tab: 'kedua', cover: "ujian.jpeg", title: "Ujian Jurusan", desc: "Foto after ujian jurusan bersama SmartKoding.", photos: ["ujian.jpeg", "ujian1.jpg", "ujian2.jpg", "ujian3.jpg", "ujian4.jpg"] },
        { id: 16, tab: 'kedua', cover: "bakar.jpg", title: "Bakar", desc: "Mengadakan acara bakar bakar di rumah bapak farukh, meramaikan acara akhir tahun.", photos: ["bakar.jpg", "bakar1.jpg", "bakar2.jpg"] },
        { id: 17, tab: 'ketiga', cover: "ftbr.jpeg", title: "Fotbar RPL 1", desc: "Fotbar sama Anak kelas RPL 1", photos: ["ftbr.jpeg", "tv.jpeg"] },
        { id: 18, tab: 'ketiga', cover: "tv.jpeg", title: "Nobar TV", desc: "Fotbar sama Anak kelas RPL 1", photos: ["tv.jpeg", "ftbr.jpeg"] },
        { id: 19, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 19", desc: "Deskripsi kegiatan 19", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 20, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 20", desc: "Deskripsi kegiatan 20", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 21, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 21", desc: "Deskripsi kegiatan 21", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 22, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 22", desc: "Deskripsi kegiatan 22", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 23, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 23", desc: "Deskripsi kegiatan 23", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 24, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 24", desc: "Deskripsi kegiatan 24", photos: ["kelas.jpeg", "senam.jpeg"] },
        { id: 25, tab: 'ketiga', cover: "kelas.jpeg", title: "Kegiatan 25", desc: "Deskripsi kegiatan 25", photos: ["kelas.jpeg", "senam.jpeg"] }
    ];

    const openPresentation = (album) => {
        setSelectedAlbum(album);
        setSelectedPhotoIdx(0);
        setIsFullscreen(false);
        document.body.style.overflow = "hidden";
    };

    const closePresentation = () => {
        setSelectedAlbum(null);
        document.body.style.overflow = "auto";
    };

    return (
        <>

            <nav>
                <div className="logo">RE PE EL 2</div>
                <ul className="nav-links">
                    <li><a href="#hero">Beranda</a></li>
                    <li><a href="#tentang">Tentang</a></li>
                    <li><a href="#struktur">Pengurus</a></li>
                    <li><a href="#galeri">Galeri</a></li>
                </ul>
                <button id="theme-toggle" className="theme-toggle" aria-label="Toggle Dark Mode">
                    🌙
                </button>
            </nav>

            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1>Selamat Datang di Website Kelas Kami</h1>
                    <p>Bersama meraih cita-cita, membangun kenangan tak terlupakan. Kami adalah keluarga besar yang selalu
                        mendukung satu sama lain.</p>
                    <a href="#tentang" className="btn">Pelajari Lebih Lanjut</a>
                </div>
            </section>

            <section id="tentang" className="tentang">
                <div className="container">
                    <h2 className="section-title">Tentang Kami</h2>
                    <div className="tentang-image">
                        <img src="jawa.jpeg" alt="Foto Bersama Kelas" className="tentang-img" />
                    </div>
                    <div className="tentang-content"
                        style={{ textAlign: 'left', marginTop: '40px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '15px' }}>Siapa Kami?</h3>
                        <p style={{ marginBottom: '15px', color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>Kami
                            adalah siswa-siswi Rekayasa Perangkat Lunak (RPL) 2 <b>SMKN 8 JEMBER</b> yang dibimbing oleh <b>Moh. Farukh Arifin S.Kom</b>. Kami memiliki semangat untuk terus belajar, bekerja sama, dan mengembangkan kemampuan di bidang pemrograman serta teknologi informasi.</p>
                        <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>Dibentuk pada tahun 2024, kami
                            Melalui kebersamaan di kelas, kami saling mendukung untuk meraih prestasi, membangun pengalaman, dan mempersiapkan diri menjadi generasi yang siap menghadapi dunia kerja maupun pendidikan yang lebih tinggi.</p>
                    </div>
                </div>
            </section>

            <section id="struktur" className="struktur">
                <div className="container">
                    <h2 className="section-title">Struktur Organisasi Kelas</h2>
                    <div className="org-grid">
                        {/* Wali Kelas */}
                        <div className="card wali-kelas" data-tempat-lahir="-" data-tanggal-lahir="-" data-karakteristik="Membimbing siswa-siswi RPL 2 dengan sabar dan penuh dedikasi.">
                            <div className="card-img">
                                <img src="p.faruks.jpeg" alt="Wali Kelas" />
                            </div>
                            <h3>Bapak Farukh</h3>
                            <p>Wali Kelas</p>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="finza.png" alt="Ketua Kelas" />
                            </div>
                            <h3>Ketua Kelas</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="ayu.png" alt="Wakil Ketua Kelas" />
                            </div>
                            <h3>Wakil Ketua</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="nur.jpg" alt="Sekretaris 1" />
                            </div>
                            <h3>Sekretaris 1</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="alpha.png" alt="Sekretaris 2" />
                            </div>
                            <h3>Sekretaris 2</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="brina.jpg" alt="Bendahara 1" />
                            </div>
                            <h3>Bendahara 1</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="intan.png" alt="Bendahara 2" />
                            </div>
                            <h3>Bendahara 2</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="anggota" className="anggota">
                <div className="container">
                    <h2 className="section-title">Anggota Kelas</h2>
                    <div className="anggota-grid">
                        {/* Tambahkan anggota kelas di sini */}
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="14 Agustus 2008"
                            data-karakteristik="Orangnya suka selfie, banyak omong/cerewet, dan suka make up.">
                            <div className="card-img">
                                <img src="intan.png" alt="Intan" />
                            </div>
                            <h3>Intan</h3>
                            <p>Absen: 01</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Papua" data-tanggal-lahir="29 Juni 2009"
                            data-karakteristik="Orangnya suka tidur, suka mendengarkan musik, dan suka bermain game.">
                            <div className="card-img">
                                <img src="etow.png" alt="Etow" />
                            </div>
                            <h3>Etow</h3>
                            <p>Absen: 02</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="06 April 2009"
                            data-karakteristik="Orangnya suka selfie, banyak omong/cerewet, dan suka make up.">
                            <div className="card-img">
                                <img src="kenza.png"
                                    alt="Kenza" />
                            </div>
                            <h3>Kenza</h3>
                            <p>Absen: 03</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="16 Januari 2009"
                            data-karakteristik="Orangnya sangat pendiam, teliti, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="keyla.png" alt="Keyla" />
                            </div>
                            <h3>Keyla</h3>
                            <p>Absen: 04</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="07 Februari 2009"
                            data-karakteristik="Orangnya sangat suka berbicara/cerewet, pelawak, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="keysa.png"
                                    alt="Keysa" />
                            </div>
                            <h3>Keysa</h3>
                            <p>Absen: 05</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="13 July 2009"
                            data-karakteristik="Orangnya suka selfie, suka make up, dan dan suka jalan-jalan.">
                            <div className="card-img">
                                <img src="khoirun.png"
                                    alt="Khoirun Nisa" />
                            </div>
                            <h3>Khoirun Nisa</h3>
                            <p>Absen: 06</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="22 November 2008"
                            data-karakteristik="Orangnya pendiam, suka mendengarkan musik, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="latif.png"
                                    alt="Latif" />
                            </div>
                            <h3>Latif</h3>
                            <p>Absen: 07</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="05 Maret 2009"
                            data-karakteristik="Orangnya banyak omong/cerewet, orang nya aktif/banyak tingkah, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="cella.png"
                                    alt="Cella" />
                            </div>
                            <h3>Cella</h3>
                            <p>Absen: 08</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="01 Mei 2009"
                            data-karakteristik="Orangnya pendiam, suka mendengarkan musik, dan suka belajar.">
                            <div className="card-img">
                                <img src="melani.png" alt="Meilani" />
                            </div>
                            <h3>Meilani</h3>
                            <p>Absen: 09</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="12 Desember 2008"
                            data-karakteristik="Orangnya suka makan, suka tidur di kelas, dan suka bermain handphone saat di kelas.">
                            <div className="card-img">
                                <img src="mita.png" alt="Mita" />
                            </div>
                            <h3>Mita</h3>
                            <p>Absen: 10</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="13 July 2009"
                            data-karakteristik="Orangnya sangat suka mendengarkan musik, suka tidur, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="finza.png" alt="finza" />
                            </div>
                            <h3>Finza</h3>
                            <p>Absen: 11</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="21 Januari 2009"
                            data-karakteristik="Orangnya sangat rajin, teliti, dan suka mencari pengetahuan baru.">
                            <div className="card-img">
                                <img src="alpha.png" alt="Alpha" />
                            </div>
                            <h3>Alpha</h3>
                            <p>Absen: 12</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="10 September 2008"
                            data-karakteristik="Orangnya sangat suka maen game, suka makan, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="apan.png" alt="apan" />
                            </div>
                            <h3>Apan</h3>
                            <p>Absen: 13</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tarakan" data-tanggal-lahir="27 November 2008"
                            data-karakteristik="Orangnya sangat rajin, teliti, pendiam, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="wawa.png"
                                    alt="Najwa" />
                            </div>
                            <h3>Najwa</h3>
                            <p>Absen: 14</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="03 April 2009"
                            data-karakteristik="Orangnya sangat rajin (tergantung temen nya), teliti, dan suka belajar (tergantung temen nya).">
                            <div className="card-img">
                                <img src="natasha.png"
                                    alt="Natasha" />
                            </div>
                            <h3>Natasha</h3>
                            <p>Absen: 15</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="17 Februari 2009"
                            data-karakteristik="Orangnya sangat rajin, suka rame di kelas (tergantung temen), teliti, dan suka ngoding.">
                            <div className="card-img">
                                <img src="nika.png"
                                    alt="Nika" />
                            </div>
                            <h3>Nika</h3>
                            <p>Absen: 16</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="11 November 2008"
                            data-karakteristik="Orangnya pendiam, suka maen handphone dikelas, dan banyak tingkah.">
                            <div className="card-img">
                                <img src="nofi.png"
                                    alt="Novita" />
                            </div>
                            <h3>Novita</h3>
                            <p>Absen: 17</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="20 Agustus 2008"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="laili.png"
                                    alt="Layli" />
                            </div>
                            <h3>Layli</h3>
                            <p>Absen: 18</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="26 July 2008"
                            data-karakteristik="Orangnya banyak ngomong, aktif (tergantung temen), dan suka ngoding.">
                            <div className="card-img">
                                <img src="nur.jpg"
                                    alt="Nurinda" />
                            </div>
                            <h3>Nurinda</h3>
                            <p>Absen: 19</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="10 Januari 2009"
                            data-karakteristik="Orangnya aktif (tergantung temen), suka tidur dikelas, dan suka belajar coding (kalau mood).">
                            <div className="card-img">
                                <img src="widya.png"
                                    alt="Putri" />
                            </div>
                            <h3>Putri</h3>
                            <p>Absen: 20</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="29 July 2009"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), teliti, dan suka ngoding.">
                            <div className="card-img">
                                <img src="rahil.png"
                                    alt="Rahill" />
                            </div>
                            <h3>Rahill</h3>
                            <p>Absen: 21</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="02 Februari 2009"
                            data-karakteristik="Orangnya suka tidur di kelas, suka make up, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="rara.png"
                                    alt="Rara" />
                            </div>
                            <h3>Rara</h3>
                            <p>Absen: 22</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="20 November 2008"
                            data-karakteristik="Orangnya sangat rajin, aktif, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="maulina.jpg"
                                    alt="Lina" />
                            </div>
                            <h3>Lina</h3>
                            <p>Absen: 23</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="11 July 2009"
                            data-karakteristik="Orangnya sangat tidur, aktif (kalau kumpul sama temen nya), dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="brut.jpg"
                                    alt="Risma" />
                            </div>
                            <h3>Risma</h3>
                            <p>Absen: 24</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="20 Juni 2008"
                            data-karakteristik="Orangnya suka make up, suka bercanda, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="rani.png"
                                    alt="Rani" />
                            </div>
                            <h3>Rani</h3>
                            <p>Absen: 25</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="31 Agustus 2008"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="ayu.png"
                                    alt="Sabrina Ayu" />
                            </div>
                            <h3>Sabrina Ayu</h3>
                            <p>Absen: 26</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="19 November 2008"
                            data-karakteristik="Orangnya sangat aktif, suka bercanda, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="brina.jpg"
                                    alt="Sabrina Eka" />
                            </div>
                            <h3>Sabrina Eka</h3>
                            <p>Absen: 27</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="24 Oktober 2008"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), suka maen handphone saat di kelas, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="safira.png"
                                    alt="Safira" />
                            </div>
                            <h3>Safira</h3>
                            <p>Absen: 28</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="30 Mei 2009"
                            data-karakteristik="Orangnya sangat rajin, pendiam, teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="ayun.png"
                                    alt="Ayun" />
                            </div>
                            <h3>Ayun</h3>
                            <p>Absen: 29</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="26 Agustus 2008"
                            data-karakteristik="Orangnya sangat aktif, suka bercanda, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="silpi.png"
                                    alt="Silvi" />
                            </div>
                            <h3>Silvi</h3>
                            <p>Absen: 30</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="12 Agustus 2009"
                            data-karakteristik="Orangnya suka berguarau, suka make up, suka selfie, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="chaca.png"
                                    alt="Aisyah" />
                            </div>
                            <h3>Aisyah</h3>
                            <p>Absen: 31</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Probolinggo" data-tanggal-lahir="09 Desember 2008"
                            data-karakteristik="Orangnya banyak omong/cerewet, pendiam, aktif, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="sisil.png"
                                    alt="Shisil" />
                            </div>
                            <h3>Shisil</h3>
                            <p>Absen: 32</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="24 Oktober 2008"
                            data-karakteristik="Orangnya suka pergi ke kantin saat jam pelajaran, suka tidur saat di kelas, dan suka bermain handphone saat di kelas.">
                            <div className="card-img">
                                <img src="azzahrotun.png"
                                    alt="Azzahratun Nisa" />
                            </div>
                            <h3>Azzahratun Nisa</h3>
                            <p>Absen: 33</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="12 Desember 2009"
                            data-karakteristik=" Orangnya suka tidur, suka makan, dan suka rame saat di kelas.">
                            <div className="card-img">
                                <img src="oke.jpeg" alt="Edooo" />
                            </div>
                            <h3>Edooo</h3>
                            <p>Absen: 34</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="21 Januari 2009"
                            data-karakteristik="Orangnya sangat rajin, teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="verdi.png" alt="Verdi" />
                            </div>
                            <h3>Verdi</h3>
                            <p>Absen: 35</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Banyuwangi" data-tanggal-lahir="27 September 2009"
                            data-karakteristik="Orangnya banyak omong/cerewet, suka selfie, aktif (tergantung temen nya), dan suka make up.">
                            <div className="card-img">
                                <img src="vidya.jpg"
                                    alt="Vidya" />
                            </div>
                            <h3>Vidya</h3>
                            <p>Absen: 36</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="27 July 2009"
                            data-karakteristik="Orangnya suka ke kantin saat jam pelajaran, suka makan di kelas, dan suka tidur di kelas.">
                            <div className="card-img">
                                <img src="wardah.png"
                                    alt="Wardah" />
                            </div>
                            <h3>Wardah</h3>
                            <p>Absen: 37</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="galeri" className="galeri">
                <div className="container">
                    <h2 className="section-title">Album Kegiatan</h2>
                    <div className="album-tabs">
                        <button className="tab-btn active" onClick={(e) => { setActiveTab('pertama'); window.filterGallery('pertama', e.currentTarget); }}>Pertama</button>
                        <button className="tab-btn" onClick={(e) => { setActiveTab('kedua'); window.filterGallery('kedua', e.currentTarget); }}>Kedua</button>
                        <button className="tab-btn" onClick={(e) => { setActiveTab('ketiga'); window.filterGallery('ketiga', e.currentTarget); }}>Ketiga</button>
                    </div>
                    <div className="gallery-grid">
                        {albumsData.map(album => (
                            <div key={album.id} className={`gallery-item ${album.tab}`} style={{ display: album.tab === activeTab ? 'block' : 'none' }} onClick={() => openPresentation(album)}>
                                <img src={album.cover} alt={album.title} />
                                <div className="overlay"><span>Lihat Foto</span></div>
                                <h3 style={{ marginTop: '10px', fontSize: '1.1rem', color: 'var(--text-main)', textAlign: 'center' }}>{album.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Presentation Modal */}
            {selectedAlbum && (
                <div className="presentation-modal">
                    <span className="presentation-close" onClick={closePresentation}>&times;</span>

                    <div className="presentation-content">
                        {/* Sidebar for thumbnails */}
                        <div className="presentation-sidebar">
                            <h3 className="presentation-title">{selectedAlbum.title}</h3>
                            <p className="presentation-desc">{selectedAlbum.desc}</p>
                            <div className="presentation-thumbnails">
                                {selectedAlbum.photos.map((photo, idx) => (
                                    <img
                                        key={idx}
                                        src={photo}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className={`presentation-thumb ${idx === selectedPhotoIdx ? 'active' : ''}`}
                                        onClick={() => setSelectedPhotoIdx(idx)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Main Image Viewer */}
                        <div className="presentation-main">
                            <img
                                src={selectedAlbum.photos[selectedPhotoIdx]}
                                alt="Main viewer"
                                className="presentation-main-img"
                                onClick={() => setIsFullscreen(true)}
                            />
                            <p className="zoom-hint">Klik gambar untuk memperbesar</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Fullscreen Zoom Modal */}
            {isFullscreen && selectedAlbum && (
                <div className="zoom-modal" onClick={() => setIsFullscreen(false)}>
                    <span className="close">&times;</span>
                    <img className="zoom-modal-content" src={selectedAlbum.photos[selectedPhotoIdx]} />
                </div>
            )}

            {/* Modal Lightbox */}
            <div id="imageModal" className="modal" onClick={() => window.closeModal()}>
                <span className="close" onClick={() => window.closeModal()}>&times;</span>
                <img className="modal-content" id="expandedImg" />
                <div id="modalCaption" className="modal-caption"></div>
            </div>

            {/* Member Modal */}
            <div id="memberModal" className="modal" onClick={() => window.closeMemberModal()}>
                <span className="close" onClick={() => window.closeMemberModal()}>&times;</span>
                <div className="member-modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="member-modal-body">
                        <div className="member-modal-left">
                            <img id="memberImg" src="" alt="Member Image" />
                        </div>
                        <div className="member-modal-right">
                            <h3 id="memberName"></h3>
                            <p className="member-nis" id="memberNis"></p>
                            <div className="member-details">
                                <p><strong>Tempat Lahir</strong>: <span id="memberTempatLahir">-</span></p>
                                <p><strong>Tanggal Lahir</strong>: <span id="memberTanggalLahir">-</span></p>
                                <p><strong>Karakteristik</strong>: <span id="memberKarakteristik">-</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; ER PE EL 2 JAYA</p>
            </footer>



        </>
    );
}
