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
                        <h2 class="name">{{$data->name ?? 'Team Member'}}</h2>
                        <span class="badge-designation">{{$data->designation ?? 'Designation'}}</span>
                        
                        <div class="social-box d-flex justify-content-center gap-3">
                            <a href="#" class="s-link"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="s-link"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="s-link"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-8">
                <div class="content-card p-4 p-md-5">
                    <div class="bio-header mb-5">
                        <h4 class="sub-heading text-uppercase">Who I Am</h4>
                        <h1 class="main-heading">Professional Profile</h1>
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

                    <div class="skill-section">
                        <h4 class="skill-title mb-4"><i class="fas fa-tools me-2"></i> Expertise Area </h4>
                        <div class="row">
                            
                            @foreach($data->tags as $tag)
                            <div class="col-md-6 mb-4">
                                <div class="skill-card">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <label>{{$tag->name ?? 'Skill'}}</label>
                                        {{-- <span class="p-value">92%</span> --}}
                                    </div>
                                    <div class="custom-progress">
                                        <div class="fill" style="width: 92%"></div>
                                    </div>
                                </div>
                            </div>
                           @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




{{-- ban --}}
@endsection