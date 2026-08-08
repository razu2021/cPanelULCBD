

<div class="all_postFilter">
    <div class="container">
        <div class="filter_wrap">

            <!-- LEFT -->
            <div class="filter_left">
                <h3>Explore Posts</h3>
                <p>Find topics you love</p>
            </div>

            <!-- RIGHT -->
            <div class="filter_right">

                <!-- search -->
                <div class="search_box">
                    <input type="text" placeholder="Search articles...">
                </div>

                <!-- category chips -->
                <div class="filter_chips">
                    <button class="chip active">All</button>
                    <button class="chip">Web</button>
                    <button class="chip">Design</button>
                    <button class="chip">Marketing</button>
                </div>

            </div>

        </div>
    </div>
</div>
<!-- filter section end here  -->
@if(!empty($contents) && $contents->count() > 0)
<section class="all-posts-section py-5">
    <div class="container">
        <div class="row">

            <!-- ===== Main Posts ===== -->
            <div class="col-12 col-lg-9 mb-4">
                <div class="row g-4">

                     @foreach ($contents as $blog)
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="post_card1">

                            <div class="card_image">
                                <img src="{{asset($blog->cover_image ?? 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop')}}" alt="{{ $blog->title ?? 'post image' }}">

                                <div class="overlay"></div>

                                <span class="category">{{$blog->type ?? ''}}</span>
                            </div>

                            <div class="card_content">
                                <h4 class="card_title"> {{ $blog->title ?? '' }}</h4>

                                <p class="card_excerpt">
                                    {{ Str::words($blog->short_des , 20 ?? '') }}
                                </p>

                                <div class="card_footer">
                                    <span class="date">{{ $blog->created_at->format('M,d,Y') }}</span>
                                    <a href="{{ route('details.blog',[$blog->id,$blog->url]) }}" class="read_more">{{ $blog->button ?? 'Read more ' }} →</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    @endforeach

                </div>

                <!-- Pagination -->
                <nav class="mt-5">
                    <ul class="pagination modern-pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">←</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">→</a></li>
                    </ul>
                </nav>
            </div>

            <!-- ===== Sidebar ===== -->
            <div class="col-12 col-lg-3">
                <div class="recent_allpost">

                    <h5 class="sidebar-title">Recent Posts</h5>

                    <div class="recent_item">
                        <img src="{{asset('contents/website/assets/images/banner/breadcrumb.jpg')}}">
                        <div>
                            <h6>Post Title 1</h6>
                            <span>Mar 30</span>
                        </div>
                    </div>

                    <div class="recent_item">
                        <img src="{{asset('contents/website/assets/images/banner/breadcrumb.jpg')}}">
                        <div>
                            <h6>Post Title 2</h6>
                            <span>Mar 28</span>
                        </div>
                    </div>

                    <div class="recent_item">
                        <img src="{{asset('contents/website/assets/images/banner/breadcrumb.jpg')}}">
                        <div>
                            <h6>Post Title 3</h6>
                            <span>Mar 25</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>
@endif