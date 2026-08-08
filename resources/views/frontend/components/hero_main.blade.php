<section class="banner7-section">
    <div class="container">
        <div class="banner7-box">
            <div class="swiper main_hero_slider">
                <div class="swiper-wrapper">
                @foreach ($contents as $data)
                    
                    <div class="swiper-slide">
                        <div class="row align-items-center">
                            
                            <div class="col-lg-7 col-md-12 p-lg-0">
                                <div class="banner7-content-wrap px-5">
                                    <div class="banner7-badge" data-swiper-parallax="-200" data-swiper-parallax-opacity="0">
                                        <i class="{{ $data->icon ?? 'bi bi-rocket-takeoff' }}"></i>
                                        {{ $data->title ?? 'Banner Title !' }}
                                    </div>
                                    <h1 class="banner7-title" data-swiper-parallax="-400" data-swiper-parallax-opacity="0">
                                       {{ $data->heading ?? 'Banner Heading !' }} <br><span>{{ $data->sub_heading ?? 'Banner Sub Heading !' }}</span>
                                    </h1>
                                    <p class="banner7-desc" data-swiper-parallax="-600" data-swiper-parallax-opacity="0">
                                        {{ $data->short_des ?? 'Please!, Writte some Description !! ' }}
                                    </p>
                                    <div class="banner7-actions" data-swiper-parallax="-800" data-swiper-parallax-opacity="0">
                                        @if(!empty($data->button))
                                        <a href="{{ $data->button_url ?? '#' }}" class="banner7-btn-main">{{ $data->button  ?? 'Explore More ' }}</a>
                                        @endif
                                        @if(!empty($data->video_url))
                                        <div class="banner7-video-play">
                                            <button class="banner7-play-btn" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="{{$data->video_url}}"></button>
                                        </div>
                                        @endif

                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-5 col-md-12 p-lg-0">
                                <div class="banner7-visual-wrap" data-swiper-parallax="-300">
                                    <div class="banner7-mask-layer">
                                        <img src="{{ asset($data->cover_image ?? 'https://i.pinimg.com/736x/64/73/25/647325b786074e67b1f203a329588e87.jpg') }}" alt="Strategic Business Slide">
                                    </div>
                                    <div class="banner7-blob banner7-blob-1"></div>
                                    <div class="banner7-blob banner7-blob-2"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                  @endforeach 
                </div>
                <div class="swiper-pagination banner7-pagination"></div>
            </div>
        </div>
    </div>
</section>

<!-- video modal -->
 @includeif('frontend/components/ui/video_modal') 

