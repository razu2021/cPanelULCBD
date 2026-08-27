





<section class="get-in-touch-section py-5">
    <div class="container">
       
        <!-- Section Header -->
        <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
                <span class="badge-subtitle mb-3 d-inline-flex align-items-center gap-2">
                    <i class="bi bi-chat-left-dots-fill"></i>{{$sectionsdata->section_title ?? 'Reach Out To Us' }} 
                </span>
                <h2 class="section-title mb-3">
                    @if($sectionsdata->section_heading)
                        {{$sectionsdata->section_heading}}
                    @else
                    Have Questions? <span>Get In Touch</span> With Us
                    @endif
                </h2>
                <p class="section-desc">
                   {{$sectionsdata->section_heading ?? ' Our dedicated legal experts are here to assist you. Send us a message or visit our chamber for direct consultation.'}}
                </p>
            </div>
        </div>

        <div class="row g-4 align-items-stretch">
            
            <!-- Left Contact Info Cards -->
            <div class="col-lg-5 col-xl-4">
                <div class="contact-info-wrapper d-flex flex-column justify-content-between h-100">
                    
                    <div class="d-flex flex-column gap-3">
                        <!-- Office Location -->
                      
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div>
                                <h4>Visit Address</h4>
                                @if($siteaddress && $siteaddress->isNotEmpty())
                                <p>{{ $siteaddress->where('type', 'secondary')->first()->address ?? '' }}</p>
                                @endif
                            </div>
                        </div>

                        <!-- Phone Numbers -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                            <div>
                                <h4>Call For Support</h4>
                                @forelse($sitephones ?? [] as $phone)
                                    <p><a href="tel:{{ $phone->phone ?? '' }}">{{ $phone->phone ?? '' }}</a></p>
                                @empty
                                    <p> -- </p>
                                @endforelse
                                
                            </div>
                        </div>

                        <!-- Email Address -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-envelope-open-fill"></i>
                            </div>
                            <div>
                                <h4>Email Us</h4>
                               
                                @forelse($siteemails ?? [] as $email)
                                <p><a href="mailto:{{$email->email ?? ''}}">{{$email->email ?? ''}}</a></p>
                                @empty

                                @endforelse
                              
                                
                            </div>
                        </div>

                        <!-- Working Hours -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-clock-fill"></i>
                            </div>
                            <div>
                                <h4>Opening Hours</h4>
                               
                                <p> {{$siteinfo->opening ?? ''}}</p>
                                <span class="text-closed">Friday: Closed</span>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media Links -->
                    <div class="social-links-card mt-4 p-4">
                        <span class="d-block mb-3">Connect On Social Media</span>
                        <div class="d-flex align-items-center gap-2">
                            @forelse($sitesocials ?? [] as $social)
                            <a href="{{$social->url ?? '#'}}" class="social-btn"><i class="{{$social->icon}}"></i></a>
                            @empty
                                <p> </p>
                            @endforelse
                           
                        </div>
                    </div>

                </div>
            </div>

            <!-- Right Direct Contact Form -->
            <div class="col-lg-7 col-xl-8">
                <div class="contact-form-card h-100 d-flex flex-column justify-content-center">
                    <div class="form-header mb-4">
                        <h3>Send Us A Direct Message</h3>
                        <p>Fill in your details below and we will get back to you within 24 hours.</p>
                    </div>

                    {{-- Contact Form Component --}}
                    <livewire:usercontacttwo />
                    {{-- contact form end here  --}}


                </div>
            </div>

        </div>
    </div>
</section>