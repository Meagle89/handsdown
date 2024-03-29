import Link from 'next/link'

export default function MobileDropDown({
  items: { data },
}: INavigation.MobileDropDown) {
  return (
    <div className="w-full py-11">
      <ul>
        {data?.map((item) => (
          <li key={item.attributes.title} className="mb-5">
            <Link
              href={item.attributes.url}
              className="text-base font-semibold text-offBlack font-montserrat"
            >
              {item.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
