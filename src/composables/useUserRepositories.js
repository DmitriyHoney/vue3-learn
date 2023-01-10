import { ref, onMounted, watch, computed } from 'vue'

export default function useUserRepositories() {
    const repositries = ref([]);
    const getUserRepositries = () => repositries.value = [1, 2, 3, 4, 5];
    const addRepo = () => repositries.value.push(7);

    const sumRepo = computed(() => repositries.value.reduce((acc, cV) => acc + cV, 0));
    onMounted(getUserRepositries);
    watch(() => [...repositries.value], getUserRepositries);

    return { repositries, getUserRepositries, addRepo, sumRepo };
}