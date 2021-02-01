<template>
  <div class="About">

    <Header />

        <main class="main-content site-wrapper-reveal">
            <!--== Start Map Area Wrapper ==-->
            <div class="contact-map-area">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.53574295323!2d114.81073681444366!3d-3.462339942846213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de6813774f7d65b%3A0x5f6de4de30f60b4c!2sStartup%20Borneo%20Foundation!5e0!3m2!1sen!2sid!4v1612197013500!5m2!1sen!2sid" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
            ></iframe>
            </div>
            <!--== End Map Area Wrapper ==-->

            <!--== Start Contact Area ==-->
            <section class="contact-area">
            <div class="container" style="margin-bottom:-230px; text-align:left;">
                <div class="row">
                <div class="col-lg-12">
                    <div class="contact-info-content">
                    <div class="info-address">
                        <h2 class="title">Banjarbaru, <span>Kalimantan Selatan</span></h2>
                        <p>
                        Jalan Palam, Komplek Pesona Rosella Modern, Guntung Manggis, Landasan Ulin
                        </p>
                        <a href="haribahagia@gmail.com"
                        ><span>Email:</span> haribahagia@gmail.com</a
                        >
                    </div>
                    <div class="brand-office">
                        <div class="info-tem style-two">
                        <h6>Call directly:</h6>
                        <p>+62 857-9378-0806</p>
                        </div>
                        <div class="info-tem">
                        <h6>Kantor Pusat</h6>
                        <p>
                            Banjarbaru
                        </p>
                        </div>
                        <div class="info-tem mb-0">
                        <h6>Jam Kerja:</h6>
                        <p>Senin - Sabtu: 8.00 - 17.00, Minggu Tutup</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- <div class="row">
                <div class="col-lg-12">
                    <div class="contact-form">
                    <div class="section-title text-center">
                        <p>Contact</p>
                        <h2 class="title">
                        <span> We Alway Ready</span> To Help Your
                        </h2>
                    </div>
                    <form
                        class="contact-form-wrapper"
                        id="contact-form"
                        action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                        method="post"
                    >
                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                name="con_name"
                                placeholder="Your Name"
                            />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                            <input
                                class="form-control"
                                type="email"
                                name="con_email"
                                placeholder="Email Address"
                            />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                            <input
                                class="form-control"
                                type="text"
                                name="con_subject"
                                placeholder="Subject (optional)"
                            />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group mb-0">
                            <textarea
                                name="con_message"
                                rows="5"
                                placeholder="Write your message here"
                            ></textarea>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <div class="form-group mb-0">
                            <button class="btn btn-theme btn-block" type="submit">
                                Send Message
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div class="form-message"></div>
                </div>
                </div> -->
                
            </div>
            </section>
            <!--== End Contact Area ==-->
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
