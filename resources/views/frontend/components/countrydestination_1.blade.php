@if(!empty($contents) && $contents->count() > 0)
<section class="destination1">
    <div class="container">
        <div class="section-head">
            <span class="sub-title">Global Opportunities</span>
            <h2 class="main-title">Top Destinations for Study Abroad</h2>
        </div>

        <div class="row g-4">
            @foreach ($contents as $country)
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="dest-card">
                    <div class="dest-card__image">
                        <img src="{{ asset($country->cover_image ?? 'https://i.pinimg.com/736x/3d/bb/21/3dbb21d2806caf3f93b04aa6457af482.jpg') }}" alt="{{ $country->title ??  'Country' }}">
                    </div>
                    <div class="dest-card__info">
                        <h3>{{$country->title ?? ''}}</h3>
                        <p>{{Str::words($country->short_des,20 ?? '')}}</p>
                        <a href="{{ route('details.casestudy',[$country->id,$country->url]) }}" class="explore-btn">{{ $country->button ?? 'About More' }} <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endif
