@if(!empty($contents) && $contents->count() > 0)
<section class="video-gallery py-5">
  <div class="container">
    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="video-gallery__title">Our Video Gallery</h2>
      <p class="video-gallery__subtitle">Explore our latest tutorials and showcases</p>
    </div>

    <!-- Video Cards Grid -->
    <div class="row g-4">
      @foreach($contents as $video)
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="video-card">
          <div class="video-card__thumb">
            <iframe src="{{$video->video_url ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ'}}" 
                    title="Video 1" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="video-card__content">
            <h5 class="video-card__title">{{$video->title ?? ''}}</h5>
            <p class="video-card__desc">{{Str::words($video->short_des , 20 ?? '')}}</p>
          </div>
        </div>
      </div>
      @endforeach
   

    

    

      <!-- copy more video items -->
    </div>
  </div>
</section>
@endif