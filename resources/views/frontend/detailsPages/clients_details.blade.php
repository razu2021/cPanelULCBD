@extends('layouts/frontend')
{{-- Meta Title  --}}
@section('meta_title', Str::limit($data->title ??  config('app.name'), 60))
@section('meta_description', Str::limit(strip_tags(html_entity_decode($data->short_des ?? '')), 160, '...'))
{{-- Meta Description  --}}

@section('web_content')
<section class="team-details-section py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="profile-card card shadow-lg border-0 overflow-hidden">
                    <div class="cover-wrapper">
                        <img src="{{asset($data->thumbnail ?? 'https://i.pinimg.com/736x/38/61/a2/3861a23e5df3b945e2fc69cd593284d8.jpg')}}" alt="Cover" class="cover-img">
                    </div>
                    <div class="profile-body text-center">
                        <div class="thumb-container">
                            <img src="{{asset($data->cover_image ?? 'https://i.pinimg.com/736x/e6/bc/a1/e6bca14d0cc7117b6abbf273d8a031b8.jpg')}}" alt="Team Member" class="thumb-img">
                        </div>
                        <h2 class="name">{{$data->name ?? 'Clint'}}</h2>
                     
                        
                        
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="content-card p-4 p-md-5">
                    <div class="bio-header mb-5">
                        {{-- <h4 class="sub-heading text-uppercase"></h4> --}}
                        <h2 class="main-heading">{{$data->case_title ?? ''}}</h2>
                        <div class="accent-line"></div>
                    </div>

                    <div class="short-bio-box mb-4">
                        <p class="short-text">
                            "{{$data->short_des ?? 'Short biography goes here.'}}"
                        </p>
                    </div>

                    <div class="long-bio-content mb-5">
                        <p>{!! $data->description ?? 'Detailed biography goes here.' !!}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>




{{-- ban --}}
@endsection