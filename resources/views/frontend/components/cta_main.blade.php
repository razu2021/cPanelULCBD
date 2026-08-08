{{-- cta section design  --}}
@if(!empty($contents) && $contents->count() > 0)
@foreach ($contents->take(1) as $cta)
  

<section class="cta">
  <div class="container">
    <div class="cta__box text-center">
      
      <h2 class="cta__title">
        {{ $cta->heading ?? '' }}
      </h2>
      <h4>{{$cta->title ?? ''}}</h4>

      <p class="cta__subtitle">
        {{ Str::words($cta->short_des , 20 ?? '') }}
      </p>

      <div class="cta__actions">
        <a href="{{ $cta->button_url ?? '#' }}" class="btn cta__btn primary">{{$cta->button ?? 'Explore Now'}}</a>
        <a href="{{ $cta->button_url1 ?? '#' }}" class="btn cta__btn outline">{{$cta->button1 ?? 'Explore Now'}}</a>
      </div>

    </div>
  </div>
</section>
@endforeach
@endif