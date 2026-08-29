@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading4',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        <div class="row">
            @foreach ($contents->take(4) as $team)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div class="team_card4">
            <div class="img-box">
                <img src="https://i.pinimg.com/736x/5a/26/d0/5a26d029030b4803b2991a082a1458f9.jpg" alt="Team Member">
            </div>
            
            <div class="content-overlay">
                    <a href="{{ route('details.team',[$team->id,$team->url]) }}"><h3>{{$team->name ?? 'Team Member'}}</h3></a>
                    <span>{{$team->designation ?? 'Team Member'}}</span>

                <div class="social-btns">
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-twitter-x"></i></a>
                </div>
            </div>
        </div>
        </div>






            @endforeach
        </div>
    </div>
</section>
@endif