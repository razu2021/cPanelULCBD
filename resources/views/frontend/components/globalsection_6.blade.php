@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="details_5">
    <div class="hero_section">
        @if($data->thumbnail)
        <img src="{{asset($data->thumbnail)}}" class="bg_image" alt="Background">
        @endif
        <div class="hero_content container">
            @if($data->sub_heading)
            <span class="tag">{{$data->sub_heading ?? ''}}</span>
            @endif
            <h1> {{$data->heading ?? ''}}</h1>
           
        </div>
    </div>

    <div class="container">
        <div class="row info_panels g-4">
           
            <div class="col-lg-12">
                <div class="glass_card h-100">
                    <h3>{{$data->title }}</h3>
                   
                </div>
            </div>
        </div>

        <div class="row content_body">
           

            <div class="col-lg-10 mx-auto ps-lg-5">
                <div class="article_text">
                    <h2>{{$data->sub_title}}</h2>
                    <p>
                       {{$data->short_des ?? ''}}
                    </p>
                    <hr>

                    
                    {{-- @if($data->cover_image)
                    <img src="{{$data->cover_image}}" class="feature_img_wide img-fluid" alt="Detail View">
                    @endif --}}
                  
                    <div>
                        {!! $data->description ?? '' !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endif