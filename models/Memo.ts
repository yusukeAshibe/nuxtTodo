import { Timestamp } from "@google-cloud/firestore";

export interface Memo {
    id: number
    title: string
    detail: string
    createdAt: Object
    updatedAt: Object
    userId: string
}