
import { FormData } from '../modal/modal'
import classes from './FormOne.module.css'


interface Props {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const FormOne: React.FC<Props> = ({ formData, setFormData }) => {
    return(
        <div className={classes['form-one__box']}>
            <input type="text" maxLength={255} placeholder='project name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            <textarea placeholder="project desciprtion" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </div>
    )
}

export default FormOne