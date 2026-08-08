@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading2',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        <div class="row">
            @foreach ($contents->take(4) as $team)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="team_card2">
                    <div class="image-wrapper">
                        <img src="{{ asset($team->cover_image ?? 'https://i.pinimg.com/1200x/60/11/73/6011736448720b8ffd0c2f3ed2887f60.jpg') }}" alt="{{ $team->name ?? 'Team Photo' }}">
                    </div>
                    
                    <div class="info-text">
                        <h4>{{$team->name ?? ''}}</h4>
                        <p>{{$team->designation ?? ''}}</p>
                    </div>

                    <div class="social-icons">
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>
@endif