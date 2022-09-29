import { useState, useEffect } from 'react'
import FormOne from '../Components/FormOne'
import FormTwo from '../Components/FormTwo'
import FormThree from '../Components/FormThree'
import classes from './CreateProject.module.css'
import { FormData } from '../modal/modal'
import { useNavigate } from 'react-router-dom'
import { url } from 'inspector'

interface Props {
    setFormDatas: React.Dispatch<React.SetStateAction<FormData[]>>,
    formDatas: FormData[]
}

const CreateProject: React.FC<Props> = ({ setFormDatas, formDatas }) => {
    const [pageIndex, setPageIndex] = useState<number>(0)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        Coworkers: [{
            name: '',
            position: ''
        }],
        url: [{
            url: ''
        }]
    })
    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    useEffect(() => {
        setError('')
    }, [pageIndex])



    const handleSubmit = () => {
        if (formData.name === '' || formData.name.length > 255) {
            setError('Név megadása kötelező')
            return
        }

        if (formData.description !== '' && (formData.description.length < 50 || formData.description.length > 500)) {
            setError('Leírásnak min 50 karakter hosszú vagy max 500 karakter hosszú lehet')
            return
        }


        setFormDatas([...formDatas, formData])
        navigate('/')
    }

    return (
        <div className={classes['form-cantainer']}>
            <div className={classes['form-title']}>Create project</div>
            <div className={classes['progressbar-box']}>
                <div style={{ width: pageIndex === 0 ? '33.3%' : pageIndex === 1 ? '66.6%' : '100%', backgroundColor: 'red', height: '100%', transition: 'all 300ms' }}></div>
            </div>
            <div className={classes['form-content']}>
                {pageIndex === 0 ? <FormOne formData={formData} setFormData={setFormData} />
                    : pageIndex === 1 ? <FormTwo formData={formData} setFormData={setFormData} />
                        : <FormThree formData={formData} setFormData={setFormData} />}
                        {error && <div className={classes.error}>{error}</div>}
                <div className={classes['form-buttons']}>
                    <button disabled={pageIndex === 0 ? true : false} onClick={() => setPageIndex(prev => prev - 1)} >Prev</button>
                    {pageIndex === 2 ? <button onClick={handleSubmit}>Submit</button>
                        : <button disabled={pageIndex === 2 ? true : false} onClick={() => setPageIndex(prev => prev + 1)}>Next</button>}
                </div>

            </div>

        </div>
    )
}

export default CreateProject