@if(!empty($contents) && $contents->count() > 0)
<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading1',['data' => $sectionsdata,])
        <!-- section heading end here  -->
        <div class="row">
            @foreach ($contents->take(4) as $team)
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
               <div class="team_card1">
    <div class="profile-img-wrapper">
        <img src="https://i.pinimg.com/1200x/7a/a1/db/7aa1dbae860dd50acb959ae6a180177f.jpg" alt="Team Member" class="profile-img">
    </div>
    
    <div class="member-info">
        <h3>Arifur Rahman</h3>
        <span>Lead Full-Stack Developer</span>
    </div>

    <div class="social-links">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-linkedin"></i></a>
        <a href="#"><i class="bi bi-github"></i></a>
    </div>
</div>
            </div>


            @endforeach
        </div>
    </div>
</section>
@endif