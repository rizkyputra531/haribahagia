<template>
  <div class="About">

    <Header />

    <main class="main-content site-wrapper-reveal">
    <!--== Start Page Title Area ==-->
    <section class="page-title-area bg-img bg-img-top" style="background-image:url('/img/photos/about-bg.jpeg')">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 m-auto">
            <div class="page-title-content content-style5 text-center">
              <p>Hari Bahagia</p>
              <h4 class="title">Tentang <span>Kami</span></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--== End Page Title Area ==-->

    <!--== Start About Area Wrapper ==-->
    <section class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12" style="text-align:left;">
            <p class="text-pra">Kami membuat produk pernikahan digital dan membantu orang-orang saling terhubung</p>
            <div class="service-list-content">
              <h4 class="title">Layanan</h4>
              <p class="text-block">Memiliki tenaga yang profesional serta ahli di bidang nya. Peralatan juga sangat mendukung dalam produk yang dihasilkan</p>
              <p>Jadikan momen spesial anda semakin berksesan dengan layanan yang kami berikan, ingat pernikahan hanya tidak setiap saat terjadi. Oleh karena itu lakukan yang terbaik untuk pernikahan anda.</p>
              <!-- <div class="service-list">
                <ul>
                  <li><a href="departments.html">Psychiartry</a></li>
                  <li><a href="departments.html">Opthalmology</a></li>
                  <li><a href="departments.html">Cardiology</a></li>
                  <li><a href="departments.html">Immunology</a></li>
                </ul>
                <ul>
                  <li><a href="departments.html">Gastroenterology</a></li>
                  <li><a href="departments.html">Hematology</a></li>
                  <li><a href="departments.html">Orthopedics</a></li>
                  <li><a href="departments.html">Pulmonary</a></li>
                </ul>
                <ul>
                  <li><a href="departments.html">Oncology</a></li>
                  <li><a href="departments.html">Physiotherapy</a></li>
                  <li><a href="departments.html">Dental</a></li>
                  <li><a href="departments.html">Rheumatology</a></li>
                </ul>
              </div> -->
            </div>
            <div class="office-center-content">
              <!-- <h4 class="title">Our center</h4>
              <p>It was shaped like a chair and sparkled with gems, as did everything else. In the center of the chair was an enormous Head, without a body to support it or any arms or legs whatever.</p> -->
              <div class="row">
                <div class="col-md-6">
                  <div class="gallery-item mb-30">
                    <div class="thumb">
                      <a class="lightbox-image" data-fancybox="gallery" href="img/testimonial/aldi.png">
                        <img src="img/testimonial/aldi.png" alt="Image">
                      </a>
                      <div class="overlay"><i class="icofont-plus"></i></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="gallery-item mb-30">
                    <div class="thumb">
                      <a class="lightbox-image" data-fancybox="gallery" href="img/testimonial/agung.png">
                        <img src="img/testimonial/agung.png" alt="Image">
                      </a>
                      <div class="overlay"><i class="icofont-plus"></i></div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="gallery-item">
                    <div class="thumb">
                      <a class="lightbox-image" data-fancybox="gallery" href="img/testimonial/3.jpeg">
                        <img src="img/testimonial/3.jpeg" alt="Image">
                      </a>
                      <div class="overlay"><i class="icofont-plus"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="office-address-content">
                <div class="office-address-item">
                  <h5>Melbourne</h5>
                  <ul>
                    <li class="info-address">258 New Design St, VIC 10000, Austria</li>
                    <li class="info-phone">+0900 8618 3725 69</li>
                    <li class="info-mail">hello@hope.com</li>
                  </ul>
                </div>
                <div class="office-address-item">
                  <h5>Newyork</h5>
                  <ul>
                    <li class="info-address">3rd Floor, 692 Orchard St, NY 10000, Newyork</li>
                    <li class="info-phone">+04200 4739 6899 6880</li>
                    <li class="info-mail">office@hope.com</li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--== End About Area Wrapper ==-->
  </main>

  <Footer />

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name : 'About',
  components :{
    Header,
    Footer
  }
  
}
</script>
