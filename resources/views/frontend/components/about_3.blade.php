@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $about)
<section class="about3">
    <div class="container about_container">
        <div class="image_stack">
            <div class="main_frame">
                <img src="{{ asset($about->cover_image ?? 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80') }}" alt="About us">
            </div>
            <div class="stat_card">
                <i class="bi bi-lightning-fill"></i>
                <h3>{{$about->experience ?? '5'}} + years Experience</h3>
                <p>{{$about->sub_title ?? ''}}</p>
            </div>
        </div>

        <div class="content_side">
            <div class="badge">{{$about->title ?? 'title !'}}</div>
            <h2>{{ $about->heading ?? 'heading !' }} <span>{{$about->sub_heading ?? 'sub heading !'}}</span></h2>
            <p class="desc">
               {!! $about->description ?? 'description !' !!}
            </p>

            @if($about->features)            
            <div class="points_grid">
                @foreach ($about->features as $feature)
                <div class="point_item">
                    <div class="icon_box">
                        <i class="{{ $feature->icon ?? 'bi bi-cpu' }}"></i>
                    </div>
                    <div class="point_text">
                        <h5>{{$feature->title ?? 'feature title'}}</h5>
                        <p>{{$feature->short_des ?? 'short description !'}}</p>
                    </div>
                </div>
                @endforeach
            </div>
            @endif

            <a href="{{ $about->button_url ?? '#' }}"><button class="btn btn-primary rounded-pill px-5 py-3 fs-4 fw-bold">
                {{ $about->button ?? 'About More' }}
            </button></a>
        </div>
    </div>
</section>
@endforeach
@endif