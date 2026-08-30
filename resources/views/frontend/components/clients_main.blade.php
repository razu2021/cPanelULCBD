
<section class="clients-section section-padding">
    <div class="container">

        <!-- Section Header -->
        <div class="clients-section__header">
            <div class="section-heading">
                <span class="section-heading__subtitle">
                    <i class="bi bi-briefcase"></i>
                    Our Clients
                </span>

                <h2 class="section-heading__title">
                    Trusted by Clients,
                    <span>Driven by Justice.</span>
                </h2>

                <p class="section-heading__text">
                    We represent individuals, organizations, and businesses
                    with dedication, professionalism, and a commitment to
                    achieving meaningful legal outcomes.
                </p>
            </div>

            <a href="#" class="clients-section__all-btn">
                View All Cases
                <i class="bi bi-arrow-up-right"></i>
            </a>
        </div>

        <!-- Clients Grid -->
        <div class="row g-4">

            <!-- Client Card -->
            @for ($i = 0; $i < 10; $i++)
                
           
            <div class="col-12 col-md-6 col-xl-4">
                <article class="client-card">

                    <div class="client-card__image">
                        <img src="https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg"
                             alt="Corporate Legal Case"
                             loading="lazy">

                        <span class="client-card__category">
                            Corporate Law
                        </span>
                    </div>

                    <div class="client-card__content">

                        <div class="client-card__meta">
                            <span>
                                <i class="bi bi-person"></i>
                                Md. Rahman
                            </span>

                            <span>
                                <i class="bi bi-calendar3"></i>
                                2025
                            </span>
                        </div>

                        <h3 class="client-card__title">
                            Corporate Business Dispute Resolution
                        </h3>

                        <p class="client-card__description">
                            Providing strategic legal representation in a
                            complex corporate dispute and achieving a
                            favorable resolution for our client.
                        </p>

                        <a href="#" class="client-card__btn">
                            View Case
                            <i class="bi bi-arrow-right"></i>
                        </a>

                    </div>
                </article>
            </div>
             @endfor

            <!-- Client Card -->
           

          

        </div>
    </div>
</section>

