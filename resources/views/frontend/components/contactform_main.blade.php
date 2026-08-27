@php
    $address = $siteaddress->where('type','secondary')->first();

@endphp
<section class="contact py-5">
  <div class="container">
    <!-- Header -->
    <div class="text-center mb-5">
      <h2 class="contact__title">Get In Touch</h2>
      <p class="contact__subtitle">We’d love to hear from you. Send us a message!</p>
    </div>

    <div class="row g-4 align-items-stretch">
      
      <!-- Contact Info -->
      <div class="col-12 col-md-5">
        <div class="contact__info">
          <h4>Contact Information</h4>
          @if($siteemails)
          @foreach($siteemails->take(3) as $email)
          <div class="contact__item">
            <span>📧</span>
            <p><a href="mailto:{{$email->email ?? '#'}}">{{$email->email ?? ''}}</a></p>
          </div>
          @endforeach
          @endif

          @if($sitephones)
          @foreach($sitephones->take(3) as $phone)
          <div class="contact__item">
            <span>📞</span>
            <p><a href="tel:{{$phone->phone ?? ''}}">{{$phone->phone ?? ''}}</a></p>
          </div>
          @endforeach
          @endif

           <div class="contact__item">
            <span>📍</span>
            <p>{{$address->address ?? ''}}</p>
          </div> 

        </div>
      </div>

      <!-- Contact Form -->
      <div class="col-12 col-md-7">
        <div class="contact__form">

        <livewire:user-contactone />


        </div>
      </div>

    </div>
  </div>
</section>

