@if(!empty($contents) && $contents->count() > 0)
<section class="promot5-section">
    <div class="container">
        <div class="promot5-box">
            <div class="swiper promot5-slider">
                <div class="swiper-wrapper">
                    

                @foreach ($contents->take(10) as $item)
                    <div class="swiper-slide">
                        <div class="row align-items-center">
                            
                            <div class="col-lg-7 col-md-12 p-lg-0">
                                <div class="promot5-content-wrap px-5">
                                    <div class="promot5-badge">
                                        <i class="bi bi-rocket-takeoff"></i>
                                        {{$item->title ?? 'Growth Strategy'}}
                                    </div>
                                    <h1 class="promot5-title">{{$item->heading ?? 'Good Business Planning'}} <span> {{ $item->sub_heading ?? '' }} </span></h1>
                                    <p class="promot5-desc">
                                        {{$item->short_des ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}}
                                    </p>
                                    <div class="promot5-actions">
                                        <a href="{{route('details.casestudy',[$item->id,$item->url])}}" class="promot5-btn-main">{{$item->button ?? 'Explore Services'}}</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-5 col-md-12 p-lg-0">
                                <div class="promot5-visual-wrap">
                                    <div class="promot5-mask-layer">
                                        <img src="https://i.pinimg.com/736x/64/73/25/647325b786074e67b1f203a329588e87.jpg" alt="Strategic Business Slide">
                                    </div>
                                    <div class="promot5-blob promot5-blob-1"></div>
                                    <div class="promot5-blob promot5-blob-2"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    @endforeach
                </div>

                <div class="swiper-pagination promot5-pagination"></div>
            </div>
        </div>
    </div>
</section>
@endif