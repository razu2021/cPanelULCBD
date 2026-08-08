@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $banner)
<section class="breadcrumb-section" style="background-image: url('{{ asset($banner->thumbnail ?? 'contents/website/assets/images/banner/breadcrumb.jpg') }}');background-size:cover">
  <div class="breadcrumb-overlay"></div>
  <div class="container text-center">
    <h1 class="page-title">{{$banner->heading ?? 'Banner Heading'}}</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb modern-breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Category</a></li>
      </ol>
    </nav>
  </div>
</section>
@endforeach
@endif