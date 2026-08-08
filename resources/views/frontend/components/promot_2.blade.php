@if(!empty($contents) && $contents->count() > 0)
@foreach($contents->take(1) as $promot)
<section class="promot2-hero-section" style="background: linear-gradient(90deg, rgba(13, 5, 43, 0.9) 30%, rgba(0, 0, 0, 0.4) 100%), 
       url('{{ asset($promot->thumbnail ?? '') }}'); 
       background-repeat: no-repeat; 
       background-position: center center; 
       background-size: cover; 
       image-rendering: -webkit-optimize-contrast; 
       backface-visibility: hidden;">
    <div class="promot2-container">
        <div class="promot2-card">
            <h1 class="promot2-main-title">{{ $promot->heading ?? ''}} <span> {{ $promot->sub_heading ?? '' }}</span>
            </h1>
            <p class="promot2-sub-text">
                {{ $promot->short_des ?? '' }}
            </p>
            <div class="promot2-footer">
                <a href="{{ $promot->button_url ?? '#' }}"
                    class="promot2-button">{{$promot->button ?? 'About More'}}<span class="promot2-arrow">»</span></a>
                <div class="promot2-video-wrap">
                    <button class="promot2-play-icon"></button>
                </div>
            </div>
        </div>
    </div>
</section>
@endforeach
@endif