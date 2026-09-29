
"use client";

import { useEffect } from 'react';

export default function Home() {
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
                        <img src="fotbar.jpg" alt="Foto Bersama Kelas" className="tentang-img" />
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
                                <img src="risma.png"
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
                        <button className="tab-btn active" onClick={(e) => window.filterGallery('pertama', e.currentTarget)}>Pertama</button>
                        <button className="tab-btn" onClick={(e) => window.filterGallery('kedua', e.currentTarget)}>Kedua</button>
                        <button className="tab-btn" onClick={(e) => window.filterGallery('ketiga', e.currentTarget)}>Ketiga</button>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('mpls.jpeg', 'Masa MPLS, dimana semua murid saling berkenalan satu sama lain bersama teman barunya.')}>
                            <img src="mpls.jpeg" alt="Kegiatan 1" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('senam.jpeg', 'Ikut melaksanakan lomba joget kreasi, serta meramaikan acara kemerdekaan.')}>
                            <img src="senam.jpeg" alt="Kegiatan 2" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('ultah.jpeg', 'Memberikan suprise HARI GURU kepada wali kelas.')}>
                            <img src="ultah.jpeg" alt="Kegiatan 3" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('padsu.jpeg', 'Melaksanakan lomba terakhir pada saat MPLS, Yaitu lomba Paduan Suara.')}>
                            <img src="padsu.jpeg" alt="Kegiatan 4" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('kerkom.jpeg', 'First Time kerja kelompok Di rumah mbak Intan.')}>
                            <img src="kerkom.jpeg" alt="Kegiatan 5" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }} onClick={() => window.openModal('515.jpeg', 'Menginap di barak militer 515 di tanggul pada saat hari terakhir MPLS, selama 2 Hari 1 Malam.')}>
                            <img src="515.jpeg" alt="Kegiatan 6" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('metal.jpeg', 'Memperingati Hari R.A K  artini')}>
                            <img src="metal.jpeg" alt="Kegiatan 7" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('ngaji.jpeg', 'Meperingati hari Maulid Nabi Muhammad SAW pada saat kelas 10.')}>
                            <img src="ngaji.jpeg" alt="Kegiatan 8" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('maulid.jpeg', 'Memperingati hari Maulid Nabi Muhammad SAW pada saat kelas 11.')}>
                            <img src="maulid.jpeg" alt="Kegiatan 9" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('batik.jpeg', 'Memperingati hari Pahlawan Nasional, dan memakai kostum batik semua.')}>
                            <img src="batik.jpeg" alt="Kegiatan 10" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('kelas.jpeg', 'Ikut melaksanakan lomba 17 Agustusan, di sini kita dapat juara 3 di lomba estafet campuran')}>
                            <img src="kelas.jpeg" alt="Kegiatan 11" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }} onClick={() => window.openModal('lomba.jpeg', 'Merayakan hari disnatalis SMK Pada saat kelas 10')}>
                            <img src="lomba.jpeg" alt="Kegiatan 12" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('jawa.jpeg', 'Memperingati Hari Sumpah Pemuda.')}>
                            <img src="jawa.jpeg" alt="Kegiatan 13" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('disnatalis.jpeg', 'Ikut melaksanakan Hari Disnatalis pada saat kelas 11.')}>
                            <img src="disnatalis.jpeg" alt="Kegiatan 14" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('ujian.jpeg', 'Foto after ujian jurusan bersama SmartKoding.')}>
                            <img src="ujian.jpeg" alt="Kegiatan 15" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('fotbar.jpg', 'Sholawatan Before Party disnatalis pada saat kelas 11.')}>
                            <img src="fotbar.jpg" alt="Kegiatan 16" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('ftbr.jpeg', 'Fotbar sama Anak kelas RPL 1')}>
                            <img src="ftbr.jpeg" alt="Kegiatan 17" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }} onClick={() => window.openModal('tv.jpeg', 'Fotbar sama Anak kelas RPL 1')}>
                            <img src="tv.jpeg" alt="Kegiatan 18" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                    </div>
                </div>
            </section>

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
