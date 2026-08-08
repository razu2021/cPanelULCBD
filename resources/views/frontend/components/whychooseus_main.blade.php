@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $whyc)
<section class="whychooseus1">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="whychooseus1__content">
                    <span class="sub-title">{{$whyc->title ?? ''}}</span>
                    <h2 class="main-title">{{$whyc->heading ?? ''}} <span> {{$whyc->sub_heading ?? ''}}</span></h2>
                    <p class="description">
                        {{$whyc->short_des ?? ''}}
                    </p>

                    <p class="description">
                        {!! $whyc->description ?? '' !!}
                    </p>
                    
                    @if($whyc->features)
                    <div class="feature-list">
                        @foreach($whyc->features as $feature)
                        <div class="feature-item">
                            <div class="icon-wrap"><i class="{{$feature->icon ?? 'bi bi-check-circle'}}"></i></div>
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

            <div class="col-12 col-lg-6">
                <div class="whychooseus1__image-wrapper">
                    <div class="main-img-box">
                        <img src="{{asset($whyc->cover_image ?? 'https://i.pinimg.com/736x/38/bd/10/38bd10063fd5a79dadde2d5d1d3a0590.jpg')}}" alt="Why Choose Us">
                        <div class="floating-card">
                            <div class="pulse-icon"><i class="bi bi-award"></i></div>
                            <h5>{{$whyc->sub_title ?? ''}}</h5>
                        </div>
                    </div>
                    <div class="bg-shape"></div>
                </div>
            </div>
        </div>
    </div>
</section>
@endforeach
@endif