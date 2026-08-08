@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $about)
<section class="about about9 parallax" data-speed="1.5">
    <div class="container">
        <div class="row align-items-center">

            <!-- Image -->
            <div class="col-md-6">
                <div class="about9__image parallax" data-speed="1.5">
                    <img src="{{ asset($about->cover_image ?? 'https://i.pinimg.com/736x/3d/bb/21/3dbb21d2806caf3f93b04aa6457af482.jpg') }}" alt="About title">

                    <!-- floating badge -->
                    <div class="floating-card">
                        <h4>10+</h4>
                        <p>Years Experience</p>
                    </div>

                    <!-- soft shapes -->
                    <span class="shape s1"></span>
                    <span class="shape s2"></span>
                </div>
            </div>

            <!-- Content -->
            <div class="col-md-6">
                <div class="about9__content parallax" data-speed="1.5">

                    <h4 class="about9__subtitle">{{$about->title ?? 'Title !'}}  <span> {{$about->sub_title}}</span></h4>

                    <h2 class="about9__title">
                        {{ $about->heading ?? 'heading !' }} 
                        <span>{{ $about->sub_heading ?? 'sub heading !' }}</span>
                    </h2>

                    <p class="about9__desc">
                        {!! $about->description ?? 'short description !' !!}
                    </p>

                    <!-- feature list -->
                    <ul class="about9__list">
                        @if($about->features)
                            @foreach ($about->features as $feature)
                                <li> <span> <i class="{{$feature->icon ?? ''}}"></i> </span> {{$feature->title ?? 'title'}}</li>
                            @endforeach
                        @endif
                    </ul>

                    <!-- buttons -->
                    <div class="about9__buttons">
                        <a  class="btn-ghost9" href={{ $about->button_url ?? '#' }}>{{ $about->button ?? 'About more'}}</a>
                        <a href="#" class="btn-ghost9">Watch Video </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endforeach
@endif