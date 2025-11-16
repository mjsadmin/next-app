'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'

export default function Client() {
    const router = useRouter()
    return (
        <div>
            Client
            <Button variant="contained" color="primary" onClick={()=> router.push('/sample/button')}>To Button</Button>
        </div>
    )
}
