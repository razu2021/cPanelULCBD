@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading5',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        <div class="row">
            @foreach ($contents->take(4) as $team)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div class="team_card3">
                <div class="image-holder">
                    <img src="https://i.pinimg.com/1200x/50/c5/d8/50c5d83a30acfb9972407e1eb7ba40d0.jpg" alt="Team Member">
                </div>
                
                <div class="info-box">
                    <h4>Tanvir Hasan</h4>
                    <p>Software Architect</p>

                    <div class="social-links">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                        <a href="#"><i class="bi bi-github"></i></a>
                        <a href="#"><i class="bi bi-globe"></i></a>
                    </div>
                </div>
            </div>
            </div>







            @endforeach
        </div>
    </div>
</section>
@endif