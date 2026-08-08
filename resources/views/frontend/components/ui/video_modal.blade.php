<!-- <div class="video-trigger-box text-center py-5">
    <button type="button" class="btn-play-video" data-bs-toggle="modal" data-bs-target="#videoModal" data-video-url="https://www.youtube.com/embed/dQw4w9WgXcQ">
        <div class="play-icon-wrapper">
            <i class="fas fa-play"></i>
            <div class="ping-animation"></div>
        </div>
        <span>Watch Resort Tour</span>
    </button>
</div> -->

<div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content video-modal-content">
            <button type="button" class="video-close-btn" data-bs-dismiss="modal" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-body p-0">
                <div class="ratio ratio-16x9 shadow-lg">
                    <iframe id="videoIframe" src="" title="YouTube video" allowfullscreen allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>



<script>
    document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');

    // Modal open hole video URL set kora
    videoModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const videoUrl = button.getAttribute('data-video-url');
        // Autoplay on korar jonno URL-er sheshe autoplay=1 add kora hoyeche
        videoIframe.src = videoUrl + "?autoplay=1&modestbranding=1&rel=0";
    });

    // Modal bondho hole video stop kora (src blank kore deya)
    videoModal.addEventListener('hide.bs.modal', function() {
        videoIframe.src = "";
    });
});
</script>