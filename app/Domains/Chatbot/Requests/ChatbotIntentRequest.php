<?php 

namespace App\Domains\Chatbot\Requests;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class ChatbotIntentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
    //dd($this->request->all());

    $id = $this->route('id') ?? $this->id;
        return [
            'name'                      => ['required', 'string', 'max:100', Rule::unique('chatbot_intents', 'name')->ignore($id)],
            'description'               => 'nullable|string',
            'order'                     => 'nullable|integer',
            'status'                    => 'nullable|integer',
            'public_status'             => 'nullable|boolean',
           
        ];
    }


    /**
     * =================================================
     * custome error messages 
     * ================================================================
     */

    public function messages(){

        return [
            'name.required'     => 'Please ! Write a Intent Name ?',
        ];

    }
}