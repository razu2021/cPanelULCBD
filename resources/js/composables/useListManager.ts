import { ref, type Ref } from 'vue';

export function useListManager(initialItems: string[] = []) {
    const userInput = ref<string>('');
    const items: Ref<string[]> = ref([...initialItems]);

    const addItem = (): void => {
        const value = userInput.value.trim().replace(/,$/, "");
        
        // ডুপ্লিকেট চেক (Case-insensitive) এবং খালি ভ্যালু চেক
        if (value && !items.value.some(item => item.toLowerCase() === value.toLowerCase())) {
            items.value.push(value);
            userInput.value = '';
        }
    };

    const removeItem = (index: number): void => {
        items.value.splice(index, 1);
    };

    // সরাসরি ডাটা সেট করার জন্য (যেমন এডিট মোডে ডাটা লোড হলে)
    const setItems = (newItems: string[]) => {
        items.value = [...newItems];
    };

    return {
        userInput,
        items,
        addItem,
        removeItem,
        setItems
    };
}