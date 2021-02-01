<template>

<!--== Start Header Wrapper ==-->
    <header class="header">
    <!-- header-top start -->
    <div class="header-top d-none d-lg-block">
        <div class="container">
        <div class="row row-cols-2">
            <div class="col" style="text-align:left;">
            <p>
                <i class="icofont-google-map"></i> <span>ALAMAT:</span> Jl. Palam Komp. Pesona Rosella
                Modern, Gt Manggis, Banjarbaru, Kal-Sel
            </p>
            </div>
            <div class="col">
            <ul class="social-links text-end">
                <li>
                <a href="#"><i class="icofont-twitter"></i></a>
                </li>
                <li>
                <a href="#"><i class="icofont-facebook"></i></a>
                </li>
                <li>
                <a href="#"><i class="icofont-instagram"></i></a>
                </li>
                <li>
                <a href="#"><i class="icofont-rss-feed"></i></a>
                </li>
                <li>
                <a href="#"><i class="icofont-play-alt-1"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    <!-- header-top end -->

    <!-- header-middle start -->
    <div class="header-middle mobile-sticky">
        <div class="container">
        <div class="row">
            <div class="col-12">
            <div class="header-middle-content">
                <div class="header-logo">
                <router-link to="/">
                <a href="#">
                    <img
                    class="sticky-img"
                    src="img/logo.png"
                    alt="Logo"
                    />
                </a>
                </router-link>
                </div>
                <ul class="media-wrap d-none d-lg-flex">
                <!-- media-list start -->
                <li class="media media-list">
                    <span class="media-icon"
                    ><i class="icofont-clock-time"></i
                    ></span>
                    <div class="media-content" style="text-align:left;">
                    <span class="media-sub-heading">working hours</span>
                    <span class="media-heading"
                        >MON - SAT: 9.00 - 21.00
                    </span>
                    </div>
                </li>
                <!-- media-list end -->

                <!-- media-list start -->
                <li class="media media-list">
                    <span class="media-icon"
                    ><i class="icofont-ui-call"></i
                    ></span>
                    <div class="media-content" style="text-align:left;">
                    <span class="media-sub-heading">hotline 24/7</span>
                    <a class="media-heading" href="tel:+0962-58-58-258"
                        >+62-857-9378-0806</a
                    >
                    </div>
                </li>
                <!-- media-list end -->

                <!-- media-list start -->
                <li class="media media-list">
                    <span class="media-icon"
                    ><i class="icofont-envelope"></i
                    ></span>
                    <div class="media-content" style="text-align:left;">
                    <span class="media-sub-heading">email us</span>
                    <a
                        class="media-heading"
                        href="mailto:support@clenora.com.uk"
                        >haribahagia@gmail.com</a
                    >
                    </div>
                </li>
                <!-- media-list end -->
                </ul>
                <a
                href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20melakukan%20reservasi" target="_blank"
                class="book-now-btn d-none d-sm-inline-block d-lg-none"
                >Reservasi</a
                >
                <div class="mobile-menu-toggle d-lg-none">
                <a href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                    <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                    ></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                    ></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- header-middle end -->

    <!-- header-bottom start -->
    <div class="header-bottom d-none d-lg-block">
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <div
                class="d-flex flex-wrap align-items-center justify-content-between"
            >
                <ul class="main-menu">
                <li class="active">
                    <router-link to="/">
                    <!-- <a class="main-menu-link" href="#" v-on:click="loadOnce">Home</a> -->

                    <a class="main-menu-link" href="#">Home</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/services">
                    <a class="main-menu-link" href="#" >Services</a>
                    </router-link>
                    <!-- <ul class="sub-menu">
                    <li>
                        <a class="sub-menu-link" href="services.html"
                        >Services</a
                        >
                    </li>
                    <li>
                        <a class="sub-menu-link" href="service-details.html"
                        >Service Details</a
                        >
                    </li>
                    </ul> -->
                </li>

                <li>
                    <router-link to="#">
                    <a class="main-menu-link" href="">Portofolio</a>
                    </router-link>
                    <!-- <ul class="sub-menu">
                    <li>
                        <a class="sub-menu-link" href="blog.html"
                        >Blog list</a
                        >
                    </li>
                    <li>
                        <a class="sub-menu-link" href="blog-details.html"
                        >Blog Details</a
                        >
                    </li>
                    </ul> -->
                </li>

                <li>
                    <router-link to="/about">
                    <a class="main-menu-link" href="#">About</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                    <a class="main-menu-link" href="contact.html">Contact</a>
                    </router-link>
                </li>
                
                </ul>
                <a href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20melakukan%20reservasi" class="book-now-btn" target="_blank">Reservasi</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- header-bottom end -->
    <!-- header-bottom start -->
    <div class="header-bottom sticky-header d-none d-lg-block">
        <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <div
                class="d-flex flex-wrap align-items-center justify-content-between"
            >
                <ul class="main-menu">
                <li class="active">
                    <router-link to="/">
                    <a class="main-menu-link" href="#">Home</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/services">
                    <a class="main-menu-link" href="#">Services</a>
                    </router-link>

                    <!-- <ul class="sub-menu">
                    <li>
                        <a class="sub-menu-link" href="services.html"
                        >Services</a
                        >
                    </li>
                    <li>
                        <a class="sub-menu-link" href="service-details.html"
                        >Service Details</a
                        >
                    </li>
                    </ul>
                </li> -->

                <li>
                    <a class="main-menu-link" href="blog.html">Portofolio</a>
                    <!-- <ul class="sub-menu">
                    <li>
                        <a class="sub-menu-link" href="blog.html"
                        >Blog list</a
                        >
                    </li>
                    <li>
                        <a class="sub-menu-link" href="blog-details.html"
                        >Blog Details</a
                        >
                    </li>
                    </ul> -->
                </li>

                <li>
                    <a class="main-menu-link" href="about.html">About</a>
                </li>
                <li>
                    <a class="main-menu-link" href="contact.html">Contact</a>
                </li>
                
                </ul>
                <a href="https://api.whatsapp.com/send?phone=6285793780806&text=Hai%20Admin,%20Saya%20ingin%20melakukan%20reservasi" class="book-now-btn" target="_blank">Reservasi</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    <!-- header-bottom end -->
    </header>

<!--== End Header Wrapper ==-->

</template>

<script>
export default {
    name : 'Header',
    methods:{
    loadOnce:function(){
      location.reload();
    // forceRerender(){
    //   // this.componentKey += 1;
    //   this.$refs['myComp'].init()
    }
  },
}
</script>