{{-- faq section  --}}
@if(!empty($contents) && $contents->count() > 0)
<section class="faq2">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="faq2__content">
                    <span class="sub-title">Have Questions?</span>
                    <h2 class="main-title">Frequently Asked Questions</h2>
                    <p>Amader process ba admission niye kono jiggesha ache? Nichher common proshno gulo dekhte paren.</p>
                    
                    <div class="faq2__support-card">
                        <div class="icon"><i class="bi bi-headset"></i></div>
                        <div class="info">
                            <h5>Still need help?</h5>
                            <p>Contact our support team anytime.</p>
                            <a href="mailto:info@handsbd.org" class="btn-link">Contact Us <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="faq2__accordion">
                    @foreach ($contents as $faq)
                    <div class="faq-item active">
                        <button class="faq-question">
                            <span>{{$faq->title ?? ''}}</span>
                            <i class="bi bi-plus-lg"></i>
                        </button>
                        <div class="faq-answer">
                            <div class="answer-inner">
                               {{$faq->short_des  ?? ''}}
                            </div>
                        </div>
                    </div>
                    @endforeach
                 
                   
                </div>
            </div>
        </div>
    </div>
</section>
@endif