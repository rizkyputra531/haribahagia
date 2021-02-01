<template>
    
    <!--== Start Feature Area Wrapper ==-->
    <section class="feature-section" data-bg-color="#fff">
      <div class="container" style="text-align:left;">
        <div class="row">
          <div class="col-lg-12">
            <vue-aos animation-class="rotateInDownLeft animated">
            <div class="section-title">
              <p>Kenapa Memilih Kami ?</p>
              <h2 class="title"><span>Terbaik</span> Untuk Momen Spesial Mu</h2>
            </div>
            </vue-aos>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-xl-8">
            <vue-aos animation-class="rotateInDownLeft animated">
            <div class="row icon-box-style">
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/konsultasi.png" width="180px" alt="Logo"/>
                  </span>
                  <!-- <div class="icon">
                    <i class="icofont-prescription"></i>
                  </div> -->
                  <div class="content">
                    <h5 class="title">Konsultasi Gratis</h5>
                    <p>
                      Memiliki layanan konsultasi gratis kepada anda yang bingung tentang produk kami.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/worker.png" width="180px" alt="Logo"/>
                  </span>
                  <div class="content">
                    <h5 class="title">Tenaga Profesional</h5>
                    <p>
                      Produk yang anda inginkan akan ditangani oleh tenaga ahli yang profesional di bidang nya.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/tools.png" width="180px" alt="Logo"/>
                  </span>
                  <div class="content">
                    <h5 class="title">Alat Yang Lengkap</h5>
                    <p>
                      Dari segi alat, kami memiliki alat yang cukup lengkap untuk mendukung setiap produk yang kami tawarkan.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/faster.png" width="150px" alt="Logo"/>
                  </span>
                  <div class="content">
                    <h5 class="title">Proses Cepat</h5>
                    <p>
                      Proses pengerjaan yang cepat namun tidak mengurangi kwalitas.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/quality.png" width="120px" alt="Logo"/>
                  </span>
                  <div class="content">
                    <h5 class="title">Kwalitas Produk</h5>
                    <p>
                      Anda akan merasa sangat puas dengan produk yang kami berikan.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="icon-box-item">
                  <span style="margin-right:20px;">
                    <img class="#"  src="img/icons/pelanggan.png" width="180px" alt="Logo"/>
                  </span>
                  <div class="content">
                    <h5 class="title">Menghargai Pelanggan</h5>
                    <p>
                      Bagi kami, anda adalah raja. kami sangat menghargai apapun yang anda inginkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </vue-aos>
          </div>
        </div>
      </div>
      <vue-aos animation-class="rotateInDownRight animated">
      <div class="thumb">
        <img src="img/photos/bride3.png" style="height:1000px;" alt="hope-Image" />
      </div>
      </vue-aos>
    </section>
    <!--== End Feature Area Wrapper ==-->

    

</template>

<script>
import VueAos from 'vue-aos'

export default {
    name : 'Feature',
    components: {VueAos}
}
</script>