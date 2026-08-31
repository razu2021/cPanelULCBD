@php
    $phone = $sitephones->where('type','primary')->first();
@endphp

<section class="appointment-section py-5">
    <div class="container">
        <div class="row g-4 align-items-center">
            <!-- Left Info Content -->
            <div class="col-lg-5 text-white">
                <div class="appointment-content pe-lg-4">
                    <span class="badge-subtitle d-inline-flex align-items-center gap-2 mb-3">
                        <i class="bi bi-shield-check"></i> {{$sectionsdata->section_title ?? 'Trusted Legal Support'}} 
                    </span>
                    <h2 class="section-title mb-3">
                        @if($sectionsdata->section_heading)
                        {{$sectionsdata->section_heading ?? ''}}
                        @else 
                            Need Expert Legal Advice? <br>
                        <span>Book a Legal Consultation</span>

                        @endif 
                    </h2>
                    <p class="section-desc mb-4">
                        {{$sectionsdata->description ?? 'Take the first step toward resolving your legal matters. Schedule a confidential, In-person or virtual session with our experienced Barrister and Advocates.'}}
                    </p>

                    <!-- Features List -->
                    <div class="features-list d-flex flex-column gap-3 mb-4">
                        <div class="feature-card d-flex align-items-center gap-3">
                            <div class="icon-box">
                                <i class="bi bi-person-workspace"></i>
                            </div>
                            <div>
                                <h4>Paid Consultatation - Head of Chamber </h4>
                                <p>Get direct expert legal advice from the Head of Chamber for your complex legal matters. Choose between an in-person meeting at our office or virtual meeting.</p>
                            </div>
                        </div>

                        <div class="feature-card d-flex align-items-center gap-3">
                            <div class="icon-box">
                               <i class="bi bi-person-workspace"></i>
                            </div>
                            <div>
                                <h4>Free Preliminary Assessment - Senior Consultant </h4>
                                <p>Get a free case evaluation with our Senior Barristers, Advocates & Consultant for complimentary assessment of your case & clear explanation.</p>
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
                           @if($phone)
                                <a href="tel:{{ preg_replace('/[^0-9+]/', '', $phone->phone) }}" class="d-block">
                                    {{ $phone->phone }}
                                </a>
                            @endif
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

                    {{-- load component --}}
                    <livewire:appointmentone />
                    {{-- load component --}}

                </div>
            </div>

        </div>
    </div>
</section>