<section class="py-5">
    <div class="container">
        <!-- section heading start here  -->
        @includeif('frontend/components/ui/sectionheading5',['data' => $sectionsdata,])
        <!-- section heading end here  -->
          
        <div class="row g-3 py-5">
       @for ($i = 0; $i < 11; $i++)
        
    
    
        <div class="col-12 col-sm-6 col-xl-3 ">
            <div class="clientmini">
                <div class="clientmini__image">
                    <img src="https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg" alt="Client">
                </div>

                <div class="clientmini__content">
                    <span class="clientmini__name">Md. Rahman</span>

                    <h3>Property Dispute Case</h3>

                    <p>
                        Legal representation for a complex property dispute.
                    </p>
                </div>
            </div>
        </div>
    @endfor

    </div>
    </div>
</section>
