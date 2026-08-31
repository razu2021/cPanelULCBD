@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="details_4">
    <div class="hero_wrap">
        @if($data->thumbnail)
        <img src="{{$data->thumbnail}}" class="hero_img" alt="Details Hero">
        @endif

        <div class="hero_info_card">
            @if($data->sub_heading)
            <span class="badge_modern">{{$data->sub_heading ?? ''}}</span>
            @endif
            <h1>{{$data->heading ?? ''}}</h1>
        </div>

    </div>

    <div class="container mt-5 pt-5">
        

        <div class="row narrative_section">
            <div class="col-lg-10 mx-auto">
                <h2>{{$data->title ?? ''}}</h2>
                <h4>{{$data->sub_title ?? ''}}</h4>
                <div class="quote_box">
                    <i class="bi bi-quote"></i>
                    <p>{{$data->short_des ?? ''}}</p>
                    
                </div>
                
                <div>
                    {!! $data->description ?? '' !!}
                </div>

        

            </div>
        </div>
    </div>
</section>
@endif