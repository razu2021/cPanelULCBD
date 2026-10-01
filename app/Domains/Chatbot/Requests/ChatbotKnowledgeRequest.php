<?php 

namespace App\Domains\Chatbot\Requests;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class ChatbotKnowledgeRequest extends FormRequest
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
            'intent_id'                     => ['required', 'integer'],
            'question'                      => 'required|string',
            'answer'                        => 'required|string',
            'keywords'                      => 'required|',
            'category'                      => 'nullable|string',
            'priority'                      => 'nullable|integer',
            'order'                         => 'nullable|integer',
            'status'                        => 'nullable|integer',
            'public_status'                 => 'nullable|boolean',
           
        ];
    }


    /**
     * =================================================
     * custome error messages 
     * ================================================================
     */

    public function messages(){

        return [
            'intent_id.required'     => 'Please Select a Intent First ',
            'question.required'     => 'Please Write a Questions',
        ];

    }
}