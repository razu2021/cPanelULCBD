@if(!empty($contents) && $contents->count() > 0)
@foreach($contents->take(1) as $promot)
<section class="promot1-hero" style="background: linear-gradient(90deg, rgba(13, 5, 43, 0.9) 30%, rgba(0, 0, 0, 0.4) 100%), 
       url('{{ asset($promot->thumbnail ?? '') }}'); 
       background-repeat: no-repeat; 
       background-position: center center; 
       background-size: cover; 
       image-rendering: -webkit-optimize-contrast; 
       backface-visibility: hidden;">
    <div class="promot1-container">
        <div class="promot1-content">
            <h1 class="promot1-title">{{$promot->heading ?? ''}} <span> {{$promot->sub_heading ?? ''}}</span></h1>
            <p class="promot1-text">
                {{$promot->short_des ?? ''}}
            </p>
            @if ($promot->button_url)
            <a href="{{$promot->button_url ?? '#'}}" class="promot1-btn">
                {{$promot->button ?? 'View More'}} <span class="promot1-icon">»</span>
            </a>
            @endif
        </div>
        @if ($promot->video_url)
        <div class="promot1-video-box">
            <button class="promot1-play-btn" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="{{$promot->video_url}}"></button>
        </div>
        @endif
    </div>
</section>
@endforeach
@endif
<!-- video modal -->
 @includeif('frontend/components/ui/video_modal') 

