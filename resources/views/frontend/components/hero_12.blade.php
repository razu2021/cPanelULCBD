@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp

<section class="hero12">
    <div class="hero12__bg-shape hero12__bg-shape--one"></div>
    <div class="hero12__bg-shape hero12__bg-shape--two"></div>

    <div class="container">
        <div class="row align-items-center g-5">

            <!-- Content -->
            <div class="col-lg-7">
                <div class="hero12__content">

                    <span class="hero12__eyebrow">
                        <span class="hero12__eyebrow-icon">
                            <i class="{{$data->icon ?? 'bi bi-shield-check'}}"></i>
                        </span>
                       {{$data->title ?? ''}}
                    </span>

                    <h1 class="hero12__title">
                       {{$data->heading ?? ''}}
                        <span>{{$data->sub_heading ?? ''}}</span>
                        <br>
                        
                    </h1>

                    <p class="hero12__description">
                        {{$data->short_des ?? ''}}
                    </p>

                    <div class="hero12__actions">
                        @if ($data->button_url)
                        <a href="{{$data->button_url}}" class="hero12__btn hero12__btn--primary">
                            <span>{{$data->button_name ?? 'Explore'}}</span>
                            <i class="bi bi-arrow-up-right"></i>
                        </a>
                        @endif

                        @if($data->video_url)
                        <a href="#" class="hero12__btn hero12__btn--outline" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="{{$data->video_url}}">
                            <i class="bi bi-play-circle"></i>
                            <span>Watch Video</span>
                        </a>
                        @endif
                    </div>
                </div>
            </div>

            <!-- Visual -->
            <div class="col-lg-5">
                <div class="hero12__visual">

                    <div class="hero12__image-wrap">

                        <div class="hero12__image-glow"></div>

                        <div class="hero12__image">
                            <img
                                src="{{asset($data->cover_image ?? 'https://i.pinimg.com/736x/3a/fa/32/3afa32a67ed7cf3891fec0eff216e1ce.jpg')}}"
                                alt="{{$data->title ?? 'Hero Image'}}">
                        </div>

                        <div class="hero12__image-overlay"></div>

                        <!-- Experience Card -->
                        <div class="hero12__experience">
                            <div class="hero12__experience-icon">
                                <i class="bi bi-award"></i>
                            </div>

                            <div>
                                <strong>{{$data->sub_title ?? ""}}</strong>
    
                            </div>
                        </div>

                        <!-- Justice Badge -->
                        <div class="hero12__badge">
                            <div class="hero12__badge-icon">
                                <i class="bi bi-bank"></i>
                            </div>

                            <div>
                                <strong>Justice</strong>
                                <span>Rights • Solutions</span>
                            </div>
                        </div>

                    </div>

                    <!-- Decorative Circle -->
                    <div class="hero12__circle hero12__circle--one"></div>
                    <div class="hero12__circle hero12__circle--two"></div>

                </div>
            </div>

        </div>
    </div>
</section>
<!-- video modal -->
 @includeif('frontend/components/ui/video_modal') 
@endif

