export default function DotButton({
  selected,
  onClick,
}: ICarousel.ButtonProps) {
  return (
    <button
      className={`${
        selected ? 'opacity-100' : 'opacity-50'
      } h-6 w-6 bg-white transition-colors ease-in-out duration-200 mx-[5px] rounded-full`}
      type="button"
      onClick={onClick}
    />
  )
}
