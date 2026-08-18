<?php

use Livewire\Attributes\Validate;
use Livewire\Component;
use App\Services\clientData\usercontactService;
new class extends Component
{
    
/**
 * ==============================================================
 * user input data 
 * ==============================================================
*/
#[Validate('required|string|min:3|max:50')]
public $name='';
#[Validate('required|email')]
public $email='';
#[Validate('nullable|string|min:5|max:20')]
public $phone='';
#[Validate('required|string|max:100')]
public $subject='';
#[Validate('required|string|max:500')]
public $description='';


/**
 * ==============================================================
 *  this function will use for live validation of user input data
 * ==============================================================
*/  

public function updated($propertyName)
{
    $this->validateOnly($propertyName);
}







/***==============================================================
 * submit contact form 
 * ==============================================================
*/
public function submitContactForm(usercontactService $usercontactService){
    $validateData = $this->validate();
    $sanitizedData = array_map(fn($item) => is_string($item) ? strip_tags($item) : $item, $validateData);
    try{

      
        $data = $usercontactService->storeContactFormData($sanitizedData);

     

        if($data){
            $this->reset();
            session()->flash('form_success', 'Success! Your message has been sent successfully!');
        }


    }catch(\Exception $e){
        $this->addError('form_error', 'Something went wrong. Please try again later.');
    }
}









};
?>

<div class="contact-card">
    <form wire:submit="submitContactForm" class="contact-form" novalidate>
        {{-- ১. সাকসেস মেসেজ (Session Flash) --}}
        @if (session()->has('form_success'))
            <div class="alert alert-success alert-dismissible fade show mb-4" role="alert" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb; padding: 12px 20px; border-radius: 6px;">
               {{ session('form_success') }}
            </div>
        @endif

        {{-- ২. গ্লোবাল এরর মেসেজ (addError দিয়ে যা সেট করেছেন) --}}
        @error('form_error')
            <div class="alert alert-danger mb-4" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 12px 20px; border-radius: 6px;">
                <strong>Error!</strong> {{ $message }}
            </div>
        @enderror

        {{-- Error Alert --}}
        @error('form_error') 
            <div class="form-alert" role="alert">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span>{{ $message }}</span>
            </div> 
        @enderror

        <div class="row g-3">
            {{-- Name --}}
            <div class="col-12">
                <div class="form-field">
                    <input wire:model.blur="name" type="text" class="form-control @error('name') is-invalid @enderror" id="nameInput" placeholder=" " autocomplete="off">
                    <label for="nameInput"><i class="bi bi-person"></i>Your Name</label>
                </div>
                @error('name') 
                    <div class="field-error"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>

            {{-- Email --}}
            <div class="col-12 col-md-6">
                <div class="form-field">
                    <input wire:model.blur="email" type="email" class="form-control @error('email') is-invalid @enderror" id="emailInput" placeholder=" " autocomplete="off">
                    <label for="emailInput"><i class="bi bi-envelope"></i>Your Email</label>
                </div>
                @error('email') 
                    <div class="field-error"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror      
            </div>

            {{-- Phone --}}
            <div class="col-12 col-md-6">
                <div class="form-field">
                    <input wire:model.blur="phone" type="tel" class="form-control @error('phone') is-invalid @enderror" id="phoneInput" placeholder=" " autocomplete="off">
                    <label for="phoneInput"><i class="bi bi-telephone"></i>Your Phone</label>
                </div>
                @error('phone') 
                    <div class="field-error"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>

            {{-- Subject --}}
            <div class="col-12">
                <div class="form-field">
                    <input wire:model.blur="subject" type="text" class="form-control @error('subject') is-invalid @enderror" id="subjectInput" placeholder=" " autocomplete="off">
                    <label for="subjectInput"><i class="bi bi-chat-left-dots"></i>Subject</label>
                </div>
                @error('subject') 
                    <div class="field-error"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>

            {{-- Description / Message --}}
            <div class="col-12">
                <div class="form-field">
                    <textarea wire:model.blur="description" class="form-control @error('description') is-invalid @enderror" id="descriptionInput" placeholder=" "></textarea>
                    <label for="descriptionInput"><i class="bi bi-pencil"></i>Your Message</label>
                </div>
                @error('description') 
                    <div class="field-error"><i class="bi bi-exclamation-circle"></i>{{ $message }}</div> 
                @enderror
            </div>

            {{-- Submit Button --}}
            <div class="col-12">
                <button type="submit" class="submit-btn" wire:loading.attr="disabled">
                    {{-- Default State --}}
                    <span wire:loading.remove wire:target="submitContactForm" class="btn-content">
                        <i class="bi bi-send-fill"></i> Send Message
                    </span>

                    {{-- Loading State --}}
                    <span wire:loading.inline-flex wire:target="submitContactForm" class="btn-content">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Sending...
                    </span>
                </button>
            </div>
        </div>
    </form>
</div>