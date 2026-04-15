export default function Slide({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}){

  return (
    <article className={`${className} h-dvh w-full flex flex-col`}>
      {children}
    </article>
  )
}