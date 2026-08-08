
<section class="banner5">
  <div class="swiper banner5-slider">
    <div class="swiper-wrapper">
      
      @foreach ($contents as $data)
      <div class="swiper-slide">
        <div class="vibrant-bg" style="background-image: url('{{ asset($data->thumbnail ?? 'https://html.rrdevs.net/consulter/assets/img/banner/banner-home.png') }}');"></div>
        
        <div class="overlay-vivid"></div>
        
        <div class="particles-ripple"></div>

        <div class="container h-100 position-relative z-index-20">
          <div class="row h-100 align-items-center justify-content-center">
            
            <div class="col-xl-9 col-lg-10 col-12 text-center content-center">
              <div class="content-box" data-swiper-parallax="-500">
                <span class="vibe-tag" data-swiper-parallax="-200">{{ $data->title ?? 'title' }}</span>
                
                <h1 class="vivid-title" data-swiper-parallax="-300">
                  {{ $data->heading ?? 'heading!' }} <br>  <span class="text-neon">{{ $data->sub_heading ?? 'sub heading !' }}</span> 
                </h1>
                
                <p class="vivid-desc" data-swiper-parallax="-400">
                 {{ $data->short_des ?? 'Description' }}
                </p>
                
                <div class="vivid-actions" data-swiper-parallax="-500">
                  <a href="{{ $data->button_url ?? '#' }}" class="btn-ripple-cyan">{{ $data->button ?? 'Explore more' }}</a>
                  <a href="#" class="btn-outline-vivid">Explore Case Studies <i class="bi bi-arrow-up-right ms-2"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
   @endforeach

    </div>

    <div class="swiper-pagination custom-pagination-center"></div>
    
    <div class="swiper-button-prev prev-vivid"></div>
    <div class="swiper-button-next next-vivid"></div>
  </div>
</section>