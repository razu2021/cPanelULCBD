@if(isset($contents) && $contents->isNotEmpty())
<section class="pt-5">
    <div class="container py-5">
       <div class="mb-5">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', ['data' => $sectionsdata,]) 
       
        <!--section heading end here -->
       </div>
        <div class="row">
            @foreach ($contents->take(5) as $blog)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3 gap-3">
                <div class="card1">
                    <div class="card1-img">
                        <img src="{{ asset($blog->cover_image ?? 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop') }}" alt="card image" loading="lazy">
                    </div>

                    <div class="card1-body">
                        <span class="card1-badge">{{$blog->type ?? ''}}</span>

                        <h4 class="card1-title">
                           {{ $blog->title ?? '' }}
                        </h4>

                        <p class="card1-text">
                           {{Str::words($blog->short_des ?? '' , 20 )}}
                        </p>

                        <div class="card1-footer">
                            <a target="_blank" href="{{ route('details.blog',[$blog->id,$blog->url]) }}" class="card1-btn">R{{ $blog->button ?? 'Read More' }} →</a>
                        </div>
                    </div>
                </div>
                {{-- card end --}}
            </div>
            @endforeach
        </div>
    </div>
</section>
@endif