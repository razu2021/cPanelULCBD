@if(!empty($contents) && $contents->count() > 0)
<section class="testimonial py-5">
    <div class="container">
        <!-- Header -->
        <div class="mb-5">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', ['data' => $sectionsdata,]) 
        <!--section heading end here -->

        </div>

        <!-- Swiper Slider -->
        <div class="swiper testimonial__slider">
            <div class="swiper-wrapper">
                <!-- Loop 10 testimonials -->
                @foreach($contents as $testi)
                <div class="swiper-slide">
                    <div class="testimonial__card">
                        <div class="testimonial__quote">“</div>
                        <div class="testimonial__content">
                            <p class="testimonial__text">
                                {{Str::words($testi->short_des,20 ?? '')}}
                            </p>
                            <div class="testimonial__user">
                                <div class="testimonial__img">
                                    <img src="{{asset($testi->cover_image ?? '')}}" alt="{{$testi->heading ?? 'Client Reviews' }}">
                                </div>
                                <div>
                                    <h4 class="testimonial__name">{{$testi->heading ?? ''}}</h4>
                                    <span class="testimonial__role">{{$testi->sub_heading ?? ''}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
@endif