<section class="clintstory1">
    <div class="container">

        <!-- Section Header -->
        <div class="clintstory1__header">
            <div>
                <span class="clintstory1__eyebrow">
                    <i class="bi bi-journal-richtext"></i>
                    Client Stories
                </span>

                <h2 class="clintstory1__title">
                    Real Stories.
                    <span>Real Representation.</span>
                </h2>
            </div>

            <p class="clintstory1__intro">
                Behind every case is a person, a challenge, and a story.
                Explore some of the experiences and legal journeys of
                our clients.
            </p>
        </div>


        <!-- Stories -->
        <div class="row g-4">

            <!-- Story Card -->
            @for ($i = 0; $i < 11; $i++)
                
         
            <div class="col-12 col-md-6 col-xl-4">
                <article class="clintstory1__card">

                    <div class="clintstory1__image">
                        <img src="https://i.pinimg.com/1200x/c4/b6/72/c4b672f729340e5358397a125bd0f7be.jpg"
                             alt="Client story"
                             loading="lazy">

                        <span class="clintstory1__category">
                            Civil Law
                        </span>

                        <span class="clintstory1__count">
                            01
                        </span>
                    </div>

                    <div class="clintstory1__body">

                        <div class="clintstory1__client">
                            <span class="clintstory1__avatar">
                                <i class="bi bi-person"></i>
                            </span>

                            <div>
                                <small>Client</small>
                                <strong>Md. Karim</strong>
                            </div>
                        </div>

                        <span class="clintstory1__date">
                            <i class="bi bi-calendar3"></i>
                            2025
                        </span>

                        <h3 class="clintstory1__case">
                            Property Rights & Ownership Dispute
                        </h3>

                        <p class="clintstory1__description">
                            Our client sought legal assistance in resolving
                            a complicated property ownership dispute and
                            protecting his lawful rights.
                        </p>

                        <div class="clintstory1__footer">
                            <span class="clintstory1__status">
                                <i class="bi bi-check-circle-fill"></i>
                                Resolved
                            </span>

                            <a href="#" class="clintstory1__button">
                                Read Story
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