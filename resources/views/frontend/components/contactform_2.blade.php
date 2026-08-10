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
                    <div class="social-links-card mt-4 p-4">
                        <span class="d-block mb-3">Connect On Social Media</span>
                        <div class="d-flex align-items-center gap-2">
                            <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-twitter-x"></i></a>
                            <a href="#" class="social-btn"><i class="bi bi-whatsapp"></i></a>
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

                    <form action="#" method="POST" class="contact-form">
                        @csrf
                        <div class="row g-3">
                            <!-- Full Name -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Your Name *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-person input-icon"></i>
                                        <input type="text" name="name" class="form-control" placeholder="e.g. Raju Ahmed" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Email Address -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Email Address *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-envelope input-icon"></i>
                                        <input type="email" name="email" class="form-control" placeholder="raju@example.com" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Phone Number -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Phone Number *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-telephone input-icon"></i>
                                        <input type="tel" name="phone" class="form-control" placeholder="+880 1700-000000" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Subject -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Subject *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-tag input-icon"></i>
                                        <input type="text" name="subject" class="form-control" placeholder="Inquiry about Legal Consultation" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Message Body -->
                            <div class="col-12">
                                <div class="input-group-custom">
                                    <label class="form-label">Your Message *</label>
                                    <div class="input-wrapper align-items-start">
                                        <i class="bi bi-pencil-square input-icon mt-2"></i>
                                        <textarea name="message" class="form-control" rows="4" placeholder="How can we help you?" required></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn-send w-100">
                                    <span>Send Message</span>
                                    <i class="bi bi-send-fill"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</section>