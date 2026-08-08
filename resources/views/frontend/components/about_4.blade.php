@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $about)
<section class="about4">
    <div class="container about_grid">
        <div class="image_wrapper">
            <span class="bg_text">ABOUT</span>
            <img src="{{asset($about->cover_image ?? 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80')}}" alt="Ábout image" class="mask_img">
        </div>

        <div class="content_wrapper">
            <span class="section_tag">{{$about->title ?? ''}}</span>
            <h2>{{$about->heading ?? ''}}<span>{{$about->sub_heading ?? ""}}</span></h2>
            
            <p class="info_text">
                {!! $about->description ?? '' !!}
            </p>

            @if($about->features)

            <div class="stats_row">
            @foreach($about->features as $feature)
                <div class="stat_item">
                    <h4>{{$feature->title ?? ''}}</h4>
                    <p>{{$feature->shor_des ?? ''}}</p>
                </div>
            @endforeach
            </div>
            @endif

            <div class="cta_group">
                <a href="{{$about->button_url ?? '#'}}" class="main_btn">{{$about->button ?? 'About more'}}</a>
                <a href="#" class="watch_link">
                    <i class="bi bi-play-fill"></i> Watch Story
                </a>
            </div>
        </div>
    </div>
</section>
@endforeach
@endif