
<section class="banner1">
  <div class="background-elements">
    <div class="orbit-circle"></div>
    <div class="floating-cube"></div>
  </div>

  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      @foreach ($contents as $data)
      <div class="swiper-slide">
        <div class="image-layer" style="background-image: url('{{ asset($data->thumbnail ?? '') }}');"></div>
        <div class="overlay-layer"></div>
        <div class="container h-100">
          <div class="glass-content-box ">
            <div class="content-inner ">
              <h6 class="category" data-swiper-parallax="-100">{{ $data->title ?? 'Hero Title' }}</h6>
              <h2 class="title" data-swiper-parallax="-300">{{ $data->heading ?? 'Hero Heading !' }} <br> <span class="accent">{{ $data->sub_heading ??  'Sub Heading !' }}</span></h2>
              <p class="descataription" d-swiper-parallax="-500">
               {{ $data->short_des ?? 'Please! , Writte some Description !!' }}
              </p>
              <div class="action-area" data-swiper-parallax="-700">
                <a href="{{ $data->button_url ?? '#' }}" class="main-btn">{{ $data->button ?? 'Explore more' }}</a>
                <div class="scroll-indicator">
                  <span class="line"></span>
                </div>
              </div>
            </div>
            
            <div class="side-graphic" data-swiper-parallax="-800">
                <img src="{{ asset($data->cover_image ?? 'https://i.pinimg.com/736x/64/73/25/647325b786074e67b1f203a329588e87.jpg') }}" alt="Tech" class="tilt-img">
            </div>
          </div>
        </div>
      </div>
      @endforeach

    </div>
    <div class="nav-wrapper">
        <div class="swiper-pagination"></div>
        <div class="slider-controls">
            <div class="prev-slide"><i class="bi bi-arrow-left"></i></div>
            <div class="next-slide"><i class="bi bi-arrow-right"></i></div>
        </div>
    </div>
  </div>
</section>
