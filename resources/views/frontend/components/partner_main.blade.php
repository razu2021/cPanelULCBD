@if(!empty($contents) && $contents->count() > 0)
<section class="partner3_slider">
    <div class="partner3__shapes">
        <div class="shape s-1"></div>
        <div class="shape s-2"></div>
    </div>

    <div class="container">
        
        <div>
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', ['data' => $sectionsdata,]) 
        <!--section heading end here -->
        </div>

        <div class="swiper partnerSwiper">
            <div class="swiper-wrapper">
                @foreach($contents as $partner)
                <div class="swiper-slide">
                    <div class="p-card">
                        <div class="p-card__overlay"></div>
                        <img src="{{ asset($partner->cover_image ?? 'https://i.pinimg.com/736x/57/82/c1/5782c188d4cdcf14f3f71dc08b9053cc.jpg') }}" alt="Oxford">
                        <div class="p-info">
                            <h4>{{$partner->title ?? ''}}</h4>
                            <p>{{Str::words($partner->short_des ,7 ?? '')}}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
@endif