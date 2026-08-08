@if(!empty($contents) && $contents->count() > 0)

<section class="services2">
    <div class="services2__shapes">
        <div class="shape s-1"></div>
        <div class="shape s-2"></div>
    </div>

    <div class="container">
        <div class="section-head text-center">
            <span class="sub-title">Core Offerings</span>
            <h2 class="main-title">Premium Services for Your Journey</h2>
        </div>

        <div class="row g-4">
          @foreach ($contents as $service)
            <div class="col-lg-4 col-md-6">
                <div class="service-image-card">
                    <div class="image-box">
                        <img src="{{ asset($service->cover_image ?? 'https://i.pinimg.com/1200x/a6/44/91/a6449101d81731a30254d352607d6069.jpg')}}" alt="Career Counseling">
                    </div>
                    <div class="content-box">
                        <div class="icon-wrap"><i class="{{ $service->icon ?? 'bi bi-briefcase-fill' }}"></i></div>
                        <h4>{{$service->title ?? ''}}</h4>
                        <p>{{Str::words($service->short_des ?? '' ,15)}}</p>
                        <a href="{{ route('details.service',[$service->id,$service->url]) }}" class="btn-link">{{ $service->button ?? '' }} <i class="bi bi-arrow-right"></i></a>
                    </div>
                    <div class="glow-effect"></div>
                </div>
            </div>
            @endforeach 
        </div>
    </div>
</section>
@endif