@foreach ($contents->take(1) as $data)
<section class="banner3" style="background-image: url('{{ asset($data->thumbnail) }}');">
  <div class="overlay"></div>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <!-- Left Text -->
      <div class="col-lg-7 col-12 text-content">
        <div class="top-tag">{{ $data->title ?? 'Banner Title !' }}</div>
        <h1 class="hero-title">
         {{ $data->heading ?? 'Banner Heading' }} <span class="highlight">{{ $data->sub_heading ?? 'Sub Heading !' }}</span> 
        </h1>
        <p class="hero-desc">
          {{ $data->short_des ?? 'Write some Description here !' }}
        </p>
        <div class="btn-holder">
          <a href="{{ $data->button_url ?? '#' }}" class="primary-btn">{{ $data->button ?? 'Explore more' }}</a>
        </div>
      </div>

      <!-- Right Image -->
      <div class="col-lg-5 col-12 image-content">
        <div class="frame-wrapper">
          <div class="glass-frame">
            <img src="{{ asset($data->cover_image ?? 'https://html.rrdevs.net/consulter/assets/img/home/our-portfolio-home__item-3.png') }}" alt="Hero Image">
          </div>
          <div class="floating-badge">99% Faster</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Shapes -->
  <div class="shape shape1"></div>
  <div class="shape shape2"></div>
  <div class="shape shape3"></div>
</section>
@endforeach