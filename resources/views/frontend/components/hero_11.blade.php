@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="hero11 position-relative overflow-hidden">
    <div class="container">
        <div class="row align-items-center g-4 g-lg-5">
            <!-- Left Text Content -->
            <div class="col-lg-7">
                <div class="hero11__content">
                    <span class="hero11__badge d-inline-flex align-items-center gap-2 mb-3">
                        <i class="{{$data->icon ?? 'bi bi-shield-check'}}"></i>
                        {{$data->title ?? ''}}
                    </span>
                    <h1 class="hero11__title fw-bold text-white mb-3">
                       {{$data->heading ?? ''}} <span class="hero11__title-highlight">{{$data->sub_heading ?? ''}}</span>
                    </h1>
                    <p class="hero11__desc mb-4">
                       {{$data->short_des ?? ''}}
                    </p>
                    <div class="hero11__actions d-flex flex-wrap gap-3 align-items-center mb-4 mb-lg-5">
                        @if ($data->button_url)
                        <a href="#consultation" class="btn hero11__btn-primary d-inline-flex align-items-center gap-2">
                            <span>{{$data->button_name ?? 'Schedule Free Consultation'}}</span>
                            <i class="bi bi-arrow-right"></i>
                        </a>
                        @endif
                        @if ($data->phone_number)
                        <a href="#" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="{{$data->video_url}}" class="btn hero11__btn-outline d-inline-flex align-items-center gap-2">
                            <i class="bi bi-telephone-fill"></i>
                            <span>Watch Video</span>
                        </a>
                        @endif
                    </div>
                    <!-- Trust Indicators -->
                </div>
            </div>

            <!-- Right Visual Card -->
            <div class="col-lg-5">
                <div class="hero11__card p-4 p-md-5 rounded-4 position-relative">
                    <div class="hero11__card-glow"></div>
                    <div class="d-flex align-items-center gap-3 mb-4">
                       <img src="{{asset($data->cover_image)}}" alt="{{$data->title ?? 'Hero image'}}" class="hero11__card-img rounded-circle flex-shrink-0">
                        <div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endif 
<!-- video modal -->
@includeif('frontend/components/ui/video_modal') 