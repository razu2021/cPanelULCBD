@if(!empty($contents) && $contents->count() > 0)
<section class="team py-5">
    <div class="container">
        <div class=" mb-5">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        </div>

        <div class="row g-4">
            <!-- Single Member -->
             @foreach ($contents as $team)
            <div class="col-md-6 col-lg-3">
                <div class="team__card">
                    <div class="team__img">
                        <img src="{{ asset($team->cover_image ?? 'https://i.pravatar.cc/300?img=1') }}" alt="{{ $team->name ?? 'Team photo' }}">
                        <div class="team__social">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div> 
                    <div class="team__content text-center">
                        <h4 class="team__name">{{$team->name ?? ""}}</h4>
                        <span class="team__role">{{$team->designation ?? ''}}</span>
                    </div>
                </div>
            </div>
            @endforeach
            <!-- Copy more members -->
        </div>
    </div>
</section>
@endif