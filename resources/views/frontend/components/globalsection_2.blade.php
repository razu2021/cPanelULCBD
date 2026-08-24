@if(!empty($contents) && $contents->count() > 0)

@php
    $data = $contents->first();
@endphp

<section class="global2 details-section py-5">
  <div class="container py-md-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9">
        
        <!-- Header Meta & Title -->
        <header class="details-header mb-4 text-center text-md-start">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
            {{-- <span class="badge bg-primary-subtle text-primary fw-bold px-3 py-2 rounded-pill">
              <i class="bi bi-bookmark-star-fill me-1"></i> Special Case Study
            </span> --}}
            <span class="text-muted small d-flex align-items-center gap-1">
              <i class="bi bi-clock"></i>  {{ $data->created_at->format('d,M,Y')}}
            </span>
          </div>
          <h1 class="details-title fw-bold text-dark mb-3">
           {{$data->heading ?? ''}}
          </h1>
          <p class="details-subtitle text-secondary">
            {{$data->short_des ?? ''}}
          </p>
        </header>

        <!-- Divider -->
        <hr class="border-secondary-subtle my-4" />

        <!-- Main Content Area -->
        <article class="details-content">
          
          {!! $data->des ?? '' !!}
        
        </article>

    

      </div>
    </div>
  </div>
</section>
@endif