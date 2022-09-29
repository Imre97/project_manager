import { useState, useEffect } from 'react'
import { FormData } from '../modal/modal'
import { useParams, useNavigate } from 'react-router-dom'
import classes from './Project.module.css'


interface Props {
    formDatas: FormData[]
}

const Project: React.FC<Props> = ({ formDatas }) => {
    const [project, setProject] = useState<FormData>({
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
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const id: number = Number(params.id)
        const project = formDatas[id]
        if(!project) {
            navigate('/')
        }
        setProject(project)
    }, [])


    return (
        <div className={classes['project-container']}>
            <div>Project name: {project.name}</div>
            <div className={classes.description}>Description: {project.description}</div>
            <div>Co-workers: {project.Coworkers.map((x, i) => {
                return <div key={i}>
                    <div>name: {x.name}</div>
                    <div>post: {x.position}</div>
                </div>
            })}
            </div>
            <div>
                Urls: {project.url.map((x,i) => {
                    return <a key={i} href={x.url} target='_blank'>{x.url}</a>
                })}
            </div>
        </div>
    )
}

export default Project