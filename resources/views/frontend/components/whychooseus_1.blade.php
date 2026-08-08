@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $whyc)
<section class="whychoosus2">
    <div class="graphic-shape shape-1"></div>
    <div class="graphic-shape shape-2"></div>
    <div class="graphic-shape shape-3"></div>
    
    <div class="container">
        <div class="row align-items-center">
            
            <div class="col-12 col-lg-6">
                <div class="whychoosus2__image-area">
                    <div class="image-mask">
                        <img src="{{asset($whyc->cover_image ?? 'https://i.pinimg.com/736x/e7/ba/9e/e7ba9e0f5f16f9be77e928eca4352183.jpg')}}" alt="Expert Support">
                    </div>
                    <div class="graph-element dots"></div>
                    <div class="graph-element circle-line"></div>
                    <div class="data-card-floating">
                        <i class="bi bi-chart-line"></i>
                        <span>{{$whyc->sub_title ?? ''}}</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="whychoosus2__content">
                    <div class="section-head">
                        <span class="sub-title">{{$whyc->title ?? ''}}</span>
                        <h2 class="main-title">{{$whyc->heading ?? ''}} <span>{{$whyc->sub_headgin ?? ''}}</span></h2>
                        <p class="description">{{$whyc->short_des ?? ''}}</p>
                        <p class="description">{!! $whyc->description ?? '' !!}</p>
                    </div>

                    @if($whyc->features)
                    <div class="bento-grid">
                        @foreach($whyc->features as $feature)
                        <div class="bento-item">
                            <div class="icon-box"><i class="{{$feature->icon ?? 'bi bi-magic'}}"></i></div>
                            <div class="text">
                                <h4>{{$feature->title ?? ''}}</h4>
                                <p>{{$feature->short_des ?? ''}}</p>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @endif
                </div>
            </div>

        </div>
    </div>
</section>
@endforeach
@endif