import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'

export const appSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {}
})

export const {  } = appSlice.actions

export const login = (input) => {
  return async (dispatch) => {
    try {
      let link = import.meta.env.VITE_BASE_URL + `/login`
      let { data } = await axios({
        method: 'post',
        url: link,
        data: input
      })
      localStorage.access_token = data.access_token
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.message}`,
      })
      throw error
    }
  }
}

export default appSlice.reducer