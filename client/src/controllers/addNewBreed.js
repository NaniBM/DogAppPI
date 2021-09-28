import axios from "axios";

export default async (payload) => {
  
  try {
      const { data } = axios.post('http://localhost:3001/dog', payload)        
      if (data.created) alert('New breed added')
      else alert('The breed alredy exists')
     
  } catch (error) {
     console.error(error)
  }
}