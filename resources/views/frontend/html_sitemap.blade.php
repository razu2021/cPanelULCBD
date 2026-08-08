@extends('layouts.frontend')

@section('web_content')
<section class="modern-sitemap">
    <style>
        /* 1rem = 10px Setup */
        .modern-sitemap {
            font-size: 62.5%; 
            background: #0a0a0b;
            color: #fff;
            padding: 8rem 0;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
        }

        .sitemap-title {
            font-size: clamp(3.5rem, 6vw, 6rem);
            font-weight: 900;
            text-align: center;
            margin-bottom: 6rem;
            background: linear-gradient(90deg, #00f2fe, #4facfe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
        }

        /* Group Sections */
        .sitemap-group {
            margin-bottom: 4rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s forwards;
        }

        .sitemap-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 2.4rem;
            padding: 3rem;
            height: 100%;
            transition: all 0.4s ease;
            backdrop-filter: blur(10px);
        }

        .sitemap-card:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: #4facfe;
            box-shadow: 0 2rem 5rem rgba(0,0,0,0.5);
        }

        .card-header-box {
            display: flex;
            align-items: center;
            margin-bottom: 2.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1.5rem;
        }

        .header-icon {
            font-size: 2.8rem;
            margin-right: 1.5rem;
        }

        .sitemap-card h2 {
            font-size: 2.4rem;
            font-weight: 700;
            margin: 0;
            color: #4facfe;
        }

        /* List Styling */
        .sitemap-ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .sitemap-ul li {
            margin-bottom: 1.2rem;
            position: relative;
            padding-left: 2rem;
        }

        .sitemap-ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #4facfe;
            font-weight: bold;
        }

        .sitemap-ul li a {
            font-size: 1.5rem;
            color: #ccc;
            text-decoration: none;
            transition: 0.3s;
            display: inline-block;
        }

        .sitemap-ul li a:hover {
            color: #fff;
            transform: translateX(5px);
        }

        /* Hierarchy Styles (For Categories) */
        .sub-list { padding-left: 2rem; margin-top: 0.8rem; border-left: 1px dashed rgba(255,255,255,0.2); }

        /* Custom Scrollbar for Cards */
        .scroll-area {
            max-height: 40rem;
            overflow-y: auto;
            padding-right: 1rem;
        }
        .scroll-area::-webkit-scrollbar { width: 3px; }
        .scroll-area::-webkit-scrollbar-thumb { background: rgba(79, 172, 254, 0.5); border-radius: 10px; }

        /* Animations */
        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
        }

        /* Delay for animation */
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
    </style>

    <div class="container">
        <h1 class="sitemap-title">Digital Sitemap</h1>

        <div class="row g-4">
            
            <!-- 1. Categories (Bento Large) -->
            <div class="col-lg-4 col-md-6 sitemap-group">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">📂</span>
                        <h2>Structure</h2>
                    </div>
                    <div class="scroll-area">
                        <ul class="sitemap-ul">
                            <li><a href="{{route('index')}}">Home</a></li>
                            @foreach($categorys as $cat)
                                <li>
                                    <a href="{{route('categorypage',$cat->url)}}">{{$cat->name}}</a>
                                    <ul class="sitemap-ul sub-list">
                                        @foreach($cat->subCategory as $subcat)
                                            <li><a href="{{route('sub_categorypage',[$cat->url, $subcat->url])}}">{{$subcat->name}}</a>
                                                <ul>
                                                    @foreach ($subcat->childCategory as $childcate)
                                                        <li><a href="{{route('child_CategoryPage',[$cat->url,$subcat->url, $childcate->url])}}">{{$childcate->name}}</a></li>
                                                    @endforeach
                                    
                                                </ul>

                                            </li>
                                        @endforeach
                                    </ul>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 2. Blog & News -->
            <div class="col-lg-4 col-md-6 sitemap-group delay-1">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">✍️</span>
                        <h2>Insights</h2>
                    </div>
                    <div class="scroll-area">
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Latest Blogs</h4>
                        <ul class="sitemap-ul mb-4">
                            @foreach ($data['blogs'] as $blog)
                                <li><a href="{{ route('details.blog',[$blog->id,$blog->url]) }}">{{$blog->title}}</a></li>
                            @endforeach
                        </ul>
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Company News</h4>
                        <ul class="sitemap-ul">
                            @foreach ($data['newss'] as $news)
                                <li><a href="{{ url('news/'.$news->url) }}">{{$news->title}}</a></li>
                            @endforeach
                        </ul>
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Post</h4>
                        <ul class="sitemap-ul">
                            @foreach ($data['posts'] as $post)
                                <li><a href="{{ route('details.post',[$post->id,$post->url]) }}">{{$post->title ?? ''}}</a></li>
                            @endforeach
                        </ul>
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Events</h4>
                        <ul class="sitemap-ul">
                            @foreach ($data['events'] as $event)
                                <li><a href="{{ route('details.event',[$event->id,$event->url]) }}">{{$event->title ?? ''}}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 3. Portfolio & Case Studies -->
            <div class="col-lg-4 col-md-6 sitemap-group delay-2">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">🚀</span>
                        <h2>Work</h2>
                    </div>
                    <div class="scroll-area">
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Portfolio</h4>
                        <ul class="sitemap-ul mb-4">
                            @foreach ($data['portfolios'] ?? [] as $port)
                                <li><a href="{{ route('details.protfolios',[$port->id,$port->url]) }}">{{$port->title ?? ''}}</a></li>
                            @endforeach
                        </ul>
                        <h4 class="text-white-50 mb-3" style="font-size:1.4rem">Case Studies</h4>
                        <ul class="sitemap-ul">
                            @foreach ($data['casestudy'] as $case)
                                <li><a href="{{ route('details.casestudy',[$case->id,$case->url]) }}">{{$case->title}}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 4. Services & Projects -->
            <div class="col-lg-4 col-md-6 sitemap-group delay-3">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">🛠️</span>
                        <h2>Solutions</h2>
                    </div>
                    <ul class="sitemap-ul">
                        @foreach ($data['services'] ?? [] as $service)
                            <li><a href="{{ route('details.service',[$service->id,$service->url]) }}">{{$service->title ?? ''}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <!-- 5. Team & Team Members -->
            <div class="col-lg-4 col-md-6 sitemap-group delay-1">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">👥</span>
                        <h2>Our Team</h2>
                    </div>
                    <ul class="sitemap-ul">
                        @foreach ($data['teams']  as $team)
                            <li><a href="{{ route('details.team',[$team->id,$team->url]) }}">{{$team->name ?? ''}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <!-- 6. Others & Promotes -->
            <div class="col-lg-4 col-md-6 sitemap-group delay-2">
                <div class="sitemap-card">
                    <div class="card-header-box">
                        <span class="header-icon">🔗</span>
                        <h2>Others</h2>
                    </div>
                    <ul class="sitemap-ul">
                        <li><a href="{{url('/contact')}}">Contact Us</a></li>
                        <li><a href="{{url('/about')}}">About Our Journey</a></li>
                        <li><a href="{{url('/privacy-policy')}}">Privacy Policy</a></li>
                        @foreach ($data['promotes'] as $promo)
                            <li><a href="{{ route('details.promot',[$promo->id,$promo->url]) }}">{{$promo->title ?? ''}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>
@endsection