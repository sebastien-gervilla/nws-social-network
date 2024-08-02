import { Responses } from "..";

export interface Entity {
    _id: string;
    content: string;
    images: {
        url: string;
    }[];
    createdBy: Responses.User.Entity;
    createdAt: string;
}

export type Get = Entity[];

export interface Create {
    content: string;
    images: File[];
}