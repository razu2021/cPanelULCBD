@if(!empty($contents) && $contents->count() > 0)
<section class="services-pro py-5">
    <div class="container">

        <!-- Header -->
        <div class="section-header text-center mb-5">
            <h2>Our Premium Services</h2>
            <p>We craft powerful digital experiences for modern businesses</p>
        </div>

        <div class="row g-4">

            @foreach ($contents as $service)
            <div class="col-md-6 col-lg-4">
                <div class="service-card-pro">
                    <div class="card-bg"></div>

                    <div class="icon">
                        <i class="{{ $service->icon ?? 'bi bi-code-slash' }}"></i>
                    </div>

                    <h4>{{$service->title ?? ''}}</h4>
                    <p>{{Str::words($service->short_des,15 ?? '')}}</p>

                    <a href="{{ route('details.service',[$service->id,$service->url]) }}" class="read-more">
                        {{ $service->button ?? 'Explore more' }} <span>→</span>
                    </a>
                </div>
            </div>
            @endforeach

        </div>

    </div>
</section>
@endif