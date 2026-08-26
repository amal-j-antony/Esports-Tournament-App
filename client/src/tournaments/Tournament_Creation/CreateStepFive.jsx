import { CheckInTooltip } from '../TournamentComponents/TournamentTooltips'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'
import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { FaChevronDown } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import { ErrorMessage } from '@hookform/error-message'
import ShowFormError from '../TournamentComponents/ShowFormError'
import { updateTournamentStepFiveAPI } from '@/services/tournamentMethods'
import { StepperPreload } from '@/common/components/Loader'
import { useParams } from 'react-router-dom'


function CreateStepFive({

  handleStepChange,
  getTournamentData
}) {
  const { TID } = useParams()
  const [loading, setLoading] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [calendarOpen2, setCalendarOpen2] = useState(false)
  const { register, control, getValues, setValue, formState, handleSubmit } = useFormContext()
  const [checkIn, regDate, startDate, regTime, startTime] = useWatch({
    control,
    name: ["checkIn", "registrationDate", "startDate", "registrationTime", "startTime"]
  })

  console.log(formState.errors);

  const checkDirty = [
    "registrationDate",
    "registrationTime",
    "startDate",
    "startTime",
  ].some(item => formState.dirtyFields[item])

  const sendData = async () => {
    const data = getValues()
    console.log(formState.dirtyFields);
    const payload = {
      registrationDate: data.registrationDate,
      registrationTime: data.registrationTIme,
      checkIn : data.checkIn,
      checkInMinutes: data.checkInMinutes,
      startDate: data.startDate,
      startTime: data.startTime,
      tID: TID
    }
    try {
      setLoading(true)
      const result = await updateTournamentStepFiveAPI(payload)
      console.log("updateTournamentStepFiveAPI:",result);      
      if (result.status == 200) {
        toast('Data Updated')        
      }
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    } catch (error) {
      toast('Something went wrong, please try again')
      console.log(error);

    }
    getTournamentData()
  }

  useEffect(() => {
    const initDates = () => {
      if (regDate == "") {
        setValue("registrationDate", new Date(Date.now()))
      }

      if (startDate == "") {
        setValue("startDate", new Date(Date.now()))
      }

    }
    initDates()
  }, [])
  const inputStyle = 'bg-accent text-center py-3  rounded-xl px-5 '
  return (
    <main className='flex justify-center items-center w-3/4 p-10 bg-[#1d1d1d] rounded-2xl'>
      {
        loading ? <StepperPreload />
          :
          <form onSubmit={handleSubmit(sendData)} className="grid grid-cols-2 items-center gap-5 w-full">
            <h1 className="col-span-2 text-2xl font-bold">Tournament Schedule</h1>
            <label htmlFor=""> Registration Open Date and Time</label>
            <div className="">
              {
                regDate ? <span onClick={() => setCalendarOpen(!calendarOpen)} className={inputStyle + " flex items-center justify-center gap-5"}>{format(regDate, "PP")} {regTime}  <FaChevronDown /> </span>
                  :
                  <span className={inputStyle}>Select Date</span>
              }
              <div className={`cursor-pointer flex flex-col items-center p-5 mt-5 rounded-2xl bg-[#1f1f1f] ${calendarOpen ? 'block' : "hidden"}`}>
                <Controller
                  control={control}
                  name="registrationDate"
                  render={({ field }) => (
                    <Calendar
                      fromDate={new Date()}
                      className={`bg-accent   `}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                <div className={inputStyle + ' flex items-center gap-5 mt-5'} >
                  <label htmlFor="" className='text-xl'>Time:</label>
                  <input {...register('registrationTime')} defaultValue="00:00:00" type="time" />
                  <button type='button' onClick={() => setCalendarOpen(!calendarOpen)} className='py-2 px-4 bg-[#3e3e3e] rounded-xl' > Ok</button>
                </div>

              </div>
            </div>
            <ErrorMessage
              name='registrationDate'
              render={({ message }) => <ShowFormError errorText={message} />}
            />
            <label htmlFor="">Enable Check in <CheckInTooltip /> </label>

            <Controller
              control={control}
              name='checkIn'
              render={({ field }) => (
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              )}
            />

            {checkIn &&
              <>
                <label htmlFor="">Pre-match Check-in (minutes) <CheckInTooltip /></label>
                <input {...register("checkInMinutes", { valueAsNumber: true })} className={inputStyle} type="number" />
              </>}
            <ErrorMessage
              name='checkInMinutes'
              errors={formState.errors}
              render={({ message }) => (
                <ShowFormError errorText={message} />
              )}
            />

            <label htmlFor=""> Tournament Start Date and Time</label>
            <div className="">
              {
                startDate ? <span onClick={() => setCalendarOpen2(!calendarOpen2)} className={inputStyle + " flex items-center justify-center gap-5"}>{format(startDate, "PP")} {startTime} <FaChevronDown /> </span>
                  :
                  <span className={inputStyle}>Select Date</span>
              }
              <div className={`cursor-pointer flex flex-col items-center p-5 mt-5 rounded-2xl bg-[#1f1f1f] ${calendarOpen2 ? 'block' : "hidden"}`}>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field }) => (
                    <Calendar
                      className={`bg-accent   `}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  )}
                />
                <div className={inputStyle + ' flex items-center gap-5 mt-5'} >
                  <label htmlFor="" className='text-xl'>Time:</label>
                  <input {...register('startTime')} defaultValue="00:00:00" type="time" />
                  <button type='button' onClick={() => setCalendarOpen2(!calendarOpen2)} className='py-2 px-4 bg-[#3e3e3e] rounded-xl' > Ok</button>
                </div>
              </div>
            </div>
            <ErrorMessage
              name='startDate'
              render={({ message }) => <ShowFormError errorText={message} />}
            />

            <div className='col-span-2 grid grid-cols-3 gap-5'>
              <button onClick={() => handleStepChange("previous")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Previous Step</button>
              <button type='submit' className='bg-[#5a5a5a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save Changes </button>
              <button disabled={checkDirty} onClick={() => handleStepChange("next")} className='bg-[#2a2a2a] rounded-xl p-3 hover:bg-accent-foreground duration-500 cursor-pointer' >Save and Next</button>
            </div>

          </form>
      }
    </main>
  )
}

export default CreateStepFive