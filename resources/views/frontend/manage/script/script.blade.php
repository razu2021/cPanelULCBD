 
    <script src="{{ asset('contents/website/assets/js/jquery-4.0.0.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"></script>
    <script src="{{ asset('contents/website/assets/js/bootstrap.min.js') }}"></script>
    <!-- Lenis -->
<script src="https://unpkg.com/@studio-freight/lenis@1.0.5/bundled/lenis.min.js"></script>

    <script src="{{ asset('contents/website/assets/js/gsap.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="{{ asset('contents/website/assets/js/script.js') }}"></script>
    <script src="{{ asset('contents/website/assets/js/costom.js') }}"></script>
    <script src="{{ asset('contents/website/assets/js/gsap_custom.js') }}"></script>
    <script src="{{ asset('contents/website/assets/js/mobile_sidebar.js') }}"></script>



<!-- Custom Footer Script -->
@if(!empty($customscript['footer_script']))
<script>
    {!! $customscript['footer_script'] !!}
</script>
@endif