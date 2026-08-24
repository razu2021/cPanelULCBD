@if(!empty($contents) && $contents->count() > 0)

@php
    $data = $contents->first();
@endphp


<section class="global2 text-section py-5">
  <div class="container py-md-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 text-center">
        <!-- Badge Icon -->
        <div class="badge-icon mb-3">
          <i class="bi bi-patch-check-fill"></i>
        </div>
        
        <!-- Heading -->
        <h2 class="section-title fw-bold text-dark mb-3">
          {{$data->heading ?? '' }}
        </h2>
        
        <!-- Lead Subtitle -->
        {{-- <p class="section-lead text-secondary mb-4">
          We specialize in building scalable, ultra-fast web architectures tailored to elevate user experience and drive continuous innovation.
        </p> --}}

        <!-- Divider Line -->
        <div class="section-divider mx-auto mb-4"></div>

        <div class="mx-2">
          {!! $data->description ?? '' !!}
        </div>
        <!-- Description -->
        {{-- <p class="section-desc text-muted mx-auto mb-0">
          Our specialized team bridges creative concept and enterprise-grade tech. By focusing on pixel-perfect details, robust API structures, and dynamic animations, we craft digital platforms that truly scale.
        </p> --}}
      </div>
    </div>
  </div>
</section>
@endif