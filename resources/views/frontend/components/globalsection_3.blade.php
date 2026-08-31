@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="details_1">
    <div class="container">
        <div class="row">
            @if($data->thumbnail)
            <div class="col-12">
                <img src="{{$data->thumbnail}}" alt="Featured Image" class="details_banner w-100 img-fluid">
            </div>
            @endif
        </div>

        <div class="content_wrapper">
            <div class="meta_info">
                <div class="meta_item"><i class="bi bi-calendar3"></i> {{$data->created_at->format('d-m-Y')}}</div>
                
            </div>

            <h1>{{$data->heading ?? ''}}</h1>

            <div class="rich_text">
                <p>{{$data->short_des ?? ''}}</p>

                <blockquote>
                    {{$data->title ?? ''}}
                </blockquote>

                @if($data->cover_image)
                    <img src="{{$data->cover_image}}" alt="Sub Image" h-50>
                    <hr>
                @endif

                <div>
                    {!! $data->description ?? '' !!}
                </div>

              

            </div>

       
        </div>
    </div>
</section>
@endif