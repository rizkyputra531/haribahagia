<template>
    
    <!--== Start Testimonial Area Wrapper ==-->
    <section
        class="testimonial-area testimonial-default-area bg-img"
        style="background-image:url('/img/photos/testimonial-bg1.jpg')"
    >
        <div class="container">
          <div class="row">
              <div class="col-lg-12">
              <vue-aos animation-class="fadeInUp animated">
              <div class="section-title text-center">
                  <p>Testimonial</p>
                  <h2 class="title"><span>Kepercayaan</span> Dari Pelanggan</h2>
              </div>
              </vue-aos>
              </div>
          </div>

          <div class="row">
            
            <div class="col-lg-12 " >

            <vue-aos animation-class="fadeInUp animated">
              
            
            <carousel class="carousel" :nav="false" :centerMode="false" :dots="false"  :autoplay="true" :items="1" :loop="true">
              <div class="gambar"  >
                  <img src="img/testimonial/aldi.png" class="tengah" alt="Image" style="width:110px; margin-bottom:40px;" />

                  <!-- <img src="img/testimonial/aldi.png"  alt="Image" style="border-radius:50%; width:110px;" /> -->
                

                <div class="quote">
                  <p>"Cinta adalah pemberian terbaik, cinta juga adalah penghargaan terbesar untuk yang menerima."</p>
                </div>
                

                <div class="client-info">
                  <div class="desc">
                      <h4 class="name">Aldi & Risa</h4>
                      <p class="client-location">
                      Banjarbaru, Kalimantan Selatan
                      </p>
                  </div>
                </div>

              </div>


              <div class="gambar" >
                  <img src="img/testimonial/agung.png" class="tengah" alt="Image" style="width:110px; margin-bottom:40px;" />

                  <!-- <img src="img/testimonial/aldi.png"  alt="Image" style="border-radius:50%; width:110px;" /> -->
                

                <div class="quote">
                  <p>"Jika kita tidak bisa melakukan hal kecil tanpa cinta, maka jangan berharap terjadi hal besar."</p>
                </div>
                

                <div class="client-info">
                  <div class="desc">
                      <h4 class="name">Agung & Tasya</h4>
                      <p class="client-location">
                      Medan, Sumatera Utara
                      </p>
                  </div>
                </div>

              </div>
            
            </carousel>
            </vue-aos>

            </div>
            
          </div>

          <div class="row">
              <div class="col-lg-12 brand-logo-area brand-logo-default-area">
                  <vue-aos animation-class="fadeInUp animated">
                  <carousel class="carousel" :nav="false" :centerMode="true" :dots="false"  :autoplay="true" :items="4" :loop="true">
                    
                        <div class="gambar">
                            <img class="tengah2" src="img/brand-logo/01.png" style="width:180px; opacity:50%;"/>    
                        </div>  
                        <div class="gambar">
                            <img class="tengah2" src="img/brand-logo/02.png" style="width:180px; opacity:50%;"/>    
                        </div>  <div class="gambar">
                            <img class="tengah2" src="img/brand-logo/03.png" style="width:180px; opacity:50%;"/>    
                        </div>  <div class="gambar">
                            <img class="tengah2" src="img/brand-logo/04.png" style="width:180px; opacity:50%;"/>    
                        </div>  <div class="gambar">
                            <img class="tengah2" src="img/brand-logo/05.png" style="width:180px; opacity:50%;"/>    
                        </div>   
                    
                  </carousel>
                  </vue-aos>

              </div>
          </div>

          
          
        </div>
    </section>
    <!--== End Testimonial Area Wrapper ==-->

</template>

<script>
import VueAos from 'vue-aos';
import carousel from 'vue-owl-carousel';

export default {
    name : 'Team',
    components :{
        VueAos,
        carousel
    }
}
</script>