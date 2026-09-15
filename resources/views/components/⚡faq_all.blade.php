<?php

use Livewire\Component;
use App\Models\Faq;

new class extends Component
{
    public $search = '';

    public function with()
    {
        return [
            'faqs' => Faq::query()
                ->when($this->search, function ($query) {
                    $query->where(function ($subQuery) {
                        $subQuery->where('title', 'like', '%' . $this->search . '%');
                                 
                    });
                })
                ->latest()
                ->get()
        ];
    }
};
?>

<div>
    <div class="row g-4">
        <!-- FAQ Search Box -->
        <div class="col-lg-12">
            <form onsubmit="return false;">
                <div class="faq9__search">
                    <div class="faq9__search-box position-relative">
                        <i class="bi bi-search faq9__search-icon"></i>

                        <input
                            type="search"
                            wire:model.live.debounce.300ms="search"
                            class="faq9__search-input"
                            placeholder="Search your question..."
                            aria-label="Search FAQ"
                        />

                        <!-- সার্চ করার সময় ছোট স্পিনার -->
                        <div wire:loading wire:target="search" class="position-absolute end-0 top-50 translate-middle-y me-3">
                            <div class="spinner-border spinner-border-sm text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>

                    <p class="faq9__search-hint">
                        Search by legal topic, service, dispute or consultation.
                    </p>
                </div>
            </form>
        </div>

        <!-- FAQ List Container -->
        <div class="col-lg-12">
            <div class="row g-4 transition-all" wire:loading.class="opacity-50" style="transition: 0.2s ease-in-out;">
                @forelse ($faqs as $faq)
                    <div class="col-lg-6">
                        <!-- এখানে একটি ছোট টাইপো ঠিক করা হয়েছে (<divc3> এর বদলে সাধারণ <div>) -->
                        <div class="faq9__item" data-bs-toggle="modal" data-bs-target="#faq-modal-{{ $faq->id }}">
                            <div class="faq9__number">{{ $loop->iteration }}</div>

                            <div class="faq9__content">
                                <h3>{{ $faq->title ?? '' }}</h3>
                                <p>
                                    {{ Str::words($faq->short_des ?? '' , 20) }}
                                </p>
                            </div>

                            <div class="faq9__arrow">
                                <i class="bi bi-arrow-up-right"></i>
                            </div>
                        </div>
                    </div>
                @empty
                    <div class="col-lg-12 text-center py-4">
                        <p class="text-muted">No FAQs found matching your search.</p>
                    </div>
                @endforelse
            </div>
        </div>

        <!-- Modal 01 (Lists-এর নিচে কিন্তু মূল row-এর ভেতরে রাখা হয়েছে) -->
        @foreach ($faqs as $faq)
            <div class="modal fade faq9__modal" id="faq-modal-{{ $faq->id }}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">

                        <div class="faq9__modal-header">
                            <div class="faq9__modal-icon">
                                <i class="bi bi-patch-question-fill"></i>
                            </div>

                            <button type="button" class="faq9__modal-close" data-bs-dismiss="modal">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </div>

                        <div class="faq9__modal-body">
                            <span class="faq9__modal-number">{{ $loop->iteration }}</span>

                            <h2>{{ $faq->title ?? '' }}</h2>

                            <p>
                                {{ $faq->short_des ?? '' }}
                            </p>

                            @if($faq->description)
                            <div class="content-editor">
                                {!! $faq->description ?? '' !!}
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @endforeach

    </div>
</div>