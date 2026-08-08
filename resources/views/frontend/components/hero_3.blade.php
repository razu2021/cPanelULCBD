<section class="banner2">
  <div class="swiper banner_slider2">
    <div class="swiper-wrapper">
      @foreach ($contents as $data)
      <div class="swiper-slide">
        <div class="glow-circle blue-glow"></div>
        <div class="glow-circle purple-glow"></div>

        <div class="container h-100 ">
          <div class="row align-items-center h-100">
            <div class="col-lg-7 col-12 text-content" data-swiper-parallax="-400">
              <div class="top-tag">{{ $data->title ?? 'Banner Title !' }}</div>
              <h1 class="hero-title">{{ $data->heading ?? 'Banner Heading !' }}<br> <span class="highlight">{{ $data->sub_heading ?? 'Sub Heading !' }}</span></h1>
              <p class="hero-desc">{{ $data->short_des ?? 'Please! Write some Description !' }}</p>
              <div class="btn-holder">
                <a href="{{ $data->button_url ?? '#' }}" class="primary-btn">{{ $data->button ?? 'Explore more ' }}</a>
                <a href="#" class="video-btn"><i class="bi bi-play-circle"></i> View Demo</a>
              </div>
            </div>
            
            <div class="col-lg-5 col-12 image-content" data-swiper-parallax="-600">
              <div class="frame-wrapper">
                <div class="glass-frame">
                  <img src="{{ asset($data->cover_image ?? 'https://html.rrdevs.net/consulter/assets/img/home/our-portfolio-home__item-3.png') }}" alt="Graphic">
                </div>
                <div class="floating-badge">99% Faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      @endforeach

    

    </div>
    <div class="swiper-button-next custom-nav"></div>
    <div class="swiper-button-prev custom-nav"></div>
    <div class="swiper-pagination custom-dots"></div>
  </div>
</section>
