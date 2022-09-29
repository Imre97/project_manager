import { FormData } from '../modal/modal'
import classes from './FormTwo.module.css'

interface Props {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const FormTwo: React.FC<Props> = ({ formData, setFormData }) => {

    const handleCoworkersNameChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const obj = { ...formData }
        obj.Coworkers[i].name = e.target.value
        setFormData({ ...obj })
    }

    const handleCoworkersPositionChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const obj = { ...formData }
        obj.Coworkers[i].position = e.target.value

        setFormData({ ...obj })
    }

    const handleClick = () => {
        const obj = {...formData}
        obj.Coworkers = [...formData.Coworkers, {name: '', position: ''}]
        setFormData({...obj})
    }

    const handleRemoveClick = (i: number) => {
        console.log(i)
        const obj = {...formData}
        obj.Coworkers.splice(i, 1)
        console.log(obj.Coworkers)

        setFormData({...obj})
    }

    return (
        <div>
            {formData.Coworkers.map((colleague, i) => {
                return (
                    <div key={i} className={classes['form-two__box']}>
                        <input type='text' placeholder="Colleague name" value={colleague.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCoworkersNameChange(e, i)} />
                        <input type='text' placeholder="post" value={colleague.position} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>handleCoworkersPositionChange(e, i)} />
                        {formData.Coworkers.length > 1 && <button onClick={() => handleRemoveClick(i)} className={classes.remove}>Remove</button>}
                        {formData.Coworkers.length-1 === i && <button onClick={() => handleClick()} className={classes.add}>Add</button>}
                    </div>
                )
            })}

        </div>
    )
}

export default FormTwo