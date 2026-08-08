@if(!empty($sitesocials) && $sitesocials->count() > 0)
{{-- follow use or social media section  --}}
<section class="social py-5">
  <div class="container">
    <div class="social__wrapper text-center">
      <h2 class="social__title">Follow Us</h2>
      <p class="social__subtitle">Stay connected with us on social platforms</p>
      <div class="social__icons">
        @foreach($sitesocials as $sitesocial)
        <a href="{{$sitesocial->url ?? '#'}}}" class="social__item facebook">
          <i class="{{$sitesocial->icon ?? 'bi bi-facebook'}}"></i>
        </a>
        @endforeach
      </div>
    </div>
  </div>
</section>
@endif