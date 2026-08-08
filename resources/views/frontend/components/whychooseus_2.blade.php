@if(!empty($contents) && $contents->count() > 0)

<section class="whyChoose whyChoose7">
    <div class="container">

        <!-- heading -->
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <div class="whyChoose7__header">
                    <h4>Why Choose Us</h4>
                    <h2>We Provide Trusted Visa & Immigration Services</h2>
                    <p>Professional, fast, and reliable visa solutions with expert guidance.</p>
                </div>
            </div>
        </div>

        

        <div class="row">
            @foreach ($contents as $whyc)
            <div class="col-md-6 col-lg-4">
                <div class="whyChoose7__card">
                    <h3>{{$whyc->title ?? ''}}</h3>
                    <p>{{$whyc->short_des ?? ''}}</p>
                </div>
            </div>
            @endforeach
        </div>

           

        </div>

       

    </div>
</section>

@endif