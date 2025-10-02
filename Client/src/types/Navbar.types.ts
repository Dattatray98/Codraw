import type { ReactNode } from "react";

export interface navinter{
    id: number;
    label: string;
    icon?: ReactNode;
    path?: string;
}



export const navLinks : navinter[] =[
    {id:1, label:"home"},
    {id:2, label:"about"},
    {id:3, label:"Services"},
    {id:4, label:"Contact"}
]