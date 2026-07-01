
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
                            Kami adalah siswa-siswi Rekayasa Perangkat Lunak (RPL) 2 yang dibimbing oleh <b>Bapak Farukh</b>. Kami memiliki semangat untuk terus belajar, bekerja sama, dan mengembangkan kemampuan di bidang pemrograman serta teknologi informasi.</p>
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
                                <img src="verdi.jpeg" alt="Ketua Kelas" />
                            </div>
                            <h3>Ketua Kelas</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="nisa.jpeg" alt="Wakil Ketua Kelas" />
                            </div>
                            <h3>Wakil Ketua</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="rara.jpeg" alt="Sekretaris 1" />
                            </div>
                            <h3>Sekretaris 1</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="sekre2.jpeg" alt="Sekretaris 2" />
                            </div>
                            <h3>Sekretaris 2</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="vidya.jpeg" alt="Bendahara 1" />
                            </div>
                            <h3>Bendahara 1</h3>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="putri.jpeg" alt="Bendahara 2" />
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
                        <div className="anggota-card" data-tempat-lahir="Umbulsari" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka selfie, banyak omong/cerewet, dan suka make up.">
                            <div className="card-img">
                                <img src="intan.png" alt="Intan" />
                            </div>
                            <h3>Intan</h3>
                            <p>NIS: 1001</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Papua" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka tidur, suka mendengarkan musik, dan suka bermain game.">
                            <div className="card-img">
                                <img src="etow.png" alt="Etow" />
                            </div>
                            <h3>Etow</h3>
                            <p>NIS: 1002</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Umbulsari" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka selfie, banyak omong/cerewet, dan suka make up.">
                            <div className="card-img">
                                <img src="kenza.png"
                                    alt="Kenza" />
                            </div>
                            <h3>Kenza</h3>
                            <p>NIS: 1003</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat pendiam, teliti, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="keyla.png" alt="Keyla" />
                            </div>
                            <h3>Keyla</h3>
                            <p>NIS: 1004</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat suka berbicara/cerewet, pelawak, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="keysa.png"
                                    alt="Keysa" />
                            </div>
                            <h3>Keysa</h3>
                            <p>NIS: 1005</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Paleran" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka selfie, suka make up, dan dan suka jalan-jalan.">
                            <div className="card-img">
                                <img src="khoirun.png"
                                    alt="Khoirun Nisa" />
                            </div>
                            <h3>Khoirun Nisa</h3>
                            <p>NIS: 1006</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya pendiam, suka mendengarkan musik, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="latif.png"
                                    alt="Latif" />
                            </div>
                            <h3>Latif</h3>
                            <p>NIS: 1007</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya banyak omong/cerewet, orang nya aktif/banyak tingkah, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="cella.png"
                                    alt="Cella" />
                            </div>
                            <h3>Cella</h3>
                            <p>NIS: 1008</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya pendiam, suka mendengarkan musik, dan suka belajar.">
                            <div className="card-img">
                                <img src="melani.png" alt="Meilani" />
                            </div>
                            <h3>Meilani</h3>
                            <p>NIS: 1009</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tembokrejo" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka makan, suka tidur di kelas, dan suka bermain handphone saat di kelas.">
                            <div className="card-img">
                                <img src="mita.png" alt="Mita" />
                            </div>
                            <h3>Mita</h3>
                            <p>NIS: 1010</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat suka mendengarkan musik, suka tidur, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="finza.png" alt="finza" />
                            </div>
                            <h3>Finza</h3>
                            <p>NIS: 1011</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Sukoreno" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, teliti, dan suka mencari pengetahuan baru.">
                            <div className="card-img">
                                <img src="alpha.png" alt="Alpha" />
                            </div>
                            <h3>Alpha</h3>
                            <p>NIS: 1012</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Paleran" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat suka maen game, suka makan, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="apan.png" alt="apan" />
                            </div>
                            <h3>Apan</h3>
                            <p>NIS: 1013</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Wringintelu" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, teliti, pendiam, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="wawa.png"
                                    alt="Najwa" />
                            </div>
                            <h3>Najwa</h3>
                            <p>NIS: 1014</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Umbulsari" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin (tergantung temen nya), teliti, dan suka belajar (tergantung temen nya).">
                            <div className="card-img">
                                <img src="natasha.png"
                                    alt="Natasha" />
                            </div>
                            <h3>Natasha</h3>
                            <p>NIS: 1015</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Wringintelu" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, suka rame di kelas (tergantung temen), teliti, dan suka ngoding.">
                            <div className="card-img">
                                <img src="nika.png"
                                    alt="Nika" />
                            </div>
                            <h3>Nika</h3>
                            <p>NIS: 1016</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tembokrejo" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya pendiam, suka maen handphone dikelas, dan banyak tingkah.">
                            <div className="card-img">
                                <img src="nofi.png"
                                    alt="Novita" />
                            </div>
                            <h3>Novita</h3>
                            <p>NIS: 1017</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="laili.png"
                                    alt="Layli" />
                            </div>
                            <h3>Layli</h3>
                            <p>NIS: 1018</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya banyak ngomong, aktif (tergantung temen), dan suka ngoding.">
                            <div className="card-img">
                                <img src="nurin.png"
                                    alt="Nurinda" />
                            </div>
                            <h3>Nurinda</h3>
                            <p>NIS: 1019</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tembokrejo" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya aktif (tergantung temen), suka tidur dikelas, dan suka belajar coding (kalau mood).">
                            <div className="card-img">
                                <img src="widya.png"
                                    alt="Putri" />
                            </div>
                            <h3>Putri</h3>
                            <p>NIS: 1020</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), teliti, dan suka ngoding.">
                            <div className="card-img">
                                <img src="rahil.png"
                                    alt="Rahill" />
                            </div>
                            <h3>Rahill</h3>
                            <p>NIS: 1021</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tanggul" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka tidur di kelas, suka make up, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="rara.png"
                                    alt="Rara" />
                            </div>
                            <h3>Rara</h3>
                            <p>NIS: 1022</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Karang Duren" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, aktif, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="lina.png"
                                    alt="Lina" />
                            </div>
                            <h3>Lina</h3>
                            <p>NIS: 1023</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Paleran" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat tidur, aktif (kalau kumpul sama temen nya), dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="risma.png"
                                    alt="Risma" />
                            </div>
                            <h3>Risma</h3>
                            <p>NIS: 1024</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Umbulsari" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka make up, suka bercanda, dan suka maen handphone saat di kelas.">
                            <div className="card-img">
                                <img src="rani.png"
                                    alt="Rani" />
                            </div>
                            <h3>Rani</h3>
                            <p>NIS: 1025</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="ayu.png"
                                    alt="Sabrina Ayu" />
                            </div>
                            <h3>Sabrina Ayu</h3>
                            <p>NIS: 1026</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat aktif, suka bercanda, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="eka.png"
                                    alt="Sabrina Eka" />
                            </div>
                            <h3>Sabrina Eka</h3>
                            <p>NIS: 1027</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tembokrejo" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat pendiam, aktif (tergantung temen), suka maen handphone saat di kelas, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="safira.png"
                                    alt="Safira" />
                            </div>
                            <h3>Safira</h3>
                            <p>NIS: 1028</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tanggul" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, pendiam, teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="ayun.png"
                                    alt="Ayun" />
                            </div>
                            <h3>Ayun</h3>
                            <p>NIS: 1029</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat aktif, suka bercanda, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="silvi.png"
                                    alt="Silvi" />
                            </div>
                            <h3>Silvi</h3>
                            <p>NIS: 1030</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Tembokrejo" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka berguarau, suka make up, suka selfie, dan suka tidur saat di kelas.">
                            <div className="card-img">
                                <img src="chaca.png"
                                    alt="Aisyah" />
                            </div>
                            <h3>Aisyah</h3>
                            <p>NIS: 1031</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya banyak omong/cerewet, pendiam, aktif, dan suka belajar hal baru.">
                            <div className="card-img">
                                <img src="sisil.png"
                                    alt="Shisil" />
                            </div>
                            <h3>Shisil</h3>
                            <p>NIS: 1032</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Umbulsari" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka pergi ke kantin saat jam pelajaran, suka tidur saat di kelas, dan suka bermain handphone saat di kelas.">
                            <div className="card-img">
                                <img src="azzahrotun.png"
                                    alt="Azzahratun Nisa" />
                            </div>
                            <h3>Azzahratun Nisa</h3>
                            <p>NIS: 1033</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Jember" data-tanggal-lahir="12 Desember 2009"
                            data-karakteristik=" Orangnya suka tidur, suka makan, dan suka rame saat di kelas.">
                            <div className="card-img">
                                <img src="oke.jpeg" alt="Edooo" />
                            </div>
                            <h3>Edooo</h3>
                            <p>NIS: 1034</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Gadungan" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya sangat rajin, teliti, dan suka memecahkan masalah coding.">
                            <div className="card-img">
                                <img src="verdi.png" alt="Verdi" />
                            </div>
                            <h3>Verdi</h3>
                            <p>NIS: 1035</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Semboro" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya banyak omong/cerewet, suka selfie, aktif (tergantung temen nya), dan suka make up.">
                            <div className="card-img">
                                <img src="puji.png"
                                    alt="Vidya" />
                            </div>
                            <h3>Vidya</h3>
                            <p>NIS: 1036</p>
                        </div>
                        <div className="anggota-card" data-tempat-lahir="Puger" data-tanggal-lahir="15 Maret 2005"
                            data-karakteristik="Orangnya suka ke kantin saat jam pelajaran, suka makan di kelas, dan suka tidur di kelas.">
                            <div className="card-img">
                                <img src="wardah.png"
                                    alt="Wardah" />
                            </div>
                            <h3>Wardah</h3>
                            <p>NIS: 1037</p>
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
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="mpls.jpeg" alt="Kegiatan 1" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="senam.jpeg" alt="Kegiatan 2" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="ultah.jpeg" alt="Kegiatan 3" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="padsu.jpeg" alt="Kegiatan 4" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="kerkom.jpeg" alt="Kegiatan 5" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item pertama" style={{ display: 'none' }}>
                            <img src="515.jpeg" alt="Kegiatan 6" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="metal.jpeg" alt="Kegiatan 7" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="ngaji.jpeg" alt="Kegiatan 8" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="maulid.jpeg" alt="Kegiatan 9" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="batik.jpeg" alt="Kegiatan 10" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="kelas.jpeg" alt="Kegiatan 11" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item kedua" style={{ display: 'none' }}>
                            <img src="lomba.jpeg" alt="Kegiatan 12" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
                            <img src="jawa.jpeg" alt="Kegiatan 13" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
                            <img src="disnatalis.jpeg" alt="Kegiatan 14" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
                            <img src="ujian.jpeg" alt="Kegiatan 15" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
                            <img src="fotbar.jpg" alt="Kegiatan 16" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
                            <img src="ftbr.jpeg" alt="Kegiatan 17" />
                            <div className="overlay"><span>Lihat Foto</span></div>
                        </div>
                        <div className="gallery-item ketiga" style={{ display: 'none' }}>
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
