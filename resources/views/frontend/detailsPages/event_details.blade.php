@extends('layouts/frontend')
{{-- Meta Title  --}}
@section('meta_title', Str::limit($data->title ??  config('app.name'), 60))
@section('meta_description', Str::limit(strip_tags(html_entity_decode($data->short_des ?? '')), 160, '...'))
{{-- Meta Description  --}}

@section('web_content')
<div class="service-details-wrapper">
    <section class="details-hero" style="background-image: url('{{ asset($data->thumbnail) }}');">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-content">
                <span class="badge-top">{{$data->type ?? 'Service Type!'}}</span>
                <h1 class="hero-heading">
                    {{ $data->heading ?? 'Service Heading !' }} <br> 
                    <span class="stroke-text">{{$data->sub_heading ?? 'Service Sub Heading !'}}</span>
                </h1>
                <div class="hero-meta">
                    <span class="meta-item">{{$data->created_at->format('D-M,Y : h:s')}}</span>
                </div>
            </div>
        </div>
    </section>

    <div class="container main-content-section">
        <div class="row g-5">
            <div class="col-lg-8">
                <div class="details-card">
                    <h2 class="content-title">{{$data->title ?? 'Service Title !'}}</h2>
                    <h5 class="content-subtitle">{{ $data->sub_title ?? 'Service Sub Title !' }}</h5>
                    
                    <div class="short-info-box">
                        <p>{{$data->short_des ?? 'We provide end-to-end web development services that focus on performance, security, and scalability. demo data only'}}</p>
                    </div>

                    <div class="thumbnail-wrapper">
                        <img src="{{ asset($data->cover_image) }}" alt="{{ $data->title ?? 'service image' }} " class="img-fluid rounded-custom">
                    </div>

                    <div class="long-description mt-5">
                       {!! $data->description ?? '' !!}
                    </div>

                    <div class="video-wrapper mt-5">
                        <h4 class="mb-4">Overview</h4>
                        <div class="ratio ratio-16x9 shadow-lg rounded-custom overflow-hidden">
                            <iframe src="{{ $data->video_url ?? 'https://www.youtube.com/embed/dQw4w9WgXcQ' }}" title="YouTube video" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <aside class="sticky-sidebar">
                    <div class="sidebar-box mb-4">
                        <h4 class="sidebar-title">Other Services</h4>
                        <div class="more-services">
                            @foreach ($all as $alldata)
                            <div class="mini-service-item">
                                <img src="{{ asset($alldata->cover_image ?? '') }}" alt="{{$alldata->title ?? 'image'}} ">
                                <div>
                                    <h6><a href="{{ route('details.event',[$alldata->id,Str::slug($alldata->title)]) }}">{{ Str::words($alldata->title,3 ?? '') }}</a></h6>
                                    <small>{{Str::words($alldata->short_des,5 ?? '')}}</small>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>

                    <div class="sidebar-box">
                        <h4 class="sidebar-title">Related Tags</h4>
                        <div class="tag-container">
                            <span class="tag-pill">#Laravel</span>
                            <span class="tag-pill">#VueJS</span>
                            <span class="tag-pill">#PremiumUI</span>
                            <span class="tag-pill">#Animation</span>
                            <span class="tag-pill">#E-commerce</span>
                        </div>
                    </div>

                    <div class="info-footer mt-4 text-center">
                        <p>Last Updated: 2 Hours Ago</p>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</div>
@endsection