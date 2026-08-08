@if(!empty($contents) && $contents->count() > 0)
<section class="pt-5">
    <div class="container py-5">
       <div class="mb-5">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2', ['data' => $sectionsdata,]) 
        <!--section heading end here -->
       </div>
        <div class="row">
            @foreach ($contents->take(5) as $case)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3 gap-3">
                <div class="card1">
                    <div class="card1-img">
                        <img src="{{ asset($case->cover_image ?? 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop') }}" alt="card image">
                    </div>

                    <div class="card1-body">
                        <span class="card1-badge">{{$case->type ?? ''}}</span>

                        <h4 class="card1-title">
                           {{ $case->title ?? '' }}
                        </h4>

                        <p class="card1-text">
                           {{Str::words($case->short_des, 20 ?? '')}}
                        </p>

                        <div class="card1-footer">
                            <a href="{{ route('details.casestudy',[$case->id,$case->url]) }}" class="card1-btn">R{{ $case->button ?? 'Read More' }} →</a>
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