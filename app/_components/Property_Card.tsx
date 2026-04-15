export default function PropertyCard({
  children
}:{
  children: React.ReactNode
}) {

  return(
    <article className="flex flex-col text-(--green) text-xl px-15 text-center">
      {children}
    </article>
  )
}