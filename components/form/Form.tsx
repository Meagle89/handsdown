'use client'
import { useState } from 'react'
import Radio from '../inputs/Radio'
import FormSection from './FormSection'
import Expander from '../ui/Expander'
import Primary from '../buttons/Primary'

const options = [
  { value: 'dragons', label: 'HD Little Dragons (Ages 5-6)' },
  { value: 'children', label: 'Children (Ages 7-9)' },
  { value: 'juniors', label: 'Juniors (Ages 9+)' },
  { value: 'junior-adults', label: 'Junior Adults (Ages 9+)' },
  { value: 'adults', label: 'Adults (Ages 18+)' },
]

export default function Form() {
  const [data, setData] = useState({
    parentName: '',
    telephone: '',
    email: '',
    studentName: '',
    course: options[0].value,
  })

  const selectValue = options.find((i) => i.value === data.course)
  const parsedValue = selectValue
    ? selectValue
    : { value: '', label: 'Please select a course' }

  const parentOptions: IForm.Options[] = [
    {
      type: 'input',
      props: {
        label: "Parent's full name",
        name: 'parentName',
        placeholder: '',
        onChange: handleChange,
        type: 'text',
      },
    },
    {
      type: 'input',
      props: {
        label: 'Phone number',
        name: 'telephone',
        placeholder: '',
        onChange: handleChange,
        type: 'text',
      },
    },
    {
      type: 'input',
      props: {
        label: 'Email address',
        name: 'email',
        placeholder: '',
        onChange: handleChange,
        type: 'email',
      },
    },
  ]

  const studentOptions: IForm.Options[] = [
    {
      type: 'input',
      props: {
        label: "Student's full name",
        name: 'studentName',
        placeholder: '',
        onChange: handleChange,
        type: 'text',
      },
    },
    {
      type: 'select',
      props: {
        name: 'course',
        onChange: setData,
        options: options,
        selectValue: parsedValue,
        label: 'Class to try',
      },
    },
  ]

  function handleClick() {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      console.log('clicked')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
  }
  return (
    <form
      className="flex flex-col w-full text-base font-medium font-montserrat"
    >
      <div className="flex justify-center gap-10 mb-20 md:gap-20">
        <Radio
          onChange={handleChange}
          name="customer"
          label="I am the parent"
        />

        <Radio
          onChange={handleChange}
          name="customer"
          label="I am the student"
        />
      </div>
      <div className="mb-10">
        <h2 className="font-bold mb-7 opacity-[0.85]">Parent&apos;s details</h2>
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <FormSection options={parentOptions} />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-bold mb-7 opacity-[0.85]">
          Student&apos;s details
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <FormSection options={studentOptions} />
        </div>
      </div>
      <h2 className="font-bold mb-7 opacity-[0.85]">Preferred location</h2>
      <div className="flex mb-20">
        <div className="w-1/2">
          <Radio onChange={handleChange} name="epsom" label="Epsom" />
        </div>
        <div className="w-1/2">
          <Radio onChange={handleChange} name="cobham" label="Cobham" />
        </div>
      </div>
      <Expander title="Sign up another student">
        <FormSection options={studentOptions} />
      </Expander>
      <div className="w-9/12 mx-auto h-26 mt-14 mb-41 md:w-[302px] md:h-[55px] ">
        <Primary type="submit" onClick={handleClick}>
          <span className="font-montserrat font-extrabold text-white text-lg leading-[1.4px] uppercase">
            Submit
          </span>
        </Primary>
      </div>
    </form>
  )
}
