import { ref, onMounted } from 'vue'
function useCount() { 
  const count = ref(0)
  onMounted(() => { 
    console.log(count.value)
  })
  const add = () => { 
    count.value++
  }

  return {
    count,
    add
  }
}

export default useCount