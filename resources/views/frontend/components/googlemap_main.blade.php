@if(!empty($siteaddress) && $siteaddress->count() > 0)
<section class="map-section py-5">
  <div class="container">
    
    <!-- Section Header -->
    <div class="text-center mb-5">
      <h2 class="map__title">Find Us On Map</h2>
      <p class="map__subtitle">Visit our office or get directions easily</p>
    </div>
    @foreach($siteaddress->take(1) as $address)
    @if($address->type == 'primary')
    <div class="row g-4 align-items-stretch">
      <!-- Map -->
      <div class="col-lg-8">
        <div class="map__embed">
          <iframe 
            src="{{$address->google_mmap ?? 'https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed'}}"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

      <!-- Contact Info Card -->
      <div class="col-lg-4">
        <div class="map__info">
          <h4>Our Office</h4>
          <hr>

          <ul>
            <h4>{{$address->title ?? ''}}</h4>
            <li>📍{{$address->address ?? ''}}</li>
            <li>{{$address->description ?? ''}}</li>
           
          </ul>
          <a target="_blank" title="{{$address->title ?? ''}}" href="{{$address->google_map ?? '#'}}" class="map__btn">Get Direction</a>
        </div>
      </div>

    </div>
    @endif
  @endforeach
  </div>
</section>
@endif