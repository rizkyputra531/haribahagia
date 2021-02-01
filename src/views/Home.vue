<template>
  <div class="home">

    <!--== Start Preloader Content ==-->
    <!-- <div class="preloader-wrap">
      <div class="preloader">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
        </div>
      </div>
    </div> -->
    <!--== End Preloader Content ==-->

    <Header />
    <Hero />

    <!-- static media start -->
    <section class="static-media">
      
      <div class="container">
        <vue-aos animation-class="fadeIn animated">
        <div class="row mb-n4">
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="media">
              <span class="#" style="margin-right:30px;">
                <img class="#" src="img/icons/konsultasi.png" height="50px" alt="Logo"/>
              </span>

              <div class="media-body" style="text-align:left;">
                <h4 class="title">Konsultasi</h4>
                <p>Konsultasi Gratis Di Jam Kerja</p>
              </div>
              
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="media">
              <span class="#" style="margin-right:30px;">
                <img class="#" src="img/icons/tools.png" height="50px" alt="Logo"/>
              </span>

              <div class="media-body" style="text-align:left;">
                <h4 class="title">Analisis</h4>
                <p>Menganalisa Kebutuhan Pelanggan</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="media">
              <span class="#" style="margin-right:30px;">
                <img class="#" src="img/icons/pelanggan.png" height="50px" alt="Logo"/>
              </span>

              <div class="media-body" style="text-align:left;">
                <h4 class="title">Pengerjaan</h4>
                <p>Pengerjaan Cepat Dan Kwalitas Terjaga</p>
              </div>
            </div>
          </div>
        </div>
        </vue-aos>
      </div>
      
    </section>
    <!-- static media end -->
    <Pricing />
    <Feature/>

    <!--== Start Divider Area Wrapper ==-->
    <section class="divider-area bgcolor-theme bg-img"  style="background-image:url('/img/shape/01.jpg')">
      <vue-aos animation-class="fadeIn animated">
      <div class="container">
        <div class="row content-align-center">
          <div class="col-lg-12">
            <div class="divider-content-area divider-content-style1">
              <div class="content-inner"  style="text-align:left;">
                <h2 style=" text-align:left;">Ingin <span>Konsultasi ?</span></h2>
                <p>Kami Menyediakan Layanan Kosultasi Di Jam Kerja</p>
              </div>
              <a href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20konsultasi" target="_blank" class="btn btn-theme btn-white">Konsultasi</a>
            </div>
          </div>
        </div>
      </div>
      </vue-aos>
    </section>
    <!--== End Divider Area Wrapper ==-->
    
    <!-- <Appointment /> -->
    <Team />
    <Testimonial />
    
    <Footer />

    

  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import Feature from '@/components/Feature.vue';
// import Appointment from '@/components/Appointment.vue';
import Team from '@/components/Team.vue';
import Testimonial from '@/components/Testimonial.vue';
import Pricing from '@/components/Pricing.vue';
import Footer from '@/components/Footer.vue';
import VueAos from 'vue-aos';

// location.reload();

export default {
  name: 'Home',
  
  

  components: {
    // HelloWorld
    Header,
    Hero,
    Feature,
    // Appointment,
    Team,
    Testimonial,
    Pricing,
    Footer,
    VueAos
  }
}

</script>
