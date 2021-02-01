<template>
    
    <!--== Start Team Area Wrapper ==-->
    <section class="team-area team-default-area" style="background-color:#f3f3f3;">
        <div class="container">
          <div class="row">
              <div class="col-lg-12">
              <vue-aos animation-class="fadeInUp animated">
              <div class="section-title text-center">
                  <p>Meet Our Team</p>
                  <h2 class="title">
                  <span>Professional &</span> Enthusiastic
                  </h2>
              </div>
              </vue-aos>
              </div>
          </div>
          <div class="row">
            <div class="col-lg-12 ">
              <vue-aos animation-class="fadeInUp animated">
              <carousel class="carousel" :nav="false" :dots="true"  :autoplay="true" :items="3" :loop="true">
                
                <div class="card" style="width: 350px; padding :20px; ">
                  
                    <img class="card-img-top" src="img/team/rizky.jpg" alt="Card image cap">
                  
                  <div class="card-body" style="font-size: 15px;">
                    <h6 class="card-title">M Rizky Syahputra, S.Kom</h6>
                    <h6 style="font-size:12px;">Founder & Project Manager</h6>
                    
                    
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    
                  </div>
                </div>

                <div class="card" style="width: 350px; padding :20px; ">
                  
                    <img class="card-img-top" src="img/team/yoga.png" alt="Card image cap">
                  
                  <div class="card-body" style="font-size: 15px;">
                    <h6 class="card-title">Prayogo Rizky Maulany, S.Kom</h6>
                    <h6 style="font-size:12px;">Co-Founder & Head Of Design</h6>
                    
                    
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    
                  </div>
                </div>

                <div class="card" style="width: 350px; padding :20px; ">
                  
                    <img class="card-img-top" src="img/team/aze.png" alt="Card image cap">
                  
                  <div class="card-body" style="font-size: 15px;">
                    <h6 class="card-title">M Azriel Al-Akbar </h6>
                    <h6 style="font-size:12px;">Head Of Video & Photographic</h6>
                    
                    
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    
                  </div>
                </div>

              </carousel>
              </vue-aos>

            </div>
          </div>
        </div>


        
    </section>
    <!--== End Team Area Wrapper ==-->

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