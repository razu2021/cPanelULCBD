import { ref } from 'vue';

export function useSkills(initialSkills: string[] = []) {
    const skillInput = ref<string>('');
    const skills = ref<string[]>(initialSkills);

    const addSkill = (): void => {
        const value = skillInput.value.trim();
        
        // ডুপ্লিকেট চেক এবং খালি ভ্যালু চেক
        if (value && !skills.value.some(s => s.toLowerCase() === value.toLowerCase())) {
            skills.value.push(value);
            skillInput.value = '';
        }
    };

    const removeSkill = (index: number): void => {
        skills.value.splice(index, 1);
    };

    return {
        skillInput,
        skills,
        addSkill,
        removeSkill
    };
}