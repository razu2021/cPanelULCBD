@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $about)
<section class="about5 container">
    <div class="about_grid">
        <div class="layer_images">
            <img src="{{asset($about->cover_image ?? '')}}" alt="About Main" class="main_img">
            <img src="{{asset($about->thumbnail ?? '')}}" alt="About Sub" class="sub_img">
        </div>

        <div class="about_details">
            <span class="tagline">{{$about->title ?? ''}}</span>
            <h2>{{$about->heading ?? ''}} <span>{{$about->sub_heading ?? ''}}</span></h2>
            <p class="info_text pb-3">
                {{$about->short_des ?? '' }}
            </p>
            <div class="desc_text pb-5">
                {!! $about->description ?? '' !!}
            </div>
            
            @if($about->features)
            <div class="step_list">
                @foreach($about->features as $feature)
                <div class="step_item">
                    <div class="step_num">{{ $loop->iteration }}</div>
                    <div class="step_info">
                        <h5>{{$feature->title ?? ''}}</h5>
                        <p>{{$feature->short_des ?? ''}}</p>
                    </div>
                </div>
                @endforeach
            </div>
            @endif
            @if($about->button_url)
            <div class="action_area">
                <a href="{{$about->button_url ?? '#'}}" class="btn_main">{{$about->button ?? 'About More'}}</a>
            </div>
            @endif
        </div>
    </div>
</section>
@endforeach
@endif