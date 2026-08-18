<section class="get-in-touch-section py-5">
    <div class="container">
        
        <!-- Section Header -->
        <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
                <span class="badge-subtitle mb-3 d-inline-flex align-items-center gap-2">
                    <i class="bi bi-chat-left-dots-fill"></i> Reach Out To Us
                </span>
                <h2 class="section-title mb-3">
                    Have Questions? <span>Get In Touch</span> With Us
                </h2>
                <p class="section-desc">
                    Our dedicated legal experts are here to assist you. Send us a message or visit our chamber for direct consultation.
                </p>
            </div>
        </div>

        <div class="row g-4 align-items-stretch">
            
            <!-- Left Contact Info Cards -->
            <div class="col-lg-5 col-xl-4">
                <div class="contact-info-wrapper d-flex flex-column justify-content-between h-100">
                    
                    <div class="d-flex flex-column gap-3">
                        <!-- Office Location -->
                        {{$siteaddress}}
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div>
                                <h4>Visit Our Chamber</h4>
                                <p>Suite 402, Universitas Law Chambers, Motijheel C/A, Dhaka-1000</p>
                            </div>
                        </div>

                        <!-- Phone Numbers -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                            <div>
                                <h4>Call For Support</h4>
                                <p><a href="tel:+8801700000000">+880 1700-000000</a></p>
                                <p><a href="tel:+88029550000">+880 2-9550000</a></p>
                            </div>
                        </div>

                        <!-- Email Address -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-envelope-open-fill"></i>
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <p><a href="mailto:info@lawfirm.com">info@lawfirm.com</a></p>
                                <p><a href="mailto:support@lawfirm.com">support@lawfirm.com</a></p>
                            </div>
                        </div>

                        <!-- Working Hours -->
                        <div class="info-card d-flex align-items-start gap-3">
                            <div class="icon-box">
                                <i class="bi bi-clock-fill"></i>
                            </div>
                            <div>
                                <h4>Chamber Hours</h4>
                                <p>Saturday - Thursday: 09:00 AM - 08:00 PM</p>
                                <span class="text-closed">Friday: Closed</span>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media Links -->
                    {{-- <div class="social-links-card mt-4 p-4">
                        <span class="d-block mb-3">Connect On Social Media</span>
                        <div class="d-flex align-items-center gap-2">
                            <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-twitter-x"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div> --}}

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