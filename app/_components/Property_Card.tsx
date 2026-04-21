export default function PropertyCard({
  children
}:{
  children: React.ReactNode
}) {

  return(
    <article className="flex flex-col text-(--green) text-xl px-5 py-5 text-center w-60 gap-2">
      {children}
    </article>
  )
}