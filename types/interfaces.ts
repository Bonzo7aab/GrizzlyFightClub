import { ArbitraryTypedObject, PortableTextBlock } from '@portabletext/types'

interface NewsType {
    _id: string
    _createdAt: string
    title: string
    short: string
    description: PortableTextBlock | ArbitraryTypedObject
    image: string
}

interface CoachType {
    name: string
    experience: string[]
    description: string
    image: string
}

interface SchoolType {
    id: number
    name: string
    short: string
    address: string
    position: {
        lat: number
        lng: number
    }
    type: string
}

interface ActivityType {
    _id: number
    type: string
    school: SchoolType
    day: string
    start: string
    end: string
}

interface CampType {
    _id: number
    name: string
    place: string
    date: Date
    images: string[]
}

export type { ActivityType, CampType, CoachType, NewsType, SchoolType }
