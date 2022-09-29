import { FormData } from '../modal/modal'
import classes from './FormThree.module.css'

interface Props {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const FormThree: React.FC<Props> = ({ formData, setFormData }) => {

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const obj = { ...formData }
        obj.url[i].url = e.target.value

        setFormData({ ...obj })
    }

    const handleClick = () => {
        const obj = {...formData}
        obj.url = [...formData.url, {url: ''}]
        setFormData({...obj})
    }

    const handleRemoveClick = (i: number) => {
        const obj = {...formData}
        obj.url.splice(i, 1)

        setFormData({...obj})
    }

    return (
        <div>
            {formData.url.map((url, i) => {
                return (
                    <div key={i} className={classes['form-three__box']}>
                        <input type='url' pattern='https://.*' placeholder="https://example.com" value={url.url} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUrlChange(e, i)} />
                        {formData.url.length > 1 && <button onClick={() => handleRemoveClick(i)} className={classes.remove} >Remove</button>}
                        {formData.url.length - 1 === i && <button onClick={() => handleClick()} className={classes.add} >Add Url</button>}
                    </div>
                )
            })}

        </div>
    )
}

export default FormThree