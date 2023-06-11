import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID KQ1hpmWRBRciT1id-kKD-6tVTUI6FRom00SXNxJAXZU',
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
