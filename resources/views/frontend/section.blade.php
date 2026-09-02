@extends('layouts/frontend')
@section('web_content')
{{-- @includeif('frontend/components/ui/team_card1') --}}
<!-- Hero Section -->


<!-- Hero Section 12 -->
<section class="storymain">
    <div class="container">

        <div class="storymain__top">
            <div>
                <span class="storymain__tag">
                    <i class="bi bi-stars"></i>
                    Our Story
                </span>

                <h2 class="storymain__title">
                    Stories Behind
                    <span>Our Success.</span>
                </h2>
            </div>

            <p class="storymain__intro">
                Every case carries a story. Every client deserves to be
                heard. Our journey is built around experience, trust,
                dedication, and the pursuit of justice.
            </p>
        </div>


        <!-- Featured Story -->
        <div class="storymain__featured">

            <div class="storymain__featured-image">
                <img src="https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg"
                     alt="Act Legal story"
                     loading="lazy">

                <div class="storymain__featured-overlay"></div>

                <div class="storymain__featured-badge">
                    <span>EST.</span>
                    <strong>1977</strong>
                </div>

                <div class="storymain__image-caption">
                    <i class="bi bi-camera"></i>
                    A legacy of legal excellence
                </div>
            </div>


            <div class="storymain__featured-content">

                <span class="storymain__number">01</span>

                <span class="storymain__label">
                    Our Beginning
                </span>

                <h3>
                    Built on Principles.
                    <span>Driven by Justice.</span>
                </h3>

                <p>
                    What began with a commitment to protecting rights has
                    grown into a trusted legal practice serving individuals,
                    businesses, and organizations with professionalism and
                    integrity.
                </p>

                <p>
                    Through decades of changing legal landscapes, our
                    fundamental belief has remained the same — every client
                    deserves thoughtful advice, strong representation, and
                    a genuine commitment to their cause.
                </p>

                <a href="#" class="storymain__button">
                    Discover Our Journey
                    <span>
                        <i class="bi bi-arrow-up-right"></i>
                    </span>
                </a>

            </div>

        </div>


        <!-- Story Highlights -->
        <div class="storymain__highlights">

            <div class="storymain__highlight">
                <span class="storymain__highlight-icon">
                    <i class="bi bi-shield-check"></i>
                </span>

                <div>
                    <strong>Trusted</strong>
                    <p>Built on integrity & trust</p>
                </div>
            </div>


            <div class="storymain__highlight">
                <span class="storymain__highlight-icon">
                    <i class="bi bi-award"></i>
                </span>

                <div>
                    <strong>Experienced</strong>
                    <p>Decades of legal experience</p>
                </div>
            </div>


            <div class="storymain__highlight">
                <span class="storymain__highlight-icon">
                    <i class="bi bi-people"></i>
                </span>

                <div>
                    <strong>Client Focused</strong>
                    <p>People remain at our heart</p>
                </div>
            </div>


            <div class="storymain__highlight">
                <span class="storymain__highlight-icon">
                    <i class="bi bi-scale"></i>
                </span>

                <div>
                    <strong>Justice</strong>
                    <p>Committed to lawful solutions</p>
                </div>
            </div>

        </div>

    </div>
</section>





{{-- ban --}}

@endsection