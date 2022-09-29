interface Coworkers {
    name: string,
    position: string
}

interface Url {
    url: string
}

export interface FormData {
    name: string,
    description: string,
    Coworkers: Coworkers[],
    url: Url[]
}