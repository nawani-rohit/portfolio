import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        R<span className="text-target">N</span>
      </p>
    </Link>
  )
}
