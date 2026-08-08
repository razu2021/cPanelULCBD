<pre>
  {{$contents}}
</pre>

@if(!empty($contents) && $contents->count() > 0)
<section class="portfolio py-5">
  <div class="container">
    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="portfolio__title">Our Portfolio</h2>
      <p class="portfolio__subtitle">Explore our recent projects and creative work</p>
    </div>
    <!-- Portfolio Grid -->
    <div class="row g-4">
      @foreach($contents->take(4) as $prot)
      <!-- Single Portfolio Item -->
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="portfolio-card">
          <div class="portfolio-card__thumb">
            <img src="{{asset($prot->cover_image ?? 'https://picsum.photos/400/300?random=1')}}" alt="{{$prot->title ?? 'Protfolio image'}}">
            <div class="portfolio-card__overlay">
              <a href="{{route('details.protfolios',[$prot->id,$port->url])}}" class="portfolio-card__btn">{{$prot->button ?? 'Explore More'}}</a>
            </div>
          </div>
          <div class="portfolio-card__content">
            <h5 class="portfolio-card__title">{{$prot->title ?? ''}}</h5>
            <p class="portfolio-card__desc">{{Str::words($prot->short_des ?? '' ,20)}}</p>
          </div>
        </div>
      </div>
      @endforeach
    </div>
  </div>
</section>
@endif