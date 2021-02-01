<template>

    
    <!--== Start Hero Area Wrapper ==-->
    <section class="hero-slider">

    <carousel class="hero-items carousel" :nav="false" :centerMode="false" :dots="false"  :autoplay="true" :items="1" :loop="true">
        
        <!-- start hero -->
        <div class="single-hero-items set-bg" style="background-image:url('/img/slider/slider1.png')">

            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="slider-content">
                    <p class="text animated delay1">
                    Rasakan Sensasi Beda Bersama Kami
                    </p>
                    <h2 class="title animated delay2">
                    Jarak Dapat Memisahkan Kita<span>, Namun</span>
                    <span class="d-block">Tidak Dengan Hati Kita</span>
                    </h2>
                    <!-- <a href="#" class="btn btn-danger me-3 animated delay1"
                    >Get a quote</a
                    > -->
                    <a
                    href="#"
                    class="btn btn-outline-secondary animated delay2"
                    >our services</a
                    >
                </div>
                </div>
            </div>
            </div>

        </div>
        <!-- End Hero -->

        <!-- start hero -->
        <div class="single-hero-items set-bg" style="background-image:url('/img/slider/slider2.png')">

            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="slider-content">
                    <p class="text animated delay1">
                    Rasakan Sensasi Beda Bersama Kami
                    </p>
                    <h2 class="title animated delay2">
                    Hati Mu <span>Adalah</span>
                    <span class="d-block">Prioritas Ku</span>
                    </h2>
                    <!-- <a href="#" class="btn btn-danger me-3 animated delay1"
                    >Get a quote</a
                    > -->
                    <a
                    href="#"
                    class="btn btn-outline-secondary animated delay2"
                    >our services</a
                    >
                </div>
                </div>
            </div>
            </div>

        </div>
        <!-- End Hero -->

        <!-- start hero -->
        <div class="single-hero-items set-bg" style="background-image:url('/img/slider/slider3.png')">

            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="slider-content">
                    <p class="text animated delay1">
                    Rasakan Sensasi Beda Bersama Kami
                    </p>
                    <h2 class="title animated delay2">
                    Pasangan <span>Adalah</span>
                    <span class="d-block">Belahan Jiwa Yang Sama</span>
                    </h2>
                    <!-- <a href="#" class="btn btn-danger me-3 animated delay1"
                    >Get a quote</a
                    > -->
                    <a
                    href="#"
                    class="btn btn-outline-secondary animated delay2"
                    >our services</a
                    >
                </div>
                </div>
            </div>
            </div>

        </div>
        <!-- End Hero -->

        <!-- start hero -->
        <div class="single-hero-items set-bg" style="background-image:url('/img/slider/slider4.png')">

            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="slider-content">
                    <p class="text animated delay1">
                    Rasakan Sensasi Beda Bersama Kami
                    </p>
                    <h2 class="title animated delay2">
                    Abadikan Momen<span> Spesial</span>
                    <span class="d-block">Dengan Dia</span>
                    </h2>
                    <!-- <a href="#" class="btn btn-danger me-3 animated delay1"
                    >Get a quote</a
                    > -->
                    <a
                    href="#"
                    class="btn btn-outline-secondary animated delay2"
                    >our services</a
                    >
                </div>
                </div>
            </div>
            </div>

        </div>
        <!-- End Hero -->
        

        

    </carousel>

   
    </section>

    
    

</template>

<script>
// import VueAos from 'vue-aos';
import carousel from 'vue-owl-carousel';


export default {
    name : 'Hero',
    components : {
        // VueAos,
        carousel
    }
}
</script>