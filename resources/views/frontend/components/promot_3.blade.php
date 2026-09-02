@if(!empty($contents) && $contents->count() > 0)
@foreach($contents->take(1) as $promot)
<section class="promot3-hero">
    <div class="container">
        <div class="promot3-box">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="promot3-content">
                        <span class="promot3-label">{{$promot->title ?? ''}}</span>
                        <h1 class="promot3-title">{{$promot->heading ?? ''}} <span>{{$promot->sub_heading ?? ''}}</span></h1>
                        <p class="promot3-desc">
                            {{ $promot->short_des ?? '' }}
                        </p>
                        <div class="promot3-cta-group">
                            @if ($promot->button_url)
                            <a href="{{ $promot->button_url ?? ''}}" class="promot3-main-btn">{{$promot->button ?? 'Explore now'}}</a>
                            @endif
                            @if ($promot->video_url)
                            <button class="promot3-video-trigger" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="{{ $promot->video_url ?? '' }}"></button>
                            @endif
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="promot3-visual-area">
                        <div class="promot3-image-mask">
                            <img src="{{ asset($promot->cover_image ?? 'https://i.pinimg.com/736x/16/71/9c/16719cc60edeab3e4b0bf97a1a06edb3.jpg') }}"
                                alt="Business Image">
                        </div>
                        <div class="promot3-shape-shadow"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
@endforeach
@endif
<!-- video modal -->
 @includeif('frontend/components/ui/video_modal') 

