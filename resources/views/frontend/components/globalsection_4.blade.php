@if(!empty($contents) && $contents->count() > 0)
@php
    $data = $contents->first();
@endphp
<section class="details_3">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-8 mx-auto">
                <article class="article_body">
                    @if($data->sub_heading)
                    <span class="category_pill">{{$data->sub_heading ?? ''}}</span>
                    @endif
                    <h1>{{$data->heading ?? ''}}</h1>

            

                    <div class="main_content">
                          <h3>{{$data->title ?? ''}}</h3>
                          <hr>
                        <p>
                            {{$data->short_des ?? ''}}
                        </p>

                        @if($data->thumbnail)
                        <div class="feature_img_box">
                            <img src="{{asset($data->thumbnail)}}" alt="Tech Context">
                            
                        </div>
                        @endif

                    </div>
                    
                    <div>
                            {!! $data->description ?? '' !!}
                    </div>

                    {{-- <div class="inner_cta">
                        <h4>Subscribe for more news</h4>
                        <div class="row justify-content-center mt-4">
                            <div class="col-md-8">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your email">
                                    <button class="btn btn-primary px-4 fw-bold">Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div> --}}
                </article>
            </div>
            
            
        </div>
    </div>
</section>
@endif