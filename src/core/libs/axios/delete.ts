import { axiosInstance } from './axios-instance'

const apiDelete = async (url: string, params: any, useDataConfig = false) => {
    try {
        console.log('apiDelete', url)
        const {
            data: { data }
        } = useDataConfig
            ? await axiosInstance.delete(url, { data: params })
            : await axiosInstance.delete(url, { params })

        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}
export default apiDelete
