@foreach ($contents->take(1) as $data)
<section class="hero-section">
  <div class="blob-bg"></div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 hero-content">
        <span class="badge-text animate-pop-in"><i class="{{ $data->icon ?? '🚀' }} mx-2"></i> {{ $data->title ?? 'Title !' }}</span>
        <h1 class="hero-title animate-pop-in-delayed">
          {{ $data->heading }} <span class="gradient-text">{{ $data->sub_heading }}</span>
        </h1>
        <p class="hero-desc animate-pop-in-delayed-more">
          {{ $data->short_des }}
        </p>
        <div class="hero-btns animate-pop-in-delayed-more">
          <a href="{{ $data->button_url ?? '#' }}" class="btn btn-primary-custom">{{ $data->button ?? 'Explore more ' }}</a>
          <a href="#" class="btn btn-outline-custom">
            Watch Demo <i class="bi bi-play-circle-fill ms-2"></i>
          </a>
        </div>
      </div>
      
      <div class="col-lg-6">
        
        <div class="hero-visual-wrapper animate-float">
          <div class="glass-card">
            <div class="card-icon">⚡</div>
            <h3>247</h3>
            <p>Support</p>
          </div>
          <div class="glass-card statistics">
            <div class="card-icon">📊</div>
            <h3>90.9%</h3>
            <p>Success Retio</p>
          </div>
          <div class="main-visual-circle"><img class="rounded-6" src="{{asset($data->cover_image ?? 'https://i.pinimg.com/736x/64/73/25/647325b786074e67b1f203a329588e87.jpg')}}" alt=""></div>
          
        </div>
      </div>
    </div>
  </div>
</section>
@endforeach