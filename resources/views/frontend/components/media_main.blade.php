<section class="midia1">
    <div class="container">

        <div class="midia1__header">
            <div>
                <span class="midia1__eyebrow">
                    <i class="bi bi-camera"></i>
                    Media & Gallery
                </span>

                <h2 class="midia1__title">
                    In the
                    <span>Media.</span>
                </h2>
            </div>

            <a href="#" class="midia1__view">
                View All Media
                <i class="bi bi-arrow-up-right"></i>
            </a>
        </div>


        <div class="row g-4">

            <!-- Media Card -->
            @for ($i = 0; $i <10; $i++)
                
            
            <div class="col-12 col-md-4">
                <a href="#" class="midia1__card">

                    <div class="midia1__image">
                        <img src="https://i.pinimg.com/736x/9e/29/60/9e29602f1dd2bc34469d5398fa85c040.jpg"
                             alt="Act Legal in media"
                             loading="lazy">

                        <div class="midia1__overlay"></div>

                        <span class="midia1__number">
                            01
                        </span>

                        <span class="midia1__icon">
                            <i class="bi bi-arrow-up-right"></i>
                        </span>

                        <h3>
                            Act Legal Featured in Leading
                            Legal & Business Publication
                        </h3>
                    </div>

                </a>
            </div>
@endfor


           

         
        </div>

    </div>
</section>