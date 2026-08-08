<section class="banner6">
  <div class="swiper banner6-slider">
    <div class="swiper-wrapper">
      
      @foreach ($contents as $data)
      <div class="swiper-slide">
        <div class="bg-layer" style="background-image: url('{{ asset($data->thumbnail ?? 'https://html.rrdevs.net/consulter/assets/img/banner/banner-home.png') }}');"></div>
        
        <div class="gradient-mask"></div>

        <div class="shapes-container">
          <div class="blob blob-1"></div>
          <div class="blob blob-2"></div>
          <div class="geo-shape shape-square"></div>
          <div class="geo-shape shape-circle"></div>
        </div>

        <div class="container position-relative z-index-50">
          <div class="row  align-items-center">
            
            <div class="col-xl-8 col-lg-10 col-12">
              <div class="content-v6-wrapper">
                
                <div class="upper-tag anim-item" data-swiper-parallax="-200">
                    <span class="line"></span>
                    <span class="text">{{ $data->title ?? 'title!' }}</span>
                </div>

                <h1 class="v6-title anim-item" data-swiper-parallax="-400">
                  {{ $data->heading ?? 'heading!' }}  <br> 
                   <span class="outline">{{ $data->sub_heading ?? 'sub Heading' }}</span> 
                </h1>
                
                <p class="v6-desc anim-item" data-swiper-parallax="-600">
                {{ $data->short_des ?? "Description " }}
                </p>
                
                <div class="v6-btns anim-item" data-swiper-parallax="-800">
                  <a href="{{ $data->button_url ?? '#' }}" class="btn-main-v6">{{ $data->button ?? 'Explore more' }} <i class="bi bi-chevron-right ms-2"></i></a>
                 
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      @endforeach

    </div>

    <div class="swiper-pagination v6-pagination"></div>
  </div>

  <div class="shapes-container">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <div class="grid-lines"></div>

  <div class="geo-shape shape-square"></div>
  <div class="geo-shape shape-circle"></div>

  <div class="glow-orb"></div>
</div>
</section>

