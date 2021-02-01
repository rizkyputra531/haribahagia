<template>
    <!--== Start Footer Area Wrapper ==-->
    <footer class="footer-area">
    <div class="container">
        <div class="row" style="text-align:left;">
        <div class="col-sm-6">
            <div class="widget-item">
            <div class="about-widget">
                <a class="footer-logo" style="margin-bottom:80px;"  href="index.html">
                <img src="img/logo-dark.png" alt="Logo" />
                </a>
                <p class="mb-0">
                HariBahagia.me adalah perusahaan yang bergerak dibidang digital advertising, berlokasi di Kota Banjarbaru, Kalimantan Selatan. 
                </p>
                <ul class="widget-contact-info">
                <li class="info-address">
                    <i class="icofont-location-pin" style="margin-right:-20px;" ></i>
                    <a href="https://goo.gl/maps/ccT1dTTuKBJ6bvg19" target="_blank">
                        Startup Borneo Foundation
                    </a>
                </li>
                <li class="info-mail">
                    <i class="icofont-email"></i
                    ><a href="mailto://hello@yourdomain.com"
                    >haribahagia@gmail.com</a
                    >
                </li>
                <li class="info-phone">
                    <i class="icofont-ui-call"></i
                    ><a href="tel://6285793780806">+62 857 9378 0806</a>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div class="col-lg-6">

            <vue-aos animation-class="fadeInUp animated">
            <div class="section-title mt-md-70" >
                <h2 class="title"><span>FAQs</span></h2>
            </div>
            </vue-aos>

            <vue-aos animation-class="fadeInUp animated">
            <div class="accordian-content" >
                <div
                class="accordion accordion-style2 no-bg"
                id="accordionStyle"
                >
                <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                    <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                    >
                        Apakah bisa konsultasi tatap muka?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                    </button>
                    </div>
                    <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionStyle"
                    >
                    <div class="accordion-body">
                        Bisa banget dong, Selain bisa via telepon, wa, video call. Kita juga bisa membuat agenda konsultasi tatap muka dan itu gratis loh.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" id="headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Bagaimana metode pembayaran nya?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                    </button>
                    </div>
                    <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionStyle"
                    >
                    <div class="accordion-body">
                        Pembayaran dapat dilakukan transfer atau cash yaa, dengan minimal dp 50% untuk tahap pengerjaan.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" id="headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Terima jasa foto dan video wedding juga?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                    </button>
                    </div>
                    <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionStyle"
                    >
                    <div class="accordion-body">
                        Kami juga terima jasa foto dan video wedding juga, untuk biaya nya dijamin terjangkau dan bisa di nego.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" id="headingFour">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        Apa saat ini membuka lowongan pekerjaan?
                        <i class="icon icon-plus icofont-thin-down"></i>
                        <i class="icon icon-minus icofont-close-line"></i>
                    </button>
                    </div>
                    <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionStyle"
                    >
                    <div class="accordion-body">
                        Saat ini kami belum membuka lowongan pekerjaan ya.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </vue-aos>
        </div>
        
    </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
        <div class="row text-center">
            <div class="col-sm-12">
            <div class="widget-copyright">
                <p>
                &copy; 2021 <span class="text-uppercase">hari bahagia</span>. Made
                with <i class="icofont-heart-alt"></i> by
                <a target="_blank" href="www.via.co.id"
                    >via.team</a
                >
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </footer>
    <!--== End Footer Area Wrapper ==-->
</template>

<script>
import VueAos from 'vue-aos'

export default {
    name : 'Footer',
    components : {
        VueAos
    }
}
</script>