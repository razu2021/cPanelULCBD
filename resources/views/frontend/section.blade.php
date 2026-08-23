@extends('layouts/frontend')
@section('web_content')
{{-- @includeif('frontend/components/ui/team_card1') --}}

<section class="global3-section">
    <div class="container">
        <div class="global3-wrapper">

            <!-- Cover Image -->
            <div class="global3-cover">
                <img
                    src="assets/images/cover.jpg"
                    alt="Cover Image"
                    class="global3-cover-image"
                >
            </div>

            <div class="row g-4 g-lg-5 align-items-center">

                <!-- Content -->
                <div class="col-12 col-lg-6">
                    <div class="global3-content">

                        <span class="global3-sub-heading">
                            <i class="bi bi-play-circle-fill"></i>
                            Learn Something New
                        </span>

                        <h2 class="global3-heading">
                            Master Your Skills With
                            <span>Professional Learning</span>
                        </h2>

                        <h3 class="global3-title">
                            Learn from experts and build your future
                        </h3>

                        <p class="global3-subtitle">
                            Practical courses, expert guidance and
                            real-world knowledge in one place.
                        </p>

                        <p class="global3-short-description">
                            Start learning today with high-quality
                            lessons designed for beginners and
                            professionals.
                        </p>

                        <div class="global3-long-description">
                            <p>
                                Our learning platform provides carefully
                                structured lessons, practical examples,
                                video tutorials and useful resources to
                                help you develop your skills step by step.
                            </p>

                            <p>
                                Whether you are starting from zero or
                                improving your existing knowledge, our
                                resources are designed to make learning
                                simple, practical and effective.
                            </p>
                        </div>

                        <div class="global3-actions">
                            <a href="#" class="btn global3-btn">
                                Explore Now
                                <i class="bi bi-arrow-right"></i>
                            </a>

                            <a href="#" class="global3-link">
                                <i class="bi bi-play-circle"></i>
                                Watch Video
                            </a>
                        </div>

                    </div>
                </div>

                <!-- Video -->
                <div class="col-12 col-lg-6">
                    <div class="global3-video-wrapper">

                        <!-- Thumbnail -->
                        <div class="global3-video-thumbnail">

                            <img
                                src="assets/images/video-thumbnail.jpg"
                                alt="Video Thumbnail"
                                class="global3-thumbnail-image"
                            >

                            <a
                                href="#"
                                class="global3-play-button"
                                aria-label="Play Video"
                            >
                                <i class="bi bi-play-fill"></i>
                            </a>

                            <span class="global3-video-label">
                                <i class="bi bi-camera-video-fill"></i>
                                Watch Preview
                            </span>

                        </div>

                        <!-- If you want embedded video -->
                        <div class="ratio ratio-16x9 global3-embed-video d-none">
                            <iframe
                                src="https://www.youtube.com/embed/VIDEO_ID"
                                title="Video"
                                allowfullscreen>
                            </iframe>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
{{-- ban --}}

@endsection