<template>
    
    <!--== Start Pricing Area Wrapper ==-->
    <section class="pricing-area pricing-default-area">
        <div class="container" style="text-align:left;" >
        <div class="row">
            <div class="col-lg-12">
            <!-- <div
                class="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                
            </div> -->
            <vue-aos animation-class="fadeInUp animated">
                <div class="section-title text-center">
                    <p>Harga Promo</p>
                    <h2 class="title">
                    <span>PAKETAN</span> Termurah
                    </h2>
                </div>
            </vue-aos>

            </div>
        </div>
        <vue-aos animation-class="fadeInUp animated">
        <div class="row row-gutter-0 pricing-items-style1">
            <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="pricing-item item-one">
                <div class="pricing-title">
                <h5>Undangan 1</h5>
                </div>
                <div class="pricing-amount">
                <h2><sup>Rp.</sup>150.000,-</h2>
                <!-- <span class="period">/ month</span> -->
                </div>
                <div class="pricing-content">
                <p class="desc">
                    Data foto yang diperlukan disediakan oleh klient.
                </p>
                <ul class="pricing-list" >
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >E-Poster Undangan</li>
                    <li style="font-size:14px;">
                    <i class="icofont-check-circled"></i>Video Animasi Undangan
                    </li>
                </ul>
                </div>
                <div class="pricing-footer">
                <a class="btn-theme btn-border" href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20pesan%20paket%20undangan%201"
                    target="_blank">Get Started Now</a
                >
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="pricing-item item-two">
                <div class="pricing-title">
                <h5>Undangan 2</h5>
                </div>
                <div class="pricing-amount">
                <h2><sup>Rp.</sup>300.000,-</h2>
                <!-- <span class="period">/ month</span> -->
                </div>
                <div class="pricing-content">
                <p class="desc">
                    Data foto yang diperlukan disediakan oleh klient.
                </p>
                <ul class="pricing-list" >
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >E-Poster / Video Animasi Undangan</li>
                    <li style="font-size:14px;">
                    <i class="icofont-check-circled"></i>Website Undangan
                    </li>
                    <li style="font-size:14px;">
                    <i class="icofont-check-circled"></i>Alamat Web Bebas Pilih
                    </li>
                </ul>
                </div>
                <div class="pricing-footer">
                <a class="btn-theme btn-border active" href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20pesan%20paket%20undangan%202" target="_blank"
                    >Get Started Now</a
                >
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="pricing-item item-three">
                <div class="pricing-title">
                <h5>pre-wedding 1</h5>
                </div>
                <div class="pricing-amount">
                <h2><sup>Rp.</sup>300.000,-</h2>
                <!-- <span class="period">/ month</span> -->
                </div>
                <div class="pricing-content">
                <p class="desc">
                    Paket Foto / Video Pre-wedding
                </p>
                <ul class="pricing-list" >
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >Foto / Video Pre-Wedding</li>
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >3x Revisi Editing</li>
                    
                </ul>
                </div>
                <div class="pricing-footer">
                <a class="btn-theme btn-border" href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20pesan%20paket%20Pre-Wedding%201" target="_blank"
                    >Get Started Now</a
                >
                </div>
            </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="pricing-item item-four">
                <div class="pricing-title">
                <h5>Pre-Wedding 2</h5>
                </div>
                <div class="pricing-amount">
                <h2><sup>Rp.</sup>500.000,-</h2>
                <!-- <span class="period">/ month</span> -->
                </div>
                <div class="pricing-content">
                <p class="desc">
                    Paket Include Foto Dan Video Pre-wedding
                </p>
                <ul class="pricing-list" >
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >Foto Pre-Wedding</li>
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >Video Pre-Wedding</li>
                    <li style="font-size:14px;"><i class="icofont-check-circled" ></i >3x Revisi Editing</li>
                    
                </ul>
                </div>
                <div class="pricing-footer">
                <a class="btn-theme btn-border" href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20pesan%20paket%20Pre-Wedding%202" target="_blank"
                    >Get Started Now</a
                >
                </div>
            </div>
            </div>
        </div>
        </vue-aos>
        </div>
    </section>
    <!--== End Pricing Area Wrapper ==-->

</template>

<script>
import VueAos from 'vue-aos'

export default {
    name : 'Pricing',
    components: {VueAos}
}
</script>