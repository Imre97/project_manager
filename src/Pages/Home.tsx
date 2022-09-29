import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { FormData } from '../modal/modal'
import classes from './Home.module.css'

interface Props {
    formDatas: FormData[]
}


const Home: React.FC<Props> = ({ formDatas }) => {
    const [data, setData] = useState<FormData[]>([])

    const getData = async () => {
        let result = await Promise.all(formDatas.map(async (item) => {
            return item
        }))
        setData(result)
    }

    useEffect(() => {
        getData()
    }, [formDatas])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(formDatas.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Project manager</h1>
            <Link to='new-task'>
                <button>Add New Project</button>
            </Link>
            <div>
                <input className={classes.search} type='text' onChange={handleChange} placeholder='search by project name' />
            </div>
            <div className={classes['card-box']}>
                {data.map((x, i) => {
                    return (
                        <Link to={`project/${i}`} key={i}>
                            <div className={classes.card}>
                                <div className={classes['card-detail']}>
                                    <div>{x.name}</div>
                                    <div>{x.description && x.description}</div>
                                </div>
                                <img src='https://via.placeholder.com/300.png/09f/fffC/O https://placeholder.com/' alt='placeholder' />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Home