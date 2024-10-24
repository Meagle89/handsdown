import Carousel from '../carousel/Carousel'
import Day from './Day'

export default function MobileTimetable({
  days,
  academyData,
}: {
  days: string[]
  academyData: Classes[]
}) {
  const options = {
    dragFree: false,
    watchResize: false,
    align: 'start',
    loop: false,
    startIndex: 0,
    gap: 24,
  }
  return (
    <div className="flex">
      <div className="flex-1" />
      <div className="max-w-[158px]">
        <Carousel
          options={options}
          selectableChildren={true}
          displayButtons={false}
          overflowHidden={false}
        >
          {days.map((day: string, index: number) => (
            <Day
              day={day}
              academyData={academyData}
              key={index * Math.random()}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex-1" />
    </div>
  )
}
