<section class="appointment-section py-5">
    <div class="container">
        <div class="row g-4 align-items-center">

            <!-- Left Info Content -->
            <div class="col-lg-5 text-white">
                <div class="appointment-content pe-lg-4">
                    <span class="badge-subtitle d-inline-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-shield-check"></i> Trusted Legal Support
                    </span>
                    <h2 class="section-title mb-3">
                        Need Expert Legal Advice? <br>
                        <span>Book a Legal Consultation</span>
                    </h2>
                    <p class="section-desc mb-4">
                        Take the first step toward resolving your legal matter. Schedule a confidential, face-to-face or virtual session with our experienced legal specialists.
                    </p>

                    <!-- Features List -->
                    <div class="features-list d-flex flex-column gap-3 mb-4">
                        <div class="feature-card d-flex align-items-center gap-3">
                            <div class="icon-box">
                                <i class="bi bi-person-workspace"></i>
                            </div>
                            <div>
                                <h4>Senior Advocates Only</h4>
                                <p>Direct one-on-one consultation with lead attorneys.</p>
                            </div>
                        </div>

                        <div class="feature-card d-flex align-items-center gap-3">
                            <div class="icon-box">
                                <i class="bi bi-lock-fill"></i>
                            </div>
                            <div>
                                <h4>100% Confidential</h4>
                                <p>Protected by strict attorney-client confidentiality.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Direct Call Action -->
                    <div class="call-card d-flex align-items-center gap-3">
                        <div class="call-icon">
                            <i class="bi bi-telephone-outbound-fill"></i>
                        </div>
                        <div>
                            <span>Emergency Legal Support?</span>
                            <a href="tel:+880123456789" class="d-block">+880 1234-567890</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Interactive Form -->
            <div class="col-lg-7">
                <div class="appointment-card">
                    <div class="card-header-text mb-4">
                        <h3>Schedule Your Appointment</h3>
                        <p>Fill out the form below and our legal team will confirm within 2 hours.</p>
                    </div>

                    <form action="#" method="POST" class="appointment-form">
                        @csrf
                        <div class="row g-3">
                            <!-- Full Name -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Full Name *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-person input-icon"></i>
                                        <input type="text" name="name" class="form-control" placeholder="John Doe" required>
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

                            <!-- Legal Practice Area -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Practice Area *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-briefcase input-icon"></i>
                                        <select name="practice_area" class="form-select" required>
                                            <option value="" selected disabled>Select Practice Area</option>
                                            <option value="corporate">Corporate & Business Law</option>
                                            <option value="criminal">Criminal Defense</option>
                                            <option value="family">Family & Matrimonial Law</option>
                                            <option value="property">Land & Property Litigation</option>
                                            <option value="intellectual">Intellectual Property</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Preferred Date -->
                            <div class="col-12 col-md-6">
                                <div class="input-group-custom">
                                    <label class="form-label">Preferred Date *</label>
                                    <div class="input-wrapper">
                                        <i class="bi bi-calendar-event input-icon"></i>
                                        <input type="date" name="appointment_date" class="form-control" required>
                                    </div>
                                </div>
                            </div>

                            <!-- Brief Message -->
                            <div class="col-12">
                                <div class="input-group-custom">
                                    <label class="form-label">Case Details / Brief Summary</label>
                                    <div class="input-wrapper align-items-start">
                                        <i class="bi bi-chat-left-text input-icon mt-2"></i>
                                        <textarea name="message" class="form-control" rows="3" placeholder="Briefly describe your legal inquiry..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn-submit w-100">
                                    <span>Confirm Appointment</span>
                                    <i class="bi bi-arrow-right-short"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</section>