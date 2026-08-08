@if(!empty($contents) && $contents->count() > 0)
@foreach($contents->take(1) as $promot)
<section class="promot4-hero">
    <div class="container">
        <div class="promot4-main-box">
            <div class="row align-items-center">

                <div class="col-lg-7">
                    <div class="promot4-content-wrap">
                        <div class="promot4-badge">
                            <span class="dot"></span>{{ $promot->title ?? '' }}
                        </div>
                        <h1 class="promot4-title">{{ $promot->heading ?? '' }} <br>
                            <span>{{$promot->sub_heading ?? ''}}</span></h1>
                        <p class="promot4-text">
                            {{ $promot->short_des ?? '' }}
                        </p>
                        <div class="promot4-btn-group">
                            <a href="{{ $promot->button_url ?? '#' }}"
                                class="promot4-primary-btn">{{$promot->button ?? 'Explore now'}}</a>
                            <div class="promot4-video-box">
                                <button class="promot4-play-btn"></button>
                                <span>Watch Intro</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="promot4-visual">
                        <div class="promot4-img-mask">
                            <img src="{{ $promot->cover_image ?? 'https://i.pinimg.com/736x/2b/8d/07/2b8d07b4e227cdd4b5fa9e8a98dcb061.jpg' }}"
                                alt="Business Image">
                        </div>
                        <div class="promot4-shape-glow"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
@endforeach
@endif