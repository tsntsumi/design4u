import axios from 'axios'

export const allLeads = async () => {
  const data = await axios.get('/api/get-data')
  return data
}
