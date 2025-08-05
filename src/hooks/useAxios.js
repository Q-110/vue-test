import axios from 'axios'
import { ref, unref, watchEffect, isRef } from 'vue'
function useAxios(city) {
  let weather = ref(null)
  const handleBlur = () => {
    axios({
      method: 'get',
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      params: {
        key: 'b905e325edf3d51582f06ce244b4794c',
        city: unref(city),
        extensions: 'all'
      }
    }).then(res => {
      weather.value = res.data.forecasts[0].casts
    })
  }

  if (isRef(city)) { 
    watchEffect(handleBlur)
  } else { 
    handleBlur()
  }

  return { weather }
}

export default useAxios