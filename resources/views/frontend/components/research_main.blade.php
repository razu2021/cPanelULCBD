<section class="research1">
    <div class="container">

        <!-- Section Header -->
        <div class="research1__header">
            <span class="research1__eyebrow">
                <i class="bi bi-search"></i>
                Legal Research
            </span>

            <h2 class="research1__title">
                Knowledge. Analysis.
                <span>Legal Insight.</span>
            </h2>

            <p class="research1__description">
                Explore our latest legal research, opinions and analysis
                covering important developments across different areas
                of law.
            </p>
        </div>


        <!-- Research Cards -->
        <div class="row g-4">

            <!-- Card -->
            @for ($i = 0; $i < 10; $i++)
            <div class="col-12 col-md-6 col-xl-4">
                <article class="research1__card">

                    <div class="research1__image">
                        <img src="https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg"
                             alt="Constitutional Law Research"
                             loading="lazy">

                        <span class="research1__category">
                            Constitutional Law
                        </span>

                        <span class="research1__bookmark">
                            <i class="bi bi-bookmark"></i>
                        </span>

                        <span class="research1__index">
                            01
                        </span>
                    </div>


                    <div class="research1__body">

                        <div class="research1__meta">
                            <span>
                                <i class="bi bi-calendar3"></i>
                                18 Aug 2026
                            </span>

                            <span>
                                <i class="bi bi-clock"></i>
                                8 min
                            </span>
                        </div>

                        <h3>
                            Constitutional Rights and the
                            Evolving Landscape of Modern Justice
                        </h3>

                        <p>
                            An analytical exploration of emerging
                            constitutional questions and their impact
                            on modern justice.
                        </p>


                        <div class="research1__bottom">

                            <div class="research1__author">
                                <span>
                                    <i class="bi bi-person"></i>
                                </span>

                                <div>
                                    <small>Research By</small>
                                    <strong>Legal Research Team</strong>
                                </div>
                            </div>

                            <a href="#" class="research1__arrow">
                                <i class="bi bi-arrow-up-right"></i>
                            </a>

                        </div>

                    </div>

                </article>
            </div>
            @endfor

        

          
        </div>

    </div>
</section>