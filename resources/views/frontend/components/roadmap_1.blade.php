@if(!empty($contents) && $contents->count() > 0)
<section class="roadmap1">
    <div class="container">
        <div class="section-head text-center">
            <span class="sub-title">Your Journey</span>
            <h2 class="main-title">Step-by-Step Success Roadmap</h2>
        </div>
        <div class="roadmap-wrapper">
            <div class="progress-line"></div>
            @foreach($contents as $roadmap)
            <div class="step-item">
                <div class="step-icon">
                    <i class="{{$roadmap->icon ?? 'bi bi-comments'}}"></i>
                    <span class="step-count">{{$loop->iteration}}</span>
                </div>
                <div class="step-content">
                    <h4>{{$roadmap->title ?? ''}}</h4>
                    <p>{{$roadmap->short_des ?? ''}}</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endif