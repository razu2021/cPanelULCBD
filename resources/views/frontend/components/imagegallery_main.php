<section class="gallery py-5">
  <div class="container">
    <div class="row g-4">
    @for ($i = 0; $i < 10 ; $i++)
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <a href="https://picsum.photos/800/600?random=1" data-fancybox="gallery">
          <img src="https://picsum.photos/400/300?random=1" class="img-fluid rounded" alt="">
        </a>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <a href="https://picsum.photos/800/600?random=2" data-fancybox="gallery">
          <img src="https://picsum.photos/400/300?random=2" class="img-fluid rounded" alt="">
        </a>
      </div>
    @endfor

      
    <!-- copy more items -->
    </div>
  </div>
</section>