@if(!empty($contents) && $contents->count() > 0)
<section class="destination2">
    <div class="bg-graphics">
        <div class="circle-shape animate-float"></div>
        <div class="square-shape animate-rotate"></div>
        <div class="blob-shape animate-pulse-slow"></div>
    </div>

    <div class="container mb-3">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', [ 'data' => $sectionsdata, ])
        <!-- section heading end here  -->         
    </div>

    <div class="swiper destinationSlider">
        <div class="swiper-wrapper">

            @foreach ($contents as $country)
            <div class="swiper-slide">
                <div class="dest-card-v2">
                    <div class="image-box">
                        <img src="{{ asset($country->cover_image ?? 'https://i.pinimg.com/736x/61/c8/ec/61c8eca72fd85b7ff986ca402cb28f7d.jpg') }}" alt="{{ $country->title ?? 'Country image for Feature Destination ' }}">
                        
                    </div>
                    <div class="content-box">
                        <h3>{{$country->title ?? ''}}</h3>
                        <p>{{Str::words($country->short_des , 20 ?? '')}}</p>
                        <a href="{{ route('details.casestudy',[$country->id,$country->url]) }}" class="link">{{ $country->button ?? 'About More' }} <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            @endforeach


            </div>
        
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</section>
@endif