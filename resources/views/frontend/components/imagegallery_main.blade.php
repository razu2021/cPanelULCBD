@if(!empty($contents) && $contents->count() > 0)

<section class="gallery py-5">
  <div class="container">
    <div class="row g-4">
    @foreach ($contents as $image)
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <a href="{{ asset($image->cover_image) }}" data-fancybox="gallery">
          <img src="{{ asset($image->cover_image) }}" class="img-fluid rounded" alt=" {{ $image->title ?? '' }} ">
        </a>
      </div>
     @endforeach

      
    <!-- copy more items -->
    </div>
  </div>
</section>
 @endif
