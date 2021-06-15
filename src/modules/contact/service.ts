import { axios } from '@/middlewares/api/axios'

export interface Contact {
  id?: number
  name?: string
  email?: string
  tel?: string
  ip?: string
  dtCreated?: number
}

export interface GetContactsResult {
  count: number
  list: Contact[]
  result?: boolean
  error?: string
}

export async function createContact(data: Contact): Promise<any> {
  try {
    const res = await axios.post('contacts', data)
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function getContacts(page: number, limit: number): Promise<GetContactsResult> {
  try {
    const res = await axios.get('contacts', {
      params: {
        page,
        limit,
      },
    })

    return res.data
  } catch (err) {
    console.error(err)
    return {
      count: 0,
      list: [],
    }
  }
}
