@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $about)


<section class="about2 container">
    <div class="about_wrapper">
        <div class="about_img_box">
            <img src="{{ asset($about->cover_image ?? 'https://i.pinimg.com/736x/ec/e6/d6/ece6d6032bf3a27176804e5bb8424eb8.jpg') }}" alt="About Us" class="main_img">
            
            <div class="experience_badge">
                <h2>{{$about->experience ?? '5'}}+</h2>
                <p>Years Experience</p>
            </div>
        </div>

        <div class="about_content">
            <div class="sub_title">{{$about->title ?? 'title'}}</div>
            <h2>{{$about->heading ?? "heading"}}<span>{{$about->sub_heading ?? "sub heading "}}</span> </h2>
            <p>
                {!! $about->description !!}
            </p>

            <div class="feature_list">
                @foreach ($about->features as $feature)
                <div class="feature_item">
                    <i class="{{ $feature->icon ?? 'bi bi-patch-check-fill' }}"></i>
                    <span>{{$feature->title ?? 'feature title'}}</span>
                </div>
                @endforeach
                
            </div>

            <a href="#" class="btn_modern">
                Learn More <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
</section>


  

@endforeach
@endif