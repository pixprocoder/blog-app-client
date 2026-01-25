import { Button } from '@/components/ui/button'
import Link from 'next/link'

function NotFoundPage() {
    return (
        <div className='flex min-h-screen justify-center items-center'>The route does not exists
            <Button asChild>
                <Link href="/">Go to homepage</Link>
            </Button>
        </div>
    )
}

export default NotFoundPage