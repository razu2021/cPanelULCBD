{{-- faq section  --}}
@if(!empty($contents) && $contents->count() > 0)
<section class="faq py-5">
  <div class="container">
    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="faq__title">Frequently Asked Questions</h2>
      <p class="faq__subtitle">Find answers to common questions</p>
    </div>

    <div class="faq__wrapper">
      <!-- Item -->
      @foreach ($contents as $faq)
      <div class="faq__item active">
        <div class="faq__question">
          <h4>{{$faq->title ?? ''}}</h4>
          <span class="faq__icon">+</span>
        </div>
        <div class="faq__answer">
          <p>{{$faq->short_des ?? ''}}</p>
        </div>
      </div>
       @endforeach
      <!-- Add more -->
    </div>
  </div>
</section>
@endif