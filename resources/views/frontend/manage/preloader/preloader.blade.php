<style>
    #preloader{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.preloader-content{
    text-align: center;
}

.preloader-logo{
    width: 80px;
    margin-bottom: 15px;
}

.preloader-text{
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
}

.loader{
    width: 40px;
    height: 40px;
    border: 4px solid #e5e5e5;
    border-top: 4px solid #0d6efd;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: auto;
}

@keyframes spin{
    100%{
        transform: rotate(360deg);
    }
}
</style>



@if (!empty($preloader) && $preloader->count() > 0)
    @if ($preloader->type === 'is_image')
    <div id="preloader">
    <div class="preloader-content">
        <!-- Image (optional) -->
        <img src="{{ asset($preloader->thumbnail) }}" alt="Loading" class="preloader-logo">

    </div>
</div>
@elseif($preloader->type === 'is_text')
    <div id="preloader">
    <div class="preloader-content">
        <!-- Text (optional) -->
        <h5 class="preloader-text">{{$preloader->title ?? ''}}</h5>
        <!-- Spinner -->
        <div class="loader"></div>

    </div>
</div>
@endif
@endif


@if (!empty($preloader) && $preloader->count() > 0)
<script>
window.addEventListener("load", function(){
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(function(){
        preloader.style.display = "none";
    },400);
});
</script>
@endif